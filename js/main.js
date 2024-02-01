// Preparació del canvas ----------------------
/* Obté una referència a <canvas>, després crida al mètode getContext()
  per definir un context al el que es pot començar a dibuisar
  (ctx) és un objecte que representa l'àrea de dibuix del 
  <canvas> y permet dibuixar elements 2D al damunt.

  width and height són dreceres a l'ample i alt del canvas  que coincideixen
  amb l'alt i ample del navegador (viewport)
*/

import { Pilota } from "./pilota.js";

//variables globales
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

let arrayPilotas = [];
//cambiamos el fondo de la pantalla a negro
canvas.setAttribute("style", "background-color: black;");

//creamos las pelotas 
crearPelotas();

//Funcion que se encarga de crear las pelotas
function crearPelotas(){
  for(let i=0 ; i<25; i++){
    let mida = random(10,20);
    let x = random((0+mida),(width-mida))
    let y = random((0+mida),(height-mida))
    let pilota= new Pilota(x,y,random(-3,6),random(-3,5),randomRGB(),mida);
    arrayPilotas.push(pilota);
  }
}

// funció per generar un número aleatori entre dues xifres

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// funció per generar un color aleatori

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


//funcion que se encarga de detectar la colision entre los objetos
//recorremos los dos ejes X y Y para detectar si colisionan o no
function detectarColision() {
  for (let i = 0; i < arrayPilotas.length; i++) {
    const pA = arrayPilotas[i];
    for (let j = i + 1; j < arrayPilotas.length; j++) {
      const pB = arrayPilotas[j];
      if (colision(pA, pB)) {
        pA.color = randomRGB();
        pB.color = randomRGB();
      }
    }
  }
}
//funcion que retorna un boolean que se encarga de verificar si colisionan dos objetos
function colision(pA,pB){
  let distancia = Math.hypot(Math.abs(pA.x - pB.x),Math.abs(pA.y - pB.y));
  return (pA.mida + pB.mida) >= distancia;
}

/*Funcion que dibuja y mueve a las pelotas */
function loop(){
  ctx.clearRect(0,0,width,height); //Borra los píxeles especificados dentro de  el rectángulo dado
  arrayPilotas.forEach((pilota)=>{
    
    pilota.dibuixa(ctx);
    pilota.mou(width,height);

  })
  detectarColision();
  window.requestAnimationFrame(loop);

}
/*requestAnimationFrame es una función que solicita al navegador 
que llame a la funcion loop antes de que se actualice el siguiente fotograma. */
window.requestAnimationFrame(loop);
