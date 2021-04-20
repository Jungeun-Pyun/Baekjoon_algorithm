//------------------------------------------------------------------------------------2739

/*
const readline = require("readline")

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.on('line',(input) => {

    for(let i=1;i<10;i++){
        console.log(`${input} * ${i} =`,input*i)
    }
})

rl.on('close', ()=>{
    process.exit()
})
*/

//------------------------------------------------------------------------------------10950



//Solution 1
/*
const readline = require("readline")
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
let nums = []
rl.on('line', (input) => {
    if(input){
        nums.push(input.split(" "))
    }
}).on('close', function () {
    console.log(nums)
    // console.log(nums[0])
    // console.log(Number(nums[0]))

    // console.log("nums : ", nums)
    for (let i=1;i<nums.length;i++){
        // console.log(nums.length)
        // console.log(Number(nums[i][0]))
        console.log(Number(nums[i][0])+Number(nums[i][1]))
    }
    process.exit();
});
*/



//Solution 2
/*
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let totalLength = 0
let proceed = 0
const values = []
rl.once('line', (input)=>{ //once 쓰면 한줄만 읽어오기 가능
    totalLength = Number(input)
})
rl.on('line',(answer)=>{
    const splitedAnswer = answer.split(' ')
    // console.log(splitedAnswer)
    if(splitedAnswer.length > 1){
        values.push(Number(splitedAnswer[0]) + Number(splitedAnswer[1]))
    }
    if(totalLength === proceed) //전체 다 돌면 자동 종료
        rl.close()
    proceed++
}).on('close',(input)=>{
    // console.log(‘input’,input)
    for(const item of values){console.log(item)}
})
*/


//------------------------------------------------------------------------------------8393

/*
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let sum = 0
rl.on('line', (input) => {
    for(let i=1;i<=input;i++){
        // console.log(input)
        sum += i
        // console.log(sum)
    }
    console.log(sum)
    rl.close()
}).on('close',(input) => {
    // console.log(sum)
})
*/

//------------------------------------------------------------------------------------15552

/*
const readline = require("readline")
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
let nums = []
let answer = ""
rl.on('line', (input) => {
    if(input){
        nums.push(input.split(" "))
    }
}).on('close', function () {
    // console.log(nums[0])
    // console.log(Number(nums[0]))

    // console.log("nums : ", nums)
    for (let i=1;i<nums.length;i++){
        // console.log(nums.length)
        // console.log(Number(nums[i][0]))
        sum = Number(nums[i][0])+Number(nums[i][1])
        if(i<nums.length-1){
            answer += `${sum}\n`
        } else {
            answer += `${sum}`
        }
    }
    console.log(answer)
    process.exit();
});
*/


//------------------------------------------------------------------------------------2741

/*
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answer = ""
rl.on('line', (input) => {
    for(let i=1;i<=input;i++){
        (i<input) ? answer += i+"\n" : answer += i
    }
    console.log(answer)
    rl.close()
})
*/


//------------------------------------------------------------------------------------2742

/*
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answer = ""
rl.on('line', (input) => {
    for(let i=input;i>0;i--){
        (i>1) ? answer += i+"\n" : answer += i
    }
    console.log(answer)
    rl.close()
})
*/

//------------------------------------------------------------------------------------11022

/*
const readline = require("readline")
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
let nums = []
let answer = ""
rl.on('line', (input) => {
    if(input){
        nums.push(input.split(" "))
    }
}).on('close', function () {
    // console.log(nums[0])
    // console.log(Number(nums[0]))

    // console.log("nums : ", nums)
    for (let i=1;i<nums.length;i++){
        // console.log(nums.length)
        // console.log(Number(nums[i][0]))
        sum = Number(nums[i][0])+Number(nums[i][1])
        if(i<nums.length-1){
            answer += `Case #${i}: ${nums[i][0]} + ${nums[i][1]} = ${sum}\n`
        } else {
            answer += `Case #${i}: ${nums[i][0]} + ${nums[i][1]} = ${sum}`
        }
    }
    console.log(answer)
    process.exit();
});
*/

//------------------------------------------------------------------------------------2438

/*
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answer = ""
rl.on('line', (input) => {
    for(let i=1;i<=input;i++){
        answer += "*"
        console.log(answer)
    }
    // console.log(answer)
    rl.close()
})
*/


//------------------------------------------------------------------------------------2439

/*
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (input) => {
    for(let i=1;i<=input;i++){
        let answer = ""
        for(let j=input;j>0;j--){
            if (j>i){
                answer += " "
            } else{
                answer += "*"
            }
        }
     console.log(answer)
    }
    rl.close()
})
*/

//------------------------------------------------------------------------------------10871


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nums = []
let answer = ""
rl.on('line', (input) => {
    if(input){
        nums.push(input.split(" "))
        // console.log(nums)
    }
}).on('close', function() {
    totalLength = Number(nums[0][0])
    limitNumber = Number(nums[0][1])
    if (totalLength == nums[1].length) {
        for(let i=0;i<nums[1].length;i++){
            if (nums[1][i] < limitNumber) { 
                answer += nums[1][i] + " "}
        }
        console.log(answer)
    }

});
