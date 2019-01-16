<?php
// read file
$domain = 'Hargapedia - The grocery price comparison app.html';
$handle = fopen($domain, 'r');
$content = stream_get_contents($handle);

// alternative to stream_get_contents
$contents = '';
while (!feof($handle)) {
    $content .= fread($handle, 8192);
}
//
fclose($handle);
/**
 * print html content on textarea
 */
echo "<textarea id='textarea' rows='20' cols='100%'>$content</textarea>";
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h3>Inside the textarea press "space" and go to check test.txt or <a href="test.txt" target="_blank">Click here</a> </h3>
    <p>Space how many time will write how many times</p>
    <p>You can delete data manually in <b>test.txt</b></p>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="search.js"></script>
  </body>
</html>

<?php
// write file
if(isset($_POST['fn'])){
  $filename = "test.txt";
  $fh = fopen($filename, "a");
  fwrite($fh, $_POST['fn']."\n");
  fclose($fh);
}
 ?>
