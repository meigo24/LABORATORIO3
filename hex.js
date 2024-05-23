const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colors = ["#43A2F5",
"#9B59B6",
"#2ECC71",
"#F7DC6F",
"#E74C3C",
"#8E44AD",
"#1ABC9C",
"#3498DB",
"#F1C40F",
"#E67E73"];

const btn = document.getElementById("btn")

const color =document.getElementById("color")
btn.addEventListener ("click",() =>{
    const numerosAleatorios=getRandomNumber();
    document.body.style.backgroundColor =colors[numerosAleatorios];

} );
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}
