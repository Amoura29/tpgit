export class ListCategory extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`<select name="category">
        </select>`
        let url="https://opentdb.com/api_category.php"
        let r=await((await (fetch(url))).json())
        for (let i of r.trivia_categories){
            let code=`<option value=${i.id}>${i.name}</option>`
            this.querySelector("select").innerHTML+=code
        }
    }
}
customElements.define('list-category', ListCategory);