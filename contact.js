function sendmail(){
    email.send({
      Host :"smtp.gmail.com",
      Username :"Sanunatta98@gmail.com",
      Password :"sanu12345",
      To : "Sanunatta09@gmail.com",
      From : document.getElementById("email").value,
      Subject : "Protfoli Massege EnquIry :: ",
      Body : "Name :  " +document.getElementById("name").value + "<br> Email : "+ document.getElementById("email").value + "<br> Subject: " + document.getElementById("subject").value +"<br> Text : "+document.getElementById("massage").value
    }).then(
      Message=> alert("Massage Send SuccesFully")
    );
  }