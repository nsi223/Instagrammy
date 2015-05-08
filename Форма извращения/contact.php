<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(!empty($_POST['contactname']) && !empty($_POST['contactemail']) && !empty($_POST['contacttarif']) && !empty($_POST['contacttelephone']) && !empty($_POST['contactmessage'])) {
	$to = 'support@instagrammy.ru'; // Your e-mail address here.
	$body = "\nName: {$_POST['contactname']}\nEmail: {$_POST['contactemail']}\n\n\n{$_POST['contactmessage']}\n\n{$_POST['contacttelephone']}\n\n{$_POST['contacttarif']}\n\n";
	mail($to, "Message from instagrammy.ru", $body, "From: {$_POST['contactemail']}"); // E-Mail subject here.
    }
}
?>