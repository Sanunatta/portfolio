<?php
if($_POST["submit"]){
    $mailto="Sanunatta98@gmail.com";
    $name=$_POST['name'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];

    $message="Name :: ",$name."\n"."Mail Id :: ",$email."\n"."Subject :: ",$subject."\n";
    $result=mail($mailto,$message);
    if($result){
    echo "Massage was sent Owner";
    }else{
        echo "Sorry!! Message was not send, Try Again"
    }
}
?>