# Backend take home technical test

## Brief

A module is required that has an algorithm to find all pairs of integers within an array that sum to a specified value.

- The input should include the array of integers and the specified value. 
- The output should include all pairs of integers that sum to the specified value.
- Think carefully about any error handling that may be required.
- Unit tests should be produced to ensure all functionality works as expected.

## Some assumptions for my solution:

- Negative integers are allowed
- The array input must be an array of more than one integer (otherwise error thrown). If there are at least two integers, an odd value of integers is allowed
- Duplicate values in the array are allowed
- The sum input must be an integer (otherwise error thrown)

To solve the problem, I've used a nested for loop. While this works, I realise that this may not be the most efficient way to solve the problem as it may not be an ideal solution for really large datasets (I've been doing some research into code and time complexity). Fortunately for me, I live with two friends who are both developers and I spoke to them about it after completing this exercise and they told me about hash maps being a much more efficient way of solving a problem like this (producing the same output with less total iterations). Given my limited knowledge of the method at the time of working on this exercise, I have not altered my solution, however; I feel confident that I'd be able to further optimise it.

I've also set up a server using Node.js and Express to demonstrate my knowledge and ability in this area. It was also a learning opportunity for me, as I'd never done this using TypeScript before. 

## Skills 
- TypeScript
- Node.js
- Express 
- Jest & Supertest

## Running the server locally 

Running server:
```
npm i
npm run dev
```

Running tests: 
```
npm test
```

# Successful requests:
![successful_request_1](https://user-images.githubusercontent.com/112335053/217239006-46525c93-bad2-4f5d-ac77-0f199c2e98b6.png)
![successful_request_2](https://user-images.githubusercontent.com/112335053/217239071-dc3340a0-9bca-4b08-ac3d-55fbaa2599a0.png)

# Bad requests:
![bad_request_1](https://user-images.githubusercontent.com/112335053/217239111-7217c581-09cf-4722-a770-50b9986fbb16.png)
![bad_request_2](https://user-images.githubusercontent.com/112335053/217239151-2efff29d-b8e7-4500-9b60-8fd9b2a19e24.png)


