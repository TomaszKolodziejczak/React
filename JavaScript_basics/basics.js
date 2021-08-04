// arrow function
// 1
const fn = (item) => {
    console.log("Argument name: " + item)
}

// 1a
const fn = item => console.log("Argument name: " + item)


// 2
const fn = (item1, item2) => (
    `'Arguments' names:  ${item1} i ${item2}`
)


// join
const users = ["John", "Albert", "Mick", "Tom"];
const userString = users.join(" ");
console.log(userString) // John Albert Mick Tom

// concat
const users = ["John", "Albert", "Mick", "Tom"];
const newUser = "Ann"
const allUsers = users.concat(newUser)
console.log(allUsers); // "John", "Albert", "Mick", "Tom", "Ann"]