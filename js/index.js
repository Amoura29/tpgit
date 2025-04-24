import { ListCategory } from "./listCategory.js";
var b=document.querySelector("button")
var listQTF=document.querySelector("listQTF")
 async function generateQt(){
    let val=document.querySelector("select").value
    let res= await fetch(`https://opentdb.com/api.php?amount=5&category=${val}&difficulty=easy&type=boolean`);
    let data =await res.json()
    for(let q of data.results){
        let code=`<qtf question=${q.question} correct=${q.correct_answer}`
        listQTF.innerHTML+=code;

    }
 }
 b.addEventListener("click",generateQt)

