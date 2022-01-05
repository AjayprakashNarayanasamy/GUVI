var header = document.createElement("h3");;
header.setAttribute("class","h3 text-center");
header.innerText="GIT HUB";
document.body.append(header);

var img = document.createElement("img");
img.setAttribute("src","./icons8-github-24.png");

header.appendChild(img)


var br = document.createElement("br");

var div1 = document.createElement("p");
document.body.append(div1)

var div2s1 = document.createElement("div");
div2s1.setAttribute("class", "input1")
document.body.append(div2s1);

var input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("id", "search");
input1.setAttribute("placeholder", "search")
div2s1.appendChild(input1);

var span1 = document.createElement("span");
div2s1.append(span1);






button = document.createElement("button");
button.setAttribute("onclick", "happen()");
button.innerHTML = "Search";
span1.appendChild(button);

var value = document.createElement("div");
value.setAttribute("id", "value");
document.body.append(value);

var row = document.createElement("div");
row.classList.add("row");

// row.innerText="hello"
document.body.appendChild(row);

function happen() {
  var a = document.getElementById("search").value;

  string = "";
  //document.getElementById("value").innerHTML=a
  if (a == "") {
    document.getElementById("value").innerHTML = "Enter Name";

    row.innerHTML = "";
  } else {
    fetch("https://api.github.com/users/" + a + "/repos")
      .then((result) => {
        
        fetch(result.url)
          .then((c) => c.json())
          .then((p) => {
            row.innerHTML = `<div ><input type="text" id="repo"> <button onclick="repo()" >Repositry</button> </div>`;

;

           

            document.getElementById("value").innerHTML = "";
            for (let i = 0; i < p.length; i++) {
              
           

              string += p[i].clone_url;

             

              row.innerHTML += `
                <div>
                <div class="col">
                <div class = "card">
                <div class= "card-header" >Name: ${p[i].owner.login}&nbsp; &nbsp; &nbsp;
                Repository:<a href=${p[i].clone_url}>${p[i].name}</a><div>
               
                <div>
                <div>
                <div>
                </div>`;
            }
            
          })
          .catch((er) => {
            console.log(er);
            document.getElementById("value").innerHTML = "Invalid User";
          });

        
        console.log(result);
      })
      .catch((er) => {
        console.log("er");
      });
  }
}

function repo() {
  var a = document.getElementById("search").value;
  count = 0;

  fetch("https://api.github.com/users/" + a + "/repos").then((result) => {
    
    fetch(result.url)
      .then((c) => c.json())
      .then((p) => {
        var b = document.getElementById("repo").value;
        console.log(p);

        if (b == "") {
          document.getElementById("value").innerHTML = "";
        } else {
          console.log(b + "entering");
          row.innerHTML = "";
          for (let i = 0; i < p.length; i++) {
            if (b == p[i].name) {
              console.log(p[i]);
              count++;
              document.getElementById("value").innerHTML = "";
              row.innerHTML = `<span ><input type="text" id="repo">  <button onclick="repo()" class = "me-5" > Search Repo </button></span>`;

            

              row.innerHTML += `<div class="col">
            <div>
            <div class="card-header text-center"> User Name: ${p[i].owner.login}<div>
            Repository Name:<a href=${p[i].clone_url}>${p[i].name}</a>
            
            <div>
            </div>`;
              console.log(count);
            }

            if (count == 0) {
              document.getElementById("value").innerHTML = "Not Found";
            }
          }
        }
      });
  });
}
