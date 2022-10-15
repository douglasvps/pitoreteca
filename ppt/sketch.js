// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
    constructor() {
      this.x = random(0, width);
      this.y = random(0, height);
      this.r = 10;
      this.c = random([
        [0, "rgb(255, 255, 0)"],
        [1, "rgb(255, 0, 255)"],
        [2, "rgb(0, 255, 255)"],
      ]);
      this.c = random([
        [0, "💎"],
        [1, "✂️"],
        [2, "🧻"],
      ]);
      this.xSpeed = random(-1, 1);
      this.ySpeed = random(-1, 1);
    }
  
    // creation of a particle.
    createParticle() {
      noStroke();
  
      //fill(this.c[1]);
      //circle(this.x, this.y, this.r);
      
      textSize(20);
      textAlign(CENTER);
      text(this.c[1], this.x, this.y);
    }
  
    // setting the particle in motion.
    moveParticle() {
      if (this.x < 0 || this.x > width) this.xSpeed *= -1;
      if (this.y < 0 || this.y > height) this.ySpeed *= -1;
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }
  
    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
    joinParticles(particles) {
      particles.forEach((element) => {
        let dis = dist(this.x, this.y, element.x, element.y);
        if (dis < 20) {
          if (this.c[0] == 1+ element.c[0]){
            this.c = element.c
          }
          if (this.c[0] ==  element.c[0]-1){
            element.c = this.c
          }
          if (this.c[0] ==  element.c[0]+2){
            element.c = this.c
          }
          if (this.c[0] ==  element.c[0]-2){
            this.c = element.c
          }
          stroke("rgb(255,255,255)");
          line(this.x, this.y, element.x, element.y);
        }
      });
    }
  }
  
  // an array to add multiple particles
  let particles = [];
  
  function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < width/10; i++){
      particles.push(new Particle());
    }
  }
  
  function draw() {
    //background("#0f0f0f");
    background("#f0f0f0");
    
    let tesouras = 0;
    let papel = 0;
    let pedra = 0;
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
      particles[i].joinParticles(particles.slice(i));
      
      
      if (particles[i].c[0] == 1){
        tesouras++;
      } else if (particles[i].c[0] == 0){
        pedra++;
      } else {
        papel++
      }
      
      
  }
  text("💎: "+pedra, 75, 350);
    text("🧻: "+papel, 200, 350);
    text("✂️: "+tesouras, 325, 350);
  }
  