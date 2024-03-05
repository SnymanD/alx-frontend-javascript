export default function createIteratorObject(report) {
  const iterator = {
    [Symbol.iterator]: function* () {
      for (const department in report.allEmployees) {
        const employees = report.allEmployees[department];
        for (const employee of employees) {
          yield employee;
        }
      }
    },
  };

  return iterator;
}
