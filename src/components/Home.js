import Header from "./Header.js"
import { menu } from "../util/util.js"
import { getComponent } from "../util/getComponents.js"
class Home {
    constructor() {
        this.$body = document.createElement('div')
        this.$body.className = 'body'

        this.$container = document.createElement('div')
        this.$container.className = 'main'
       
        this.$box = document.createElement('div')
        this.$header = new Header({container:this.$box, menu: menu})
    }
    render(){
        if(!sessionStorage.getItem('link')){
            sessionStorage.setItem('link','bac-si')
        }
        getComponent(this.$box, menu)
        this.$body.appendChild(this.$header.render())
        this.$body.appendChild(this.$container)
        this.$container.appendChild(this.$box)
        return this.$body
    }
}
export default Home