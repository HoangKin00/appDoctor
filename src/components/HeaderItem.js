import { getComponent } from "../util/getComponents.js"

class HeaderItem {
    constructor({ title, link, container, menu, closeHeader }) {
        this.closeHeader = closeHeader
        this.container = container
        this.menu = menu
        this.link = link
        this.$item = document.createElement('li')
        this.$item.className = 'header__item nav-item'

        this.$nav = document.createElement('a')
        this.$nav.className = 'nav-link'
        this.$nav.innerHTML = title
        this.$nav.addEventListener('click', () => {
            this.getInfo()
            
        })
    }
    getInfo = () => {
        sessionStorage.setItem('link', this.link)
        getComponent(this.container, this.menu)
        this.closeHeader()
    }
    render() {
        this.$item.appendChild(this.$nav)
        return this.$item
    }
}
export default HeaderItem