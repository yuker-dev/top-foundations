function repeatString(string, num) {
	console.log("Hello world");
	if (num < 0) {
		let num = "ERROR";
		return num;
	}

	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(string);
		console.log(arr);
	}
	let answer = arr.join("");
	return answer;
}

// Do not edit below this line
module.exports = repeatString;
