import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import { Seo } from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFilePdf,
  faFileArchive,
  faFileAlt,
  faFilePowerpoint,
  faFileWord,
  faFileZipper,
} from "@fortawesome/free-solid-svg-icons"

const AboutPage = () => (
  <Layout>
    <div className="container my-2">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/sfc">University</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Emacs, Mule command reference
          </li>
        </ol>
      </nav>
    </div>

    <div className="container">
      <h2>Emacs command reference</h2>
      <div align="center">
        <table border="1" cellspacing="0" cellpadding="3">
          <tbody>
            <tr>
              <td bgcolor="#c4ffc4" colspan="2">
                基本操作；ファイル操作系{" "}
              </td>
            </tr>
            <tr>
              <td>C-x_C-c </td>
              <td>Muleの終了 </td>
            </tr>
            <tr>
              <td>C-x_C-f </td>
              <td>ファイルの読み込み </td>
            </tr>
            <tr>
              <td>C-x_C-s </td>
              <td>ファイルの同名保存 </td>
            </tr>
            <tr>
              <td>C-x_C-w </td>
              <td>ファイルを別名で保存 </td>
            </tr>
            <tr>
              <td>C-x_i </td>
              <td>ファイルを挿入 </td>
            </tr>
            <tr>
              <td>C-x_k </td>
              <td>ファイルを閉じる </td>
            </tr>
            <tr>
              <td bgcolor="#c4ffc4" colspan="2">
                基本操作；カーソル移動{" "}
              </td>
            </tr>
            <tr>
              <td>C-f </td>
              <td>前に移動(forward-char) </td>
            </tr>
            <tr>
              <td>C-b </td>
              <td>後ろに移動(backward-char) </td>
            </tr>
            <tr>
              <td>C-n </td>
              <td>次の行に移動(next-line) </td>
            </tr>
            <tr>
              <td>C-p </td>
              <td>前の行に移動(previous-line) </td>
            </tr>
            <tr>
              <td>C-a </td>
              <td>行の先頭に移動(beginning-of-line) </td>
            </tr>
            <tr>
              <td>C-e </td>
              <td>行の後ろに移動(end-of-line) </td>
            </tr>
            <tr>
              <td>M-f </td>
              <td>前向きに1語移動(forward-ward) </td>
            </tr>
            <tr>
              <td>M-b </td>
              <td>後ろ向きに1語移動(backward-ward) </td>
            </tr>
            <tr>
              <td>M-&lt;</td>
              <td>バッファの先頭に移動(beginning-of-buffer) </td>
            </tr>
            <tr>
              <td>M-&gt; </td>
              <td>バッファの末尾に移動(end-of-buffer) </td>
            </tr>
            <tr>
              <td>C-v </td>
              <td>前向きスクロール(scroll-up) </td>
            </tr>
            <tr>
              <td>M-v </td>
              <td>後向きスクロール(scroll-down) </td>
            </tr>
            <tr>
              <td>C-l </td>
              <td>カーソルをウインドウ中央に持ってくる(リフレッシュ) </td>
            </tr>
            <tr>
              <td bgcolor="#c4ffc4" colspan="2">
                基本操作；削除，復元{" "}
              </td>
            </tr>
            <tr>
              <td>C-h </td>
              <td>バックスペース </td>
            </tr>
            <tr>
              <td>C-d </td>
              <td>削除(delete-char,DEL) </td>
            </tr>
            <tr>
              <td>C-k </td>
              <td>行末までをカット(Muleでは"キル"と言う)する．(kill-line) </td>
            </tr>
            <tr>
              <td>C-x u </td>
              <td>元に戻す(undo) </td>
            </tr>
            <tr>
              <td>C-o </td>
              <td>空行の挿入 </td>
            </tr>
            <tr>
              <td>C-x C-o </td>
              <td>空行を1行残して削除 </td>
            </tr>
            <tr>
              <td>C-o </td>
              <td>空行の挿入 </td>
            </tr>
            <tr>
              <td>C-x C-o </td>
              <td>空行を1行残して削除 </td>
            </tr>
            <tr>
              <td bgcolor="#c4ffc4" colspan="2">
                範囲の指定，カット＆ペースト{" "}
              </td>
            </tr>
            <tr>
              <td>C-spc </td>
              <td>範囲の先頭を決定する </td>
            </tr>
            <tr>
              <td>C-@ </td>
              <td>同上 </td>
            </tr>
            <tr>
              <td>C-x C_x </td>
              <td>範囲の末尾を決定(ポイントは範囲の先頭に戻る) </td>
            </tr>
            <tr>
              <td>C-w </td>
              <td>指定した範囲のカット(Muleでは"キル"と言う) </td>
            </tr>
            <tr>
              <td>C-y </td>
              <td>カット(キル)した範囲のペースト(Muleでは"ヤンク"と言う) </td>
            </tr>
            <tr>
              <td bgcolor="#c4ffc4" colspan="2">
                ウインドウの操作{" "}
              </td>
            </tr>
            <tr>
              <td>C-x 2 </td>
              <td>
                選択されたウインドウを上下2分割する(split-window-horizontally){" "}
              </td>
            </tr>
            <tr>
              <td>C-x 3 </td>
              <td>
                選択されたウインドウを左右に2分割する(split-window-vertically){" "}
              </td>
            </tr>
            <tr>
              <td>C-x 0 </td>
              <td>選択されているウインドウを削除する(delete-window) </td>
            </tr>
            <tr>
              <td>C-x 1 </td>
              <td>
                選択されているウインドウ以外を削除する(delete-other-window){" "}
              </td>
            </tr>
            <tr>
              <td>C-x 5 2 </td>
              <td>新しいフレームを作る(make-frame) </td>
            </tr>
            <tr>
              <td bgcolor="#c4ffc4" colspan="2">
                検索＆置換{" "}
              </td>
            </tr>
            <tr>
              <td>C-s </td>
              <td>前向きに検索(isearch-forward) </td>
            </tr>
            <tr>
              <td>C-r </td>
              <td>後向きに検索(isearch-backward) </td>
            </tr>
            <tr>
              <td>M-% </td>
              <td>問い合わせ置換(query-replace) </td>
            </tr>
            <tr>
              <td bgcolor="#c4ffc4" colspan="2">
                漢字変換、文字入力{" "}
              </td>
            </tr>
            <tr>
              <td>C-\ </td>
              <td>漢字の入力モードにする </td>
            </tr>
            <tr>
              <td>C-o </td>
              <td>文節を一字増やす </td>
            </tr>
            <tr>
              <td>C-i </td>
              <td>文節を一字減らす </td>
            </tr>
            <tr>
              <td>C-^ </td>
              <td>特殊記号の入力 </td>
            </tr>
            <tr>
              <td>M-k </td>
              <td>全角カタカナに変換 </td>
            </tr>
            <tr>
              <td>Shift-q </td>
              <td>全角英数字に変換 </td>
            </tr>
            <tr>
              <td>C-x_C-k_h </td>
              <td>全角ひらがなモード（例:あ） </td>
            </tr>
            <tr>
              <td>C-x_C-k_h </td>
              <td>全角大文字英数字モード（Ａ） </td>
            </tr>
            <tr>
              <td>C-x_C-k_h </td>
              <td>全角小文字英数字モード（ａ） </td>
            </tr>
            <tr>
              <td>C-x_C-k_h </td>
              <td>半角大文字英数字モード（A） </td>
            </tr>
            <tr>
              <td>C-x_C-k_h </td>
              <td>半角小文字英数字モード（a） </td>
            </tr>
            <tr>
              <td bgcolor="#c4ffc4" colspan="2">
                バッファの操作{" "}
              </td>
            </tr>
            <tr>
              <td>C-x_b </td>
              <td>バッファを切替える </td>
            </tr>
            <tr>
              <td>C-x_4_b </td>
              <td>違うウインドウでバッファを切替える </td>
            </tr>
            <tr>
              <td>C-x_k buffername </td>
              <td>バッファを消去する </td>
            </tr>
            <tr>
              <td>C-x_b </td>
              <td>バッファを表示する </td>
            </tr>
            <tr bgcolor="#9AA8BB">
              <td colspan="2">カット＆ペースト </td>
            </tr>
            <tr>
              <td>C-w </td>
              <td>マウスドラックした範囲をカット </td>
            </tr>
            <tr>
              <td>C-k </td>
              <td>カーソルから行端までをカット </td>
            </tr>
            <tr>
              <td>C-y </td>
              <td>カットした範囲をペースト </td>
            </tr>
            <tr>
              <td>C-x_C-o </td>
              <td>カーソル付近の空白行をつめる </td>
            </tr>
            <tr>
              <td>C-x_DEL </td>
              <td>カーソルから文の頭までを削除 </td>
            </tr>
            <tr>
              <td>M_k </td>
              <td>カーソルから文末までを削除 </td>
            </tr>
            <tr bgcolor="#9AA8BB">
              <td colspan="2">取り消し </td>
            </tr>
            <tr>
              <td>C-g </td>
              <td>入力コマンドの中止 </td>
            </tr>
            <tr>
              <td>C-/ </td>
              <td>操作を一つ戻す（Undo） </td>
            </tr>
            <tr>
              <td>M-x_spell-region </td>
              <td>マウスドラックした範囲のスペルチェック </td>
            </tr>
            <tr>
              <td>C-x_1 </td>
              <td>分割したウインドウを一つにする． </td>
            </tr>
            <tr bgcolor="#9AA8BB">
              <td colspan="2">大文字、小文字の変換と文字置換 </td>
            </tr>
            <tr>
              <td>M-u </td>
              <td>単語を大文字にする </td>
            </tr>
            <tr>
              <td>M-l </td>
              <td>単語を小文字にする </td>
            </tr>
            <tr>
              <td>M-c </td>
              <td>単語の先頭を大文字にする </td>
            </tr>
            <tr>
              <td>C-x_C-u </td>
              <td>マウスドラックした範囲の単語を大文字にする </td>
            </tr>
            <tr>
              <td>C-x_C-l </td>
              <td>マウスドラックした範囲の単語を小文字にする </td>
            </tr>
            <tr>
              <td>M-c </td>
              <td>マウスドラックした範囲の単語の先頭を大文字に </td>
            </tr>
            <tr>
              <td>M-% </td>
              <td>置換する </td>
            </tr>
            <tr>
              <td>&nbsp; </td>
              <td>スペースキー：置換実行 </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>Deleteキー：置換しないで次へ </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>Escキー：置換終了 </td>
            </tr>
            <tr bgcolor="#9AA8BB">
              <td colspan="2">矩形編集 </td>
            </tr>
            <tr>
              <td>C-Space </td>
              <td>マークをセット（ここから） </td>
            </tr>
            <tr>
              <td>C-x C-x </td>
              <td>マークとカーソルを入れ替え（ここまでの領域を確定） </td>
            </tr>
            <tr>
              <td>C-x r k </td>
              <td>領域を削除 </td>
            </tr>
            <tr>
              <td>C-x r o </td>
              <td>領域を削除して空白でうめる </td>
            </tr>
            <tr>
              <td>C-x r y </td>
              <td>削除した部分を貼り付ける </td>
            </tr>
            <tr bgcolor="#9AA8BB">
              <td colspan="2">漢字コード変換、その他 </td>
            </tr>
            <tr>
              <td>C-x C-k f *junet* </td>
              <td>JISコード </td>
            </tr>
            <tr>
              <td>C-x C-k f sjis*dos </td>
              <td>s-JISコード </td>
            </tr>
            <tr>
              <td>C-x C-k f *euc-japan*unix </td>
              <td>eucコード </td>
            </tr>
          </tbody>
        </table>
        <a name="mew" id="mew"></a>
      </div>
      <h2>Mew command reference</h2>
      <div align="center">
        <table border="1" cellspacing="0" cellpadding="3">
          <tbody>
            <tr bgcolor="#BDD1EA">
              <td colspan="2">Mewの起動と終了 </td>
            </tr>
            <tr>
              <td>M-x_mew </td>
              <td>Mew起動（起動すると自動でSummaryモードに） </td>
            </tr>
            <tr>
              <td>Q </td>
              <td>Mew終了 </td>
            </tr>
            <tr bgcolor="#BDD1EA">
              <td colspan="2">メールを読む(Summaryモード) </td>
            </tr>
            <tr>
              <td>スペース </td>
              <td>メールの中身を表示、表示を１ページ進める </td>
            </tr>
            <tr>
              <td>DEL </td>
              <td>表示を１ページ戻す </td>
            </tr>
            <tr>
              <td>i </td>
              <td>届いたメールを一覧に追加 </td>
            </tr>
            <tr>
              <td>s </td>
              <td>メールの一覧表示をする </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>all（全てのメール） </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>first:n（最初からn通） </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>last:n（最後からn通） </td>
            </tr>
            <tr bgcolor="#BDD1EA">
              <td colspan="2">メールを送信(Draftモード) </td>
            </tr>
            <tr>
              <td>w </td>
              <td>メールの作成モードに入る </td>
            </tr>
            <tr>
              <td>C-c_C-c </td>
              <td>メールを送信 </td>
            </tr>
            <tr>
              <td>C-c_C-i </td>
              <td>signatureを挿入 </td>
            </tr>
            <tr>
              <td>C-c_C-q </td>
              <td>メールの作成を中止してSummaryモードに戻る </td>
            </tr>
            <tr bgcolor="#BDD1EA">
              <td colspan="2">メールの整理など </td>
            </tr>
            <tr>
              <td>a </td>
              <td>カーソルのあるメールに返事 </td>
            </tr>
            <tr>
              <td>A </td>
              <td>元のメールを引用してメールに返事 </td>
            </tr>
            <tr>
              <td>g </td>
              <td>フォルダを移動する </td>
            </tr>
            <tr>
              <td>d </td>
              <td>メールを削除する印(D)をつける </td>
            </tr>
            <tr>
              <td>o </td>
              <td>メールを別のフォルダに移動する印(o)をつける </td>
            </tr>
            <tr>
              <td>x </td>
              <td>つけた印を実行 </td>
            </tr>
            <tr>
              <td>f </td>
              <td>メールを誰かに転送 </td>
            </tr>
            <tr>
              <td>S </td>
              <td>メールを日付順に自動整列 </td>
            </tr>
            <tr>
              <td>y </td>
              <td>メールをファイルに保存 </td>
            </tr>
            <tr bgcolor="#BDD1EA">
              <td colspan="2">メールの検索 </td>
            </tr>
            <tr>
              <td>/ </td>
              <td>メールをキーワードで検索（結果を一覧表示） </td>
            </tr>
            <tr>
              <td>? </td>
              <td>メールをキーワードで検索（結果に＊をつけるだけ） </td>
            </tr>
            <tr>
              <td>u </td>
              <td>＊を外す </td>
            </tr>
            <tr>
              <td>N </td>
              <td>＊のついたメールだけ読む </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => <Seo title="Yuki Matsukura @SFC" />
