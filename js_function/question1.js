const isOddNumber = (num) =>{
    if(num%2!==0){
        return true
    }
    else{
        return false
    }
};

const factorial = (num) =>{
    result = 0
    for(i=1;i<=num;i++){
        result += i;
    }
    return result
}

const convertFirstCharacterToUpperCase = (word) =>{
    return word.charAt(0).toUpperCase() + word.slice(1);

}





console.log(isOddNumber(9))
console.log(factorial(5))
console.log(convertFirstCharacterToUpperCase("hello"))