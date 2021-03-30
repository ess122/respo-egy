



function clock() {
    var image;
    var time;
    var x = document.getElementById("ne");
    var i = x.selectedIndex;
    var y = document.getElementById("aa").innerHTML = x.options[i].text ;
    var d = new Date;
    /*document.getElementById("date").innerHTML= d;  */
    var h =  d.getHours();
    var m =  d.getMinutes();
    var s =  d.getSeconds();

    if (m<10){
        m = '0' + m ;
    }
    if(s<10) {
        s = '0' + s;
    }
    
    var time = document.getElementById("time").innerHTML = h + ':' + m + ':'+ s ;

    let sound = document.getElementById('myaudio')
    let play = document.getElementById('btn')
    
    play.onclick = function sound() {
        console.log('play');
          sound.play();
             return false;  
    }; 

    if( time == y) {
       // alert("hiiiiiiiiiiii" );
        sound.play();
       document.body.style.backgroundColor = "red";
    }
    //zohr
    
    var a = document.getElementById("selector");
    var i = a.selectedIndex;
    var q = document.getElementById("bb").innerHTML = a.options[i].text ;
    let sound2 = document.getElementById("audio2");
    if(time == q){
        sound2.play();
        document.body.style.backgroundImage("")
    }







}

setInterval(clock,1000);

/*
//show selected time in p   //second alarm
let sound2 = document.getElementById("audio2")
function zohr() {
    var x = document.getElementById("selector");
     var i = x.selectedIndex;
     var y = document.getElementById("bb").innerHTML = x.options[i].text ;
     var time = document.getElementById("time").innerHTML = h + ':' + m + ':'+ s ;

    if(time == y ) {
         sound2.play();

    }
}
setInterval(zohr,1000);
*/



//audio
let sound = document.getElementById('myaudio')
let play = document.getElementById('btn')

play.onclick = function sound() {
    console.log('play');
      sound.play();
         return false;  
};

