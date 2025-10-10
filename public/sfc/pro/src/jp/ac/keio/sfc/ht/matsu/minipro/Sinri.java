package jp.ac.keio.sfc.ht.matsu.minipro;

import java.lang.Integer;
import java.awt.event.*;
import java.awt.*;
import javax.swing.*;
import java.applet.Applet;
import java.net.URL;
import java.applet.AudioClip;
import java.net.*;
import java.io.*;
import java.util.*;
import javax.sound.sampled.*;
import jp.ac.keio.sfc.ht.matsu.minipro.*;

/**
 * タイトル:  minipro
 * 説明:
 * 著作権:   Copyright (c) 2002
 * 会社名:
 * @author YukiMatsukura
 * @version 1.0
 */

public class Sinri extends JFrame
 implements ActionListener{

  private int state = 1;
  private JLabel imagePane;
  private GamePanel gp;
  private SendPanel sp;
  private AudioClip ac;
  private Setting env;
  private JPanel pane;

  private int status1;
  private int status2;
  private int status3;
  private int status4;

  public static void main(String[] args) {
    Sinri w = new Sinri( "心理テスト" );
    Setting env = new Setting();
    w.setDefaultCloseOperation( JFrame.EXIT_ON_CLOSE );
    w.setSize( env.getWidth(), env.getHeight() );
    w.setVisible( true );
  }
  public Sinri( String title ){
    super( title );

    env = new Setting();

    // 終了時の動作
    setDefaultCloseOperation( JFrame.DO_NOTHING_ON_CLOSE );
    addWindowListener( new WindowClosing() );

    // Panel設定
    pane = (JPanel)getContentPane();
    pane.setLayout(new GridLayout(2,1));

    imagePane = new JLabel(new ImageIcon(""));
    imagePane.setBackground(new Color(0, 255, 0));

    pane.add(imagePane);
    setImage("100.png");

    // 下のパネルに追加
    gp = new GamePanel(this);
    pane.add(gp);

    gp.setQ("ある日突然道で100円玉を見つけました。どうしますか？");
    gp.setButton1("拾って使う");
    gp.setButton2("ほっとく");
    gp.setButton3("力で曲げる");

    Random rn = new Random();
    status1 = rn.nextInt(20);
    status2 = rn.nextInt(30);
    status3 = rn.nextInt(20);
    status4 = 0;

    gp.setState(status1, status2, status3, status4);

//    setImage("aya.jpg");
  }

  // ボタンが押されたのを検出
  public void actionPerformed(ActionEvent e){
    String arg = e.getActionCommand();
    String snum = arg.substring(6, 7);
    if(arg.equals("<html>2. おわり</html>")){ System.exit(0); }

    int num = Integer.parseInt(snum);


    // ボタンが押されて、次のステージに移行
    // 今の状態のcaseで振り分け、numが押されたボタンの番号
    switch(getState()){
    case 1:
      if(num == 1){ setState(2); }
      else
      if(num == 2){ setState(3); }
      else
      if(num == 3){ setState(4); }
      break;
    case 2:
      setState(5);
      break;
    case 3:
      setState(5);
      break;
    case 4:
      setState(5);
      break;
    case 5:
      setState(6);
      break;
    case 6:
      if(num == 1){ setState(7); }
      else
      if(num == 2){ setState(8); }
      break;
    case 7:
      setState(9);
      break;
    case 8:
      setState(9);
      break;
    case 9:
      if(num == 1){ setState(10); }
      else
      if(num == 2){ setState(11); }
      else
      if(num == 3){ setState(12); }
      break;
    case 10:
      setState(13);
      break;
    case 11:
      setState(13);
      break;
    case 12:
      setState(13);
      break;
    case 13:
      setState(14);
      break;
    case 14:
      // webへの接続処理
      setState(15);
      break;
    case 15:
      setState(16);
      break;
    }

//      System.out.println(num);
  }

  // 上の部分に画像をセット
  public void setImage(String name){
    imagePane.setIcon(new ImageIcon(env.getImageBase() + name));
  }

  // 画面遷移をセット
  public void setState(int newState){
    this.state = newState;

    switch(state)
    {
    case 1:
      gp.setQ("ある日突然道で100円玉を見つけました。どうしますか？");
      gp.setButton1("拾って使う");
      gp.setButton2("ほっとく");
      gp.setButton3("力で曲げる");
      gp.setState(status1+0, status2+0, status3+0, status4+0);
      setImage("1.png");
      break;
    case 2:
      gp.setQ("100円玉を自販機に入れようとすると、「何すんねん、兄ちゃん。ワイはただの100円とチャウでー。」と話しかけられる");
      gp.setButton1("次へ");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+0, status2+0, status3-3, status4+0);
      setImage("2.png");
      startMusic("2.au");
      break;
    case 3:
      gp.setQ("100円玉を通り過ぎようとすると「おい待てや、兄ちゃん。」と呼び止められる。「ワイを連れてけ。」と命令される。");
      gp.setButton1("次へ");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+2, status2+0, status3+3, status4+0);
      setImage("3.png");
      startMusic("3.au");
      break;
    case 4:
      gp.setQ("力がみなぎって急に100円玉を曲げたくなったので曲げようとすると「痛いがな、やめろや。」と100円玉が怒った。");
      gp.setButton1("次へ");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+1, status2+3, status3-2, status4+0);
      setImage("4.png");
      startMusic("4.au");
      break;
    case 5:
      gp.setQ("何で関西弁やねん。とツッコミを入れたかったがあまりにも気味が悪いので池に捨てることにした。");
      gp.setButton1("次へ");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+2, status2+0, status3+3, status4+100);
      setImage("5.png");
      break;
    case 6:
      gp.setQ("100円玉を池に投げると「アイヤー。」と叫ぶ100円玉がいたが（何で今度はチャイ語と思いつつも）無視した。すると池から女神が現れた。「アナタガオトシタノハドチラデスカ？」と何故か片言。");
      gp.setButton1("100円玉");
      gp.setButton2("100万円の札束");
      gp.setButton3("");
      gp.setState(status1+2, status2+1, status3+5, status4+0);
      setImage("6.png");
      startMusic("6.au");
      break;
    case 7:
      gp.setQ("「おおきに。助かったわ。ってか何でやねん。何で捨てられなアカンねん。」となんて気分やなんだろうと思いつつも結局100円玉を連れて行くことにした。");
      gp.setButton1("次へ");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+1, status2+3, status3-5, status4+100);
      setImage("7.png");
      startMusic("7.au");
      break;
    case 8:
      gp.setQ("「何でやねん。」と100円玉が100万円札にどついた。すると100万円札は粉破微塵になってしまい結局100円玉を連れて行くことにした。");
      gp.setButton1("次へ");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+0, status2+0, status3+0, status4+0);
      setImage("8.png");
      startMusic("8.au");
      break;
    case 9:
      gp.setQ("道を歩いているとスライムに遭遇した。「とうとうワイを使うと時がきたようや。」どうする？");
      gp.setButton1("100円玉をおとりにして逃げる");
      gp.setButton2("100円玉を投げる");
      gp.setButton3("100円玉に呪文をかける");
      status4 = 100;
      gp.setState(status1+2, status2+1, status3+5, status4+0);
      setImage("9.png");
      startMusic("9.au");
      break;
    case 10:
      gp.setQ("100円玉を置いて逃げた。「違うやろー！！！」と100円玉が追いかけてきた。結局スライムから逃げられた。");
      gp.setButton1("次へ");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1-2, status2+15, status3+5, status4+0);
      setImage("10.png");
      startMusic("10.au");
      break;
    case 11:
      gp.setQ("100円玉を投げると驚異的なスピードでスライムに向かっていった。スライムは吹っ飛ばされた。");
      gp.setButton1("次へ");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+10, status2+5, status3+15, status4+0);
      setImage("11.png");
      startMusic("11.au");
      break;
    case 12:
      gp.setQ("「儲かってまっか？」と聞くと「ぼちぼちデンナー。」と100円玉とコントが始まり、あまりのつまらなさにスライムは帰ってしまった。");
      gp.setButton1("次へ");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+15, status2+3, status3+15, status4+0);
      setImage("12.png");
      startMusic("12.au");
      break;
    case 13:
      gp.setQ("何とかモンスターを倒すことができた（？！）100円玉はぼろぼろになってしまった。「ワイもこれで終わりや。ほなサイナラ。」と言い残し消えてしまった。");
      gp.setButton1("次へ");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+2, status2+1, status3+15, status4+0);
      setImage("13.png");
      startMusic("13.au");
      break;
    case 14:
      gp.setQ("はっと気がつくとベッドの上に寝ていた。隣には1万円相当の100円玉が入ったブタの貯金箱が割られていた。犯人はモー娘のポスターを買うお金に困ったオヤジだった。<br>次に1.を押してね！！");
      gp.setButton1("<a href=http://www.sfc.keio.ac.jp/~t01549ym/minipro/>http://www.sfc.keio.ac.jp/~t01549ym/minipro/</a>");
      gp.setButton2("おわり");
      gp.setButton3("");
      setImage("14.png");
      break;
    case 15:
    Object[] msg = { "名前を入力してください" };
    String ans = JOptionPane.showInputDialog( pane, msg, "お名前を入力して下さい",
                                        JOptionPane.INFORMATION_MESSAGE );

    int points = status1 + status2 + status3 + status4;
