


let div1h1 = document.createElement("h1");
div1h1.setAttribute("id" , "title");
div1h1.innerText="DOM FORMS";
document.body.append(div1h1);
// heading

let pt1 = document.createElement("P");
pt1.setAttribute("id" , "description")
pt1.innerText="DOM FORMS";
document.body.append(pt1);
//p

var formid = document.createElement("form");
formid.setAttribute("id" ,"form" );
// formid.setAttribute("onsubmit",output(event))
formid.setAttribute("class" ,"form" );
document.body.append(formid);

//form


var divcl1 = document.createElement("div");
divcl1.setAttribute("class" ,"form-group" );
formid.appendChild(divcl1);
//div

var fn = document.createElement("div");
fn.innerText = "First Name";
divcl1.appendChild(fn);
//First Name

var divFirstnameip = document.createElement("input");
divFirstnameip.setAttribute("type","text");
divFirstnameip.setAttribute("id", "first-name")
divFirstnameip.setAttribute("required","");
divFirstnameip.setAttribute("placeholder","First-Name");
divcl1.appendChild(divFirstnameip);
//First name ip 


var sn = document.createElement("div");
sn.innerText = "Second Name";
divcl1.appendChild(sn);
//Second Name

var divSecondnameip = document.createElement("input");
divSecondnameip.setAttribute("type", "text");
divSecondnameip.setAttribute("id", "last-name")
divSecondnameip.setAttribute("required","");
divSecondnameip.setAttribute("placeholder","Second-Name");
divcl1.appendChild(divSecondnameip);
//Second nameip


var pincode = document.createElement("div");
pincode.innerText = "pincode";
divcl1.appendChild(pincode);
//Pincode

var pincodeip = document.createElement("input");
pincodeip.setAttribute("type", "text");
pincodeip.setAttribute("id", "pincode");
pincodeip.setAttribute("required","");
pincodeip.setAttribute("placeholder","pincode");
divcl1.appendChild(pincodeip);
//Pincodeip

var Address = document.createElement("div");
Address.innerText = "Address";
divcl1.appendChild(Address);
//Address

var Addressip = document.createElement("textarea");
Addressip.setAttribute("id", "address");
Addressip.setAttribute("required"," ");
Addressip.setAttribute("placeholder","Address");
divcl1.appendChild(Addressip);
//Addressip

var Gendder = document.createElement("div");
Gendder.setAttribute("class","Gendder");
Gendder.innerText = "Gender:";
divcl1.appendChild(Gendder);
//Gender
var br1 = document.createElement("br");

Gendder.appendChild(br1);
//br
var male = document.createElement("span");
male.innerText = "Male";
Gendder.appendChild(male);

//Male
var Gender = document.createElement("input");
Gender.setAttribute("type","radio");
Gender.setAttribute("value","male");
Gender.setAttribute("required","");
Gender.innerText = "MALE";
Gender.setAttribute("name", "gender");
Gendder.appendChild(Gender);
//Maleip
var female = document.createElement("span");
female.innerText = "female";
Gendder.appendChild(female);
//female
var Gender1 = document.createElement("input");
Gender1.setAttribute("type","radio");
Gender1.setAttribute("value","Female");
Gender1.setAttribute("required","");
Gender1.innerText = "female";
Gender1.setAttribute("name", "gender");
Gendder.appendChild(Gender1);
//femaleip



let table1 = document.createElement("table");
table1.setAttribute("class" , "table")
document.body.append(table1);
//table
let thead = document.createElement("thead");
thead.setAttribute("id" , "thead")
table1.appendChild(thead);
//thead
let tr1 = document.createElement("tr");
tr1.setAttribute("id" , "tr1")
thead.appendChild(tr1 );
//tr1

let th1 = document.createElement("th");
th1.setAttribute("id" , "th1")
th1.innerText="First-Name";
tr1.appendChild(th1 );
//th1

let th2 = document.createElement("th");
th2.setAttribute("id" , "th2")
th2.innerText="Last-Name";
tr1.appendChild(th2);

let th3 = document.createElement("th");
th3.setAttribute("id" , "th3")
th3.innerText="Pincode";
tr1.appendChild(th3);
//th3

