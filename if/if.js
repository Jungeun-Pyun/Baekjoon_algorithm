// const readline = require("readline")

// let a
// let b
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })

// rl.on('line',(input) => {
//     let numbers = input.split(" ")

//     a = Number(numbers[0])
//     b = Number(numbers[1])

//     if(a>b) {
//         console.log('>')
//         }else if (a<b) {
//         console.log('<')
//         }else {
//         console.log('==')
//         }
// })

// rl.on('close', ()=>{

//     process.exit()
// })

//-----------------------------------------------------

// const readline = require('readline')
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })

// let a

// rl.on('line',(input)=>{
//     // console.log(input, typeof(input)) //값 string
//     a=parseInt(input)  
//     // console.log(a, typeof(a)) 
//     if(100>=a && a>=90) {
//         console.log('A')
//     }else if (90>a && a>=80) {
//         console.log('B')
//     }else if (80>a && a>=70) {
//         console.log('C')
//     }else if (70>a && a>=60) {
//         console.log('D')
//     }else {
//         console.log('F')
//     }

// })

// rl.on('close',()=>{
//     process.exit()
// })

    // (100>=a && a>=90) ?
    // console.log('A')
    // : (90>a && a>=80) ?
    // console.log('B')
    // : (80>a && a>=70) ?
    // console.log('C')
    // : (70>a && a>=60) ?
    // console.log('D')
    // : console.log('F')

//-----------------------------------------------------

// const readline = require('readline')
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })

// let y

// rl.on('line',(input)=>{
//     y=parseInt(input)  
//     if(y%100==0 && y%400==0){
//         console.log('1')
//     }else if (y%100!=0 && y%4==0){
//         console.log('1')
//     }else {
//         console.log('0')
//     }
// })

// rl.on('close',()=>{
//     process.exit()
// })

//-----------------------------------------------------

// const readline = require('readline')
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })

// let numbers = []

// rl.on('line',(input)=>{
//     numbers.push(input)

//     x = Number(numbers[0])
//     y = Number(numbers[1])
// })

// rl.on('close',()=>{
//     if (numbers.length == 2){
//         if (x>0 && y>0){
//             console.log('1')
//         }else if (x<0 && y>0){
//             console.log('2')
//         }else if (x<0 && y<0){
//             console.log('3')
//         }else {
//             console.log('4')
//         }
//     }
//     process.exit()
// })

//-----------------------------------------------------

const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let numbers

rl.on('line',(input)=>{
    numbers = input.split(" ")

    h = Number(numbers[0])
    m = Number(numbers[1])

    if (m>=45){
        console.log(`${h} ${m-45}` )
    }else {
        if (h != 0){
        console.log(`${h-1} ${60-(45-m)}`)
        } else{
            console.log(`23 ${60-(45-m)}`)
        }
    }
})

rl.on('close',()=>{
    process.exit()
})