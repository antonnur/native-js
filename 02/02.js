/*Lesson 2 Виктор*/

// тут должен быть код с урока!

/* code.mu Задачи на отработку циклов и функций JavaScript*/

// 1. Выведите с помощью цикла столбец чисел от 1 до 100.
document.write(`Выведите с помощью цикла столбец чисел от 1 до 100.<br>`)

for (let i = 1; i <= 100; i++) {
  document.write(i + ' ')
}

document.write('<hr>')

// 2. Выведите с помощью цикла столбец чисел от 100 до 1.
document.write(`<br>Выведите с помощью цикла столбец чисел от 100 до 1.<br>`)

for (let i = 100; i > 0; i--) {
  document.write(i + ' ')
}

document.write('<hr>')

// 3. Выведите с помощью цикла столбец четных чисел от 1 до 100.
document.write(`<br>Выведите с помощью цикла столбец четных чисел от 1 до 100.<br>`)
for (let i = 2; i < 100; i += 2) {
  document.write(i + ' ')
}

document.write('<hr>')

// 4. Заполните массив 10-ю иксами с помощью цикла.
document.write(`<br>Заполните массив 10-ю иксами с помощью цикла.<br>`)

let arrOne = []
for (let i = 0; i < 10; i++) {
  arrOne[i] = 'x'
}
document.write(arrOne)

document.write('<hr>')

// 5. Заполните массив числами от 1 до 10 с помощью цикла.
document.write(`<br>Заполните массив числами от 1 до 10 с помощью цикла.<br>`)
let arrTwo = []
for (let i = 1; i <= 10; i++) {
  // arrTwo[i] = i
  arrTwo.push(i)
}
document.write(arrTwo)

document.write('<hr>')

// 6. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.
document.write(`<br>Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.<br>`)
let arrThree = []
for (let i = 0; i < 10; i++) {
  arrThree.push(Math.random().toFixed(2))
}
document.write(arrThree)

document.write('<hr>')

// 7. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
document.write(`<br>Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.<br>`)
let arrFour = []
for (let i = 1; i < 10; i++) {
  arrFour.push(Math.round(Math.random() * 10) + 1)
}
document.write(arrFour)

document.write('<hr>')

// 8. Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
document.write(`<br>Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.<br>`)
let arrFive = [2, 1, 3, 8, -1, -8, 4, 5, 6, 7, 9]
for (let i = 0; i < arrFive.length; i++) {
  if (arrFive[i] > 0 && arrFive[i] < 10) {
    document.write(arrFive[i] + ' ')
    console.log(arrFive[i])
  }
}

document.write('<hr>')

// 9. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.
document.write(`<br>Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.<br>`)
let arrSix = [2, 1, 3, 8, -1, -8, 4, 5, 6, 7,]
for (let i = 0; i < arrSix.length; i++) {
  if (arrSix[i] === 5) {
    document.write('Есть')
    break
  }
}

document.write('<hr>')

// 10. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
document.write(`<br>Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.<br>`)
let arrSeven = [2, 1, 3, 8, -1, -8, 4, 5, 6, 7,]
let sumArrSeven = 0
for (let i = 0; i < arrSeven.length; i++) {
  sumArrSeven += arrSeven[i]
}
document.write(sumArrSeven)

document.write('<hr>')

// 11. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
document.write(`<br>Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.<br>`)
let arrEight = [2, 1, 3, 8, -1, -8, 4, 5, 6, 7,]
let sumArrEight = 0
for (let i = 0; i < arrEight.length; i++) {
  sumArrEight += arrEight[i] * arrEight[i]
}
document.write(sumArrEight)

document.write('<hr>')

// 12. Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
document.write(`<br>Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).<br>`)
let arrNine = [2, 1, 3, 8, -1, -8, 4, 5, 6, 7,]
let result = 0
for (let i = 0; i < arrNine.length; i++) {
  result +=arrNine[i]/arrNine.length
}
document.write(result)

