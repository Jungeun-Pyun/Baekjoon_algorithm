// console.log("Hello World!")

//--------------------------------------------------------------

// console.log("강한친구 대한육군\n강한친구 대한육군")
//줄바꿈 : \n

//--------------------------------------------------------------

// console.log("\\    /\\\n )  ( ')\n(  /  )\n \\(__)|")
// string내에서 \ 작성할 때 : \\

//--------------------------------------------------------------

// console.log("|\\_/|\n|q p|   /}\n( 0 )\"\"\"\\\n|\"^\"`    |\n||_/=\\\\__|")
// string내에서 " 작성할 때 : \"

//--------------------------------------------------------------

// const readline = require("readline") //readline : 입력값 받는 모듈

// let a
// let b
// const rl=readline.createInterface({ //input, output 모두 설정해주어야 입력값, 출력값이 정상적으로 동작함
//     input : process.stdin,
//     output : process.stdout
// })

// rl.on('line', (input) => { // (input) => {} == function(input){}
//     let numbers = input.split(" ") //input값을 설정한 부호를 기준으로 나눠줌, 이 때는 빈칸
//     console.log(numbers, typeof(numbers)) //[ '1', '2' ] object
//     // a = numbers[0]
//     // b = numbers[1]
//     // console.log(a, b, typeof(a), typeof(b)) //1,2,string,string
//     console.log(typeof(numbers[0])) //string
//     a = Number(numbers[0])
//     b = Number(numbers[1])
//     c = Number(numbers[2])
//     // console.log(a+b)
//     // console.log(a-b)
//     // console.log(a*b)
//     // // c = parseInt(a/b)
//     // console.log(parseInt(a/b))
//     // console.log(a%b)
//     // console.log((a+b)%c)
//     // console.log(((a%c) + (b%c))%c)
//     // console.log((a*b)%c)
//     // console.log(((a%c) * (b%c))%c)
// })

// rl.on('close', function(){
//     console.log(a+b)
//     process.exit() //이벤트 루프 종료
// })

// //--------------------------------------------------------------

/*
const readline = require("readline") //readline : 입력값 받는 모듈

const rl=readline.createInterface({ // createInterface : Input, Output 값 생성 API
    input : process.stdin,
    output : process.stdout
})

input=[]
rl.on('line', (line) => {
    let numbers1 = line.split("") //input값을 나눠줌
    // console.log(numbers1, typeof(numbers1), Object.keys(numbers1).length)
    // console.log(input)
    L = Object.keys(numbers1).length
    // console.log(L)
    for (i=0; i<L; i++) {
    input.push(numbers1[i])
    }
    // console.log(input)
    a = Number(input[0])
    b = Number(input[1])
    c = Number(input[2])
    d = Number(input[3])
    e = Number(input[4])
    f = Number(input[5])
    // console.log(a,b,c,d,e,f)
    N1 = (a*100)+(b*10)+c
    R1=(N1*f)
    R2=(N1*e)
    R3=(N1*d)
    Result = (R1+R2*10+R3*100)
    // console.log(N1)
    // rl.close()
})

rl.on('close', function(){
    console.log(R1)
    console.log(R2)
    console.log(R3)
    console.log(Result)
    process.exit() //이벤트 루프 종료
})
*/

// //--------------------------------------------------------------

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let nums = []
rl.on('line', (input) => {
    nums.push(input)
}).on('close', function () {
    let num1 = nums[0]
    let num2 = nums[1]
    let fir = Math.floor((num2 / 100) % 10);
    let sec = Math.floor((num2 / 10) % 10)
    let last = num2 % 10;
    console.log(num1 * last);
    console.log(num1 * sec);
    console.log(num1 * fir);
    console.log(num1*num2)
    process.exit();
});