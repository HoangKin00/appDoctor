
import { getClientByService } from "../apis/client.js"
import ClientItem from "./Clientitem.js"
import Sidebar from "./Sidebar.js"

class Client {
    index = 0
    value = 'Cắt Mí'
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'container'

        this.$detail = document.createElement('div')
        this.$detail.className = 'screen1__box'

        this.$client = document.createElement('div')
        this.$client.className = 'screen1__khachHang'

        this.$clientBox = document.createElement('div')
        this.$clientBox.className = 'screen1__clientBox'

        this.$clientImg = document.createElement('img')
        this.$clientImg.className = 'screen1__clientImg'

        this.$tabs = document.createElement('div')
        this.$tabs.className = 'screen1__tabs'
        this.renderItem()
    }
    setIndex = (index) => {
        this.index = index
    }
    setValue = (value) => {
        this.value = value
        this.renderItem()
        this.renderSidebar()
    }
    renderSidebar = () => {
        this.$detail.innerHTML = ''
        this.$sidebar = new Sidebar({ value: this.value, setValue: this.setValue })
        this.$detail.appendChild(this.$sidebar.render())
        this.$detail.appendChild(this.$client)
        this.$client.appendChild(this.$clientBox)
        this.$clientBox.appendChild(this.$clientImg)
        this.$clientBox.appendChild(this.$tabs)
    }
    renderItem = async () => {
        try {
            this.$tabs.innerHTML = ''
            const getData = await getClientByService({ service: this.value })
            const renderData = getData.image

            this.$clientImg.src = renderData[this.index]
            for (let i = 0; i < renderData.length; i++) {
                this.$clientItem = new ClientItem({
                    image: renderData[i],
                    i: i,
                    index: this.index,
                    setIndex: this.setIndex,
                    renderItem: this.renderItem
                });
                this.$tabs.appendChild(this.$clientItem.render())
            }
            return this.$tabs
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        this.$container.appendChild(this.$detail)
        this.renderSidebar()
        
        return this.$container
    }
}
export default Client