// Create a shallow copy and a deep copy of the ‘colors’ array.Modify the original array by adding ‘Pink’ to it and observe the changes in the copied arrays.Print all three arrays.

const colors = ["Red", "Blue", "Green"];

//shallow copy.
console.log("<----Shallow Copy---->")
let newColorShalloCopy = colors;
console.log("Before making changes: ");
console.log("Colors---->", colors);
console.log("newColors---->", newColorShalloCopy);

//adding "Pink" color to Colors array.
newColorShalloCopy.push("Pink");
console.log("After making changes: ");
console.log("Colors---->", colors);
console.log("newColors---->", newColorShalloCopy, "\n");


//Deep Copy.
console.log("<----Deep Copy---->")
let newColorsDeepCopy = JSON.parse(JSON.stringify(colors));
console.log("Before making changes: ");
console.log("Colors---->", colors);
console.log("newColorsDeepCopy---->", newColorsDeepCopy);

//adding "Pink" color to Colors array.
newColorsDeepCopy.push("Pink");
console.log("After making changes: ");
console.log("Colors---->", colors);
console.log("newColors---->", newColorsDeepCopy, "\n");