package jp.ac.keio.sfc.ht.matsu.minipro;

import javax.sound.sampled.*;
import java.net.*;
import java.io.*;
import java.util.*;

/**
 * �G���R�[�f�B���O���@�̕ϊ��ɂ��o�͗�
 * JDK1.3��javax.sound.sampled �ł́CALAW,ULAW�̏o�͂̓T�|�[�g���Ă��Ȃ��̂�PCM�ɕϊ�����
 */
public class SoundApplication
{
    private String audioFiles[];
/* = {
		"ambient.rmf",
		"bark.aiff",
		"bong.wav",
		"classical.rmf",
		"modern-rock.rmf",
		"sfx-medley.rmf",
		"spacemusic.au",
		"trance.rmf",
		"trippygaia1.mid"
	};*/
    SoundApplication(String a){
      String dir = "/cygdrive/e/jbuilder/minipro/";
      Setting env = new Setting();
//      System.out.println(dir + "\\" + env.getAuBase() + a);
      audioFiles[0]  = dir + env.getAuBase() + a;
//      System.out.println(audioFiles[0]);
/*      try{
        main();
      }catch(Exception e){
        System.err.println();
      }
*/    }



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

    public void main() throws Exception
	{
		String dir = System.getProperty("user.dir");

		for( int i = 0; i < audioFiles.length; i++ ) {

			File audioFile = new File(audioFiles[i]);

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
