export default function appendToEachArrayValue(array, appendString) {
	const array1 = []
	for (const value of array) {
		array1.push(appendString + value);
	}

	return array1;
}
