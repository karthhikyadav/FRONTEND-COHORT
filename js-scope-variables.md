JavaScript Scope & Variable Declarations 

Welcome to Day 9! Today we'll focus only on JavaScript scope and the differences between var, let, and const with simple, beginner-friendly examples.

🎯 Today's Learning Journey


What is Scope → Global vs Local Scope → var Behavior → let Behavior → const Behavior → Simple Assignments




🌍 Part 1: What is Scope?

Understanding Scope - Simple Explanation

Scope is like the neighborhood where your variables live. It decides:
- Where you can use a variable
- Where you cannot use a variable

Think of it like rooms in a house:


🏠 House (Global Scope)
┌─────────────────────────────────────┐
│ Everyone can access things here     │
│                                     │
│ 🚪 Room 1 (Local Scope)           │
│ ┌─────────────────────────────────┐ │
│ │ Only people in this room        │ │
│ │ can access things here          │ │
│ └─────────────────────────────────┘ │
│                                     │
│ 🚪 Room 2 (Local Scope)           │
│ ┌─────────────────────────────────┐ │
│ │ Only people in this room        │ │
│ │ can access things here          │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘




🌍 Part 2: Global Scope vs Local Scope

Global Scope - Everyone Can Access

Variables in global scope can be used anywhere in your code:


// 🌍 GLOBAL SCOPE - Available everywhere
var globalName = "Alice";
let globalAge = 25;
const GLOBAL_CITY = "Mumbai";

console.log(globalName); // ✅ Works - "Alice"
console.log(globalAge);  // ✅ Works - 25
console.log(GLOBAL_CITY); // ✅ Works - "Mumbai"


Local Scope - Limited Access

Variables in local scope can only be used within their block `{ }`:


// Global variables
var userName = "John";

// Local scope block
{
    // 🏠 LOCAL SCOPE - Only works inside these { }
    var localVar = "I'm local";
    let localLet = "I'm also local";
    const LOCAL_CONST = "I'm local too";
    
    // Inside the block - everything works
    console.log(userName);    // ✅ "John" - global variable
    console.log(localVar);    // ✅ "I'm local"
    console.log(localLet);    // ✅ "I'm also local"
    console.log(LOCAL_CONST); // ✅ "I'm local too"
}

// Outside the block
console.log(userName);    // ✅ "John" - global variable
console.log(localVar);    // ✅ "I'm local" - var leaked out!
console.log(localLet);    // ❌ Error - let is block scoped
console.log(LOCAL_CONST); // ❌ Error - const is block scoped


Simple Rule:
- Global variables = Available everywhere
- Local variables = Available only in their block `{ }`



🔄 Part 3: Understanding var

How var Works

`var` is the old way to create variables. It has some confusing behaviors:

#1. var Can Be Used Before Declaration (Hoisting)


// This looks wrong but works with var:
console.log(myName); // undefined (not an error!)
var myName = "Alice";
console.log(myName); // "Alice"

// JavaScript sees it like this:
var myName; // undefined
console.log(myName); // undefined
myName = "Alice";
console.log(myName); // "Alice"


#2. var Ignores Block Scope


var outside = "I'm outside";

{
    var inside = "I'm inside the block";
    console.log(outside); // ✅ "I'm outside"
    console.log(inside);  // ✅ "I'm inside the block"
}

// Outside the block
console.log(outside); // ✅ "I'm outside" 
console.log(inside);  // ✅ "I'm inside the block" - var leaked out!


#3. var Can Be Redeclared


var color = "red";
console.log(color); // "red"

var color = "blue"; // Allowed with var
console.log(color); // "blue"

var color = "green"; // Still allowed
console.log(color); // "green"


#4. var Loop Problem


// The classic var problem:
for (var i = 0; i < 3; i++) {
    // Schedule these to run later
    setTimeout(function() {
        console.log("var i:", i); // Always prints 3!
    }, 100);
}

// Why? Because var i leaked outside the loop
console.log("Final i:", i); // 3




🔒 Part 4: Understanding let

How let Works (Better than var)

`let` is the modern way to create variables that can change:

#1. let Cannot Be Used Before Declaration


