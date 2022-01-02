var title = document.createElement("title");
title.innerText="TOP UNIVERSITY"
document.head.append(title);




var main = document.createElement("main");
document.body.append(main);
//main
var div1 = document.createElement("div");
div1.setAttribute("class","header");
main.appendChild(div1);
//div1
var p = document.createElement("p");
p.setAttribute("class","title");
p.innerText="TOP 50 RANKED COLLEGE IN USA"
div1.appendChild(p);
//p
var div2 = document.createElement("div");
div2.setAttribute("class" , "content");
div2.innerText="Loading";
main.appendChild(div2);
//div2
var div3 = document.createElement("div");
div3.setAttribute("class" , "pagination");
main.appendChild(div3);
//div3
var a1 = document.createElement("a");
a1.setAttribute("class" , "pagination_link");
a1.setAttribute("href","#");
a1.innerText="First"
div3.appendChild(a1);
//a1
var a2 = document.createElement("a");
a2.setAttribute("class","pagination_link");
a2.setAttribute("href", "#");
a2.innerText="2";
div3.appendChild(a2);
//a2
var a3 = document.createElement("a");
a3.setAttribute("class","pagination_link");
a3.setAttribute("href", "#");
a3.innerText="3";
div3.appendChild(a3);
//a3
var a4 = document.createElement("a");
a4.setAttribute("class","pagination_link");
a4.setAttribute("href","#");
a4.innerText="4";
div3.appendChild(a4);
//a4
var a5 = document.createElement("a");
a5.setAttribute("class","pagination_link");
a5.setAttribute("href","#");
a5.innerText="5";
div3.appendChild(a5);
//a5
var a6 = document.createElement("a");
a6.setAttribute("class","pagination_link");
a6.setAttribute("href","#");
a6.innerText="6";
div3.appendChild(a6);
//a6
var a7 = document.createElement("a");
a7.setAttribute("class","pagination_link");
a7.setAttribute("href","#");
a7.innerText="7";
div3.appendChild(a7);
//a7
var a8 = document.createElement("a");
a8.setAttribute("class","pagination_link");
a8.setAttribute("href","#");
a8.innerText="8";
div3.appendChild(a8);
//a8
var a9 = document.createElement("a");
a9.setAttribute("class","pagination_link");
a9.setAttribute("href","#");
a9.innerText="9";
div3.appendChild(a9);
//a9
var a10 = document.createElement("a");
a10.setAttribute("class","pagination_link");
a10.setAttribute("href","#");
a10.innerText="Last";
div3.appendChild(a10);
//a10
let content = document.querySelector(".content")

async function getApiData() {
    const apiResponse = await fetch("http://universities.hipolabs.com/search?country=United+States")
    const apiData = await apiResponse.json()
    return apiData
}

let elementsPerPage = 10

function printElments(startingElement, numberOfElements) {
    getApiData().then(data => {
        data = data.splice(startingElement, numberOfElements)
        let str = ""
        data.forEach(item => {

              

            str += `<p> Country:&nbsp  ${item.country}&nbsp &nbsp    College name:&nbsp ${item.name} &nbsp&nbsp&nbspCheck for the Link Below</p> <a href="${item.web_pages}" target="_blank"">${item.web_pages}</a> `
            //console.log(item.title)
        })
        content.innerHTML = str
    })
}
// initially loading the first 10 elements
printElments(0, elementsPerPage)

/*
    Pagination functionality
*/

let paginationLink = document.querySelectorAll(".pagination_link")

paginationLink.forEach(item => {
    item.addEventListener("click", loadPageData)
})

function loadPageData() {
    let pageNumber = parseInt(this.textContent)
    printElments(pageNumber * 10 - 10, elementsPerPage)
}