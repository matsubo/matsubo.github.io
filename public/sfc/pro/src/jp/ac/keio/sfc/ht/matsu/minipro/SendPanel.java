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

public class SendPanel extends JPanel{

  private JLabel label = new JLabel();
  private JButton button1 = new JButton();
  private JTextField tf = new JTextField();

  public SendPanel(ActionListener al) {
    super();

    button1.addActionListener(al);

    // ���C�A�E�g
    GridLayout gl = new GridLayout(3, 1);
    gl.setVgap(5);
    gl.setHgap(40);

    this.setLayout(gl);
    this.setAlignmentY(this.LEFT_ALIGNMENT);

    // default�l�ݒ�
    label.setText("���ł�");

    // �{�^���̏ꏊ
    button1.setHorizontalAlignment( SwingConstants.LEFT);

    button1.setVerticalAlignment( SwingConstants.TOP);

    // JPanel�ɒǉ�
    add(label);
    add(tf);
    add(button1);
  }

  public void setButton(){
    button1.setVisible(true);
    button1.setText("���M");
  }

  public void setQ(){
    label.setText("���O����͂��āu���M�v�{�^���������Ă�������");
  }

}
