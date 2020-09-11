# JS Exercise - 1

## Getting started

## Task 1

Write a JavaScript function to  get the number of occurrences of each letter in specified string

```
Sample arguments : ‘test’, ’t’
Expected Output :  2
```

how it might look:
```javascript
countCharacter('test','t') // => 2
```

### Test cases
| Input | Output |
|-------|--------|
|'a','a'| 1 |
|'ab','a'|1 |
|'aab','a'|2|
|'test it', 't'|3|
|'a','b'|0|
|'','a'|0|

## Task 2

Write a JavaScript function that reverses a number

how it might look:
```javascript
reverseNumber(32243) // => 34223
```

### Test cases

| Input | Output |
|-------|--------|
|1|1|
|12|21|
|32243|34223|
|'1234'| 'not a number'|

## Task 3 

Write a JavaScript program to get the length of a JavaScript object

how it might look:

```javascript
getObjectLength({}) // => 0
```

### Test cases

| Input | Output |
|-------|--------|
|{}|0|
|{name:'Liz'}|1 |
|{name : “test”,class : "VI",rollno : 12 }|3|

## Task 4 

Write a JavaScript program to sort an array of JavaScript objects.

how it might look: 

```javascript
sortByObjectProperty([{name:'Liz'},{name:'Becky'}],'name') // => [{name:'Becky'},{name:'Liz'}]
```

### Test cases

| Input | Output |
|-------|--------|
|[{name:'Liz'}],'name'|[{name:'Liz'}]|
|[{name:'Liz'},{name:'Becky'}],'name'|[{name:'Becky'},{name:'Liz'}]|
|[{id: 143, name:'Becky'},{id: 123, name:'Liz'}],'id'|[{id: 123, name:'Liz'},{id: 143, name:'Becky'}]|
|[],'name'|[]|
|[{name:'Liz'}],'id'|'property name does not exist'|

## Task 5

Write a JavaScript function to retrieve all the names of object's own and inherited properties.

how it might look:

```javascript
getAllProperties( {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   }) // => [title, author, libraryID]
```

### Text Cases

| Input | Output |
|-------|--------|
|{title:  'The Road Ahead'}|['title']|
|Book = { library: 'Stockport', inStock: true};  book = Object.create(Book); book.title = 'The Road Ahead' | ['library','inStock','title']|
|Test = {}; Test2 = Object.create({}) | [] |
