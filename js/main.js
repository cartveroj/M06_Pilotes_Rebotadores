// Preparació del canvas ----------------------
/* Obté una referència a <canvas>, després crida al mètode getContext()
  per definir un context al el que es pot començar a dibuisar
  (ctx) és un objecte que representa l'àrea de dibuix del 
  <canvas> y permet dibuixar elements 2D al damunt.

  width and height són dreceres a l'ample i alt del canvas  que coincideixen
  amb l'alt i ample del navegador (viewport)
*/

import { Pilota } from "./pilota.js";


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

console.log(height +"col"+ width)

let Pilota1 = new Pilota(50, 100, 4, 4, "blue", 10);
console.log(Pilota1);
Pilota1.dibuixa(ctx);
//Pilota1.mou(width, height);

// funció per generar un número aleatori entre dues xifres

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// funció per generar un color aleatori

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

requestAnimationFrame(loop)
function loop(){
  let arrayPilotas = [];
  const canvas = document.querySelector('canvas');
  canvas.setAttribute("style", "background-color: black;");
  for(let i=0 ; i<25; i++){
    let mida = random(10,20);
    let x = random((0+mida),(width-mida))
    let y = random((0+mida),(height-mida))
    let pilota= new Pilota(x,y,0,0,randomRGB(),mida);
    arrayPilotas.push(pilota);
  }
  console.log(arrayPilotas);
  arrayPilotas.forEach((element)=>{
    element.dibuixa(ctx);
    element.mou(width,height);
  })
}
