# Unexpected Behavior with Zero Input in myFunction

This repository demonstrates a common issue in JavaScript where edge cases, such as zero input values, aren't properly handled. The `myFunction` initially returns 0 for zero inputs without explicitly stating this behavior. This can be problematic in different scenarios.  The solution shows how to handle this edge case in a more robust and explicit way.

## Bug Report

The original `myFunction`  returns 0 when either `a` or `b` is 0. While this might seem harmless, it might lead to unexpected results or silent errors.  The problem is the lack of clarity regarding this behavior.

## Solution

The improved version throws an error when either input is zero, making the function's behavior clear and preventing potential issues downstream.