let th4 = document.createElement("th");
th4.setAttribute("id" , "th4")
th4.innerText="Address";
tr1.appendChild(th4);
//th4

let th5 = document.createElement("th");
th5.setAttribute("id" , "th5")
th5.innerText="Gender";
tr1.appendChild(th5);
//th5


let tbody = document.createElement("tbody");
tbody.setAttribute("id" , "tbody")
table1.appendChild(tbody);
//tbody

let tr2 = document.createElement("tr");
tr2.setAttribute("id" , "tr2")
tbody.appendChild(tr2 );
//tr2

let td1 = document.createElement("td");
td1.setAttribute("id" , "td1")
tr2.appendChild(td1 );
//td1

let td2 = document.createElement("td");
td2.setAttribute("id" , "td2")
tr2.appendChild(td2 );
//td2

let td3 = document.createElement("td");
td3.setAttribute("id" , "td3")
tr2.appendChild(td3);
//td3

let td4 = document.createElement("td");
td4.setAttribute("id" , "td4")
tr2.appendChild(td4);
//td4

let td5 = document.createElement("td");
td5.setAttribute("id" , "td5")
tr2.appendChild(td5);
//td4

















//Genderip

/*var choiceoffood = document.createElement("div");
choiceoffood.innerText = "Choice of food:";
document.body.append(choiceoffood);
//choiceoffood
var rice = document.createElement("div");
rice.innerText="rice";
choiceoffood.appendChild(rice);

var  ricec = document.createElement("input");
ricec.setAttribute("type", "checkbox");
choiceoffood.appendChild(rice).appendChild(ricec);

var curd = document.createElement("div");
curd.innerText="curd";
choiceoffood.appendChild(curd);

var  curdc = document.createElement("input");
curdc.setAttribute("type", "checkbox");
choiceoffood.appendChild(curd).appendChild(curdc);

var sambar = document.createElement("div");
sambar .innerText="sambar ";
choiceoffood.appendChild(sambar );

var  sambarc = document.createElement("input");
sambarc.setAttribute("type", "checkbox");
choiceoffood.appendChild(sambar ).appendChild(sambarc);

var parotta = document.createElement("div");
parotta.innerText="parotta";
choiceoffood.appendChild(parotta);

var  parottac = document.createElement("input");
parottac.setAttribute("type", "checkbox");
choiceoffood.appendChild(parotta).appendChild(parottac);

var ghee = document.createElement("div");
ghee.innerText="ghee";
choiceoffood.appendChild(ghee);

var  gheec = document.createElement("input");
gheec.setAttribute("type", "checkbox");
choiceoffood.appendChild(ghee).appendChild(gheec);


var state = document.createElement("div");
state.innerText = "state";
document.body.append(state);
//state

var stateip = document.createElement("input");
stateip.setAttribute("type", "text");
document.body.append(stateip);
//stateip


var country = document.createElement("div");
country.innerText = "country";
document.body.append(country);
//country

var countryip = document.createElement("input");
countryip.setAttribute("type", "text");
document.body.append(countryip);
//country
let div12 = document.createElement("div");
document.body.append(div12);
let br1= document.createElement("br");
document.body.append(br1);*/

var submitip = document.createElement("button");
submitip.innerText = "submit";
submitip.setAttribute("type", "submit");
submitip.setAttribute("value", "submit");
submitip.setAttribute("id", "submit");
submitip.setAttribute("class", "btn btn-primary");
formid.appendChild(submitip);
document.getElementById('form').addEventListener("submit",output);
//submit
function output(event)
{

    event.preventDefault();
    var firstname =  document.getElementById("first-name").value;
    document.getElementById("td1").innerText=firstname;

    var lastname =  document.getElementById("last-name").value;
    document.getElementById("td2").innerText=lastname;

    var pincode =  document.getElementById("pincode").value;
    document.getElementById("td3").innerText=pincode;

    var x =  document.getElementById("address").value;
    document.getElementById("td4").innerHTML=x;

    var gender =  document.querySelector('input[name=gender]:checked'  ).value;

    document.getElementById("td5").innerText=gender;
    
    
    
}