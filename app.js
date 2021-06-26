
//     MATH METHODS
//     Q # 1 (a)

// var a = 3.45214
// document.write("number: 3.45214");

// Q # 1(b)

// var a = Math.round(3.45214);

// document.write(a);


// Q # 1(c)

// var a = Math.floor(3.45214);

//  document.write(a);


//  Q # 1(d)

// var a = Math.ceil(3.45214);

// document.write(a);

//  Q # 2

//  Q # 3

    // var value = Math.abs(-4);
    //      document.write("First Test Value : " + value );
    //      var value = Math.abs(-4);
    //      document.write("<br />Second Test Value : " + value );
    //      var value = Math.abs(5);
    //      document.write("<br />Third Test Value : " + value );

//  Q # 4

//  var diceRoll = Math.floor( Math.random() * 6 ) +1;
//  document.write('You rolled a ' + diceRoll);

// Q # 5

// var headsUser = prompt("Enter heads User name");
// var tailsUser = prompt("Enter tails User name");
// var number = Math.floor() * 2;
// var floor = Math.floor(number);
// if (floor ===0){
//     alert("heads" +  headsUser + "win the toss");
// }

// else{
//     alert("tails" +  tailsUser  + "win the toss");
// }


//  Q # 6

//  var bigDecimal = Math.random();
//  var improvedNum = ((bigDecimal * 100) + 1);
//  var numberOfStars = Math.floor(improvedNum);
//  document.write(numberOfStars);

//  Q # 7

// Q # 8

// var num = Math.ceil(Math.random() * 10);
// alert(num);
//  var gnum = prompt('Guess the number between 1 and 10 inclusive');
//  if (gnum == num)
//    alert('Matched');
//   else
//    alert('Not matched, the number was '+gnum);
   

// DATE METHODS

// Q # 1
  
//   var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   document.write("Today is : " + daylist[day] + ".");
//   var date = today.getFullYear();
//   var monthlist = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
//   var month = today.getMonth();
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
  
//    document.write("Current Date & Time : " + date + "," + month + "," + hour + prepand + " : " + minute + " : " + second);

//  Q # 2
//  var m = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
// var a = new Date();
// var b = a.getMonth();
// var thisMonth = m[b];
// alert( thisMonth);

// Q # 3
// var d = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var a = new Date();
// var b = a.getDay();
// var today = d[b];
// alert(today);

// Q # 4
// var currentDate = new Date();
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }

// Q # 5
//   var a = new Date();
//   var b = a.getDay();
//   var today =

// Q # 6 
// Q # 7

// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }

// Q # 8

// var lastday = function(y,m){
//     return  new Date(y, m +1, 0).getDate();
//     }
//     alert(lastday(2020,0));
//     alert(lastday(2020,1));
//     alert(lastday(2020,11));

// Q # 13

//  var dob = new Date("06/24/2021");  
//     //calculate month difference from current date in time  
//     var month_diff = Date.now() - dob.getTime();  
      
//     //convert the calculated difference in date format  
//     var age_dt = new Date(month_diff);   
      
//     //extract year from date      
//     var year = age_dt.getUTCFullYear();  
      
//     //now calculate the age of the user  
//     var age = Math.abs(1994 - 1970);  
  
//     //display the calculated age  
//     document.write("Your Age is: " + age + " years");  
    

    
