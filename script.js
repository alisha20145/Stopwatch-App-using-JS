window.onload=function(){
    //Variables
    var s=0;
    var ms=0;
    //Get HTML Elements
    var appendms=document.getElementById("milliseconds");
    var appends=document.getElementById("seconds");
    var Start=document.getElementById("button-start");
    var Stop=document.getElementById("button-stop");
    var Reset=document.getElementById("button-reset");
    var Interval;
    //Start Button
    Start.onclick= function () {
        clearInterval(Interval);
        Interval=setInterval(startTimer,10);
    };
    //Stop Button
    Stop.onclick=function()
    {
        clearInterval(Interval);
    };
    //Reset Button
    Reset.onclick = function()
    {
        clearInterval(Interval);
        s=0;
        ms=0;
        appends.innerHTML="00";
        appendms.innerHTML="00";
    };
    //Stopwatch Function
    function startTimer(){
        ms++;
        if(ms<=9)
        {
            appendms.innerHTML="0" + ms;
        }
        if (ms>9)
        {
            appendms.innerHTML=ms;
        }
        if (ms>99)
        {
            s++;
            ms=0;
            appendms.innerHTML="00";
        }
            if(s<=9){
                appends.innerHTML="0" + s;
            }
            else
            {
                appends.innerHTML=s;
            }
       }   }
    }
