const names =["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {
  if (names[i][0].toLowerCase() === "j") {
    console.log(`Goodbye ${names[i]}`);
  } else {
    console.log(`Hello ${names[i]}`);
  }
}
