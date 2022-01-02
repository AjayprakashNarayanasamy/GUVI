let title = document.createElement("H1");
title.setAttribute("id" , "title");
title.setAttribute("class" , "text-center");
title.innerText="REST API";
document.body.append(title);
var divcl1=document.createElement('div')
divcl1.setAttribute("class" , "container")
document.body.appendChild(divcl1)
var divb1=document.createElement('div')
divb1.setAttribute("class" , "row")
divcl1.appendChild(divb1)
fetch('https://restcountries.com/v2/all')
.then((value1)=>value1.json())
.then((value)=>{
    
    for(let i=0;i<value.length;i++){
        
        divb1.innerHTML += `  <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div class="card h-100">
       <div class="card-header text-center"> ${value[i].capital}<div>
       <img  src=${value[i].flag} class="card-img-top">
       <div class=" card-body ">
        <div class = " card-text " >Native Name:${value[i].nativeName}   
        <div>Region:${value[i].region} </div>
        <div>Population:${value[i].population}</div>
        
        
        </div>
        
        <button class="btn btn-primary" onclick='check("${value[i].capital}","ans${i}")'">Click for weather</button>
        <div id="ans${i}"></div>
        </div>
        </div>
        </div>`
    }


})
.catch((error)=>{
    let title1 = document.createElement("H1");
title1.setAttribute("id" , "title");
title1.setAttribute("class" , "text-center");
title1.innerText="ERROR";
document.body.append(title1);
})




function check(value3,i){
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+value3+"&appid=46b7aa41bbc315e0b4b9b9161e920dc2")
    .then((value5)=>value5.json())
    .then((value7)=>{
    var value4=value7.weather[0].description    
   document.getElementById(i).innerHTML=value4
    })
}







