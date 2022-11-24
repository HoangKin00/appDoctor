import { getPriceByService } from "../apis/price.js"
import PriceItem from "./PriceItem.js"
import Sidebar from "./Sidebar.js"

class Price {
    value = 'Cắt Mí'
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'container'

        this.$main = document.createElement('div')
        this.$main.className = 'screen1__box'

        this.$priceBox = document.createElement('div')
        this.$priceBox.className = 'screen1__price'

        this.$table = document.createElement('table')
        this.$table.className = 'table'

        this.$thead = document.createElement('thead')

        this.$titleTable = document.createElement('tr')

        this.$serviceTable = document.createElement('th')
        this.$serviceTable.innerHTML = 'Dịch vụ'

        this.$preferentialTable = document.createElement('th')
        this.$preferentialTable.innerHTML = 'Ưu đãi'

        this.$priceTable = document.createElement('th')
        this.$priceTable.className ='priceTable'
        this.$priceTable.innerHTML = 'Giá DV'

        this.$promotionalTable = document.createElement('th')
        this.$promotionalTable.innerHTML = 'Giá KM'

        this.$tbody = document.createElement('tbody')

        this.renderItem()

    }
    setValue = (value) => {
        this.value = value
        this.renderItem()
        this.renderSidebar(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             )
    }
    renderSidebar = () => {
        this.$main.innerHTML = ''
        this.$sidebar = new Sidebar({ value: this.value, setValue: this.setValue })
        this.$main.appendChild(this.$sidebar.render())
        this.$main.appendChild(this.$priceBox)
        this.$priceBox.appendChild(this.$table)
        this.$table.appendChild(this.$thead)
        this.$thead.appendChild(this.$titleTable)
        this.$titleTable.appendChild(this.$serviceTable)
        this.$titleTable.appendChild(this.$preferentialTable)
        this.$titleTable.appendChild(this.$priceTable)
        this.$titleTable.appendChild(this.$promotionalTable)
        this.$table.appendChild(this.$tbody)
    }
    renderItem = async() => {
        try {
            const getData = await getPriceByService({service: this.value})
            const renderData = getData.row
            this.$tbody.innerHTML = ''
            for (let i = 0; i < renderData.length; i++) {
                this.$priceItem = new PriceItem({
                    ...renderData[i]
                }) 
                this.$tbody.appendChild(this.$priceItem.render())
            }
        } catch (error) {
            console.log(error);
        }
    }
    render(){
        this.$container.appendChild(this.$main)
        // this.$main.appendChild(this.$sidebar.render())
        this.renderSidebar()
        return this.$container
    }
}
export default Price