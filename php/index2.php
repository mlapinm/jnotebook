<?
header("Content-Type: text/html;charset=utf-8");
echo "&lt;b&gt;пример: &lt;/b&gt;&lt;div align=left&gt;это тест&lt;/div&gt;";
$re = "|<[^>]+>(.*)</[^>]+>|U";
//$re ="|(\w+)|";
preg_match_all($re, 
    "<b>пример: </b><div align=left>это тест</div>",
    $out, PREG_PATTERN_ORDER);
echo $out[0][0] . ", " . $out[0][1] . "<br>";
echo $out[1][0] . ", " . $out[1][1] . "<br>";
var_dump($out);echo '<br>';
print_r($out);echo '<br>';
foreach($out[1] as $v){
    echo $v,', ';
}
?>
