1. 'values added: 20'
2. 'final result: 20'
3. 'values added: 20'
4. It returns an error because let is a block scope variable and line 13 uses result variable (initialized by let) outside of it's declearation scope, so it does not have the access to it
5. It returns an error because the value of result variable (initilaized by const) cannot get reassigned
6. You won't even reach line 13 because the function is terminated by the error from line 9 and even if it reaches line 13 is will still raise the error because const is a block scope declaration