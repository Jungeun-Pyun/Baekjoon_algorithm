# Baekjoon_algorithm
## Authored by Jungeun Pyun

<백준 - 단계별로 풀어보기> 문제 풀이입니다 : <https://www.acmicpc.net/step>
- 사용언어 : node.js

***

## 📌 입출력과 사칙연산 : <https://www.acmicpc.net/step/1>

### 1\. 문제 번호 2557

-   Hello World! 출력

```javascript
console.log("Hello World!")
```

### 2\. 문제번호 10718

-   두 줄에 걸쳐 "강한친구 대한육군"을 한 줄에 한 번씩 출력한다

String 내에서 줄바꿈 : \\n

```javascript
console.log("강한친구 대한육군\n강한친구 대한육군")
```

### 3\. 문제번호 10171

-   고양이 출력

String 내에서 \\ 작성 : \\\\

```javascript
console.log("\\    /\\\n )  ( ')\n(  /  )\n \\(__)|")
```

### 4\. 문제번호 10172

-   개 출력하기

string내에서 " 작성 : \\"

```javascript
console.log("|\\_/|\n|q p|   /}\n( 0 )\"\"\"\\\n|\"^\"`    |\n||_/=\\\\__|")
```

### 5\. 문제번호 1000

-   두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
-   예제 입력 : 1 2 
-   예제 출력 : 3

값을 입력 받기 위해서는 값을 입력받는 모듈인 readline을 호출해야 한다.

readline.createInterface API를 사용하여 Input, Output값을 주고받을 수 있는 readline interface를 생성한다. 이때, 내부에 input, output값을 넣어줘야 입출력 동작이 이루어 진다.

readline interface를 생성 후에 line 이벤트에 대한 listener를 설정한다. 이때, 사용자가 직접 입력한 input이라는 매개변수를 받아와서 동작 함수가 진행된다.

문제에서 제시한 예제 입력에 따르면 두 값은 빈 공간으로 나누어져서 입력받아야 한다.

따라서 값을 나눠서 받을 수 있는 input.split 함수를 사용한다. input.split은 설정한 부호에 따라 값을 나눠주며 하기 예시에서는 빈칸을 기준으로 나누어진다.

생성한 numbers를 확인해보면 객체 type으로 이루어져 있고, 안에 있는 value는 string이다.  값이 string인 경우 + 연산이 제대로 되지 않기 때문에 value를 모두 Number로 변환해 주어야한다. (\* string 값으로 계산할 경우  '1' + '2' = 12)

```javascript
console.log(numbers, typeof(numbers)) //[ '1', '2' ] object
console.log(typeof(numbers[0])) //string
```

마지막 close로 결과값 출력과 동시에 이벤트 루프를 종료한다.

```javascript
const readline = require("readline") //readline : 입력값 받는 모듈

let a
let b
const rl=readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.on('line', (input) => {           // (input) => {} == function(input){}
    let numbers = input.split(" ")

    a = Number(numbers[0])
    b = Number(numbers[1])
 })

rl.on('close', function(){
    console.log(a+b)
    process.exit()                    //이벤트 루프 종료
})
```

### 6\. 문제 번호 1001, 10998, 1008, 10869, 10430

-   사칙연산, 나머지

해당 5문제는 1000번 문제에서 부호만 변경하면 되므로 언급하지 않겠다.

### 7\. 문제번호 2588

-   (세 자릿수) × (세 자릿수)는 다음과 같은 과정을 통하여 이루어진다. (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오

<img src="https://blog.kakaocdn.net/dn/bv4bLm/btqTSS8L3Ek/KPiJZFsM68EOw0NNNiLPwk/img.png"></img>

본 문제에선 값을 2번 입력해 주어야 했다. 그래서 값을 입력하는 동안 이전 값을 보관할 수 있는 input이라는 테이블을 하나 만들어주었다. 또한 나눠지지 않은 3자리 수를 받아와야 하므로, split에 어떠한 값도 주지 않았다. 

문제가 원한 것은 단지 3자리 수 두 개의 곱셈 값이 아닌 각각의 계산 과정이었기 때문에 입력한 값들을 모두 하나씩 input 테이블에 넣어주기 위한 for문을 만들었다. 뒤의 계산식은 어떻게든 값을 도출해내기 위해 만든 식이다.

```javascript
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
```

---

보다 쉬운 방법을 찾아서 추가

숫자를 하나씩 받아오는 것이 아니라 두 개의 세 자리 숫자를 받아와서 곱해주는 값만 분해하는 방법이다.

```javascript
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
```


#### 참고코드 : inputoutput 폴더 내 Solution.js
블로그링크 : <https://jungeunpyun.tistory.com/14?category=914393>

***

## 📌 if 문 : <https://www.acmicpc.net/step/4>

### 1\. 문제 번호 1330번, 두 수 비교하기

```javascript
const readline = require("readline")

