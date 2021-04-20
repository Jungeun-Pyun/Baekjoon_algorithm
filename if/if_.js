
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
    // if(100>=a && a>=90) {
    //     console.log('A')
    // }else if (90>a && a>=80) {
    //     console.log('B')
    // }else if (80>a && a>=70) {
    //     console.log('C')
    // }else if (70>a && a>=60) {
    //     console.log('D')
    // }else {
    //     console.log('F')
    // }

    (100>=a && a>=90) ?
    console.log('A')
    : (90>a && a>=80) ?
    console.log('B')
    : (80>a && a>=70) ?
    console.log('C')
    : (70>a && a>=60) ?
    console.log('D')
    : console.log('F')

})

rl.on('close',()=>{
    process.exit()
})


