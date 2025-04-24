export class Calculator extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `<input type="number" id="num1" placeholder="Enter first number"/>
        <select id="op">
        <option value="add">+</option>
        <option value="min">-</option>
        <option value="mult">*</option>
        <option value="div">/</option>
        </select>
        <input type="number" id="num2" placeholder="Enter second number"/>
        <button id="calc">Calculate</button>`
        this.querySelector('#calc').addEventListener('click',()=>{
            alert(this.getAttribute("color"))
            const n1=parseFloat(this.querySelector("#num1").value);
            const n2=parseFloat(this.querySelector("#num2").value);
            const op=this.querySelector("#op").value;
            var res;
            if (isNaN(n1) || isNaN(n2)){
                alert("you have to enter two numbers!!!")
            }else{
                if (op=="add"){
                    res=n1+n2;
                    alert(`${n1}+${n2}=${res}`)
                }else if (op=="min"){
                    res=n1-n2;
                    alert(`${n1}-${n2}=${res}`)
                }else if (op=="mult"){
                    res=n1*n2;
                    
                    alert(`${n1}*${n2}=${res}`)
                }else {
                    res=n1/n2;
                    alert(`${n1}/${n2}=${res}`)
                }  
            }   
        })
    }}
customElements.define('my-calculator', Calculator);