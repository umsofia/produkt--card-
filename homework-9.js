1.1; //const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
// Результат: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
1.2; //const filteredNumbers = numbers.filter((num) => num >= 5);
// Результат: [5, 6, 7, 8, 9, 10]
1.3; //const entities = ['яблоко', 'банан', 'вишня', 'груша', 'арбуз'];
//Включаем
const hasFruit = entities.includes("банан");
// hasFruit === true, так как 'банан' есть в массиве
1.4//function reverseArray(arr) {
  return arr.slice().reverse(); // Создаём копию и переворачиваем её
}

// Или вариант с циклом
function reverseArrayLoop(arr) {
  const reversed =;
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
``` 

**Пример использования:**
```javascript
console.log(reverseArray(numbers)); // [5, 6, 7, 8, 9, 10]
1.5//// comments.js

// Создаём константу с первыми 10 объектами (комментариями)
export const comments = [
  { id: 1, body: "Комментарий 1", email: "user1@example.com", postId: 1 },
  { id: 2, body: "Комментарий 2", email: "user2@example.com", postId: 1 },
  { id: 3, body: "Комментарий 3", email: "user3@example.org", postId: 1 },
  { id: 4, body: "Комментарий 4", email: "user4@test.com", postId: 1 },
  { id: 5, body: "Комментарий 5", email: "user5@mail.ru", postId: 1 },
  { id: 6, body: "Комментарий 6", email: "user6@site.com", postId: 1 },
  { id: 7, body: "Комментарий 7", email: "user7@domain.org", postId: 1 },
  { id: 8, body: "Комментарий 8", email: "user8@website.com", postId: 1 },
  { id: 9, body: "Комментарий 9", email: "user9@mail.ru", postId: 1 },
  { id: 10, body: "Комментарий 10", email: "user10@site.com", postId: 1 }
];


1.6//import { comments } from './comments.js';


1.7//
const comEmailComments = comments.filter(comment =>
  comment.email.includes('.com')
);
console.log(comEmailComments);
1.8
//comments.forEach(comment => {
  comment.postId = comment.id <= 5 ? 2 : 1;
});
1.9
const simplifiedComments = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));
1.10//
comments.forEach(comment => {
  comment.isInvalid = comment.body.length > 180;
});
1.11//
const users = [
  { email: 'anna@example.com' },
  { email: 'bob@example.com' },
  { email: 'charlie@example.com' }
];

const emails = users.map(user => user.email);
console.log(emails); // ['anna@example.com', 'bob@example.com', 'charlie@example.com']
1/12//
const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"