let a
let b
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.on('line',(input) => {
    let numbers = input.split(" ")

    a = Number(numbers[0])
    b = Number(numbers[1])

    if(a>b) {
        console.log('>')
        }else if (a<b) {
        console.log('<')
        }else {
        console.log('==')
        }
})

rl.on('close', ()=>{

    process.exit()
})
```

### 2\. 문제번호 9498번, 시험 성적

split을 활용하여 값을 여러 개 입력하면 object 형태로 들어가지만 하나의 값만 넣어주면 string으로 들어가게 된다. 이때 **parseInt**를 사용하여 string을 정수값으로 변경할 수 있다.

처음에 a값 범위를 정할 때, 100>=a>=90 으로 작성했더니 어떤 수를 넣더라도 F가 나왔다. 다중 범위를 넣어줄 땐 **&&**를 사용하는 것을 잊지 말자!

```javascript
const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let a

rl.on('line',(input)=>{
    // console.log(input, typeof(input)) //값 string
    a=parseInt(input)  
    // console.log(a, typeof(a)) 
    if(100>=a && a>=90) {
        console.log('A')
    }else if (90>a && a>=80) {
        console.log('B')
    }else if (80>a && a>=70) {
        console.log('C')
    }else if (70>a && a>=60) {
        console.log('D')
    }else {
        console.log('F')
    }

})

rl.on('close',()=>{
    process.exit()
})
```

### 3\. 문제번호 2753번, 윤년

```javascript
const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let y

rl.on('line',(input)=>{
    y=parseInt(input)  
    if(y%100==0 && y%400==0){
        console.log('1')
    }else if (y%100!=0 && y%4==0){
        console.log('1')
    }else {
        console.log('0')
    }
})

rl.on('close',()=>{
    process.exit()
})
```

### 4\. 문제번호 14681번, 사분면 고르기

값을 두개를 받아와야 하기 때문에, 처음 전제조건에 length를 2로 넣어주고 그 안에서 분기를 나눴다.

```javascript
const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let numbers = []

rl.on('line',(input)=>{
    numbers.push(input)

    x = Number(numbers[0])
    y = Number(numbers[1])
})

rl.on('close',()=>{
    if (numbers.length == 2){
        if (x>0 && y>0){
            console.log('1')
        }else if (x<0 && y>0){
            console.log('2')
        }else if (x<0 && y<0){
            console.log('3')
        }else {
            console.log('4')
        }
    }
    process.exit()
})

