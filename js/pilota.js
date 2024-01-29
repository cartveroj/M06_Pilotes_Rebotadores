export class Pilota{
    constructor(x, y, velX, velY, color, mida) {
      this.x=x;
      this.y=y;
      this.velX=velX;
      this.velY=velY;
      this.color=color;
      this.mida = mida;
    }
    dibuixa(ctx) {
        ctx.beginPath(); // Per començar a dibuixar formes al canvas
        ctx.fillStyle = this.color; //Color amb que dibuixarem
        ctx.arc(this.x, this.y, this.mida, 0, 2 * Math.PI); //Dibuix d’un arc
        ctx.fill(); // Finalitza el dibuix i l’omple amb el color ja esmenat
    }
    mou(width , height){

        if((this.x + this.mida) > width){
            this.velX = 0 - this.velX;
        }else if((this.x - this.mida) < 0){
            this.velX = 0 - this.velX;
        }else if((this.y + this.mida) > height){
            this.velY = 0 - this.velY;
        }else if((this.y - this.mida) < 0){
            this.velY = 0 - this.velY;
        }

        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
    }
  }