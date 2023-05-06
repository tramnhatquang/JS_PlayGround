/*
Global Context
When this is used outside of any context such as a class, function, or object,
 refers to the global object. The global object in the browser is usually the window object.
 Download the file below, which simply prints the global this object, and open it with a browser of your choice.
 Then examine your browser’s console (inspect element > console). It will say something like “window{document:…”. That is the global window object that this refers to.
  In the case of a terminal and in our case the global object is undefined.
 */
<html>
  <head>
    <script>console.log(this)</script>
  </head>
</html>;

// this is undefined in terminals/command prompts
console.log(this);
