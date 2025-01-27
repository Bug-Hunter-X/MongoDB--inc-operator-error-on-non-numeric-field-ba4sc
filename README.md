# MongoDB $inc operator error on non-numeric field
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numeric field in a document. If the field is not numeric, the operation will fail with an error. 

## Bug Description
The bug occurs when attempting to increment a field using `$inc` that is not of numeric type. This can lead to unexpected behavior or errors in your application.

## Solution
The solution involves checking the data type of the field before applying the increment operation.  The code provided handles this by first checking if the field exists and is a number. If not, it defaults to setting the counter to 1. If the counter is already present, it uses the $inc operator to correctly increment it.