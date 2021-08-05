//Victor React JS_#04 2021-07-18

//Ассоциативный массив - это колекция значений, где каждое значение ассоциированно с ключем, который представлен строкой
//В JS концепция ассоциативныч массивов реализована в виде объектов

const todoListId_1 = '11ff-55gg' // v1{}
const todoListId_2 = '22gg-77jj' // v1{}
const todoListId_3 = '33rr-94bb' // v1{}

const todoList = [
  {
    id: todoListId_1,
    title: 'what to learn',
    filter: 'all',
  },
  {
    id: todoListId_2,
    title: 'what to buy',
    filter: 'completed',
  },
  {
    id: todoListId_3,
    title: 'what to drink',
    filter: 'active',
  }
]

const tasks = {
  [todoListId_1]: [
    {id: '11dd-22fa', title: 'React', isDone: false},
    {id: '11dd-22fb', title: 'Redux', isDone: false},
    {id: '11dd-22fc', title: 'HTML', isDone: false},
    {id: '11dd-22ff', title: 'CSS', isDone: false},
  ],
  [todoListId_2]: [
    {id: '22gg-77ja', title: 'React', isDone: false},
    {id: '22gg-77jb', title: 'Redux', isDone: false},
    {id: '22gg-77jc', title: 'HTML', isDone: false},
    {id: '22gg-77jj', title: 'CSS', isDone: false},
  ],
  [todoListId_3]: [
    {id: '33rr-94ba', title: 'React', isDone: false},
    {id: '33rr-94bb', title: 'Redux', isDone: false},
    {id: '33rr-94bc', title: 'HTML', isDone: false},
    {id: '33rr-94bd', title: 'CSS', isDone: false},
  ]
}

console.log(tasks[todoListId_1].find(t => t.id === '11dd-22ff').title)


// REDUCE

const numbers = [1, 2, 3, 4, 7, 5, 6]

console.log(numbers.reduce((acc, el) => {
  // 1 + 2 => acc=3 => 3 + 3 => 6 => 6 + 4 => 10 => 10 + 7 = 17 => 22 => 28
  return acc + el
}))

// максимальное значение
console.log(numbers.reduce((acc, el) => acc > el ? acc : el))


let students = [
  {
    name: 'John',
    age: 21,
    scores: 100
  },
  {
    name: 'Fil',
    age: 33,
    scores: 90
  },
  {
    name: 'Kir',
    age: 15,
    scores: 120
  },
  {
    name: 'Tanya',
    age: 40,
    scores: 88
  },
]

// сумма всех scores
console.log(students.reduce((acc, el) => acc + el.scores, 0))

// сумма всех scores >= 100
console.log(students.reduce((acc, el) => {
  //пушим в новый массив элементы у которых scores >= 100 ретурним новый массив
  if (el.scores >= 100) {
    acc.push(el)
  }
  return acc
}, []))

// "гибкая" поверхностная копия массива
console.log(students.reduce((acc, el) => {
  // acc = [] пустой массив в него копируюся все старые el
  acc.push(el)
  return acc
}, []))

// глубокое копирование массива пример через map
console.log(students.map(el => ({...el})))