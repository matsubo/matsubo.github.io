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
 * �^�C�g��:  minipro
 * ����:
 * ���쌠:   Copyright (c) 2002
 * ��Ж�:
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
    Sinri w = new Sinri( "�S���e�X�g" );
    Setting env = new Setting();
    w.setDefaultCloseOperation( JFrame.EXIT_ON_CLOSE );
    w.setSize( env.getWidth(), env.getHeight() );
    w.setVisible( true );
  }
  public Sinri( String title ){
    super( title );

    env = new Setting();

    // �I�����̓���
    setDefaultCloseOperation( JFrame.DO_NOTHING_ON_CLOSE );
    addWindowListener( new WindowClosing() );

    // Panel�ݒ�
    pane = (JPanel)getContentPane();
    pane.setLayout(new GridLayout(2,1));

    imagePane = new JLabel(new ImageIcon(""));
    imagePane.setBackground(new Color(0, 255, 0));

    pane.add(imagePane);
    setImage("100.png");

    // ���̃p�l���ɒǉ�
    gp = new GamePanel(this);
    pane.add(gp);

    gp.setQ("������ˑR����100�~�ʂ������܂����B�ǂ����܂����H");
    gp.setButton1("�E���Ďg��");
    gp.setButton2("�ق��Ƃ�");
    gp.setButton3("�͂ŋȂ���");

    Random rn = new Random();
    status1 = rn.nextInt(20);
    status2 = rn.nextInt(30);
    status3 = rn.nextInt(20);
    status4 = 0;

    gp.setState(status1, status2, status3, status4);

//    setImage("aya.jpg");
  }

  // �{�^���������ꂽ�̂����o
  public void actionPerformed(ActionEvent e){
    String arg = e.getActionCommand();
    String snum = arg.substring(6, 7);
    if(arg.equals("<html>2. �����</html>")){ System.exit(0); }

    int num = Integer.parseInt(snum);


    // �{�^����������āA���̃X�e�[�W�Ɉڍs
    // ���̏�Ԃ�case�ŐU�蕪���Anum�������ꂽ�{�^���̔ԍ�
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
      // web�ւ̐ڑ�����
      setState(15);
      break;
    case 15:
      setState(16);
      break;
    }

