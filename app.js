class calculator {
  constructor(initialValue = 0){
    this.value = initialValue
  }
  add(number){
    this.value += number
  }
  subtract(number){
    this.value -= number
  }
  multiply(number){
    this.value *= number
  }
  divide(number){
    if(number !== 0){
      this.value /= number
    }else{
      console.log(`Divide by 0 is not possible`)
    }
  }
  show(){
    alert(this.value)
  }
}
let n = new calculator(10)
n.add(5)
n.subtract(10)
n.multiply(2)
n.divide(5)
n.show()//n = 2

    
