

class HeaderItem {
    constructor({ title, link, menu, closeHeader,getLayout }) {
        this.getLayout=getLayout
        this.closeHeader = closeHeader
        this.menu = menu
        this.link = link
        this.$item = document.createElement('li')
        this.$item.className =`header__item nav-item ${sessionStorage.getItem('link') === this.link ? 'active' : ''} `

        this.$nav = document.createElement('a')
        this.$nav.className = `nav-link ${sessionStorage.getItem('link') === this.link ? 'active' : ''} `
        this.$nav.innerHTML = title
        this.$nav.addEventListener('click', () => {
            this.getInfo()
            
        })
    }
    getInfo = () => {
        sessionStorage.setItem('link', this.link)
        this.getLayout()
        this.closeHeader()
    }
    render() {
        this.$item.appendChild(this.$nav)
        return this.$item
    }
}
export default HeaderItem