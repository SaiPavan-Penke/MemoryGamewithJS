

var  p=0;
var q=0;
var clickingCountManually=0;

var randomColor;

var colorClickedStoredinArrayValid=[];
var   howManyTimesClickedValid=0;

var colorClickedStoredinArray=[];
var   howManyTimesClicked=0;

var systemRandomColorClick=[];
var systemRandomColorClickCounter=0;

console.log(colorClickedStoredinArray);
setTimeout(() => {
    onKeyPressInitialy(); 
}, 800);

if($("h1").text()==="Click the Color"  ||$("h1").text()==="Game Over, Press Any Key to Restart" ){


  $(".btn").on("click", function(satya){
  
     
      if($("h1").text()==="Press A Key to Start"  ||$("h1").text()==="Game Over, Press Any Key to Restart" ){
          var colorClicked=satya.target.classList[1];
          colorClickedStoredinArray.push(colorClicked);
          
          wrongsoundAnimation(colorClicked);
          colorClickedStoredinArrayValid=[];
          howManyTimesClickedValid=0;
         systemRandomColorClick=[];
          systemRandomColorClickCounter=0;
      
         $("."+colorClicked).addClass("pressed");
      
         setTimeout(function(){
          $("."+colorClicked).removeClass("pressed");
      
         }, 200);
         var soundsPlayed= new Audio("./sounds/"+colorClicked+".mp3");
         soundsPlayed.play(); 

      }

      else{

          var colorClicked=satya.target.classList[1];
          colorClickedStoredinArrayValid.push(colorClicked);
          
         $("."+colorClicked).addClass("pressed");
      
         setTimeout(function(){
          $("."+colorClicked).removeClass("pressed");
      
         }, 200);
         var soundsPlayed= new Audio("./sounds/"+colorClicked+".mp3");
         soundsPlayed.play(); 
          
         
      
          // alert("colorClickedStoredinArrayValid: "+ colorClickedStoredinArrayValid);
          howManyTimesClickedValid++;
          //  alert("howManyTimesClickedValid: "+ howManyTimesClickedValid);

 if(systemRandomColorClickCounter===1&&howManyTimesClickedValid===1){
// alert("systemRandomColorClick: "+ systemRandomColorClick);

if(systemRandomColorClick[0]===colorClickedStoredinArrayValid[0]){
    setTimeout(() => {
        onKeyPressInitialy(); 
       
    }, 800);
    $("h2").remove();
  console.log("You cleared 1st round");
  $("h1").text("Level 2");
}else{

  wrongsoundAnimation(colorClickedStoredinArrayValid[0]);

  alert("Please try once more. To try there are no limits");
}

            
}




else if(systemRandomColorClickCounter===2&&howManyTimesClickedValid===2){
  

if(systemRandomColorClick[0]===colorClickedStoredinArrayValid[1]){

  console.log("You are there! still one more click");


}else{
  wrongsoundAnimation(colorClickedStoredinArrayValid[1]);


}
}

else if(systemRandomColorClickCounter===2&&howManyTimesClickedValid===3){
  

  if(systemRandomColorClick[1]===colorClickedStoredinArrayValid[2]){
  
    console.log("You are promoted to level 3");
  $("h1").text("Level 3");
  setTimeout(() => {
    onKeyPressInitialy(); 
}, 800);
  
  
  
  }else{
    wrongsoundAnimation(colorClickedStoredinArrayValid[2]);
  
  
  }
  }





  else
    
if(systemRandomColorClickCounter===3){
  for (p = 0; p < systemRandomColorClick.length; p++) {
    clickingCountManually= ((systemRandomColorClick.length-1)*(systemRandomColorClick.length))/2;

   
  
    if(howManyTimesClickedValid===(clickingCountManually+(p+1))){ 


      if(systemRandomColorClick[p]===colorClickedStoredinArrayValid[(howManyTimesClickedValid-1)]){ 
        console.log("You are there! still "+(systemRandomColorClickCounter-(p+1))+ "more clicks"); }else{ 
        wrongsoundAnimation(colorClickedStoredinArrayValid[(howManyTimesClickedValid-(p+1))]);
      
      }
      if(howManyTimesClickedValid===(clickingCountManually+systemRandomColorClickCounter)){
        console.log("You are promoted to level "+(systemRandomColorClickCounter+1) ); 
        $("h1").text("Level "+(systemRandomColorClickCounter+1)); 
        setTimeout(() => {
            onKeyPressInitialy(); 
        }, 800);
      }else{
        console.log("bow boww");
      }
    }  
    
  }
  
  } else

  if(systemRandomColorClickCounter===4){
    for (p = 0; p < systemRandomColorClick.length; p++) {
      clickingCountManually= ((systemRandomColorClick.length-1)*(systemRandomColorClick.length))/2;
  
     
    
      if(howManyTimesClickedValid===(clickingCountManually+(p+1))){ 
  
  
        if(systemRandomColorClick[p]===colorClickedStoredinArrayValid[(howManyTimesClickedValid-1)]){ 
          console.log("You are there! still "+(systemRandomColorClickCounter-(p+1))+ "more clicks"); }else{ 
          wrongsoundAnimation(colorClickedStoredinArrayValid[(howManyTimesClickedValid-(p+1))]);
        
        }
        if(howManyTimesClickedValid===(clickingCountManually+systemRandomColorClickCounter)){
            console.log("You are promoted to level "+(systemRandomColorClickCounter+1) ); 
          $("h1").text("Level "+(systemRandomColorClickCounter+1)); 
          setTimeout(() => {
            onKeyPressInitialy(); 
        }, 800);
        }else{
          console.log("bow boww");
        }
      }  
      
    }
    
    }
else 




if(systemRandomColorClickCounter===5){
  for (p = 0; p < systemRandomColorClick.length; p++) {
    clickingCountManually= ((systemRandomColorClick.length-1)*(systemRandomColorClick.length))/2;

   
  
    if(howManyTimesClickedValid===(clickingCountManually+(p+1))){ 


      if(systemRandomColorClick[p]===colorClickedStoredinArrayValid[(howManyTimesClickedValid-1)]){ 
        console.log("You are there! still "+(systemRandomColorClickCounter-(p+1))+ "more clicks"); }else{ 
        wrongsoundAnimation(colorClickedStoredinArrayValid[(howManyTimesClickedValid-(p+1))]);
      
      }
      if(howManyTimesClickedValid===(clickingCountManually+systemRandomColorClickCounter)){
        console.log("You are promoted to level "+(systemRandomColorClickCounter+1) ); 
        $("h1").text("Level "+(systemRandomColorClickCounter+1)); 
        setTimeout(() => {
            onKeyPressInitialy(); 
        }, 800);
      }else{
        console.log("bow boww");
      }
    }  
    
  }
  
  }

else{

      console.log("testing");

for(q=6;q<25;q++){
  if(systemRandomColorClickCounter===q){
    for (p = 0; p < systemRandomColorClick.length; p++) {
      clickingCountManually= ((systemRandomColorClick.length-1)*(systemRandomColorClick.length))/2;
  
     
    
      if(howManyTimesClickedValid===(clickingCountManually+(p+1))){ 
  
  
        if(systemRandomColorClick[p]===colorClickedStoredinArrayValid[(howManyTimesClickedValid-1)]){ 
          console.log("You are there! still "+(systemRandomColorClickCounter-(p+1))+ "more clicks"); }else{ 
          wrongsoundAnimation(colorClickedStoredinArrayValid[(howManyTimesClickedValid-(p+1))]);
        
        }
        if(howManyTimesClickedValid===(clickingCountManually+systemRandomColorClickCounter)){
            console.log("You are promoted to level "+(systemRandomColorClickCounter+1) ); 
          $("h1").text("Level "+(systemRandomColorClickCounter+1)); 
          setTimeout(() => {
            onKeyPressInitialy(); 
        }, 800);
        }else{
          
          console.log("not yet done with you");
        } } }}}

console.log("testing completed");


    }}} );}
  
  //wrong sound Animation
  
  
  function wrongsoundAnimation(colorClicked){

    colorClickedStoredinArrayValid=[];
    howManyTimesClickedValid=0;
   systemRandomColorClick=[];
    systemRandomColorClickCounter=0;
  
      // var colorClicked=satya.target.classList[1];
      $("."+colorClicked).addClass("pressed");
  
    setTimeout(function(){
     $("."+colorClicked).removeClass("pressed");
  
    }, 200);
    var soundsPlayed= new Audio("./sounds/"+colorClicked+".mp3");
    soundsPlayed.play(); 
  
     $("h1").text("Game Over, Press Any Key to Restart");
      $("body").addClass("game-over");
      
  setTimeout(function(){
  $("body").removeClass("game-over");
  
  }, 200);
  
  var wrongsoundPlayed= new Audio("./sounds/wrong.mp3");
  wrongsoundPlayed.play(); 

  setTimeout(() => {
    window.location.reload(true);
  }, 2000);
  
  }

    


