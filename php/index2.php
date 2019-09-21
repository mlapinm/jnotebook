<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<base target="_blank">
</head>
<body>
<?
foo(1, 2, 3);
function foo() {
    $numargs = func_num_args();
    echo "Всего аргументов: $numargs<br>";
    echo "Второй
        аргумент: " . func_get_arg(1) . "<br>";

    $args = func_get_args();
    foreach ($args as $key => $value) {
        echo "Аргумент$key : $value<br>";
    }
}
?>
</body>
</html>
