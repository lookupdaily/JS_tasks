# Promise Exercises

A series of exercises to explore use cases for Promises in JavaScript

## Getting started

Run individual files in 'src/promises' directory the node REPL to gain access to the functions

```shell
node
.load src/promises/testNum.js # exercise 1
.load src/promises/chainedPromises.js # exercise 2
.load src/promises/settlePromises.js # exercise 3
```

## Running tests

Tests are written in jest, and require [yarn to be installed](https://classic.yarnpkg.com/en/docs/install/) locally.

To run the tests:

```shell
> yarn install
> yarn test promises
```

# Exercises

Find descriptions and test cases for each of the exercises below:

[Exercise 1](#Exercise-1) | [Exercise 2](#Exercise-2) | [Exercise 3](#Exercise-3)

## Exercise 1

Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.
 
Example:
testNum(11) => {value: '11 is greater than 10'}

### Test Cases

|Inputs|Outputs|
|------|-------|
|1 | Promise: '1 is less than 10'|
|11| Promise: '11 is greater than 10'|
|10| Promise: '10 is equal to 10'|
|-1| Promise: '-1 is less than 10'|
|0 | Promise: '0 is less than 10'|

## Exercise 2

Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalise them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.

### Test Cases

|Inputs|Outputs|
|------|-------|
|['cat']|['Cat']|
|['cat','dog']|['Cat','Dog']|
|['dog','cat','Fox']|['Cat','Dog','Fox']|
|[9, 'cat']|Error: Invalid input|
|[false, 'cat']|Error: Invalid input|
 
## Exercise 3

Write examples to use all, allSettled methods in Promise with examples 

Use cases:
- Check the status of a series of promises
- Get the values of all resolved promises
- Only act when all promises are resolved

Example functions to pass:
- delay
- equality check
- fetching data