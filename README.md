# Baekjoon_algorithm
## Authored by Jungeun Pyun

<백준 - 단계별로 풀어보기> 문제 풀이입니다 : <https://www.acmicpc.net/step>
- 사용언어 : node.js

***

## 입출력과 사칙연산
<https://www.acmicpc.net/step/1>


### 1\. 문제 번호 2557

-   Hello World! 출력

```
console.log("Hello World!")
```

### 2\. 문제번호 10718

-   두 줄에 걸쳐 "강한친구 대한육군"을 한 줄에 한 번씩 출력한다

String 내에서 줄바꿈 : \\n

```
console.log("강한친구 대한육군\n강한친구 대한육군")
```

### 3\. 문제번호 10171

-   고양이 출력

String 내에서 \\ 작성 : \\\\

```
console.log("\\    /\\\n )  ( ')\n(  /  )\n \\(__)|")
```

### 4\. 문제번호 10172

-   개 출력하기

string내에서 " 작성 : \\"

```
console.log("|\\_/|\n|q p|   /}\n( 0 )\"\"\"\\\n|\"^\"`    |\n||_/=\\\\__|")
```

### 5\. 문제번호 1000

-   두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
-   예제 입력 : 1 2 
-   예제 출력 : 3

값을 입력 받기 위해서는 값을 입력받는 모듈인 readline을 호출해야 합니다.

readline.createInterface API를 사용하여 Input, Output값을 주고받을 수 있는 readline interface를 생성합니다. 이때, 내부에 input, output값을 넣어줘야 입출력 동작이 이루어 집니다.

readline interface를 생성 후에 line 이벤트에 대한 listener를 설정합니다. 이때, 사용자가 직접 입력한 input이라는 매개변수를 받아와서 동작 함수가 진행됩니다.

문제에서 제시한 예제 입력에 따르면 두 값은 빈 공간으로 나누어져서 입력받아야 합니다.

따라서 값을 나눠서 받을 수 있는 input.split 함수를 사용합니다. input.split은 설정한 부호에 따라 값을 나눠주며 하기 예시에서는 빈칸을 기준으로 나눠집니다.

생성한 numbers를 확인해보면 객체 type으로 이루어져 있고, 안에 있는 value는 string입니다.  값이 string인 경우 + 연산이 제대로 되지 않기 때문에 value를 모두 Number로 변환해 줍니다. (\* string 값으로 계산할 경우  '1' + '2' = 12)

```
console.log(numbers, typeof(numbers)) //[ '1', '2' ] object
console.log(typeof(numbers[0])) //string
```

마지막 close로 결과값 출력과 동시에 이벤트 루프를 종료합니다.

```
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

해당 5문제는 1000번 문제에서 부호만 변경하면 되므로 언급하지 않겠습니다.

### 7\. 문제번호 2588

-   (세 자릿수) × (세 자릿수)는 다음과 같은 과정을 통하여 이루어진다. (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오

[##_Image|kage@bv4bLm/btqTSS8L3Ek/KPiJZFsM68EOw0NNNiLPwk/img.png|alignCenter|data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

본 문제에선 값을 2번 입력해 주어야 했습니다. 그래서 값을 입력하는 동안 이전 값을 보관할 수 있는 input이라는 테이블을 하나 만들어주었습니다. 또한 나눠지지 않은 3자리 수를 받아와야 하므로, split에 어떠한 값도 주지 않았습니다. 

문제가 원한 것은 단지 3자리 수 두 개의 곱셈 값이 아닌 각각의 계산 과정이었기 때문에 입력한 값들을 모두 하나씩 input 테이블에 넣어주기 위한 for문을 만들었습니다. 뒤의 계산식은 어떻게든 값을 도출해내기 위해 만든 식입니다. 보다 더 쉽고 좋은 방법이 있다면 알려주시기 바랍니다 :)

```
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

보다 쉬운 방법을 찾아서 추가합니다.

숫자를 하나씩 받아오는 것이 아니라 두 개의 세 자리 숫자를 받아와서 곱해주는 값만 분해하는 방법입니다.

```
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

