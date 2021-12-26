var h = document.createElement("h1")
h.innerText = (" DOM CALCULATOR ")
h.classList.add("text-center")
h.setAttribute("id", "title")
document.body.appendChild(h)


var d = document.createElement("p")
d.innerText = ("Basic function of calculator using DOM")
d.setAttribute("id", "description")
d.classList.add("text-center")
document.body.appendChild(d)


let x = document.createElement("div")
x.setAttribute("id", "x")
document.body.appendChild(x)


let input = document.createElement("input")
input.setAttribute("id", "result")
input.setAttribute("class","col-12")

input.setAttribute("style","height:110px")
input.setAttribute("type", "text")
x.appendChild(input)


let tablebox=document.createElement("div")
tablebox.classList.add("table-responsive")
x.appendChild(tablebox)

let table = document.createElement("table")
table.setAttribute("id", "table")
table.classList.add("table-md-12")
table.setAttribute("class","col-md-12")
table.setAttribute("class","col-sm-12")
tablebox.appendChild(table)




let tablebody = document.createElement("tbody")
tablebody.setAttribute("id", "tablebody")
table.appendChild(tablebody)



let tabler1 = document.createElement("tr")
tabler1.setAttribute("id", "tabler1")
tablebody.appendChild(tabler1)


let td = document.createElement("td")
td.setAttribute("id", "td1")
tabler1.appendChild(td)

let buttonclear = document.createElement("button")
buttonclear.setAttribute("id", "clear")
buttonclear.setAttribute("class","button")

buttonclear.setAttribute("onclick", "cls()")//cls
buttonclear.innerText = ("c")
td.appendChild(buttonclear)

let tabled2 = document.createElement("td")
tabled2.setAttribute("id", "tabled2")
tabler1.appendChild(tabled2)


let mod = document.createElement("button")
mod.setAttribute("id", "mod")
mod.setAttribute("onclick","pd('%')")
buttonclear.setAttribute("class","button")
mod.innerText = ("%")
tabled2.appendChild(mod)




let tabled3 = document.createElement("td")
tabled3.setAttribute("id", "tabled3")
tabler1.appendChild(tabled3)

let dot = document.createElement("button")
dot.setAttribute("id", "dot")
buttonclear.setAttribute("class","button")
dot.innerText = (".")
dot.setAttribute("onclick", "pd('.')")
tabled3.appendChild(dot)

let tabled4 = document.createElement("td")
tabled4.setAttribute("id", "tabled4")
tabler1.appendChild(tabled4)


let multiply = document.createElement("button")
multiply.setAttribute("id", "multiply")
multiply.innerText = ("*")
multiply.setAttribute("onclick", "pd('*')")
tabled4.appendChild(multiply)






let tabler2 = document.createElement("tr")
tabler2.setAttribute("id", "tabler2")
tablebody.appendChild(tabler2)


let tabled5 = document.createElement("td")
tabled5.setAttribute("id", "tabled5")
tabler2.appendChild(tabled5)

let seven = document.createElement("button")
seven.setAttribute("id", "7")
seven.setAttribute("class","seven")
seven.setAttribute("onclick", "pd('7')")
seven.innerText = ("7")
tabled5.appendChild(seven)

let tabled6 = document.createElement("td")
tabled6.setAttribute("id", "tabled6")
tabler2.appendChild(tabled6)


let eight = document.createElement("button")
eight.setAttribute("id", "8")
eight.setAttribute("onclick", "pd('8')")
eight.setAttribute("class","eight")
eight.innerText = ("8")
tabled6.appendChild(eight)


let tabled7 = document.createElement("td")
tabled7.setAttribute("id", "tabled7")
tabler2.appendChild(tabled7)


let nine = document.createElement("button")
nine.setAttribute("id", "9")
nine.innerText = ("9")
nine.setAttribute("onclick", "pd('9')")
nine.setAttribute("class", "nine")
buttonclear.setAttribute("class","button ")
tabled7.appendChild(nine)

let tabled8 = document.createElement("td")
tabled8.setAttribute("id", "tabled8")
tabler2.appendChild(tabled8)


let division = document.createElement("button")
division.setAttribute("id", "division")
division.setAttribute("onclick", "pd('/')")
buttonclear.setAttribute("class","button")
division.innerText = ("/")
tabled8.appendChild(division)


let tabler3 = document.createElement("tr")
tabler3.setAttribute("id", "tabler3")
tablebody.appendChild(tabler3)


let tabled9 = document.createElement("td")
tabled9.setAttribute("id", "tabled9")
tabler3.appendChild(tabled9)

let four = document.createElement("button")
four.setAttribute("id", "4")
four.setAttribute("class", "four")
four.setAttribute("onclick", "pd('4')")
four.innerText = ("4")
tabled9.appendChild(four)

let tabled10 = document.createElement("td")
tabled10.setAttribute("id", "tabled10")
tabler3.appendChild(tabled10)

let five = document.createElement("button")
five.setAttribute("id", "5")
five.setAttribute("onclick", "pd('5')")
five.setAttribute("class","five")
five.innerText = ("5")
tabled10.appendChild(five)

