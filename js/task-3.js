const findBestEmployee = function(employees) {
  const values = Object.values(employees);

  const max = Math.max(...values);
  for (const key in employees) {
    if (max === employees[key]){
      return(`${key} : ${max}` );
    }
  }
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

// let max = 0;
//   let bestEmployee;

//   for (const employee in employees) {
//       const work = employees[employee];
//       if (work > max) {
//           max = work;
//           bestEmployee = employee;
//       }
//       console.log(employee);
// }
