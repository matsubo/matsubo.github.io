<a href="top.php"><img src="img/top.gif" width="73" height="14" alt="top"></a>
<h2 style="font-size: small;">[ <? print $auth_login; ?> ] さんのデータサイエンス科目情報　　-　 <? system('date'); ?></h2>


<?
/* debug
while(list($key, $val) = each($HTTP_SESSION_VARS)){
	print "-- SESSION --<br>\n";
	print "$key => $val <br>\n";
}
while(list($key, $val) = each($HTTP_COOKIE_VARS)){
	print "-- cookie --<br>";
	print "$key => $val <br>\n";
}
while(list($key, $val) = each($HTTP_POST_VARS)){
	print "-- post --<br>";
	print "$key => $val <br>\n";
}
print "p_c[0]=".$p_c[0]."<br>";
print "HTTP_REFERER=".$_SERVER["HTTP_REFERER"]."<br>";

print $auth_id."<br>";
print $auth_login."<br>";
*/
?>