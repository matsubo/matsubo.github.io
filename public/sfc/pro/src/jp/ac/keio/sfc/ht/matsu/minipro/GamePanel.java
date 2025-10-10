package jp.ac.keio.sfc.ht.matsu.minipro;

import java.awt.event.*;
import java.awt.*;
import javax.swing.*;
import javax.swing.border.*;

import java.applet.Applet;

/**
 * �^�C�g��:  minipro
 * ����:
 * ���쌠:   Copyright (c) 2002
 * ��Ж�:
 * @author YukiMatsukura
 * @version 1.0
 */

public class GamePanel extends JPanel{

  private JLabel label = new JLabel();
  private JLabel lstate = new JLabel();
  private JButton button1 = new JButton();
  private JButton button2 = new JButton();
  private JButton button3 = new JButton();

  public GamePanel(ActionListener al) {
    super();

    button1.addActionListener(al);
    button2.addActionListener(al);
    button3.addActionListener(al);

    // ���C�A�E�g
    GridLayout gl = new GridLayout(5, 1);
    gl.setVgap(5);
    gl.setHgap(40);

    this.setLayout(gl);
    this.setAlignmentY(this.LEFT_ALIGNMENT);

    // default�l�ݒ�
    label.setText("���ł�");
    lstate.setText("�̗�:0�@��:0�@��:0�@��:0");
    button1.disable();
    button2.disable();
    button3.disable();

    // �{�^���̏ꏊ
    button1.setHorizontalAlignment( SwingConstants.LEFT);
    button2.setHorizontalAlignment( SwingConstants.LEFT);
    button3.setHorizontalAlignment( SwingConstants.LEFT);

    button1.setVerticalAlignment( SwingConstants.TOP);
    button2.setVerticalAlignment( SwingConstants.TOP);
    button3.setVerticalAlignment( SwingConstants.TOP);

    // JPanel�ɒǉ�
    add(label);
    add(lstate);
    add(button1);
    add(button2);
    add(button3);
  }

  public void setButton1(String s){
    if(s.equals("")){
      button1.setVisible(false);
    }else{
      button1.setVisible(true);
      button1.setText("<html>1. " + s + "</html>");
      button1.setName("1");
    }
  }

  public void setButton2(String s){
    if(s.equals("")){
      button2.setVisible(false);
    }else{
      button2.setVisible(true);
      button2.setText("<html>2. " + s + "</html>");
      button2.setName("2");
    }
  }

  public void setButton3(String s){
    if(s.equals("")){
      button3.setVisible(false);
    }else{
      button3.setVisible(true);
      button3.setText("<html>3. " + s + "</html>");
      button3.setName("3");
    }
  }


  public void setQ(String s){
    label.setText("<html>" + s + "</html>");
  }

  public void setState(int a, int b, int c, int d){
    lstate.setText("<html>�@�@�@�̗́F<font color=red>" + a + "</font>�@�́F<font color=red>"+b+"</font>�@���F<font color=red>"+c+"</font>�@���F<font color=red>"+d+" �~</font></html>");
  }
}
