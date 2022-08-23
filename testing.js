function sumAll(num1,num2){
	if (isNaN(num1) === false || (isNaN(num2) === false)){
		return "Error";
	} 

	let count = 0;
	if (num1 < 0 || num2 < 0){
		return "Error"
	} else if (num1>num2){
		let newNum2 = num1;
		let newNum1 = num2;
		for (i=newNum1; i<=newNum2; i++){
			count += i;
		}
		return count;
	}	
	
	for (i=num1;i<=num2; i++){
	count += i;
	}
	return count;
  }


function removefromArray(...args){
	let array = args[0];
	let newArray = [];

	array.forEach(element => {
		if(!args.includes(element)){
			newArray.push(element);
		}
		
	});
	return newArray;
}
console.log(removefromArray([1,2,3,4],2,3))











  function leapYears (input){
	let year = input;
	if (year % 4 == 0 && year % 100 != 0){
		return year + " is a leap year";
	} else if (year % 4 == 0 && year % 400 == 0){
		return year + " is a leap year";
	} else {
		return year + " is not a leap year";
	}
  }

  function FtoC(input){
	let fTemp = input;
	let cTemp = (fTemp - 32) *(5/9);
	return cTemp.toFixed(1);
  }
  //console.log(FtoC(-32))

  function CtoF(input){
	let cTemp = input;
	let fTemp = cTemp * (9/5) + 32;
	return fTemp.toFixed(1);
  }
//console.log(CtoF(-32))


function repeatString(input, num){
let string = input;
const emptyString = [];
for(i=0;i<num;i++){
	emptyString.push(string);
}
return emptyString.join();
}
console.log(repeatString("hey", 10))

