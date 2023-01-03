import { app } from "../util/util.js"
import DoctorDetail from "./DoctorDetail.js"

class DoctorItem {
    constructor({ position, img, name, level, experience, detail }) {
        this.$doctorDetail = new DoctorDetail({ detail: detail, name: name, img: img, level: level,closeModal:this.closeModal })

        this.$cus = document.createElement('div')
        this.$cus.className = 'screen1__cus'
        this.$cus.addEventListener('click', () => {
            this.openModal()
        })

        this.$modal = document.createElement('div')
        this.$modal.className = 'modal-btn'

        this.$position = document.createElement('p')
        this.$position.innerHTML = position

        this.$pic = document.createElement('div')
        this.$pic.className = 'screen1__pic'

        this.$img = document.createElement('img')
        this.$img.src = img

        this.$des = document.createElement('div')
        this.$des.className = 'screen1__des'

        this.$name = document.createElement('b')
        this.$name.innerHTML = name

        this.$level = document.createElement('span')
        this.$level.innerHTML = level

        this.$experience = document.createElement('sp')
        this.$experience.innerHTML = experience

        this.$more = document.createElement('i')
        this.$more.className = 'modal-btn'
        this.$more.innerHTML = 'Xem thêm'

    }
    openModal = () => {
        app.appendChild(this.$doctorDetail.render())
    }
    closeModal = () => {
        app.removeChild(this.$doctorDetail.render())

    }
    render() {
        this.$cus.appendChild(this.$modal)
        this.$modal.appendChild(this.$position)
        this.$modal.appendChild(this.$pic)
        this.$pic.appendChild(this.$img)
        this.$modal.appendChild(this.$des)
        this.$des.appendChild(this.$name)
        this.$des.appendChild(this.$level)
        this.$des.appendChild(this.$experience)
        this.$des.appendChild(this.$more)
        return this.$cus
    }
}
export default DoctorItem