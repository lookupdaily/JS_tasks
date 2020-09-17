# Regex exercises

A series of exercises to test my understanding of regex.   



## Getting started

Run [src/regex/solutions.js](solutions.js) in node to see the solutions to each of the exercises below or load the file in the node REPL to try them out.

```shell
node src/regex/solutions.js
```

or 

```shell
node
.load src/regex/solutions.js # access to all functions
.load src/regex/getEmail.js # access to individual getEmail function
```

## Running tests

Tests are written in jest, and require [yarn to be installed](https://classic.yarnpkg.com/en/docs/install/) locally.

To run the tests:

```shell
> yarn install
> yarn test
```

# Exercises

Find descriptions and test cases for each of the exercises below:

[Exercise 1](#exercise-1) | [Exercise 2](#exercise-2) | [Exercise 3](#exercise-3) | [Exercise 4](#exercise-4) | [Exercise 5](#exercise-5) 

## Exercise 1

Using a regex pattern, get the 3 letter words in the ex1 string.

```javascript
const ex1 = 'The quick brown fox jumped over the lazy dog';
```

|Input|Output|
|-----|------|
|'the'|'the' |
|'the quick'|'the'|
|'the quick brown fox'|'the fox'|
|'brown' |'No 3 letter word in the string'|
|'The' | 'The' |
| '' | 'No 3 letter word in the string' |

## Exercise 2
Using a regex pattern, remove all of the numbers from the ex2 string.

 ```javascript
 const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
 ```

 ### Test cases

|Input|Output|
|-----|------|
|'a'  |'a'   |
|'a1' |'a'   |
|'a12b'|'ab' |
|'A1'  |'A'  |
|'1'   |''   |
|''    |''   |

## Exercise 3
Using a regex pattern, find the monetary value contained within the ex3 string.

```javascript
const ex3 = 'The salad costs $9.99';
```

### Test cases

|Input|Output|
|-----|------|
|'$9.99'|'$9.99'|
|'price $9.99'|'$9.99'|
|'The salad costs $9.99'|'$9.99'|
|''|null|


## Exercise 4
Using a regex pattern, find the telephone number contained within the ex4 string.

```javascript
const ex4 = 'Contact customer support on 0800 300 500';
```

### Test cases

|Input|Output|
|-----|------|
|'0800 300 500'|['0800 300 500']|
|'Contact customer support on 0800 300 500'|['0800 300 500']|
|'0800 300 500 or 0800 300 500'|['0800 300 500','0800 300 500']
|'Contact customer support'|null|
|'0800300500'| ['0800300500']|


## Exercise 5
Using a regex pattern, find the email address contained within the ex5 string.

```javascript
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';
```
### Test cases

|Input|Output|
|-----|------|
|'james@juniordevelopercentral.com'|['james@juniordevelopercentral.com']|
|'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com'|['james@juniordevelopercentral.com']|
|'james@juniordevelopercentral.com or james@yahoo.com'|['james@juniordevelopercentral.com', 'james@yahoo.com']|
|'james-marshall@developer.com'|['james-marshall@developer.com']|
|'james.marshall@developer.com'|[''james.marshall@developer.com']|
|'james@developer-central.com'|['james@developer-central.com']|
|'james@developer.co.uk'|['james@developer.co.uk']|
|'contact'|null|


