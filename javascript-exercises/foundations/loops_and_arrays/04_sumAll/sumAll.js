function sumAll(start, end) {
	let answer = 0;
	let fail = "ERROR";
	if (start < 0 || end < 0) return fail;
	if (!Number.isInteger(start) || !Number.isInteger(end)) return fail;
	if (start > end) {
		let temp = end;
		end = start;
		start = temp;
	}

	for (let i = start; i < end + 1; i++) {
		answer += i;
	}
	return answer;
}

// Do not edit below this line
module.exports = sumAll;
