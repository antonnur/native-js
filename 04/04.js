//Victor React JS_#04 2021-07-18

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
    {id: '11dd-22ff', title: 'React', isDone: false},
    {id: '11dd-22ff', title: 'Redux', isDone: false},
    {id: '11dd-22ff', title: 'HTML', isDone: false},
    {id: '11dd-22ff', title: 'CSS', isDone: false},
  ],
  [todoListId_2]: [
    {id: '11dd-22ff', title: 'React', isDone: false},
    {id: '11dd-22ff', title: 'Redux', isDone: false},
    {id: '11dd-22ff', title: 'HTML', isDone: false},
    {id: '11dd-22ff', title: 'CSS', isDone: false},
  ],
  [todoListId_3]: [
    {id: '11dd-22ff', title: 'React', isDone: false},
    {id: '11dd-22ff', title: 'Redux', isDone: false},
    {id: '11dd-22ff', title: 'HTML', isDone: false},
    {id: '11dd-22ff', title: 'CSS', isDone: false},
  ]
}