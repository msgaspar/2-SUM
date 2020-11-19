# The 2-SUM problem

For an unsorted array _A_ of _n_ integers, and a target integer _t_, the goal is to determine whether or not there are two numbers _x_, _y_ in _A_ satisfying _x_ + _y_ = *t*².

This problem can be solved by brute-force search - by trying all possibilities for _x_ and _y_ and checking if any of them work. That would be a quadratic-time algorithm (_O_ (*n*²)), since there are _n_ choices for _x_ and _y_.

## Hash table solution

Most of the work in this algorithm boils down to repeated lookups, so one way to improve it is to use a hash table. A good hash table provides Insert and Lookup operations in constant time, and we can use it to solve the 2-SUM problem in _linear_ time.

## The assignment

The input file contains 1 million integers, both positive and negative (there might be some repetitions!).This is your array of integers, with the *i*th row of the file specifying the *i*th entry of the array.

Your task is to compute the number of target values _t_ in the interval [-10000,10000] (inclusive) such that there are distinct numbers _x_,_y_ in the input file that satisfy _x_ + _y_ = _t_.

## Implementation

The implementation of the solution above is _O_(_n_) for a single target _t_, but this exercise requires testing all values of _t_ in the interval [-10000,10000], resulting in roughly 20 billion lookups. For that reason, even though the hash table speeds things up, the algorithm can take a considerably long time to calculate the answer.

An alternative implementation is presented in the file `2-sum-alternative.js`, following a different approach:

- Sort the array;
- Iterate using two pointers: one from beginning to end, another from the end to beginning of the array, until they cross each other;
- If values given by the pointers fall inside the given interval, re-iterate internally.