let tabled11 = document.createElement("td")
tabled11.setAttribute("id", "tabled11")
tabler3.appendChild(tabled11)

let six = document.createElement("button")
six.setAttribute("id", "6")
six.setAttribute("onclick", "pd('6')")
six.setAttribute("class","six")
buttonclear.setAttribute("class","button")
six.innerText = ("6")
tabled11.appendChild(six)

let tabled12 = document.createElement("td")
tabled12.setAttribute("id", "tabled12")
tabler3.appendChild(tabled12)


let subtraction = document.createElement("button")
subtraction.setAttribute("id", "subtract")
subtraction.setAttribute("onclick", "pd('-')")
buttonclear.setAttribute("class","button")
subtraction.innerText = ("-")
tabled12.appendChild(subtraction)


let tabler4 = document.createElement("tr")
tabler4.setAttribute("id", "tabler4")
tablebody.appendChild(tabler4)


let tabled13 = document.createElement("td")
tabled13.setAttribute("id", "tabled13")
tabler4.appendChild(tabled13)

let one = document.createElement("button")
one.setAttribute("id", "1")
one.setAttribute("onclick", "pd('1')")
one.setAttribute("class","one")
buttonclear.setAttribute("class","button")
one.innerText = ("1")
tabled13.appendChild(one)

let tabled14 = document.createElement("td")
tabled14.setAttribute("id", "tabled14")
tabler4.appendChild(tabled14)


let two = document.createElement("button")
two.setAttribute("id", "2")
two.setAttribute("onclick", "pd('2')")
two.setAttribute("class","two")
two.innerText = ("2")
tabled14.appendChild(two)

let tabled15 = document.createElement("td")
tabled15.setAttribute("id", "tabled15")
tabler4.appendChild(tabled15)

let three = document.createElement("button")
three.setAttribute("id", "3")
three.setAttribute("class","three")
three.setAttribute("onclick", "pd('3')")
three.innerText = ("3")
tabled15.appendChild(three)

let tabled16 = document.createElement("td")
tabled16.setAttribute("id", "tabled16")
tabler4.appendChild(tabled16)


let addition = document.createElement("button")
addition.setAttribute("id", "add")
addition.innerText = ("+")
addition.setAttribute("onclick", "pd('+')")
buttonclear.setAttribute("class","button")
tabled16.appendChild(addition)


let tabler5 = document.createElement("tr")
tabler5.setAttribute("id", "tabler5")
tablebody.appendChild(tabler5)


let tabled17 = document.createElement("td")
tabled17.setAttribute("id", "tabled17")
tabler5.appendChild(tabled17)

let zero = document.createElement("button")
zero.setAttribute("id", "0");
zero.setAttribute("class","zero")
buttonclear.setAttribute("class","button zero")
zero.setAttribute("onclick", "pd('0')")
zero.innerText = ("0")
tabled17.appendChild(zero)

let tabled18 = document.createElement("td")
tabled18.setAttribute("id", "tabled2")
tabler5.appendChild(tabled18)



let power = document.createElement("button")
power.setAttribute("id", "power")
power.setAttribute("class","button")
power.setAttribute("onclick", "pd('^')")
power.innerText = ("^")
tabled18.appendChild(power)


let tabled19 = document.createElement("td")
tabled19.setAttribute("id", "tabled19")
tabled19.setAttribute("colspan", "2")
tabler5.appendChild(tabled19)


let equal = document.createElement("button")
equal.setAttribute("id", "equal");
equal.setAttribute("class", "equal")
equal.innerText = ("=")
buttonclear.setAttribute("class","button")
equal.setAttribute("onclick", "task()")
tabled19.appendChild(equal)

function pd(value) {
   
    document.getElementById("result").value += value;
   }

//cls
   function cls() {
    document.getElementById("result").value = "";
   }


   function task() {
    var calc = document.getElementById("result").value;
   
    var stor = eval(calc);
    document.getElementById("result").value = stor;
   }

   function eval(calc){
    
    store=calc.split('')
    for(let i=0;i<store.length;i++){
        
        if(store[i]=='^'){
            calc=store.join('')
            val=calc.split('^')
            result= Math.pow(Number(val[0]),Number(val[1]))
             return result;
        }
        if(store[i]=='<'){
            calc=store.join('')
            val=calc.split('<')
            result= Math.Max(Number(val[0]),Number(val[1]))
             return result;
        }
        if(store[i]=='%'){
            calc=store.join('')
            val=calc.split('%')
            result=Number(val[0])%Number(val[1])
            return result;
        }
        if(store[i]=='+'){
            calc=store.join('')
            val=calc.split('+')
            result=Number(val[0])+Number(val[1])
           return result;
        }
        if(store[i]=='-'){
            calc=store.join('')
            val=calc.split('-')
            result=Number(val[0])-Number(val[1])
            return result;
        }
        if(store[i]=='/'){
            calc=store.join('')
            val=calc.split('/')
            result=((Number(val[0])/Number(val[1])).toFixed(5));
        
            return result;
        }
        if(store[i]=='*'){
            calc=store.join('')
            val=calc.split('*')
            result=Number((val[0])*Number(val[1]).toFixed(5));
           return result;
        }
    }
    }


   


