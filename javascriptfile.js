//variable declaration and initialixzation
let sec=0;
let min=0;


//boolean variable to monitor start and stop button
let boolean=0;

//Stopwatch logic function
function logic()
{		
	sec++;
	if(sec===60)
	{
	 	sec=0;
	  min++;
	  if(min===60)
	  {
	   	min=0;
	    hour++;
	  }
	}
    
 //digit correction for seconds

  if(sec<10)
   	dispsec="0"+sec.toString();
  else 
   	dispsec=sec;
  
  //minute correction
  if(min<10)
   	dispmin="0"+min.toString();
   else
   	dispmin=min;
  	
	document.getElementById("minutes").innerHTML=dispmin;
	document.getElementById("seconds").innerHTML=dispsec;	
}

var timer=null;

//onclick start event
function start(){

	if(boolean==0)
	{
       timer=setInterval(logic,1000);
       boolean=1;
	}

}

// on click stop event
function stop(){
	if(boolean==1)
	{
		clearInterval(timer);
		boolean=0;
	}
}

//on click reset event
function reset(){
	clearInterval(timer);
	sec=0;
	milisec=0;
	hour=0;
	min=0;
	document.getElementById("seconds").innerHTML="00";
	document.getElementById("minutes").innerHTML="00";
	boolean=0;
}