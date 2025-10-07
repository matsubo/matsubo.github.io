package jp.ac.keio.sfc.ht.matsu.minipro;

import javax.sound.sampled.*;
import java.net.*;
import java.io.*;
import java.util.*;

/**
 * エンコーディング方法の変換による出力例
 * JDK1.3のjavax.sound.sampled では，ALAW,ULAWの出力はサポートしていないのでPCMに変換する
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
			// 出力ラインを生成．Clipを使用．
			Clip line;
			DataLine.Info info = new DataLine.Info(Clip.class, format);
    		line = (Clip) AudioSystem.getLine(info);

			// 再生開始
			line.open(stream);
			line.start();

			// 出力ラインが有効かどうかを確認し，再生が終了したらクローズする．
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

			// AudioFormatを作成
			AudioInputStream inputStream;
			try {
				inputStream = AudioSystem.getAudioInputStream(audioFile);
			}
			catch( UnsupportedAudioFileException e ) {
				// javax.sound.sampledでサポートしていないファイルはパス
				System.out.println(e);
				continue;
			}

			AudioFileFormat fileFormat = AudioSystem.getAudioFileFormat(audioFile);
			AudioFormat audioFormat = fileFormat.getFormat();

			// サポートしていないエンコーディングはPCMへ変換する
			if ((audioFormat.getEncoding() == AudioFormat.Encoding.ULAW) ||
			    (audioFormat.getEncoding() == AudioFormat.Encoding.ALAW))
			{
				System.out.println("convert format ..");

				// フォーマットの変換を行う
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
