
    function displayDate()
        {
        var date, months, month, year;
            
        var d = new Date();
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        month = d.getMonth();
        year = d.getFullYear();
        date = d.getDate();
        document.getElementById("today-date").innerHTML = date + ' ' + months[month] + ' ' + year;};
displayDate();
      function displayDetails()
        {
         var amount1,amount,intrest,date,time,years,months,days;
                var d = new Date();
                amount1=document.getElementById("enterAmount").value;
                amount=parseInt(amount1);
                intrest=document.getElementById("enterIntrest").value;
                date=document.getElementById("enterDate").value;
                var date2 = new Date(date);
                 years = d.getFullYear() - date2.getFullYear();
                 months = d.getMonth() - date2.getMonth();
                 days = d.getDate() - date2.getDate();
                 var Difference_In_Time = d.getTime() - date2.getTime();
                var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
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
        };
        document.getElementById("yourAmount").innerHTML =amount + '/-';
        };
        
document.getElementById("btn").addEventListener('click', displayDetails);
