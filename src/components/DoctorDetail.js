import DoctorExp from "./DoctorExp.js";
import DoctorOrigin from "./DoctorOrigin.js";
import DoctorPrize from "./DoctorPrize.js";

export class DoctorDetail {
    constructor({ detail, img, name, level, closeModal }) {
        this.closeModal = closeModal
        this.$modal = document.createElement('div')
        this.$modal.className = 'modal'
        this.$modal.style.display = 'block'

        this.$modalBg = document.createElement('div')
        this.$modalBg.className = 'modal-bg'
        this.$modalBg.addEventListener('click', () => {
            this.closeModal()
        })

        this.$modalBox = document.createElement('div')
        this.$modalBox.className = 'modal-box'

        this.$modalHeader = document.createElement('div')
        this.$modalHeader.className = 'modal-header'

        this.$modalPic = document.createElement('div')
        this.$modalPic.className = 'screen1__pic-modal'

        this.$modalImg = document.createElement('img')
        this.$modalImg.src = img

        this.$modalClose = document.createElement('div')
        this.$modalClose.className = 'modal-close'
        this.$modalClose.innerHTML = '×'
        this.$modalClose.addEventListener('click', () => {
            this.closeModal()
        })

        this.$modalInfo = document.createElement('div')
        this.$modalInfo.className = 'screen1__info'

        this.$modalName = document.createElement('span')
        this.$modalName.innerHTML = name

        this.$modalLevel = document.createElement('b')
        this.$modalLevel.innerHTML = level

        this.$modalJob = document.createElement('i')
        this.$modalJob.innerHTML = detail.doctor_level

        this.$modalBody = document.createElement('div')
        this.$modalBody.className = 'modal-body'

        this.$modalMain = document.createElement('div')
        this.$modalMain.className = 'main'

        this.$doctorExp = new DoctorExp({ exp: detail.experience })
        this.$doctorOrigin = new DoctorOrigin({ origin: detail.origin })
        this.$doctorPrize = new DoctorPrize({ prize: detail.prize })

    }
    render() {
        this.$modal.appendChild(this.$modalBg)
        this.$modal.appendChild(this.$modalBox)
        this.$modalBox.appendChild(this.$modalHeader)
        this.$modalHeader.appendChild(this.$modalPic)
        this.$modalPic.appendChild(this.$modalImg)
        this.$modalHeader.appendChild(this.$modalInfo)
        this.$modalInfo.appendChild(this.$modalName)
        this.$modalInfo.appendChild(this.$modalLevel)
        this.$modalInfo.appendChild(this.$modalJob)
        this.$modalHeader.appendChild(this.$modalClose)
        this.$modalBox.appendChild(this.$modalBody)
        this.$modalBody.appendChild(this.$modalMain)
        this.$modalMain.appendChild(this.$doctorExp.render())
        this.$modalMain.appendChild(this.$doctorOrigin.render())
        this.$modalMain.appendChild(this.$doctorPrize.render())
        return this.$modal
    }
}
export default DoctorDetail