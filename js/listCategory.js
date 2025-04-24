export class ListCategory extends HTMLElement{
    constructor(){
        super();
    }
    async connectedCallback(){
        this.innerHTML=`<select name="category">
        </select>`
        let url="https://opentdb.com/api_category.php"
        let r=await (fetch(url))
        let data=await(r.json())
        for (let i of data.trivia_categories){
            let code=`<option value=${i.id}>${i.name}</option>`
            this.querySelector("select").innerHTML+=code
        }
    }
}
customElements.define('list-category', ListCategory);