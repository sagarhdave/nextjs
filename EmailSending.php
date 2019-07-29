<?php
if ($_REQUEST['EMAIL']) {
	include('db.php');
	include('Function.php');

	$email = $_REQUEST['EMAIL'];

	$msg = "First line of text\nSecond line of text";

	// use wordwrap() if lines are longer than 70 characters
	$msg = wordwrap($msg,70);

	// send email
	$sagar = mail("sagar.dave@contentcreation.com.my", "My subject", $msg);

	var_dump($sagar);
}
?>
