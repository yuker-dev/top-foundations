function removeFromArray(arr, ...other) {
	for (let i = arr.length; i >= 0; i--) {
		if (other.includes(arr[i])) {
			arr.splice(i, 1);
		}
	}
	return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
