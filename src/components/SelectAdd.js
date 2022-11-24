class SelectAdd {
    constructor({ setAddress }) {
        this.$select = document.createElement('select')
        this.$select.name = 'bs'
        this.$select.addEventListener('change', () => {
            this.handleSelect()
            setAddress(this.$select.value)
        })

        this.$optionAll = document.createElement('option')
        this.$optionAll.value = 'Tất cả'
        this.$optionAll.innerHTML = 'Tất cả'

        this.$optionHN = document.createElement('option')
        this.$optionHN.value = 'Hà Nội'
        this.$optionHN.innerHTML = 'Hà Nội'

        this.$optionHCM = document.createElement('option')
        this.$optionHCM.value = 'Hồ Chí Minh'
        this.$optionHCM.innerHTML = 'Hồ Chí Minh'

    }
    handleSelect = () => {}
    render() {
        this.$select.appendChild(this.$optionAll)
        this.$select.appendChild(this.$optionHN)
        this.$select.appendChild(this.$optionHCM)
        return this.$select
    }
}
export default SelectAdd