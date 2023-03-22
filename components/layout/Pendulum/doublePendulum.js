

const DoublePendulum = function(
    canvas,
    callback,
    maxWidth,
    started,
    {
      m1,l1,a1,m2,l2,a2,
      center,gravity,friction
    }
  ){

    if(!canvas) return null

    this.started = started


    this.width = maxWidth ? Math.min(window.innerWidth, maxWidth) : window.innerWidth
    this.height = window.innerHeight + 60

    this.callback = callback
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  
    // m = mass
    // l = length
    // a = accel
    // center
  
    this.l1 = l1 || 300 + (10 * (Math.random()*Math.PI*2));
    this.l2 = l2 || 500 + (10 * (Math.random()*Math.PI*2));
    this.m1 = m1 || 9;
    this.m2 = m2 || 2;
    this.a1 = a1 || Math.PI * 1.5 + Math.random() * 1;
    this.a2 = a2 || Math.PI * 1.5 + Math.random() * 1;
    this.gravity = gravity || .5
    this.friction = friction || .8
  
    this.center = center || {
      x: (this.width)-55,
      y: (this.height)-89
    };
  
    this.acc1 = 0;
    this.acc2 = 0;
    this.vel1 = 0;
    this.vel2 = 0;
  
    this.x1 = this.center.x + this.l1 * Math.cos(this.a1);
    this.y1 = this.center.y + this.l1 * Math.sin(this.a1);
  
    this.x2 = this.x1 + this.l2 * Math.cos(this.a2);
    this.y2 = this.y1 + this.l2 * Math.sin(this.a2);
  
  
    this.line = []
    this.anim = null
    this.linelength = 200
    this.linenum = 30000
    this.itt = 0
    this.stop = false;
  
    this.init();
  
  }
  
  DoublePendulum.prototype.init = function(){
  
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  
    this.context.fillStyle = '#111';
    this.context.fillRect(0,0,this.width,this.height);
    // this.context.shadowBlur = 2;
    // this.context.shadowColor = "#242424";
    this.context.lineWidth = 0.5;
    this.context.strokeStyle = '#424242';
  
    this.draw();
  
  }
  
  DoublePendulum.prototype.update = function(){
  
    var g = this.gravity;
    var ag1 = this.a1 - Math.PI/2;
    var ag2 = this.a2 - Math.PI/2;
  
    this.acc1 = -g * (2*this.m1 + this.m2) * Math.sin(ag1) - this.m2 * g * Math.sin(ag1 - 2*ag2);
    this.acc1 -= 2 * Math.sin(ag1 - ag2) * this.m2 * (Math.pow(this.vel2,2) * this.l2 + Math.pow(this.vel1,2) * this.l1 * Math.cos(ag1 - ag2));
    this.acc1 /= this.l1 * (2 * this.m1 + this.m2 - this.m2 * Math.cos(2 *ag1 - 2 *ag2));
  
    this.vel1 += this.acc1;
    this.a1 += this.vel1;
  
    this.acc2 = 2 * Math.sin(ag1 - ag2);
    this.acc2 *= Math.pow(this.vel1,2) * this.l1 * (this.m1 + this.m2) + g *( this.m1 + this.m2) * Math.cos(ag1) + Math.pow(this.vel2,2) * this.l2 * this.m2 * Math.cos(ag1 - ag2);
    this.acc2 /= this.l2 * (2 * this.m1 + this.m2 - this.m2 * Math.cos(2 * ag1 - 2 * ag2));
  
    this.vel2 += this.acc2;
    this.a2 += this.vel2;
  
    this.x1 = this.center.x + this.l1 * Math.cos(this.a1);
    this.y1 = this.center.y + this.l1 * Math.sin(this.a1);
  
    this.x2 = this.x1 + this.l2 * Math.cos(this.a2);
    this.y2 = this.y1 + this.l2 * Math.sin(this.a2);
  
    this.line.push([this.x2*1,this.y2*1]);
  }
  
  DoublePendulum.prototype.draw = function(){
  
    if(this.stop) return;
  
    if(this.line.length){
  
      this.context.beginPath();
      var l = this.line.slice(this.linelength*this.itt);
      this.context.moveTo(l[0][0],l[0][1]);
  
      for(let i in l){
        if(!(i*1)) continue;
        this.context.lineTo(l[i][0],l[i][1]);
      }
  
      this.context.stroke();
      this.itt++;
  
    }
  
    for(let i=0;i<this.linelength;i++)
      this.update();
  
    if(this.line.length < this.linenum && !this.stop)
      this.anim = requestAnimationFrame(() => this.draw());
    else {
      cancelAnimationFrame(this.anim);
      this.callback && this.callback({
        src: this.canvas.toDataURL(),
        width: this.width,
        height: this.height
      }, this.started);
    }
  }
  
  DoublePendulum.prototype.stop = function(){
    this.stop = true
  }
  
  const Pendulum = function( canvas, started, maxWidth, callback ){
    if(typeof window === 'undefined') return;
    if(typeof requestAnimationFrame === 'undefined') return;
  
    return new DoublePendulum(
      canvas,
      callback,
      maxWidth,
      started,
      {}
    );
  
  }
  
  export default Pendulum