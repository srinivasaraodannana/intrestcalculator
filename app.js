
    function displayDate(){
        var date, months, month, year;
            
        var d = new Date();
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        month = d.getMonth();
        year = d.getFullYear();
        date = d.getDate();
        document.getElementById("today-date").innerHTML = date + ' ' + months[month] + ' ' + year;
        };

        displayDate();

      function displayDetails(){
         var amount1,amount,intrest,date,time,years,months,days;
                var d = new Date();
                amount1=document.getElementById("enterAmount").value;
                amount=parseInt(amount1);
                intrest=document.getElementById("enterIntrest").value;
                date=document.getElementById("enterDate").value;
                var date2 = new Date(date);
                 years = d.getFullYear() - date2.getFullYear();
                 months = d.getMonth() - date2.getMonth();
                 days = d.getDate() - date2.getDate() ;
                 if(months < 0 ){
                   years= years-1;
                   months=12+months;
                 }
                 if(days < 0){
                  months=months-1;
                  days=days+30;
                  if(months < 0 ){
                    years= years-1;
                    months=12+months;
                  }
                  
                 }
                 var Difference_In_Time = d.getTime() - date2.getTime();
                 console.log(Difference_In_Time);
                var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                console.log(Difference_In_Days);
                var z = Math.trunc(Difference_In_Days);
                time=parseInt(0.033333333*Difference_In_Days);                
        intrestCal();
        function intrestCal(){
         var int1,int2,total;
         int1=amount*time*intrest;
         int2=int1/100;
         total=amount + int2;
         document.getElementById("yourIntrest").innerHTML =int2 + '/-';
         document.getElementById("yourTotal").innerHTML =total + '/-';
         document.getElementById("yourTime").innerHTML =years + "yrs" +" "+ months + "m" +"  " + days + "d"; 
        document.getElementById("yourAmount").innerHTML =amount + '/-';
 
        if (total>=0)
        {
                var vid = document.getElementById("aud"); 
           console.log(vid);
                vid.play(); 
            }
         else{
                var vid = document.getElementById("aud"); 
           
                vid.pause();
          }

    


        };};

        document.getElementById("btn").addEventListener('click', displayDetails);

 
        //     var vid = document.getElementById("myVideo"); 
        // vid.play()
        // startday = new Date();
        // clockStart = startday.getTime();

        // function initStopwatch() {
        // var myTime = new Date();
        // return((myTime.getTime() - clockStart)/1000);
        // }
        // getSecs();
        
        // function getSecs() {
        //     var tSecs = Math.round(initStopwatch());
        //     var iSecs = tSecs % 60;
        //     var iMins = Math.round((tSecs-30)/60);
        //     var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
        //     var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
        //     document.getElementById("timespent").value = sMins+":"+sSecs;
        //     var vid = document.getElementById("myVideo"); 
        //     if (sSecs <=30){
        //       if(vid.pause())
        //       vid.play(); 
        //     }
        //     else{
        //       vid.pause(); 
              
        //     }
        //     this.setTimeout('getSecs()',1000);
        
        // }

  


         
   




    





