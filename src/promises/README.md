# Promise Exercises

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
 
## Exercise 3

Write examples to use all, allSettled methods in Promise with examples 