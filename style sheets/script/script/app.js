//  <!---Task 1--->
// <!---ZAKAT CALCULATOR--->
// alert ("Zakat Calculator");
// var zakatPercentage = 0.025;
// var userInput = (prompt("Enter Your Amount"));
// var result = (zakatPercentage) * (userInput);
// alert ("Your Zakat Value is" + result);

// <!---Task 2--->
// <!--Fitrah Amount--->
// var familyMembers = (prompt("Enter the Total Number of Family Members"))
// var fitrahMethod = (prompt("wheat,barley,kishmish,dates"))
// rate = (0);

// if(fitrahMethod = 'wheat'){
//     rate = 250;
// }
// else if(fitrahMethod = 'barley'){
//     rate = 450 ;
// }
// else if(fitrahMethod = 'kishmish'){
//     rate = 2800;
// }
// else if(fitrahMethod = 'dates'){
//     rate = 2100 ;
// }

// else{
//     console.log("Please choose valid fitrah method");
// }
// var result = (familyMembers * rate)
// alert("Your Fitrah Amount is" + result)


// <!---Task 3--->
// <!--secretNumber--->
//  var secretNumber = (prompt("Enter the secretNumber"));
// if (secretNumber == 5){
//     console.log("true")
//     alert ("Congratulation!You guess the secret number");
// }
// else if (secretNumber >5)  {
//     console.log("False")
//     alert("Your value is high")
//     alert("Guess Again");
// }

// else if (secretNumber <5) {
//     console.log("False")
//        alert("Your value is low")
//        alert("Guess Again");
// }


// <!----Task 4--->
// <!-----CAPITALIZED CASE---->
// var username = (prompt("Enter Your Name"));
// console.log(username);
// var firstLetter = username[0];
// console.log(firstLetter.toUpperCase());
// var Name = username.slice(1);
// console.log(Name.toLowerCase());
// var yusra = firstLetter.toUpperCase() + Name.toLowerCase();
// console.log(yusra);
// alert(yusra);

// <!----Task 5----->
// <!-----contactNumber & contactName---->
// var contactNames = [];
// var contactNumbers = [];
// for (var a = 0; a < 3; a++) {
// var contactName= (prompt("Enter Your Name"));
// var contactNumber = (prompt("Enter Your Contact Number"));
// contactNames.push(contactName);
// contactNumbers.push(contactNumber);
// }
// for (var a = 0; a < 3; a++)
// {
//   console.log(`Contact ${a+1} : "${contactNames[a]}" : (${contactNumbers[a]})`);
//   alert(`Contact ${a+1} : "${contactNames[a]}" : (${contactNumbers[a]})`);
// }

// <!-----Task 6----->
// <!-----Product----->
// var product = ["onion", "tomato", "patato", "garlic", "chili", "carrot"];

// var input = parseInt (prompt(`Enter the position of the item you want to remove (1 - ${product.length}):`));

// var removedItem = product.splice(input - 1, 1);
// console.log(`The removed item is: ${removedItem}`);
// alert(`The removed item is: ${removedItem}`);

// console.log(`The remaing items in the array are: ${product}`);
// alert(`The remaing items in the array are: ${product}`);

// console.log(`Total number of items remaining are: ${product.length}`);
// alert(`Total number of items remaining  are: ${product.length}`);


// <!-----Task 7----->
// <!-----Nationality----->
   
// var nationality = (prompt("Your Nationality Please"))
// var gender = (prompt("Your Gender Please"))
// var age = (+prompt("Your Age Please"))

// if( nationality == 'Pakistani' || nationality == 'Indian' ){
//     console.log('You are eligible to vote');
//     alert('You are eligible to vote');}


// if(gender == 'male' && age >='18'){
//     console.log('You are eligible to vote');
//     alert('You are eligible to vote');
// }

// else if(gender =='female' || gender =='Female' && age>='18'){
//     var maritalStatus = (prompt("Are you Married?"))
// }
// if(maritalStatus == 'Yes' || maritalStatus == 'yes'){
//     alert('You are eligible to vote');
// }
// else{
//     console.log('You are not eligible to vote')
//     alert('You are not eligible to vote')
// }

// <!-----Task 8----->
// <!-----Pkistani team----->
// var  WorldCupSquade = ["player0", "player1","player2","player3"," player4" ," player5" ," player6" ," player7" ,"player8" ,"player9",
// " player10" ," player11" ," player12" ," player13" ," player14",];

// var finalTeam = WorldCupSquade.slice(0,11)

// console.log(WorldCupSquade)
// console.log(finalTeam)
