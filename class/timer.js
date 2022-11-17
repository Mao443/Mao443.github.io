class Timer{
	constructor(){
		this.x = random(50,width-50);
	    this.y = random(50,height-50);
	    this.life = 5000;
	    this.begin = millis();
	    this.lifeLeft = life;
	}
	update(){
		let timeLapsed = millis()-this.begin;
		this.lifeLeft = this.life - timeLapsed;
		//因为要判断是否小于0；所以需要一个返回值
		if (this.lifeLeft>0) {
            return true;

		}   
		 return false;


		//this.life --;

	}
	display(){
		fill(255,0,0);
		stroke(255);
		strokeWeight(3);
		ellipse(this.x,this.y,50,50);
		noStroke();
		fill(255);
		textSize(20);
		textAlign(CENTER,CENTER);
		text(this.lifeLeft/1000,this.x,this.y);

	}

	checkTouch(nx,ny){
		if (dist(nx,ny,this.x,this.y)<25) {
			return int(this.lifeLeft/1000);
		}
		return = -1;

	}
}