//    int points = 100;

    System.out.println(status1);
    System.out.println(status2);
        System.out.println(status3);
            System.out.println(status4);

    String req_path = "/~matsu/minipro/index.html?name="+ans+"&s1=" + status1 + "&s2=" + status2 + "&s3=" + status3 + "&s4=" + status4 + "&points=" + points;
    System.out.println(req_path);
    String url = "http://www.dsci.sfc.keio.ac.jp"+req_path;

    URL urlObj;
    HttpURLConnection urlCon;
    BufferedReader urlIn;
    String str;

//  System.out.println("URL: " + url);

    try {
      // URLオブジェクトの作成
      urlObj = new URL(url);

      // URL接続
      urlCon = (HttpURLConnection)urlObj.openConnection();
      urlCon.setRequestMethod("GET");
      urlIn = new BufferedReader(new InputStreamReader(urlCon.getInputStream()));

      // HTMLソースの表示
      while ((str = urlIn.readLine()) != null) {
//ran        System.out.println(str);
      }

      // URL切断
      urlIn.close();
      urlCon.disconnect();

    } catch (Exception ex) {
      ex.printStackTrace();
    }

    this.setState(16);
      break;
    }

  }

  // 画面遷移の場所を取得
  public int getState(){
    return this.state;
  }

  public void startMusic(String name){

    try {
      String path = env.getAuBase() + name;
//      System.out.println(path);
      File audioFile = new File(path);

      // AudioFormatを作成
      AudioInputStream stream;

      stream = AudioSystem.getAudioInputStream(audioFile);



      AudioFileFormat fileFormat = AudioSystem.getAudioFileFormat(audioFile);
      AudioFormat format = fileFormat.getFormat();

      // サポートしていないエンコーディングはPCMへ変換する
      if ((format.getEncoding() == AudioFormat.Encoding.ULAW) ||
        (format.getEncoding() == AudioFormat.Encoding.ALAW))
      {
//            System.out.println("setState format ..");

            // フォーマットの変換を行う
            AudioFormat tmp = new AudioFormat(
                      format.Encoding.PCM_SIGNED,
                      format.getSampleRate(),
                      format.getSampleSizeInBits() * 2,
                      format.getChannels(),
                      format.getFrameSize() * 2,
                      format.getFrameRate(),
                      true);
            stream = AudioSystem.getAudioInputStream(tmp, stream);
            format = tmp;

            // 出力ラインを生成．Clipを使用．
            Clip line;
            DataLine.Info info = new DataLine.Info(Clip.class, format);
            line = (Clip) AudioSystem.getLine(info);

            // 再生開始
            line.open(stream);
            line.start();

            // 出力ラインが有効かどうかを確認し，再生が終了したらクローズする．
            while(line.isActive()) {
//                    System.out.println("line is active ...");
                    Thread.sleep(200);
            }
            line.close();
        }
        }
      catch(Exception e){
              e.printStackTrace();
              return ;
      }
  }

  // 終了時の動作
  class WindowClosing extends WindowAdapter {
    public void windowClosing (WindowEvent e){
      int ans = JOptionPane.showConfirmDialog( Sinri.this, "本当に終了しますか？" );
      if( ans == JOptionPane.YES_OPTION ){
        System.exit(0);
      }
    }
  }

}
