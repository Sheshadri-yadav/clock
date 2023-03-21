
function displaytime() {
    var all = new Date();
    var hours = all.getHours();
    var minutes = all.getMinutes();
    var seconds = all.getSeconds();
    var fulltime = (hours + ":" + minutes + ":" + seconds);


    document.getElementById('time').innerHTML = fulltime;
}
setInterval(displaytime, 1000);

function displaydate() {
    var timestamp = new Date();

    var date = timestamp.getDate();
    var month = timestamp.getMonth();
    var year = timestamp.getFullYear();
    var fulldate = (date + "/" + month + "/" + year);
    document.getElementById('day').innerHTML = fulldate;
}
setInterval(displaydate, 1000)




function takeinput() {
    var count = -1;
    function max() {

        document.getElementById('third').innerHTML = fom;
        fom=fom-1;
      
        

        if(fom <= count){
            clearInterval(time);
            var audio = document.getElementById('something').innerHTML = ' <audio autoplay src="sound.mp3"> </audio>';
          
        }
    } 
  

    var Maxcount = document.getElementById('maxCount');
    let fom = Maxcount.value;
   
    
        
   
var time = setInterval(max, 1000)   


}



