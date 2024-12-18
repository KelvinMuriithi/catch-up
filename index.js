// JavaScript Objects, Data Types, Arrays, Mapping, and DOM Manipulation

// 1. Create an object representing a student with multiple data types
const student = {
    name: "John Doe",
    age: 20,
    enrolled: true,
    courses: ["Math", "Science", "History"],
    address: {
        city: "New York",
        zip: 10001
    },
    getDetails: function() {
        return `${this.name}, Age: ${this.age}, City: ${this.address.city}`;
    }
};

// Log the object and its details
console.log("Student Object:", student);
console.log("Student Details:", student.getDetails());

// 2. Data types demonstration
const dataTypes = [
    "Hello", // String
    42,       // Number
    true,     // Boolean
    { key: "value" }, // Object
    [1, 2, 3], // Array
    null,      // Null
    undefined  // Undefined
];

console.log("Data Types:", dataTypes);

// 3. Arrays and mapping example
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log("Original Numbers:", numbers);
console.log("Squared Numbers:", squaredNumbers);

// 4. DOM Manipulation Example
// Create and manipulate DOM elements dynamically
const app = document.getElementById("app");

// Create a title
const title = document.createElement("h1");
title.textContent = "JavaScript Learning Demo";
app.appendChild(title);

// Create a list of student courses
const courseList = document.createElement("ul");
student.courses.forEach(course => {
    const listItem = document.createElement("li");
    listItem.textContent = course;
    courseList.appendChild(listItem);
});
app.appendChild(courseList);

// Create a button to display student details
const detailButton = document.createElement("button");
detailButton.textContent = "Show Student Details";
detailButton.addEventListener("click", () => {
    const detailDiv = document.createElement("div");
    detailDiv.textContent = student.getDetails();
    app.appendChild(detailDiv);
    detailButton.disabled = true; // Disable the button after use
});
app.appendChild(detailButton);

// Create a section to display squared numbers
const squaredSection = document.createElement("div");
squaredSection.innerHTML = `<h2>Squared Numbers</h2><p>${squaredNumbers.join(", ")}</p>`;
app.appendChild(squaredSection);

// Add styling
app.style.fontFamily = "Arial, sans-serif";
title.style.color = "#2c3e50";
squaredSection.style.marginTop = "20px";
