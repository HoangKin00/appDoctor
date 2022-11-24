import DoctorProfileItem from "./DoctorProfileItem.js";

class DoctorExp {
    constructor({exp}) {
        this.exp = exp
        this.$container = document.createElement('div')
        this.$title = document.createElement('h4')
        
        this.$icon = document.createElement('img')
        this.$icon.src = 'assets/images/ic-kn.png'

        this.$text = document.createElement('b')
        this.$text.innerHTML = 'Kinh nghiệm'

        this.$list =document.createElement('ul')
        this.renderItem()
    }
    renderItem = () => {
        this.$list.innerHTML = ''
        for (let item of this.exp) {
            this.$item = new DoctorProfileItem({title:item})
            this.$list.appendChild(this.$item.render())
        }
        return this.$list
    }
    render() {
        this.$container.appendChild(this.$title)
        this.$title.appendChild(this.$icon)
        this.$title.appendChild(this.$text)
        this.$container.appendChild(this.$list)
        
        return this.$container
    }
}
export default DoctorExp