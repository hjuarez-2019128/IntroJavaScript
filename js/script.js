/*un automovil recorre una distancia de 144 kilometros del punto a al punto b en un tiempo de 3 horas

calcular velocidad
var D = 144;
var t = 3;
var v = D/t;
alert ("La velocidad es de :"+v+ "km/h")
*/
/*
function suma(){
    var a = 3;
    var b = 5;
    var c = a+b
    alert(c);

}
*/
/*
             lista de ciclos
var animals = ["Conejo","pato","girafa","Elefante","Leon"];
console.log(animals);

for(var x=0;  x<=animals.length ; x++){
    console.log(animals[x]);
}
console.log("xxxxxxxx");
console.log(animals.length);
*/
/*      condiciones
se desea calcular la edad de una persona partiendo de año de nacimiento y el año actual 
verifiquen si es menor de edad
*/
An = prompt("Ingrese año de nacimiento");
AA = prompt("Ingrese año actual")

E = AA - An 
if(E>=18){
    alert("Mayor de edad");
}else{
    alert("Menor de edad");
}


