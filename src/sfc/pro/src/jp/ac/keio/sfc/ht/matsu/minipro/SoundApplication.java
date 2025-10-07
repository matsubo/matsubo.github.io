package jp.ac.keio.sfc.ht.matsu.minipro;

import javax.sound.sampled.*;
import java.net.*;
import java.io.*;
import java.util.*;

/**
 * エンコーディング方法の変換による出力例
 * JDK1.3のjavax.sound.sampled では，ALAW,ULAWの出力はサポートしていないのでPCMに変換する
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

    public void main() throws Exception
	{
		String dir = System.getProperty("user.dir");

		for( int i = 0; i < audioFiles.length; i++ ) {

			File audioFile = new File(audioFiles[i]);

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
