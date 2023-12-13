function factorial(num){
    if(num==0){
        return 1
    }
    return num*factorial(num-1)
}

const input1= 5
const input2= 2
const input3= 8

const result1= factorial(input1)
const result2= factorial(input2)
const result3= factorial(input3)

console.log(`factorial of ${input1} is : ${result1}`)
console.log(`factorial of ${input2} is : ${result2}`)
console.log(`factorial of ${input3} is : ${result3}`)