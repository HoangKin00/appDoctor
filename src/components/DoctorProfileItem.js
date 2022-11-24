class DoctorProfileItem {
    constructor({title}) {
        this.$item = document.createElement('li')
        this.$item.innerHTML = title
    }
    render() {
        return this.$item
    }
}
export default DoctorProfileItem;