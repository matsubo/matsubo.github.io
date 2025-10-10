package jp.ac.keio.sfc.ht.matsu.minipro;

/**
 * �^�C�g��:  minipro
 * ����:
 * ���쌠:   Copyright (c) 2002
 * ��Ж�:
 * @author YukiMatsukura
 * @version 1.0
 */

class Setting {
  private int width  = 450;
  private int height = 500;

  private String imageBase = "jp/ac/keio/sfc/ht/matsu/minipro/img/";
  private String auBase = "jp/ac/keio/sfc/ht/matsu/minipro/au/";

  public int getWidth(){
    return width;
  }

  public int getHeight(){
    return height;
  }

  public String getImageBase(){
    return imageBase;
  }

  public String getAuBase(){
    return auBase;
  }
}