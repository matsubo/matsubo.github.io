<?

// 入力内容ローカル変数へ代入
$p_login = $HTTP_POST_VARS['login'];
$p_password  = $HTTP_POST_VARS['password'];
$p_ref  = $HTTP_POST_VARS['ref'];
$p_c  = $HTTP_POST_VARS['c'];

$auth_id = $HTTP_SESSION_VARS['auth_id'];
$auth_login = $HTTP_SESSION_VARS['auth_login'];

session_register('auth_id');
session_register('auth_login');

if($auth_id == "" || $auth_login == ""){
	// 認証用にアカウント情報を取得
	$u_query = "SELECT id,account,password FROM user WHERE account='".$p_login."'";
	
	
	if(mysql_num_rows($result = $dbh->sql($u_query)) < 1){
		
		// ユーザーアカウント存在しない
		$msg->add("認証に失敗しました");
		
		
		// アカウントが存在した場合
	}else{
		
		$row = mysql_fetch_assoc($result);
		
		// 認証失敗
		if($row['password'] != $p_password){
			$msg->add("認証に失敗しました");
		
		// 認証成功
		}else{
			// auth_id に成功したアカウントを格納
			session_unregister('auth_id');    $auth_id    = $row['id']; session_register('auth_id');
			session_unregister('auth_login'); $auth_login = $p_login ;  session_register('auth_login');
			
			if($p_ref == "top"){
				if($p_c[0] == "on"){
					// COOKIEをセット 4年間有効
					setcookie ("c_account", $row['account'], time()+60*60*24*365*4, "/", ".dsci.sfc.keio.ac.jp");
					setcookie ("c_pw", $row['password'],     time()+60*60*24*365*4, "/", ".dsci.sfc.keio.ac.jp");
				}else{
					// COOKIE削除
					if($HTTP_COOKIE_VARS['c_account']){
						setcookie ("c_account", "", time()-10, "/", ".dsci.sfc.keio.ac.jp");
						setcookie ("c_pw",      "", time()-10, "/", ".dsci.sfc.keio.ac.jp");
					}
				}
			}
		}
	}
}
?>