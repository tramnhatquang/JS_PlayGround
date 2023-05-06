/*
- JavaScript supports automatic data type conversion.
- This means that the interpreter independently converts values to the type it expects to see in a particular part of your program.
Such conversion is called implicit.
 */

/*
- String conversion occurs when you want to represent something as a string. \
The String() function must be applied
 to explicitly cast a value to a string. For example:
 */
String(123);   // "123"
String(false); // "false"
String(-12.3); // "-12.3"
String(true);  // "true"

/*
In JS, the implicit conversion will be called by the binary + operator when one of the operands is a string:

 */
"3" + 4                        // "34"
4 + ""                         // "4"
true + "detective"             // "truedetective"
"You are " + 25 + " years old" // "You are 25 years old"

/*
Numeric conversion occurs when you want to represent something as a number.
To perform an explicit conversion, apply the Number() function:
 */
Number("1");    // 1
Number(" 37 "); // 37
Number("");     // 0
Number("\n3");  // 3
Number("\n");   // 0
Number("\t");   // 0
Number(true);   // 1
Number(false);  // 0
Number("an apple") // NaN (Not a Number)

/*
Implicit conversion is a little more confusing. It occurs in almost all mathematical functions and expressions:
 */
true + 43 // 44
3 - false // 3
10 / "5"  // 2
-true     // -1
+"85"     // 85

/*
- Boolean conversion
- Boolean conversion occurs when you want to represent something as a boolean.
To explicitly convert data into a boolean value, the Boolean() function should be applied:
- The rules for using this function are simple. The following values give the false value as the result of conversion: false, undefined, null, 0, NaN, and "".
The conversion of all other values will give the true value.
 */
Boolean(1);            // true
Boolean(0);            // false
Boolean("Am I nice?"); // true
Boolean("");           // fals

!!3                      // true
0 || "go"                // "go"
"Master" && "Margarita"  // "Margarita"