// This will give an error:
console.log(myAge); // ❌ Error!
let myAge = 25;
console.log(myAge); // ✅ 25


#2. let Respects Block Scope


let outside = "I'm outside";

{
    let inside = "I'm inside the block";
    console.log(outside); // ✅ "I'm outside"
    console.log(inside);  // ✅ "I'm inside the block"
}

// Outside the block
console.log(outside); // ✅ "I'm outside"
console.log(inside);  // ❌ Error - let is block scoped


#3. let Cannot Be Redeclared


let color = "red";
console.log(color); // "red"

let color = "blue"; // ❌ Error - already declared!

// But you can change the value:
color = "blue"; // ✅ This works
console.log(color); // "blue"


#4. let Fixes the Loop Problem


// let creates a new variable for each loop iteration:
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("let i:", i); // Prints 0, 1, 2 correctly!
    }, 100);
}

// console.log("Final i:", i); // ❌ Error - i not accessible outside




🔐 Part 5: Understanding const

How const Works (Cannot Change)

`const` is for values that should never change:

#1. const Must Be Given a Value Immediately


// ❌ This won't work:
const myName; // Error - must initialize

// ✅ This works:
const myName = "Alice";


#2. const Cannot Be Changed


const age = 25;
console.log(age); // 25

age = 26; // ❌ Error - cannot change const!


#3. const Respects Block Scope


const outside = "I'm outside";

{
    const inside = "I'm inside the block";
    console.log(outside); // ✅ "I'm outside"
    console.log(inside);  // ✅ "I'm inside the block"
}

// Outside the block
console.log(outside); // ✅ "I'm outside"
console.log(inside);  // ❌ Error - const is block scoped


#4. const with Objects and Arrays (Special Case)


// You can change what's INSIDE objects and arrays:
const person = { name: "Alice", age: 25 };
person.name = "Bob";    // ✅ Allowed - changing property
person.age = 26;        // ✅ Allowed - changing property
console.log(person);    // { name: "Bob", age: 26 }

// But you cannot replace the whole object:
// person = { name: "Charlie" }; // ❌ Error!

const colors = ["red", "blue"];
colors.push("green");   // ✅ Allowed - adding to array
console.log(colors);    // ["red", "blue", "green"]

// But you cannot replace the whole array:
// colors = ["yellow"];    // ❌ Error!




📊 Part 6: Simple Comparison

When to Use What?

| Use Case | Which to Use | Example |
|-|-||
| Value never changes | `const` | `const PI = 3.14` |
| Value will change | `let` | `let count = 0` |
| Old code (avoid) | `var` | `var oldStyle = "avoid"` |

Quick Examples:


// ✅ GOOD examples:
const WEBSITE_NAME = "MyApp";     // Never changes
let currentUser = null;           // Will change
let itemCount = 0;                // Will change

// ❌ BAD examples:
var messyVariable = "confusing";  // Use let or const instead




🎮 Part 7: Super Simple Practice Assignments

Assignment 1: Fix the Scope (5 minutes)

Problem: Make the variable accessible outside the block

<!DOCTYPE html>
<html>
<head>
    <title>Scope Practice 1</title>
</head>
<body>
    <script>
        // YOUR TASK: Fix this code so name is accessible outside the block
        {
            let name = "Alice";
        }
        
        console.log(name); // Should print "Alice"
    </script>
</body>
</html>


Your Task: Move the `let name = "Alice";` to make it global.



Assignment 2: Choose the Right Declaration (10 minutes)

Fill in the blanks with var, let, or const:


<!DOCTYPE html>
<html>
<head>
    <title>Declaration Practice</title>
</head>
<body>
    <script>
        // YOUR TASK: Choose var, let, or const for each

        _____ PI = 3.14159;              // Never changes
        _____ userName = "guest";        // Will change later
        _____ loginCount = 0;            // Will change
        _____ WEBSITE_TITLE = "MyApp";   // Never changes
        _____ currentPage = 1;           // Will change

        // Test your choices:
        userName = "Alice";              // Should work
        loginCount = loginCount + 1;     // Should work
        currentPage = 2;                 // Should work
        
        console.log(PI);
        console.log(userName);
        console.log(loginCount);
        console.log(WEBSITE_TITLE);
        console.log(currentPage);
    </script>
