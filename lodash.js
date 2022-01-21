//Reverse
var a = [1 , 3 , 6 , 7]
var b = [];
for(var i = a.length-1 ; 0<=i ; i--)
{
b.push(a[i])
}
console.log(...b)
//Camelcase
var a = "full stack we application";
var b = a.split("");
for(var i = 0 ; i<b.length;i++)
{
    if(b[i] == " ")
    {
        b[i+1] =  b[i+1].toUpperCase();
    }
}
console.log(b.join("").split(" ").join(""))
//IndexOf
var a = [ 3 , 5 , 6 , 7, 8 ,9]
for(var i = 0 ; i<a.length;i++)
{
    if(a[i] == "8")
    {
        console.log(i)
    }
}
// Concat
var a = [ 1 , 2 , 3 , 4 , 5, 6]
var b = [ 7 , 8, 9 , 10 , 11, 12 ];
var j = a.length
for(var i = 0 ; i<b.length;i++)
{
    a[j++] = b[i]
    
}
console.log(a)
///uniq
var a = [ 1 , 2 , 3 , 1 , 3 , 4 , 5, 6]
var a1 = new Set(a);
var a2 = [...a1]
console.log(a2)
