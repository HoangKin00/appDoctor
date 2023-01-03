import Header from "./Header.js"
import { menu } from "../util/util.js"
import { getComponent } from "../util/getComponents.js"
class Home {
    constructor() {
        this.$body = document.createElement('div')
        this.$body.className = 'body'
        this.$nav = document.createElement('div')
        
        this.$container = document.createElement('div')
        this.$container.className = 'main'
       
        this.$box = document.createElement('div')
        this.$header = new Header({ menu: menu,getLayout :this.getLayout})
    }
    getLayout= ()=>{
        if(!sessionStorage.getItem('link')){
            sessionStorage.setItem('link','bac-si')
        }
        this.$nav.appendChild(this.$header.render())
        getComponent(this.$box, menu,'link')
    }
    render(){
        this.$body.appendChild(this.$nav)
        this.$body.appendChild(this.$container)
        this.$container.appendChild(this.$box)
        this.getLayout()
        return this.$body
    }
}
export default Home