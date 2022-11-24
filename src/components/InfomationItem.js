class InformationItem {
    constructor({image}) {
        this.$img = document.createElement('img')
        this.$img.src = image  
    }
    render() {
        return this.$img
    }
}
export default InformationItem