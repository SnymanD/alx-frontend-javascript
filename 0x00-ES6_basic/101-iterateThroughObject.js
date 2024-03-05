export default function iterateThroughObject(reportWithIterator) {
  const employeesString = [...reportWithIterator].join(' | ');
  return employeesString;
}
