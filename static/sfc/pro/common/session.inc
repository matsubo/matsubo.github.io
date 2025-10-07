<?

// declaration of session
session_start();

// 呼ぶのに楽な変数に格納
reset($HTTP_SESSION_VARS);
while(list($key, $val) = each($HTTP_SESSION_VARS)){
	$session[$key] = $val;
	#print "$key => $val <br>\n";
}

?>