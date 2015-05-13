<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
     if(!empty($_POST['contactname']) && !empty($_POST['contactemail']) && !empty($_POST['contactmessage']) && !empty($_POST['contactnewfield'])) {
	$to = 'support@instagrammy.ru'; // Your e-mail address here.
 $body = "\nName: {$_POST['contactname']}\nEmail: {$_POST['contactemail']}\n\n\n{$_POST['contactmessage']}\n\n{$_POST['contactnewfield']}\n\n";
	mail($to, "INSTAGRAMMY NEW CLIENT", $body, "From: {$_POST['contactemail']}"); // E-Mail subject here.
    }
}
?>