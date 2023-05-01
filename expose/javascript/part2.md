1. It will be `console.log(3)`， print out 3. `i` is a var, so we can access from outside of for loop. Also, `i` = 3 because `price` has 3 numbers. `price.length` = 3, and `i++` for loop runs over 3 times. It stops until `i` = 3 which means not `<` than 3. Finally, it outputs `3`.
2. It will be `console.log(150)`, print out 150. `discountedPrice` is a var, so we can access from outside of for loop. The last `discountedPrice` is 150 by `price[2] * (1 - 0.5)`. Finally, it outputs `150`.
3. It will be `console.log(150)`， print out 150. `finalPrice` is a var, so we can access from outside of for loop. Also, `finalPrice` = 150 because the last `finalPrice` =        `Math.round(150 * 100) / 100`. Finally, it outputs `150`.
4. It returns `[50, 100, 150]`. `discounted` is a var, so we can access it whatever in this function. In line 9, it pushes all three `finalPrice` oderly into the list `discounted`.
5. error. `i` is `let` in this code, so it only can be accessible between the curly braces(from line6-10). Line 12 is out side of that curly braces, so can't access `i`. Thus, `i` is not defined at this line.
6. error. `discountedPrice` is `let` in this code, so it only can be accessible between the curly braces(from line6-10). Line 13 is out side of that curly braces, so can't access `discountedPrice`. Thus, `discountedPrice` is not defined at this line.
7. It will be `console.log(150)`, print out `150`. It is a `let`, but line 14 is inside of the its curly braces(block scope). Thus, line 14 is able to access the `finalPrice` and prints out `150`.
8. It returns `[50, 100, 150]`, `discounted` is a `let`, and line 16 is inside of its curly braces. Line 9 `push` all three `finalPrice` into the list `discounted`.
9. error. `i` is a let, so it only can be access with in the curly braces (line6-9). Line 11 is out side of that curly braces, so it can't access `i`.
10. It print out the value of the `length`, `3`. `length` is a `const`, so it only can be access inside of its curly braces(line4-15). Line 12 is inside of curly braces, so it can access `length`. And than, it prints out `3` by `console.log`.
11. It returns `[50, 100, 150]`. `discounted` is `const` and doesn't reasigned in this code. `discountedPrice` is equal to `price * (1 - 0.5)`, and line 8 `push` all three `discountedPrice` into it. After that, it becomes `[50, 100, 150]` Also, line 14 is inside `discounted`'s curly braces, so line 14 is able to access value of `discounted`. Finally, it returns `[50, 100, 150]`.
12. A. student.name
    B. student["Grad Year"]
    C. student.greeting
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13. A. '32' since integers map to their exact string representation
    B. 1 since string maps to its exact integer representation, so 3-2=1
    C. 3 since null converts to 0, so 3
    D. '3null' since null converts to 'null', so combine them
    E. 4 since true converts to 1, so =1+3=4
    F. 0 since false converts to 0 and null converts to 0, so =0+0=0
    G. '3undefined' since undefined converts tp 'undefined', so combine them together 
    H. NaN since '3' maps to 3 and undefined converts to NaN, so =3-NaN=NaN
14. A. 
    B.
    C.
    D.
    E.
    F.