```

### 5\. 문제번호 2884번, 알람시계

개인적으로 분 단위를 먼저 나누고, 그 안에서 시간 단위를 나누는 것이 편하다고 생각하여 다음과 같이 분기를 나눴다.

```javascript
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
```

#### 참고코드 : if 폴더 내 if.js
블로그링크 : <https://jungeunpyun.tistory.com/29?category=914393>

***

## 📌 for 문 : <https://www.acmicpc.net/step/3>

### 1\. 문제번호 2739, 구구단

구구단이기 때문에 1부터 9까지 for문을 돌려주었다.

```javascript
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
```

### 2\. 문제번호 10950, A+B 출력

rl.on('line', function)으로 받아오는 값은 어차피 라인별로 구분되기 때문에 줄을 신경 쓸 필요는 없다. 다만 여기서 주의할 점은 첫 번째 줄에는 테스트 케이스의 개수가 주어지기 때문에 처음 인수는 제외하고 값을 더해야 한다.

input을 split 하여 nums 테이블에 넣으면 아래와 같이 테이블 형식으로 나오고, 한 줄에 작성된 내용은 하나의 프로퍼티 값으로 들어간다. 따라서 nums의 길이는 line 개수가 되고, 각각의 숫자를 가져오기 위해선 nums\[i\]\[0\] 형식으로 depth를 하나 더 들어가야 한다.

```javascript
//console.log(nums)결과
[
  [ '5' ],
  [ '1', '1' ],
  [ '2', '3' ],
  [ '3', '4' ],
  [ '9', '8' ],
  [ '5', '2' ]
]
```

```javascript
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
```

---

같은 문제의 다른 solution이 있어서 소개해보겠다.

rl.once를 사용하면 처음 한 line만 읽어오는 것이 가능하다. 따라서 처음 값을 따로 저장해둘 수 있다.

이후 라인별로 읽어올 때마다 값들을 더한다. 이때, rl.once가 들어갔다고 해서 첫 번째 라인이 rl.on에 해당되지 않는 것은 아니다. 따라서 두 개의 값을 넣어주는 라인으로 구분하기 위해 length로 분기처리를 해주었다.

첫번째 입력값으로 넣어준 만큼 라인을 돌리고 나면 자동으로 close() 이벤트를 실행하고 values 테이블에 push 해둔 값들을 출력하면서 동작이 종료된다.

```javascript
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
```

### 3\. 문제번호 8393, 합 구하기

```javascript
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
```

### 4\. 문제번호 15552,  빠른 A+B

해당 문제는 for문을 사용할 때 입출력 방식이 느리면 여러 줄을 입력 및 출력할 때 발생하는 시간 소모를 해결하는 것을 목표로 한다. javascript 기반 node.js에서 해당 문제를 해결할 때는 값들을 하나의 변수에 모두 넣어둔 뒤에 해당 변수만 출력하는 방식으로 해결할 수 있다.

answer이라는 값을 선언해주었고, 해당 변수에 값들을 string 형식으로 연결해서 붙였다. 마지막 라인에서는 줄 바꿈이 일어나지 않도록 분기처리 하였다.

```javascript
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
```

### 5\. 문제번호 2741, 1부터 N까지 출력하기

1부터 출력되도록 i 값을 1에서 시작하게끔 for문을 돌려주었다. 분기처리는 간단한 조건식을 사용하였다.

```javascript
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
```

### 6\. 문제번호 2742, N부터 1까지 출력하기

위와 반대로 N부터 출력이 되도록 i 값을 input에서 시작하게끔 만들어 주었다.

```javascript
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
```

### 7\. 문제번호 11022, A+B에 string 추가

```javascript
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
```

### 8\. 문제번호 2438, 별 찍기 1

1개부터 N개까지 순차적으로 별을 출력한다. 별이 하나씩 추가되기 때문에 answer값을 매번 초기화하지 않고 기존 값에 별을 추가하여 출력하였다.

```javascript
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
```

### 9\. 문제번호 2439, 별 찍기 2

1개부터 N개까지 순차적으로 별을 찍지만 오른쪽 정렬이 되게끔 한다. 우선 상위 for문은 별의 개수를 기준으로 잡아서 i값을 1부터 시작했다. 이때 위 문제와 달리 출력 후에 answer값이 매번 초기화되도록 선언을 for문 안쪽에 해주었다.

하위 for문은 space값 기준으로 j값이 input에서부터 시작한다. j값이 i값보다 큰 경우 space을 넣어주고, j값과 i값이 일치하는 순간부터 별을 입력한다. 입력은 결국 input값만큼 일어나야 하기 때문에 j>0까지 for문을 돌려주었다.

```javascript
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
```

### 10\. 문제번호 10871, x보다 작은 수 구하기

값의 전체 길이와 x값을 받아서 그보다 작은 수를 출력한다. 문제번호 10950에서 설명한 바와 같이 nums 테이블의 길이는 2이고, depth를 한번 더 들어가서 값을 받아와야 한다.

```javascript
//console.log(nums)

[
  [ '10', '5' ],
  [
    '1', '10', '4',
    '9', '2',  '3',
    '8', '5',  '7',
    '6'
  ]
```

```javascript
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
```
#### 참고코드 : for 폴더 내 for.js
블로그링크 : <https://jungeunpyun.tistory.com/46?category=914393>