</body>
</html>




Assignment 3: Block Scope Understanding (10 minutes)

Predict what will print:


<!DOCTYPE html>
<html>
<head>
    <title>Block Scope Practice</title>
</head>
<body>
    <script>
        let message = "Hello";
        
        {
            let message = "Hi";
            console.log("Inside:", message); // What prints?
        }
        
        console.log("Outside:", message); // What prints?
        
        // YOUR TASK: Write your predictions as comments:
        // Inside: ?
        // Outside: ?
    </script>
</body>
</html>



Assignment 5: Object with const (10 minutes)

Practice changing object properties with const:

<!DOCTYPE html>
<html>
<head>
    <title>Const Object Practice</title>
</head>
<body>
    <script>
        const student = {
            name: "John",
            age: 20,
            grade: "A"
        };
        
        // YOUR TASK: Change the student's information
        // 1. Change name to "Alice"
        // 2. Change age to 22
        // 3. Add a new property: city = "Mumbai"
        
        // Write your code here:
        
        console.log(student);
    </script>
</body>
</html>




Assignment 6: Create a Simple Counter (20 minutes)

Build a counter that works correctly:


<!DOCTYPE html>
<html>
<head>
    <title>Counter Practice</title>
</head>
<body>
    <h1>Counter Practice</h1>
    <p>Count: <span id="count">0</span></p>
    <button onclick="increment()">+1</button>
    <button onclick="decrement()">-1</button>
    <button onclick="reset()">Reset</button>

    <script>
        // YOUR TASK: Complete this counter
        // Use the right variable declarations (let, const, var)
        
        _____ count = 0;                    // Will this change?
        _____ MAX_COUNT = 10;               // Will this change?
        _____ MIN_COUNT = 0;                // Will this change?
        
        function increment() {
            // YOUR TASK: Increase count by 1
            // Don't go above MAX_COUNT
            
            document.getElementById('count').textContent = count;
        }
        
        function decrement() {
            // YOUR TASK: Decrease count by 1
            // Don't go below MIN_COUNT
            
            document.getElementById('count').textContent = count;
        }
        
        function reset() {
            // YOUR TASK: Set count back to 0
            
            document.getElementById('count').textContent = count;
        }
    </script>
</body>
</html>




✅ Assignment Solutions

Assignment 1 Solution:

// Move declaration outside the block:
let name = "Alice";
{
    // name is accessible here
}
console.log(name); // "Alice"


Assignment 2 Solution:

const PI = 3.14159;              // Never changes
let userName = "guest";          // Will change later
let loginCount = 0;              // Will change
const WEBSITE_TITLE = "MyApp";   // Never changes
let currentPage = 1;             // Will change


Assignment 3 Solution:

// Inside: "Hi"
// Outside: "Hello"
// (Each scope has its own message variable)



Assignment 5 Solution:

student.name = "Alice";
student.age = 22;
student.city = "Mumbai";


Assignment 6 Solution:

let count = 0;                    // Changes
const MAX_COUNT = 10;             // Never changes
const MIN_COUNT = 0;              // Never changes

function increment() {
    if (count < MAX_COUNT) {
        count = count + 1;
    }
    document.getElementById('count').textContent = count;
}

function decrement() {
    if (count > MIN_COUNT) {
        count = count - 1;
    }
    document.getElementById('count').textContent = count;
}

function reset() {
    count = 0;
    document.getElementById('count').textContent = count;
}




🏆 Key Takeaways

Simple Rules to Remember:

1. const = Never changes (use by default)
2. let = Can change (use when you need to change the value)
3. var = Old way (avoid in new code)

Scope Rules:
- Global = Available everywhere
- Local = Available only in its block `{ }`

Best Practice:

// ✅ Good modern JavaScript:
const API_URL = "https://api.com";  // Won't change
let userCount = 0;                  // Will change
let currentUser = null;             // Will change

// ❌ Avoid:
var messyCode = "confusing";        // Use let or const instead
