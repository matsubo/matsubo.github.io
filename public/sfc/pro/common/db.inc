<?

ini_set("mysql.allow_persistent","On");
ini_set("mysql.max_persistent","-1");
ini_set("mysql.max_links","-1");
ini_set("mysql.default_port", 3306);
ini_set("mysql.default_socket", "/tmp/mysql.sock");
ini_set("mysql.default_host", "localhost");
ini_set("mysql.default_user", "mysql");


class db{
	// DBハンドラ
	var $dbcon;
	
	// コンストラクタ
	function db(){
		$this->connect();
	}
	
	// データベースに接続
	function connect(){
		static $host     = "localhost";
		static $user     = "root";
		static $dbname   = "report";
		static $password = "";
		
		$svcon = @mysql_connect($host, $user, $password) or die("Could not connect");
		$this->dbcon = @mysql_select_db($dbname, $svcon) or die("Could not select database. dbname=$dbname svcon=$svcon");
	}
	
	// クエリーを投げる
	function sql($query){
		if(!$this->dbcon){ die("can't make a query before connecting to database"); }
		$result = mysql_query($query);
		if(!$result){ die(mysql_error()); }
		return $result;
	}
	
	// ユーザーが居るかどうかチェック
	function is_user($uname){
		$result = $this->sql("SELECT account FROM user WHERE login = '$uname'");
		$num = mysql_num_rows($result);
		return $num;
	}
	
	// データベース接続を閉じる
	function close(){
		mysql_close($dbconn);
	}
}

?>