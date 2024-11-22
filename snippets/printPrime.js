// write prime numbers

function checkPrime(n){
  for(let i=2; i < n; i++ ){
    if(n % i == 0) return false
  }
  return true
}

function printPrime(number1, number2){
  for(let i = number1; i < number2; i++){
    if(checkPrime(i)){
        console.log(i)
    }
  }
}

printPrime(10,100);