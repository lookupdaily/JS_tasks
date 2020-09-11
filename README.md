# JS Exercise - 1

A series of exercises to test my understanding of vanilla JavaScript.   
[Task 1](#Task-1) | [Task 2](#Task-2) | [Task 3](#Task-3) | [Task 4](#Task-4) | [Task 5](#Task-5)

## Technologies

- JavaScript (NodeJS)
- Jest

## Getting started

The solutions to the problems below are designed to be run in nodeJS and require [node to be installed](https://nodejs.org/en/download/) on your machine. 

You can the code in your command-line by loading index.js in the node REPL:

```shell
> node
> .load index.js
```

You will see a list of available functions you can use. For example:
```javascript
> countCharacter('test','t') // => 2
```

Functions can also be loaded independently in the REPL by loading the respective file in the 'src' directory.

## Running tests

Tests are written in jest, and require [yarn to be installed](https://classic.yarnpkg.com/en/docs/install/) locally.

To run the tests:

```shell
> yarn install
> yarn test
```

Tests will run in the command line.



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
|{name:'Liam'}|1 |
|{name : “test”,class : "VI",rollno : 12 }|3|  



## Task 4 

Write a JavaScript program to sort an array of JavaScript objects.

how it might look: 

```javascript
sortByObjectProperty([{name:'Liam'},{name:'Becky'}],'name') // => [{name:'Becky'},{name:'Liam'}]
```

### Test cases

| Input | Output |
|-------|--------|
|[{name:'Liam'}],'name'|[{name:'Liam}]|
|[{name:'Liam'},{name:'Becky'}],'name'|[{name:'Becky'},{name:'Liam'}]|
|[{id: 143, name:'Becky'},{id: 123, name:'Liam'}],'id'|[{id: 123, name:'Liam'},{id: 143, name:'Becky'}]|
|[],'name'|[]|
|[{name:'Liam'}],'id'|'property name does not exist'|   



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
|Book =  { library: 'Stockport', inStock: true};  book = Object.create(Book); book.title = 'The Road Ahead'; instanceOfBook = Object.create(book); instanceOfBook.id = 1254;|['library', 'inStock', 'title', 'id']|
|Test = {}; Test2 = Object.create({}) | [] |
|Parent = function() { this.object = true }; child = new Parent(); child.isChild = true;|['isObject','isChild']|
