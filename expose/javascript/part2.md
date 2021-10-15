1. 3: because line 12 prints i after the for loop where i becomes 3 after iterating the prices array and it's being declared by var keyword, so line 12 can get access to i variable
2. 150: because after the foor loop, discountedPrice holds the value of the last iteration, which is the last element of the prices array (i=2) which is prices[2]*(1-0.5) = 150
3. 150: because after the for loop, finalPrice holds the value of the last iteration, which is Math.round(150 * 100)/100 which is 150
4. [50, 100, 150]: This function returns an array of the discounted prices. In the code it iterates through every price in the prices array and give each of them a discount then push the final prices into the array that we are going to return
5. It will return error because i is defined by let keyword in the for loop scope but the function intends to prints it outside its scope
6. It will cause error because discountedPrice is declared by let keyword but being printed at the different scope
7. 150: Basically similiar reason as Q3, and even thought the declaration keyword changes from var to let, but the variable gets initialized and printed at the same scope so it won't be an issue
8. [50, 100, 150]: Basically similiar reasion as Q4, and even if all the var keyword has changed into let keyword, all the variables are being properly used inside its own scope so there will be no difference on the output
9. it will raise error with the same reason as Q5
10. 3: It returns the length of the prices array. Even though it's being declared by const keyword, the length variable does not get reassigned after its initialization so it is valid
11. [50, 100, 150]: Even though all the declaration becomes const, but same as Q8, they are all being used correctly within their own scope and because discounted is an object so it's valid to push items into discounted even if it's declared by const keyword because it's always pointing to the same address
12A. student.name
12B. student['Grad Year']
12C. student.greeting()
12D. student['Favorite Teacher'].name 
12E. student.courseLoad[0]
13A. '32'
13B. 1
13C. 3
13D. '3null'
13E. 4
13F. 0
13G. '3undefined'
13H. NaN
14A. true
14B. false
14C. true
14D. false
14E. false
14F. true
15. == is used to compare two variables without considering their data type, === is used to compare two values in a more strict mode without type conversion