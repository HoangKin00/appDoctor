import { getInfoBySerrvice } from "../apis/information.js"
import InformationItem from "./InfomationItem.js"
import Sidebar from "./Sidebar.js"
class Information {
    value = 'Cắt Mí'
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'container'

        this.$infoBox = document.createElement('div')
        this.$infoBox.className = 'screen1__box'

        this.$infoPic = document.createElement('div')
        this.$infoPic.className ='screen1__infomation'
        
        this.renderItem()
    }
    setValue = (value) => {
        this.value = value
        this.renderItem()
        this.renderSidebar()
    }
    renderSidebar = () => {
        this.$infoBox.innerHTML = ''
        this.$sidebar = new Sidebar({ value: this.value, setValue: this.setValue })
        this.$infoBox.appendChild(this.$sidebar.render())
        this.$infoBox.appendChild(this.$infoPic)
    }
    renderItem = async() => {
        try {
            this.$infoPic.innerHTML = ''
            const getData = await getInfoBySerrvice({ service: this.value })
            const renderData = getData.image
            for (let i = 0; i < renderData.length; i++) {
                this.$infoItem = new InformationItem({
                    image: renderData[i]
                }) 
                this.$infoPic.appendChild(this.$infoItem.render())
            }
            return this.$infoPic
        } catch (error) { 
            console.log(error);
        }
    }
    render(){
        this.$container.appendChild(this.$infoBox)
        this.renderSidebar()
        return this.$container
    }
}
export default Information