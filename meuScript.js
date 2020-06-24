
let rs = require("readline-sync")

 let altura = rs.questionFloat("Qual a sua Altura\n")
 let peso = rs.questionFloat("Qual seu peso\n")
 let IMC = parseFloat(peso/(altura*altura))
          
if (IMC < 18) { 
           
console.log ("Seu IMC é " + " Abaixo do peso.");
 }

 else if (IMC >= 18 && IMC <=24.5)
{ 
  console.log  ("Seu IMC é" + "Peso Normal");    
}
else if (IMC >= 25 &&  IMC <=29.5)
{
  console.log ("Seu IMC é " +  "Excesso de Peço");
}
else if (IMC >= 30 && IMC <=34.5)
{
  console.log ("Seu IMC é " + "Obesidade Leve" );
}
else if (IMC >=35 && IMC <= 39.5){
  console.log ("Seu IMC é " + "Obesidade Moderada")
}
else if (IMC >= 40)
{
  console.log ("Seu IMC é "  +  "Obesidade Morbida")
}