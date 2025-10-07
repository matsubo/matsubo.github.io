package jp.ac.keio.sfc.ht.matsu.minipro;

import javax.sound.sampled.*;
import java.net.*;
import java.io.*;
import java.util.*;

/**
 * �G���R�[�f�B���O���@�̕ϊ��ɂ��o�͗�
 * JDK1.3��javax.sound.sampled �ł́CALAW,ULAW�̏o�͂̓T�|�[�g���Ă��Ȃ��̂�PCM�ɕϊ�����
 */
public class SoundPlay
{
    private String[] audioFiles;

    SoundPlay(String name){
      audioFiles[0] = name;
      try{
//        routine();
      }catch(Exception e){
        System.err.println(e);
      }
    }

	private static void play(AudioInputStream stream, AudioFormat format)
		throws Exception
	{
			// �o�̓��C���𐶐��DClip���g�p�D
			Clip line;
			DataLine.Info info = new DataLine.Info(Clip.class, format);
    		line = (Clip) AudioSystem.getLine(info);

			// �Đ��J�n
			line.open(stream);
			line.start();

			// �o�̓��C�����L�����ǂ������m�F���C�Đ����I��������N���[�Y����D
			while(line.isActive()) {
				System.out.println("line is active ...");
				Thread.sleep(200);
			}
			line.close();
	}

    public void routine() throws Exception
	{
		Setting env = new Setting();

		for( int i = 0; i < audioFiles.length; i++ ) {
                        String dir = System.getProperty("user.dir");

			System.out.println("File : "+ audioFiles[i]);
                        dir = dir + env.getAuBase();
			File audioFile = new File(dir + "\\" + audioFiles[i]);

			// AudioFormat���쐬
			AudioInputStream inputStream;
			try {
				inputStream = AudioSystem.getAudioInputStream(audioFile);
			}
			catch( UnsupportedAudioFileException e ) {
				// javax.sound.sampled�ŃT�|�[�g���Ă��Ȃ��t�@�C���̓p�X
				System.out.println(e);
				continue;
			}

			AudioFileFormat fileFormat = AudioSystem.getAudioFileFormat(audioFile);
			AudioFormat audioFormat = fileFormat.getFormat();

			// �T�|�[�g���Ă��Ȃ��G���R�[�f�B���O��PCM�֕ϊ�����
			if ((audioFormat.getEncoding() == AudioFormat.Encoding.ULAW) ||
			    (audioFormat.getEncoding() == AudioFormat.Encoding.ALAW))
			{
				System.out.println("convert format ..");

				// �t�H�[�}�b�g�̕ϊ����s��
				AudioFormat tmp = new AudioFormat(
                                          AudioFormat.Encoding.PCM_SIGNED,
                                          audioFormat.getSampleRate(),
                                          audioFormat.getSampleSizeInBits() * 2,
                                          audioFormat.getChannels(),
                                          audioFormat.getFrameSize() * 2,
                                          audioFormat.getFrameRate(),
                                          true);
                inputStream = AudioSystem.getAudioInputStream(tmp, inputStream);
                audioFormat = tmp;
			}

			play(inputStream, audioFormat);

		}

		System.exit(0);
   }
}
