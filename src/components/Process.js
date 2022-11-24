import { getProcessByService } from "../apis/process.js"
import ProcessItem from "./ProcessItem.js"
import Sidebar from "./Sidebar.js"

class Process {
    value = 'Cắt Mí'
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'container'

        this.$detail = document.createElement('div')
        this.$detail.className = 'screen1__boxProcess'

        // this.$sidebar = new Sidebar({ setValue: this.setValue })

        this.$process = document.createElement('div')
        this.$process.className = 'screen1__process'

        this.$box1 = document.createElement('div')
        this.$box1.className = 'screen1__textProcess'

        this.$box2 = document.createElement('div')
        this.$box2.className = 'screen1__picProcess'

        this.$img = document.createElement('img')
        this.$img.src = ''
        this.$processUl = document.createElement('ul')
        this.$processUl.className = 'processList'

        this.renderItem()
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
        this.$detail.appendChild(this.$process)
        this.$process.appendChild(this.$box1)
        this.$process.appendChild(this.$box2)
        this.$box1.appendChild(this.$processUl)
        this.$box2.appendChild(this.$img)
    }
    renderItem = async () => {
        try {
            const getData = await getProcessByService({ service: this.value })
            const renderData = getData.process

            this.$img.src = getData.image
            this.$processUl.innerHTML = ''
            for (let i = 0; i < renderData.length; i++) {
                this.$processItem = new ProcessItem({
                    process: renderData[i],
                    index: i + 1
                })
                this.$processUl.appendChild(this.$processItem.render())
            }
            return this.$processUl
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
export default Process