<?
class db{
	// DBハンドラ
	var $dbconn;
	
	// データベースに接続
	function connect(){
		static $host     = "localhost";
		static $port     = "5432";
		static $dbname   = "report";
		static $user     = "report";
		static $password = "dsci";
		$dbconn = pg_connect ("host=$host port=$port dbname=$dbname user=$user password=$password");
		if(!$dbconn){ die("Cannot establish connection to $localhost"); }
	}
	
	// クエリーを投げる
	function sql($query){
		if(!$dbconn){ die("データベースへ接続されていません。"); }
		$result = pg_exec($query);
		if(!$result){ die("SQL発行時にエラーが発生しました。"); }
		return $query;
	}
	
	// データベース接続を閉じる
	function close(){
#		pg_close($dbconn);
	}
	
}

?>