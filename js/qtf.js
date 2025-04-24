export class qtf extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`
        Q: <p>${this.getAttribute().question}</p>
        <button id="b1">True</button>
        <button id="b2">False</button>`
        let b1=this.querySelector("#b1");
        let b2=this.querySelector("#b2");
        b1.addEventListner("click",()=>{
            if (this.getAttribute("correct")=="False")
            alert ("false");
            else
            alert("True good job!");     
        })
        b2.addEventListner("click",()=>{
            if (this.getAttribute("correct")=="False")
                alert("True good job!"); 

            else
                alert ("false");
                
        })
    }
}