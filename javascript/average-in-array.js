const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] },
];

function findStudentsWithAvgMoreThan90_1(students) {
  return students.filter((student) => {
    const average =
      student.scores.reduce((acc, score) => acc + score, 0) /
      student.scores.length;
    return average > 90;
  });
}
console.log(findStudentsWithAvgMoreThan90_1(students)); // [ { name: 'Jack', scores: [ 100, 100, 100 ] } ]

function findStudentsWithAvgMoreThan90_2(students) {
  return students
    .map((student) => {
      const average =
        student.scores.reduce((acc, score) => acc + score, 0) /
        student.scores.length;
      return { name: student.name, average: average };
    })
    .filter((student) => student.average > 90);
}
console.log(findStudentsWithAvgMoreThan90_2(students)); //[{ name: "Jack", average: 100 }];
