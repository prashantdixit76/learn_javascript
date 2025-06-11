//JAVASCRIPT EXECUTION CONTEXT
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context

//  {JS CODE }  => MEMORY CREATION FHASE
//      => EXECUTION PHASE 


//SAMPLE JS  EXAMPLE FOR UNDERSTAND

/*let val1 = 10
let val2 = 5
function addnum( num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1, val2)
let result2= addnum(10,2)
console.log(result1)
console.log(result2)*/

//let understand stap by stap of above js code
//step1 => Globel Execution Context

//atep2 => Memory Creation Phase
/*         val1 = undefine
           val2 = undefine
           addnum = defination
           result1 = undefine
           result2 = undefine
*/

//step3 => Execution Phase
/*val1 = 10
  val2 = 5
  addnum = (MAKE A NEW VARIABLE ENVIRONMENT + EXECUTION THREAD)
  addnum{
  memory fase
  val1 = undefined
  val2 = undefined
  total = undefined

  execution context
  num1 = 10
  num2 = 5
  total = 15
  }
  */

// call stack
//follow LIFO (last in first out)








