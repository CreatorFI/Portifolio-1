function explainCallback(name,age, task){
    console.log("Hello", name);      
    console.log("Tomar Boyosh", age);   
    task();   
}
function PukureNamo(){
    console.log("Jao Pukure Namo");
}
function gosolKoro(){
    console.log("Maro Jhap");
}
explainCallback('Kaalu',12,PukureNamo);