//      System.out.println(num);
  }

  // ��̕����ɉ摜���Z�b�g
  public void setImage(String name){
    imagePane.setIcon(new ImageIcon(env.getImageBase() + name));
  }

  // ��ʑJ�ڂ��Z�b�g
  public void setState(int newState){
    this.state = newState;

    switch(state)
    {
    case 1:
      gp.setQ("������ˑR����100�~�ʂ������܂����B�ǂ����܂����H");
      gp.setButton1("�E���Ďg��");
      gp.setButton2("�ق��Ƃ�");
      gp.setButton3("�͂ŋȂ���");
      gp.setState(status1+0, status2+0, status3+0, status4+0);
      setImage("1.png");
      break;
    case 2:
      gp.setQ("100�~�ʂ����̋@�ɓ���悤�Ƃ���ƁA�u������˂�A�Z�����B���C�͂�����100�~�ƃ`���E�Ł[�B�v�Ƙb����������");
      gp.setButton1("����");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+0, status2+0, status3-3, status4+0);
      setImage("2.png");
      startMusic("2.au");
      break;
    case 3:
      gp.setQ("100�~�ʂ�ʂ�߂��悤�Ƃ���Ɓu�����҂Ă�A�Z�����B�v�ƌĂю~�߂���B�u���C��A��Ă��B�v�Ɩ��߂����B");
      gp.setButton1("����");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+2, status2+0, status3+3, status4+0);
      setImage("3.png");
      startMusic("3.au");
      break;
    case 4:
      gp.setQ("�͂��݂Ȃ����ċ}��100�~�ʂ��Ȃ������Ȃ����̂ŋȂ��悤�Ƃ���Ɓu�ɂ����ȁA��߂��B�v��100�~�ʂ��{�����B");
      gp.setButton1("����");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+1, status2+3, status3-2, status4+0);
      setImage("4.png");
      startMusic("4.au");
      break;
    case 5:
      gp.setQ("���Ŋ֐��ق�˂�B�ƃc�b�R�~����ꂽ�����������܂�ɂ��C���������̂Œr�Ɏ̂Ă邱�Ƃɂ����B");
      gp.setButton1("����");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+2, status2+0, status3+3, status4+100);
      setImage("5.png");
      break;
    case 6:
      gp.setQ("100�~�ʂ�r�ɓ�����Ɓu�A�C���[�B�v�Ƌ���100�~�ʂ��������i���ō��x�̓`���C��Ǝv�����j���������B����ƒr���珗�_�����ꂽ�B�u�A�i�^�K�I�g�V�^�m�n�h�`���f�X�J�H�v�Ɖ��̂��Ќ��B");
      gp.setButton1("100�~��");
      gp.setButton2("100���~�̎D��");
      gp.setButton3("");
      gp.setState(status1+2, status2+1, status3+5, status4+0);
      setImage("6.png");
      startMusic("6.au");
      break;
    case 7:
      gp.setQ("�u�������ɁB����������B���Ă����ł�˂�B���Ŏ̂Ă��ȃA�J���˂�B�v�ƂȂ�ċC����Ȃ񂾂낤�Ǝv��������100�~�ʂ�A��čs�����Ƃɂ����B");
      gp.setButton1("����");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+1, status2+3, status3-5, status4+100);
      setImage("7.png");
      startMusic("7.au");
      break;
    case 8:
      gp.setQ("�u���ł�˂�B�v��100�~�ʂ�100���~�D�ɂǂ����B�����100���~�D�͕��j���o�ɂȂ��Ă��܂�����100�~�ʂ�A��čs�����Ƃɂ����B");
      gp.setButton1("����");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+0, status2+0, status3+0, status4+0);
      setImage("8.png");
      startMusic("8.au");
      break;
    case 9:
      gp.setQ("��������Ă���ƃX���C���ɑ��������B�u�Ƃ��Ƃ����C���g���Ǝ��������悤��B�v�ǂ�����H");
      gp.setButton1("100�~�ʂ����Ƃ�ɂ��ē�����");
      gp.setButton2("100�~�ʂ𓊂���");
      gp.setButton3("100�~�ʂɎ�����������");
      status4 = 100;
      gp.setState(status1+2, status2+1, status3+5, status4+0);
      setImage("9.png");
      startMusic("9.au");
      break;
    case 10:
      gp.setQ("100�~�ʂ�u���ē������B�u�Ⴄ���[�I�I�I�v��100�~�ʂ��ǂ������Ă����B���ǃX���C�����瓦����ꂽ�B");
      gp.setButton1("����");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1-2, status2+15, status3+5, status4+0);
      setImage("10.png");
      startMusic("10.au");
      break;
    case 11:
      gp.setQ("100�~�ʂ𓊂���Ƌ��ٓI�ȃX�s�[�h�ŃX���C���Ɍ������Ă������B�X���C���͐�����΂��ꂽ�B");
      gp.setButton1("����");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+10, status2+5, status3+15, status4+0);
      setImage("11.png");
      startMusic("11.au");
      break;
    case 12:
      gp.setQ("�u�ׂ����Ă܂����H�v�ƕ����Ɓu�ڂ��ڂ��f���i�[�B�v��100�~�ʂƃR���g���n�܂�A���܂�̂܂�Ȃ��ɃX���C���͋A���Ă��܂����B");
      gp.setButton1("����");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+15, status2+3, status3+15, status4+0);
      setImage("12.png");
      startMusic("12.au");
      break;
    case 13:
      gp.setQ("���Ƃ������X�^�[��|�����Ƃ��ł����i�H�I�j100�~�ʂ͂ڂ�ڂ�ɂȂ��Ă��܂����B�u���C������ŏI����B�قȃT�C�i���B�v�ƌ����c�������Ă��܂����B");
      gp.setButton1("����");
      gp.setButton2("");
      gp.setButton3("");
      gp.setState(status1+2, status2+1, status3+15, status4+0);
      setImage("13.png");
      startMusic("13.au");
      break;
    case 14:
      gp.setQ("�͂��ƋC�����ƃx�b�h�̏�ɐQ�Ă����B�ׂɂ�1���~������100�~�ʂ��������u�^�̒������������Ă����B�Ɛl�̓��[���̃|�X�^�[�𔃂������ɍ������I���W�������B<br>����1.�������ĂˁI�I");
      gp.setButton1("<a href=http://www.sfc.keio.ac.jp/~t01549ym/minipro/>http://www.sfc.keio.ac.jp/~t01549ym/minipro/</a>");
      gp.setButton2("�����");
      gp.setButton3("");
      setImage("14.png");
      break;
    case 15:
    Object[] msg = { "���O����͂��Ă�������" };
    String ans = JOptionPane.showInputDialog( pane, msg, "�����O����͂��ĉ�����",
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
      // URL�I�u�W�F�N�g�̍쐬
      urlObj = new URL(url);

      // URL�ڑ�
      urlCon = (HttpURLConnection)urlObj.openConnection();
      urlCon.setRequestMethod("GET");
      urlIn = new BufferedReader(new InputStreamReader(urlCon.getInputStream()));

      // HTML�\�[�X�̕\��
      while ((str = urlIn.readLine()) != null) {
//ran        System.out.println(str);
      }

      // URL�ؒf
      urlIn.close();
      urlCon.disconnect();

    } catch (Exception ex) {
      ex.printStackTrace();
    }

    this.setState(16);
      break;
    }

  }

  // ��ʑJ�ڂ̏ꏊ���擾
  public int getState(){
    return this.state;
  }

  public void startMusic(String name){

    try {
      String path = env.getAuBase() + name;
//      System.out.println(path);
      File audioFile = new File(path);

      // AudioFormat���쐬
      AudioInputStream stream;

      stream = AudioSystem.getAudioInputStream(audioFile);



      AudioFileFormat fileFormat = AudioSystem.getAudioFileFormat(audioFile);
      AudioFormat format = fileFormat.getFormat();

      // �T�|�[�g���Ă��Ȃ��G���R�[�f�B���O��PCM�֕ϊ�����
      if ((format.getEncoding() == AudioFormat.Encoding.ULAW) ||
        (format.getEncoding() == AudioFormat.Encoding.ALAW))
      {
//            System.out.println("setState format ..");

            // �t�H�[�}�b�g�̕ϊ����s��
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

            // �o�̓��C���𐶐��DClip���g�p�D
            Clip line;
            DataLine.Info info = new DataLine.Info(Clip.class, format);
            line = (Clip) AudioSystem.getLine(info);

            // �Đ��J�n
            line.open(stream);
            line.start();

            // �o�̓��C�����L�����ǂ������m�F���C�Đ����I��������N���[�Y����D
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

  // �I�����̓���
  class WindowClosing extends WindowAdapter {
    public void windowClosing (WindowEvent e){
      int ans = JOptionPane.showConfirmDialog( Sinri.this, "�{���ɏI�����܂����H" );
      if( ans == JOptionPane.YES_OPTION ){
        System.exit(0);
      }
    }
  }

}
