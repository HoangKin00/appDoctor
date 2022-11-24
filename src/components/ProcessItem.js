class ProcessItem {
    constructor({process,index}) {
        this.$proList = document.createElement('div')
        this.$proList.className = 'proList'

        this.$proItem = document.createElement('li')
        this.$proItem.className = 'proItem'
        this.$proItem.innerHTML = process

        this.$proIcon = document.createElement('img')
        this.$proIcon.className = 'screen1__qt-img'
        this.$proIcon.src = 'assets/images/line-qt.png'

        this.$number = document.createElement('span')
        this.$number.innerHTML = index

    }
    render() {
        this.$proList.appendChild(this.$number)
        this.$proList.appendChild(this.$proIcon)
        this.$proList.appendChild(this.$proItem)
        return this.$proList
    }
}
export default ProcessItem