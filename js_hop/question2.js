let question = "問題";
let answer = "正解";
let input = "";
while(answer !== input){
    input = window.prompt(question);
    if (input.toLowerCase() == answer){
        alert("正解です！");
    }
    else{
        alert("残念☆")
    }
}