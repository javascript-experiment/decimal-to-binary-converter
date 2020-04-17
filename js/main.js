

// 01 - html element select 
let binaryNumber = document.getElementById('binary');
let submit = document.getElementById('submit');


// 02 - binary function
function binary(e){

	// 03 - 
	e.preventDefault();

	// decimal Number collect and validation
	let decimalNumber = document.getElementById('decimal').value;

	if(decimalNumber === ''){
		alert('please inter a number')
	}else if(decimalNumber < 0){
		alert('please inter a positive number');
	}

	// 04 - decimal number converting to binary number
	binaryNumberConvert = Number(decimalNumber).toString(2);

	// binary recive and browser show
	binaryNumber.innerText = binaryNumberConvert;


}

submit.addEventListener('click', binary);