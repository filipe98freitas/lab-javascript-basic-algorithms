// Iteration 1: Names and Input
let hacker1"Filipe"
let hacker2="Alexandre"

console.log(`The drivers name is ${hacker1}`)
console.log(`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals
hacker1 = hacker1.toUpperCase()
let outroHacker1 = ""
for(let i=0; i<hacker1.length; i++){
  outroHacker1 += hacker1[i] + " "
}
console.log(outroHacker1);

let outroHacker2 = ""
for(let i=hacker2.length-1; i>=0; i--){
  outroHacker2 += hacker2[i]
}
console.log(outroHacker2)
