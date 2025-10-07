package jp.ac.keio.sfc.ht.matsu.minipro;

import java.awt.event.*;
import java.awt.*;
import javax.swing.*;
import javax.swing.border.*;

import java.applet.Applet;

/**
 * タイトル:  minipro
 * 説明:
 * 著作権:   Copyright (c) 2002
 * 会社名:
 * @author YukiMatsukura
 * @version 1.0
 */

public class SendPanel extends JPanel{

  private JLabel label = new JLabel();
  private JButton button1 = new JButton();
  private JTextField tf = new JTextField();

  public SendPanel(ActionListener al) {
    super();

    button1.addActionListener(al);

    // レイアウト
    GridLayout gl = new GridLayout(3, 1);
    gl.setVgap(5);
    gl.setHgap(40);

    this.setLayout(gl);
    this.setAlignmentY(this.LEFT_ALIGNMENT);

    // default値設定
    label.setText("問題です");

    // ボタンの場所
    button1.setHorizontalAlignment( SwingConstants.LEFT);

    button1.setVerticalAlignment( SwingConstants.TOP);

    // JPanelに追加
    add(label);
    add(tf);
    add(button1);
  }

  public void setButton(){
    button1.setVisible(true);
    button1.setText("送信");
  }

  public void setQ(){
    label.setText("名前を入力して「送信」ボタンを押してください");
  }

}
