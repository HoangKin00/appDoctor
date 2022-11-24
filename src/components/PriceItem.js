class PriceItem {
    constructor({dv, ud, gia, giaKM}) {
        this.$list = document.createElement('tr')
        
        this.$itemSer = document.createElement('td')
        this.$itemSer.innerHTML = dv

        this.$itemPre = document.createElement('td')
        this.$itemPre.innerHTML = ud 

        this.$itemPrice = document.createElement('td')
        this.$itemPrice.className ='itemPrice'
        this.$itemPrice.innerHTML = gia 

        this.$itemPromo = document.createElement('td')
        this.$itemPromo.innerHTML = giaKM
    }
    render(){
        this.$list.appendChild(this.$itemSer)
        this.$list.appendChild(this.$itemPre)
        this.$list.appendChild(this.$itemPrice)
        this.$list.appendChild(this.$itemPromo)
        return this.$list
    }
}
export default PriceItem