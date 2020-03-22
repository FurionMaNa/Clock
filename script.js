var canvas = document.getElementById("test"), 
context = canvas.getContext("2d");
var x= -140;
var x1=150;  
var x2=440;  
var x3=730;  
var x4=-140;
var x5=150;   
var x6=440;   
var x7=730;  
var x8= -140;
var x9= 150;   
var x10=440;   
var x11=730;  
var y=20;  
var time=new Date();
var s=0;
var s1=1;
var s2=2;
var s3=3;
var s4=0;
var s5=1;
var s6=2;
var s7=3;
var s8=0;
var s9=1;
var s10=2;
var s11=3;
function DrawZero(x,y){
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x+100, y);
	context.lineTo(x+100, y+180);
	context.lineTo(x, y+180);
	context.closePath();
	context.stroke();
}

function DrawOne(x,y){
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x, y+180);
	context.closePath();
	context.stroke();
}

function DrawTwo(x,y){
	context.moveTo(x, y);
	context.lineTo(x+100, y);
	context.lineTo(x+100, y+90);
	context.lineTo(x, y+90);
	context.lineTo(x, y+180);
	context.lineTo(x+100, y+180);
	context.stroke();
}

function DrawThree(x,y){
	context.moveTo(x, y);
	context.lineTo(x+100, y);
	context.lineTo(x+100, y+90);
	context.lineTo(x, y+90);
	context.lineTo(x+100, y+90);
	context.lineTo(x+100, y+180);
	context.lineTo(x, y+180);
	context.stroke();
}

function DrawFour(x,y){
	context.moveTo(x, y);
	context.lineTo(x, y+90);
	context.lineTo(x+100, y+90);
	context.lineTo(x+100, y+180);
	context.lineTo(x+100, y);
	context.stroke();
}

function DrawFive(x,y){
	context.moveTo(x+100, y);
	context.lineTo(x, y);
	context.lineTo(x, y+90);
	context.lineTo(x+100, y+90);
	context.lineTo(x+100, y+180);
	context.lineTo(x, y+180);
	context.stroke();
}

function DrawSix(x,y){
	context.moveTo(x+100, y);
	context.lineTo(x, y);
	context.lineTo(x, y+90);
	context.lineTo(x+100, y+90);
	context.lineTo(x+100, y+180);
	context.lineTo(x, y+180);
	context.lineTo(x, y+90);
	context.stroke();
}

function DrawSeven(x,y){
	context.moveTo(x, y);
	context.lineTo(x+100, y);
	context.lineTo(x, y+180);
	context.moveTo(x, y+90);
	context.lineTo(x+100, y+90);
	context.stroke();
}

function DrawEight(x,y){
	context.moveTo(x, y);
	context.lineTo(x+100, y);
	context.lineTo(x+100, y+180);
	context.lineTo(x, y+180);
	context.lineTo(x, y);
	context.moveTo(x, y+90);
	context.lineTo(x+100, y+90);
	context.stroke();
}

function DrawNine(x,y){
	context.moveTo(x+100, y);
	context.lineTo(x+100, y+90);
	context.moveTo(x+100, y);
	context.lineTo(x, y);
	context.lineTo(x, y+90);
	context.lineTo(x+100, y+90);
	context.lineTo(x+100, y+180);
	context.lineTo(x, y+180);
	context.stroke();
}

function changeSeconds(s){
	if(s>=60){
		return 0;
	}
	if(s<0){
		return 59;
	}
	return s;
}

