var title = document.createElement("title");
title.innerText="USA HOLIDAYS"
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
p.innerText="USA HOLIDAYS"
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
a5.innerText="Last";
div3.appendChild(a5);
//a5


let content = document.querySelector(".content")

async function getApiData() {
    const apiResponse = await fetch("https://date.nager.at/api/v2/publicholidays/2020/US")
    const apiData = await apiResponse.json()
    return apiData
}

let elementsPerPage = 3

function printElments(startingElement, numberOfElements) {
    getApiData().then(data => {
        data = data.splice(startingElement, numberOfElements)
        let str = ""
        data.forEach(item => {

              

            str += `<p> DATE:&nbsp;${item.date} &nbsp; FESTIVAL NAME: ${item.name} &nbsp; LOCAL NAME:${item.localName} </p>`
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
    printElments(pageNumber * 3 - 3, elementsPerPage)
}