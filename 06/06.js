// Плейлист с 6-го JS_#06 2021-05-06

let students = [
  {
    name: 'John',
    age: 21,
    isMarried: false,
    scores: 100
  },
  {
    name: 'Fil',
    age: 33,
    isMarried: true,
    scores: 90
  },
  {
    name: 'Tanya',
    age: 40,
    isMarried: true,
    scores: 120
  },
  {
    name: 'Kir',
    age: 25,
    isMarried: false,
    scores: 88
  },
  {
    name: 'Bob',
    age: 55,
    isMarried: false,
    scores: 105
  },
]


const user = {
  name: 'May',
  age: 22,
  friends: ['Kir', 'Fil', 'John']
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user}  //new Object()
//Проверка:
console.log('1. Создайте поверхностную копию объекта user')
console.log(user === copyUser) //false
console.log(user.friends === copyUser.friends) //true

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]}
//Проверка:
console.log('2. Полная (глубокая) копия объекта user')
console.log(user === copyUser) //false
console.log(user.friends === deepCopyUser.friends) //false

//3. Поверхностная копия массива students
let copyStudents = [...students]  //new Array()
//Проверка:
console.log('3. Поверхностная копия массива students')
console.log(copyStudents === students) //false
console.log(copyStudents[1] === students[1]) //true

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(st => ({...st}))
//Проверка:
console.log('4*. Полная (глубокая) копия массива students (map)')
console.log(deepCopyStudents === students) //false
console.log(deepCopyStudents[1] === students[1]) //false

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
/*function sortFn(a, b) {
  switch (a.name > b.name) {  //сортируем по name
    case true:
      return 1
    case false:
      return -1
    default:
      return 0
  }
}
let sortByName = students.sort(sortFn)
*/

let sortByName = deepCopyStudents.sort((a, b) => a.name > b.name ? 1 : -1)  //через тернарное выражение
//Проверка:
console.log('5. Отсортируйте deepCopyStudents по алфавиту (sort)')
console.log(sortByName)

//5а. Отсортируйте deepCopyStudents по успеваемости(лучший идет первым) (sort)
let sortByScores = deepCopyStudents.sort((a,b) => b.scores - a.scores)
//Проверка:
console.log('5а. Отсортируйте deepCopyStudents по успеваемости(лучший идет первым) (sort)')
console.log(sortByScores)

//6. Сформируйте массив студентов, у которых 100 и более балов (filter)
let bestStudents = deepCopyStudents.filter(st => st.scores >= 100 )
//Проверка:
console.log('6. Сформируйте массив студентов, у которых 100 и более балов (filter)')
console.log(bestStudents)

//6а. Получите массив ("вырежьте") из трех лучших студентов из массива deepCopyStudents (splice)
let topStudents = deepCopyStudents.splice(0,3)
//Проверка:
console.log('6а. Получите массив ("вырежьте") из трех лучших студентов из массива deepCopyStudents (splice)')
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents чтоб сохранился поряд сортировки (spread-оператор)
/*let newDeepCopyStudent = topStudents.concat(deepCopyStudents)  //1. Вариант*/
let newDeepCopyStudent = [...topStudents, ...deepCopyStudents]  /*2. Вариант ES6*/
//Проверка:
console.log('6b. Объедините массивы deepCopyStudents и topStudents чтоб сохранился поряд сортировки (spread-оператор)')
console.log(newDeepCopyStudent)

//7. Сформируйте массив холостых студентов (filter)
let nitMarriedStudents = newDeepCopyStudent.filter(st => !st.isMarried)
//Проверка:
console.log('7. Сформируйте массив холостых студентов (filter)')
console.log(deepCopyStudents)
console.log(nitMarriedStudents)

//8. Сформируйте массив имен студентов (map)
let studentsNames = newDeepCopyStudent.map(st => st.name)
//Проверка:
console.log('8. Сформируйте массив имен студентов (map)')
console.log(studentsNames)

//8a. Сформируйте строку из имен студентов, разделенных
// - запятой (join)
// - пробелом (join)
//Проверка:
console.log('8a. Сформируйте строку из имен студентов, разделенных')
let nameWithComa = studentsNames.join(',')
console.log(nameWithComa)
let nameWithSpace = studentsNames.join(' ')
console.log(nameWithSpace)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = newDeepCopyStudent.map(st => ({...st, isStudent: true}))
//Проверка:
console.log('9. Добавьте всем студентам свойство "isStudent" со значением true (map)')
console.log(trueStudents)

//10. Bob женился. Выполните соответсвующие преобразование массива students (map)
let studentWithMarriedNick = newDeepCopyStudent.map(st => st.name === 'Bob' ? {...st, isMarried: true}: st)
//Проверка:
console.log('10. женился. Выполните соответсвующие преобразование массива students (map)')
console.log(studentWithMarriedNick)

//11. Найдите студента по имени Bob (find)
let bob = newDeepCopyStudent.find(st => st.name === 'Bob')
//Проверка:
console.log('11. Найдите студента по имени Bob (find)')
console.log(bob)

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = newDeepCopyStudent.reduce((acc, st, i) => {
  if (i !== 1) { // условием исключаем первый объект массива
   return  acc.scores > st.scores ? acc : st
  }else{
    return st
  }
})
//Проверка:
console.log('12. Найдите студента с самым высоким баллом (reduce)')
console.log(newDeepCopyStudent)
console.log(bestStudent)

//13. Найдите сумму баллов всех стужентов (reduce)
let scoresSum = newDeepCopyStudent.reduce((acc, st) => acc + st.scores, 0)  // 0 - стартовое значенние acc(аккумулятора)
//Проверка:
console.log('13. Найдите сумму баллов всех стужентов (reduce)')
console.log(scoresSum)

//14. Напишите функцию addFriends, которая принимает параметром массив students и добовляет каждому студенту
// свойство "friends", со значением массив имен всех остальных студентов сассива, за исключением собственного имени

let addFriends = (students) => {
return newDeepCopyStudent.map(st => ({...st, student: newDeepCopyStudent.filter(student => student.name !== st.name).map(st => st.name)}))
}
//Проверка:
console.log('14. ДЗ')
console.log(addFriends(students))