// Плейлист с 5-го урока по нативному JS
// Victor React JS_#05 2021-08-19

// 1.bubble sort
const array = [22, 5, 0, 345, 66, 1, -99]

for (let j = 0; j < array.length - 1; j++) {
  for (let i = 0; i < array.length - 1 - j; i++) {    // предпоследний элекмент - array.length - 1
    if (array[i] > array[i + 1]) {
      /*//старый метод
      let temp = array[i + 1]   //временная переменная для смены значения местами
      array[i + 1] = array[i]
      array[i] = temp*/

      // более короткий вариант
      [array[i + 1], array[i]] = [array[i], array[i + 1]]
    }
  }
}
console.log(array)

// 2.Array.sort()
const names = ['Zip', 'Bob', 'Tob', 'Nan', 'Dot', 'Dir', 'igor', 12, 'Инна']
console.log(names.sort())   //мутирует массив, сортирует числа как строки в Unicode

const numbers = [100, 85, 1500, 1, -90, 86]

// const compFn = (a, b) => a - b   //сортировка в другом порядке (a, b) => b - a
// const compFn = (a, b) => a < b ? -10 : 100
function compFn(a, b) {
  if (a < b) {
    return -1
  } else {
    return 1
  }
}

console.log(numbers.sort(compFn))

const students = [
  {
    name: 'Bob',
    age: 20,
    isMarried: true,
    scores: 90
  },
  {
    name: 'Alex',
    age: 24,
    isMarried: true,
    scores: 120
  },
  {
    name: 'Nen',
    age: 31,
    isMarried: false,
    scores: 104
  },
  {
    name: 'Helga',
    age: 28,
    isMarried: true,
    scores: 85
  },
]
console.log(students
  .sort((a, b) => a.scores - b.scores) //сортируем по возрастанию
  .reverse()  //метод - обратная сортировка
)

// Альтернативный метод сортировки
const sortArr = (arr) => {
  let lengthArr = arr.length - 1
  while (lengthArr > 0) {
    let Max = Math.max(...arr.slice(0, lengthArr + 1))
    let indexArr = arr.indexOf(Max);
      [arr[lengthArr], arr[indexArr]] = [arr[indexArr], arr[lengthArr]]
    lengthArr = lengthArr - 1
  }
  return arr
}
console.log(sortArr(array))