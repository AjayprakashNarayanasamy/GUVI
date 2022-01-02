var main = document.createElement("main");
main.setAttribute("class","app");
document.body.append(main);
//Main Element
var div1m = document.createElement("div");
div1m.setAttribute("class","header");
main.appendChild(div1m);
//div element 1 in main
var h1 = document.createElement("h1");
h1.setAttribute("class","title" );
h1.innerText="DOG";
div1m.appendChild(h1);
//h1 to div1m
var div2d = document.createElement("div");
div2d .setAttribute("class" , "breed-container");
div1m.appendChild(div2d);
// div inside div....
var select = document.createElement("select");
select.setAttribute("id","breed");
select.setAttribute("class","breeds");
div2d.appendChild(select);
//select element
var option = document.createElement("option");
option.setAttribute("class","select");
option.setAttribute("value","select");
option.innerText="choose an animal"
select.appendChild(option);
//option
var divf = document.createElement("div");
divf .setAttribute("class" , "slideshow");
main.appendChild(divf);
// div inside main




const slideshow = document.querySelector(".slideshow")
const breedsContainer = document.querySelector(".breeds")

async function start() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all")
        const data = await response.json()
        createBreedList(data)
    } catch (e) {
        console.log("There was a problem fetching the data.")
    }
}

start()

function createBreedList(data) {
    const breedsArray = Object.keys(data.message)
    breedsArray.forEach(item => {
        breedsContainer.innerHTML += `<option value="${item}">${item}</option>`
    })
}

breedsContainer.addEventListener("change", loadByBreed)

async function loadByBreed(e) {
    const breed = e.target.value
    if (breed != "Select") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        //console.log(data)
        createSlideshow(data.message)
    }
}

function createSlideshow(images) {
    let randomImage = Math.floor(Math.random() * images.length)
    slideshow.innerHTML = `
    <div class="slide" style="background-image: url('${images[randomImage]}')"></div>`

   
}








