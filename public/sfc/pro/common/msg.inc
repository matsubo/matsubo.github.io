<?
/* エラーメッセージを出力して終わる */
class error{
	var $msg = array();		// メッセージ格納用
	
	var $head = "<br><br>\n<div align=\"center\">\n<div align=\"left\" style=\"padding: 5px; width: 450px; background-color: white; border-style: solid; border-width: 5px; border-color: green;\">\n";
	
	var $tail = "<br><br><input type=\"button\" onClick=\"javascript:history.back();\" value=\"&lt;&lt;戻る\"></div>\n</div>\n</body>\n</html>";
	
	// エラー内容を追加
	function add($str){
		array_push($this->msg, $str);
	}
	
	// エラーがあるかどうかをチェック
	function is_error(){
		return count($this->msg);
	}
	
	// エラーを表示し、exit
	function print_and_die(){
		if(count($this->msg)){
			print $this->head;
			for($i=0; $i<count($this->msg); $i++){
				print "・".$this->msg[$i]."<br>\n";
			}
			print $this->tail;
			exit;
		}
	}
	
	// エラーを表示し、コンティニュー
	function print_and_continue(){
		if(count($this->msg)){
			print $this->head;
			for($i=0; $i<count($this->msg); $i++){
				print "・".$this->msg[$i]."<br>";
			}
		}
	}
}

?>