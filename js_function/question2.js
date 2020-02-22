const kaidai_1= (age, callback) => {
    callback(age)
}
const message = (age) =>{
    if((typeof age) !== "number"){
        alert("数値が入力されていません")
    }
    else if(age>=20){
        alert("値は十以上です")
    }
    else if(age<10){
        alert("値は十未満です")
    }
    else{
        alert("値は20~10です")
    }
}

// kaidai_1(1,message)



(function(x,y){
    console.log(x,y,x+y);
})(10,20);