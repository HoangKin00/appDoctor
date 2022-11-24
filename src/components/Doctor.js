import { filterData } from "../apis/data.js";
import DoctorItem from "./DoctorItem.js"
import SelectAdd from "./SelectAdd.js";
import Sidebar from "./Sidebar.js";

class Doctor {
    value = ''
    address = 'Tất cả'
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'container'

        this.$all = document.createElement('div')

        this.$detail = document.createElement('div')
        this.$detail.className = 'screen1__box'

        this.$doctor = document.createElement('div')
        this.$doctor.className = 'screen1__doctor'
        this.$selectAdd = new SelectAdd({setAddress:this.setAddress})
        this.renderItem()

    }
    setAddress = (address) => {
        this.address = address
        this.renderItem()
        this.renderSidebar()
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
        this.$detail.appendChild(this.$doctor)
    }
    renderItem = async () => {
        try {
            const getData = await filterData({ service: this.value , address: this.address})
            this.$doctor.innerHTML = ''
            for (let item of getData) {
                this.$doctorItem = new DoctorItem({
                    position: item.level,
                    img: item.avatar,
                    name: item.name,
                    level: item.level,
                    experience: item.exp,
                    detail: item.detail
                });
                this.$doctor.appendChild(this.$doctorItem.render())
            }
            return this.$doctor
        } catch (error) {
            console.log(error);
        }

    }
    render() {
        this.$container.appendChild(this.$all)
        this.$all.appendChild(this.$selectAdd.render())
        this.$all.appendChild(this.$detail)

        this.renderSidebar() 
        return this.$container
    }
}
export default Doctor