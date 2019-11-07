function kub(){
    let kub1 = Math.floor(Math.random() *6 + 1);
    let kub2 = Math.floor(Math.random() *6 + 1);
    console.log("Кубики: ", kub1,",", kub2);
}
function coin(){
    let orel =  Math.round(Math.random());
    if(orel ==0){
        console.log("orel");
    }else{
        console.log('reshka');
    }
}
function randomUserNamber(){
    let maxNumber = prompt("Input number: ");
    console.log("Число от 1 до введенного: ");
    console.log(Math.floor(Math.random() *(maxNumber - 1) + 1));
}
function randNumbers(){
    let number1 = +prompt("Input number1: ");    
    let number2 = +prompt("Input number2: ");
    console.log("10 случайных чисел: ");
    if(number2>number1){
        let temp = number1;
        number1 = number2;
        number2 = temp;
    }
    for (var i = 0; i < 10; i++){
        console.log(Math.floor(Math.random() *(number1 - number2) + number2));    
    }
} 


kub();
coin();
randomUserNamber();
randNumbers();