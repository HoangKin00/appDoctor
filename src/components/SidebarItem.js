class SidebarItem {
    constructor({ menu, setValue, value }) {
        this.value = value
        this.setValue = setValue
        this.menu = menu
        this.$item = document.createElement('li')
        this.$item.className = `tab-link btn ${this.value === this.menu ? 'active' : ''} `
        this.$item.innerHTML = menu
        this.$item.addEventListener('click', () => {
            this.clickMenu()
        })
    }
    clickMenu = () => {
        this.setValue(this.menu)
    }
    render() {
        return this.$item
    }
}
export default SidebarItem