<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<h3>Enter phone number</h3>
<?
$phone = $_GET['phone'];
echo "${phone}<br>";
	system("usr/bin/sudo usr/sbin/asterisk -x \"channel originate SIP/402 extension ${phone}@default\"")
?>
</body>
</html>