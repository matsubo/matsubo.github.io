<?

class db_report extends db{
	
	// 課題名取得
	function getjKadai($lesson){
		$result = $this->sql("SELECT label,prof FROM lesson WHERE id=".$lesson);
		if(mysql_num_rows($result)){
			$row = mysql_fetch_assoc($result);
			return $row['label']."(".$row['prof'].")";
		}else{
			die("そのような課題名はありません");
		}
	}
	
	// 課題期限
	function getjKigen($lesson){
		$result = $this->sql("SELECT deadline FROM lesson WHERE id=".$lesson);
		$row = mysql_fetch_assoc($result);
		if(ereg("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}) ([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})" ,$row['deadline'], $limit)){
			return  $limit[1]."年".$limit[2]."月".$limit[3]."日".$limit[4]."時".$limit[5]."分".$limit[6]."秒";
		}else{
			die("正規表現にマッチしません");
		}
	}
	
	// 課題期限生データ
	function getrowKigen($lesson){
		$result = $this->sql("SELECT deadline FROM lesson WHERE id=".$lesson);
		$row = mysql_fetch_assoc($result);
		return $row['deadline'];
	}
	
	// 担当者
	function getjProf($lesson){
		$result = $this->sql("SELECT prof FROM lesson WHERE id=".$lesson);
		$row = mysql_fetch_assoc($result);
		return $row['prof'];
	}
	
	// リポートタイトル
	function getjTitle($lesson){
		$result = $this->sql("SELECT label FROM lesson WHERE id=".$lesson);
		$row = mysql_fetch_assoc($result);
		return $row['label'];
	}
	
	// ログイン名取得
	function getLogin($auth_id){
		$result = $this->sql("SELECT login FROM user WHERE id=".$auth_id);
		$row = mysql_fetch_assoc($result);
		return $row['login'];
	}
}
?>