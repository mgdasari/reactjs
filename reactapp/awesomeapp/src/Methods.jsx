
function Addition(a,b){
    return(`Sum of two number is ${a+b}`)
}

function Division(a,b){
   // return(<h1>Division of two number is {Math.round(11/5)}</h1>)
   return(`Division of two number is ${(a/b).toFixed(2)}`)
}

function Multiplication(a,b){
    return(`Multiplication of two number is ${a*b}`)
}

function Substraction(a,b){
    return(`Substraction of two number is ${a-b}`)
}

export {Division,Multiplication,Substraction,Addition}