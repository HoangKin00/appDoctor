class ClientItem {
    constructor({ image, i, setIndex, renderItem, index }) {
        this.index = index
        this.renderItem = renderItem
        this.i = i;
        this.setIndex = setIndex
        this.$clientPic = document.createElement('div')
        this.$clientPic.className = this.i === this.index ? 'clientPic active' : 'clientPic'
        this.$clientPic.addEventListener('click', () => {
            this.selectImg()
        })
        this.$pic = document.createElement('img')
        this.$pic.src = image
    }
    selectImg = () => {
        this.setIndex(this.i)
        this.renderItem()
    }
    render() {
        this.$clientPic.appendChild(this.$pic)
        return this.$clientPic
    }
}
export default ClientItem