function draw(){
	gradient = context.createLinearGradient(500, 0, 450, 0);
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(500, 0);
	context.lineTo(500, 720);
	context.lineTo(0, 720);
	context.closePath();
	gradient.addColorStop(0, "BurlyWood");
	gradient.addColorStop('0.6', "white");
	gradient.addColorStop('0.7', "white");
	gradient.addColorStop(1, "BurlyWood");
	context.fillStyle = gradient;
	context.fillRect(0, 0, 500, 720);
	gradient = context.createLinearGradient(200, 0, 300, 0);
	gradient.addColorStop(1, "Red");
	gradient.addColorStop(1, "Red");
	
	context.fillStyle = gradient;
	context.fillRect(140, 0, 210, 720);
	context.stroke();
	context.beginPath();
	context.moveTo(0, 220);
	context.lineTo(500, 220);
	context.moveTo(0, 470);
	context.lineTo(500, 470);
	context.closePath();
	context.stroke();
	DrawNumber(s,x,y);
	DrawNumber(s1,x1,y);
	DrawNumber(s2,x2,y);
	DrawNumber(s3,x3,y);
	DrawNumber(s4,x4,y+250);
	DrawNumber(s5,x5,y+250);
	DrawNumber(s6,x6,y+250);
	DrawNumber(s7,x7,y+250);

	DrawNumber(s8,x8,y+500);
	DrawNumber(s9,x9,y+500);
	DrawNumber(s10,x10,y+500);
	DrawNumber(s11,x11,y+500);
	time=new Date();
	console.log(time.getMinutes());
	if(x<=-200){
		s=changeSeconds(s3+1);
		x=x3+290;	
	}
	if(x1<=-200){
		s1=changeSeconds(s+1);
		x1=x+290;
	}
	if(x2<=-200){
		s2=changeSeconds(s1+1);
		x2=x1+290;
	}
	if(x3<=-200){
		s3=changeSeconds(s2+1);
		x3=x2+290;
	}
	if(x4<=-200){
		s4=changeSeconds(s7+1);
		x4=x7+290;	
	}
	if(x5<=-200){
		s5=changeSeconds(s4+1);
		x5=x4+290;
	}
	if(x6<=-200){
		s6=changeSeconds(s5+1);
		x6=x5+290;
	}
	if(x7<=-200){
		s7=changeSeconds(s6+1);
		x7=x6+290;
	}
	if(x8<=-200){
		s8=changeSeconds(s11+1);
		x8=x11+290;	
	}
	if(x9<=-200){
		s9=changeSeconds(s8+1);
		x9=x8+290;
	}
	if(x10<=-200){
		s10=changeSeconds(s9+1);
		x10=x9+290;
	}
	if(x11<=-200){
		s11=changeSeconds(s10+1);
		x11=x10+290;
	}
	x11-=0.001;
	x10-=0.001;
	x9-=0.001;
	x8-=0.001;

	x7-=0.1;
	x6-=0.1;
	x5-=0.1;
	x4-=0.1;

	x3-=4.8;
	x2-=4.8;
	x1-=4.8;
	x-=4.8;
}

function DrawNumber(date,x,y){
	var dates=String(date);
	if(dates.length==1){
		dates="0"+dates;
	}
	var n1=dates.charAt(0);
	var n2=dates.charAt(1);
	switch(n1){
		case "0":
			DrawZero(x,y);
			break;
		case "1":
			DrawOne(x,y);
			break;
		case "2":
			DrawTwo(x,y);
			break;
		case "3":
			DrawThree(x,y);
			break;
		case "4":
			DrawFour(x,y);
			break;
		case "5":
			DrawFive(x,y);
			break;
		case "6":
			DrawSix(x,y);
			break;
		case "7":
			DrawSeven(x,y);
			break;
		case "8":
			DrawEight(x,y);
			break;
		case "9":
			DrawNine(x,y);
			break;
	}
	switch(n2){
		case "0":
			DrawZero(x+110,y);
			break;
		case "1":
			DrawOne(x+110,y);
			break;
		case "2":
			DrawTwo(x+110,y);
			break;
		case "3":
			DrawThree(x+110,y);
			break;
		case "4":
			DrawFour(x+110,y);
			break;
		case "5":
			DrawFive(x+110,y);
			break;
		case "6":
			DrawSix(x+110,y);
			break;
		case "7":
			DrawSeven(x+110,y);
			break;
		case "8":
			DrawEight(x+110,y);
			break;
		case "9":
			DrawNine(x+110,y);
			break;
	}
}

function LoadPage(){
	draw();
	time=new Date();
	//s=changeSeconds(time.getSeconds()-1);
	//s1=changeSeconds(time.getSeconds());
	//s2=changeSeconds(time.getSeconds()+1);
	//s3=changeSeconds(time.getSeconds()+2);
	s=changeSeconds(0-1);
	s1=changeSeconds(0);
	s2=changeSeconds(0+1);
	s3=changeSeconds(0+2);
	s4=changeSeconds(time.getMinutes()-1);
	s5=changeSeconds(time.getMinutes());
	s6=changeSeconds(time.getMinutes()+1);
	s7=changeSeconds(time.getMinutes()+2);
	s8=changeSeconds(time.getHours()-1);
	s9=changeSeconds(time.getHours());
	s10=changeSeconds(time.getHours()+1);
	s11=changeSeconds(time.getHours()+2);
	let DrawPage = setInterval(draw,50);
}
