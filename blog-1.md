
# Why `unknown` is Better Than `any` in TypeScript

## Introduction
TypeScript helps developers write safer code.
But when we use the `any` type, TypeScript cannot properly check for mistakes.
That is why many developers prefer using `unknown` instead of `any`.

## The Problem with `any`
When you use `any`, you are telling TypeScript to "ignore" that variable. It allows you to do anything with it. For example, you could try to call a function on a number, and TypeScript won't stop you. This often leads to errors when the code actually run

## Why `unknown` is the Safer Choice
The `unknown` type is like a protective shield. It says, "I have some data, but I won't let you use it until you prove what type it is." This forces you to be careful and check your data first.

## Type Narrowing
To use a variable of type `unknown`, we use a process called "Type Narrowing." This usually means using an `if `statement along with the `typeof` operator to check the specific type of the data before performing any operations.

### Code Example:
```typescript
let myData: unknown;

myData = "Hello World";

// This will show an error because it's still 'unknown'
// console.log(myData.length); 

if (typeof myData === "string") {
    // Now it's safe! TypeScript knows it's a string.
    console.log(myData.length); 
}
```

## Conclusion
To keep your code safe, always avoid `any`. Use `unknown` instead, and apply type narrowing to ensure your data is exactly what you expect it to be.





