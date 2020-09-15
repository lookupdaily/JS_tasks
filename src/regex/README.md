# Regex exercises

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


## Exercise 4
Using a regex pattern, find the telephone number contained within the ex4 string.

```javascript
const ex4 = 'Contact customer support on 0800 300 500';
```

## Exercise 5
Using a regex pattern, find the email address contained within the ex5 string.

```javascript
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';
```
