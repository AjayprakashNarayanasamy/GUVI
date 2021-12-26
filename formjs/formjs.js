function validateForm() {

  var pw1 = document.getElementById("ip").value;
  var pw2 = document.getElementById("cp").value;
  var name1 = document.getElementById("fn").value;
  var email = document.getElementById("em").value;
  var f = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  

  if(name1 == "") {
    document.getElementById("blankMsg").innerHTML = "Enter the Name!!!";
    return false;
  }
  
 
  if(email == "") {
    document.getElementById("em1").innerHTML = "Enter the correct Email!!!";
    return false;
  }
  
  


  if(pw1 == "") {
    document.getElementById("message1").innerHTML = "Enter the password!!!";
    return false;
  }


  if(pw2 == "") {
    document.getElementById("message12").innerHTML = "ReEnter password please!!!";
    return false;
  } 

  if(pw1 != pw2) {
    document.getElementById("message12").innerHTML = "Passwords did not match!!!";
    return false;
  } else {
    document.getElementById("message121").innerHTML = "Registered Sucessfully!!!";
    
   



    let element2 = document.createElement("div");
    element2.setAttribute("name" , name1 )
    element2.innerText = name1;
    document.body.appendChild(element2);


    let element3 = document.createElement("div");
    element3.setAttribute("email" , email )
    element3.innerText = email;
    document.body.appendChild(element3);


    
    let element = document.createElement("div");
    element.setAttribute("dpw1" , pw1 )
    element.innerText = pw1;
    document.body.appendChild(element);

    let element1 = document.createElement("div");
    element1.setAttribute("dpw2" , pw2 )
    element1.innerText = pw1;
    document.body.appendChild(element1);
    
    
    
    
   
  }
  

  

  

  
}