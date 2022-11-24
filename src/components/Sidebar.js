import SidebarItem from "./SidebarItem.js"
import { sidebar } from "../util/util.js"

class Sidebar {
    constructor({ value, setValue }) {
        this.value = value
        this.setValue = setValue
        this.$menu = document.createElement('ul')
        this.$menu.className = 'boxMenu'
    }
    render = () => {
        this.$menu.innerHTML = ''
        for (let item of sidebar) {
            this.$item = new SidebarItem({ menu: item.menu, setValue: this.setValue,value:this.value })
            this.$menu.appendChild(this.$item.render())
        }
        return this.$menu
    }

}
export default Sidebar;