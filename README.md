# MOURITech
## This is Lucas Pires Nabais' "Code test.txt" resolution


## 3) Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5. 
    
     I proposed here two solutions for this problem.

     I like the first one because it's easy-to-read and mantain from a dev point of view.

     And I like the the second one (I left it commented) because in spite of being "harder" to read, the use of an 
     array of objects as the data-set allows to add more extra cases without the need of 
     touching the actual function


## 4) Given an array of numbers, write a function to move all zeroes to the end of it while maintaining the relative order of the non-zero elements.
   
    In jasvascript we can think as true and false as 1 and 0 when it comes to arithmetic operations.
    So: true - true = 0. true - false = 1. false - true = -1. false - false =  0
    With this in mind, we can use a simple sort() function to solve this one.

#### TESTS: 

* console.log(moveZeroesToTheEnd([1, 0, 2, 0, 3])) >> [ 1, 2, 3, 0, 0 ]
* console.log(moveZeroesToTheEnd([1, 2, 3, 4, 0, 0])) >> [ 1, 2, 3, 4, 0, 0 ]
* console.log(moveZeroesToTheEnd([4, 3, 2, 1, 0, 0])) >> [ 4, 3, 2, 1, 0, 0 ]
* console.log(moveZeroesToTheEnd([4, 0, 3, 0,2, 1, 0, 0])) >> [ 4, 3, 2, 1, 0, 0, 0, 0 ]
* console.log(moveZeroesToTheEnd([-7, 4, 3, 21, 0, 0, 5, 0])) >> [ -7, 4, 3, 21, 5, 0, 0, 0 ]
* console.log(moveZeroesToTheEnd([1, 2, 3])) >> [ 1, 2, 3 ]
* console.log(moveZeroesToTheEnd([3, 7, 12, 4, 3])) >> [ 3, 7, 12, 4, 3 ]

