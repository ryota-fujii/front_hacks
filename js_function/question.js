const kaidai_1= (age, callback) => {
    if(typeof age ==="number"){
        alert("数値が入力されていません")
    }
    else if(age<=20){
        alert("値は十以上です")
    }
    else if(age>=10){
        alert("値は十未満です")
    }
    else{
        alert("値は20~10です")
    }
}
const message = () =>{
    
}

kaidai_1(18,message)