//keypressed- function call

$("body").on("keydown", function(satya){

  if($("h1").text()==='Press A Key to Start'  ||$("h1").text()==="Game Over, Press Any Key to Restart" ){
    $("h1").text("Level 1");

    // buttonClicked(randomColor);
    
    onKeyPressInitialy();

  

  }else{
    alert("Don' clicks keyboard keys while you are playing");
  }
}); 




    //Whole Random color click when cloicked on keyborad key




  function onKeyPressInitialy(){

  

//Random
var randomNumber= (Math.floor(4*(Math.random()))+1);


function randomNumberToColor(randomNumber){

switch (randomNumber) {
     case 1:
      randomColor="green";
      return randomColor;
      break;

      case 2:
          randomColor="red";  
          return randomColor;  
      break;

      case 3:
          randomColor="yellow";
          return randomColor;
      break;

      case 4:
          randomColor="blue";
          return randomColor;
      break;


      default:
          alert("Hey! there is something wrong in the code please check");
      break;
}

}

var randomColor=randomNumberToColor(randomNumber);



function buttonClicked(randomColor){

  systemRandomColorClick.push(randomColor);
  console.log(systemRandomColorClick);
  // alert(systemRandomColorClick);
  systemRandomColorClickCounter++;
  
  $("."+randomColor).addClass("pressed");

  setTimeout(function(){
   $("."+randomColor).removeClass("pressed");
  

  }, 400);

  
  var soundsPlayedRandom= new Audio("./sounds/"+randomColor+".mp3");
  soundsPlayedRandom.play(); 
 
}

buttonClicked(randomColor);


  }

 

  // setTimeout(() => {
  //   onKeyPressInitialy();
  // }, 1000);
  
