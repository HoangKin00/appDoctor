
import HeaderItem from "./HeaderItem.js"

class Header {
    constructor({container,menu}) {
        this.container = container
        this.menu = menu
        this.$header = document.createElement('header')
        this.$header.className = 'header'

        

        this.$container = document.createElement('div')
        this.$container.className = 'container'

        this.$nav = document.createElement('div')
        this.$nav.className = 'nav'

        this.$box = document.createElement('div')
        this.$box.className = 'header__box'

        this.$logo = document.createElement('div')
        this.$logo.className = 'header__logo'

        this.$img = document.createElement('img')
        this.$img.src = 'assets/images/logo.svg'

        this.$main = document.createElement('nav')
        this.$main.className = 'header__main'

        this.$btn = document.createElement('div')
        this.$btn.className = 'nav-bar'
        this.$btn.addEventListener('click', () => {
            this.clickNav()
        })

        this.$btnImg = document.createElement('img')
        this.$btnImg.src = 'assets/images/menu-m.svg'

        this.$ul = document.createElement('ul')
        this.$ul.className = 'header__list'

        this.$bgActive = document.createElement('div')
        this.$bgActive.className = 'bg'

        this.$headerBg = document.createElement('div')
        this.$headerBg.className = 'headerBg'
        this.$headerBg.innerHTML = 'x'
        this.$headerBg.addEventListener('click', () => {
            this.closeHeader()
        })

        this.renderItem()

    }
    clickNav = () => {
        this.$ul.classList.add('isOpen');
        this.$bgActive.classList.add('bgAtive') 
        
    }
    closeHeader = () => {
        this.$ul.classList.remove('isOpen')
        this.$bgActive.classList.remove('bgAtive')
        
    }
    renderItem = () => {
        this.$ul.innerHTML = ''
        for (let item of this.menu) {
            this.$item = new HeaderItem({ ...item,container:this.container, menu: this.menu, closeHeader:this.closeHeader })
            this.$ul.appendChild(this.$item.render())
        }
        return this.$ul
    }

    render() {
        this.$header.appendChild(this.$container);
        this.$container.appendChild(this.$nav);
        this.$nav.appendChild(this.$box);
        this.$box.appendChild(this.$logo);
        this.$logo.appendChild(this.$img);
        this.$box.appendChild(this.$main);
        this.$main.appendChild(this.$btn)
        this.$btn.appendChild(this.$btnImg)
        this.$main.appendChild(this.$ul);
        this.$main.appendChild(this.$bgActive)
        this.$ul.appendChild(this.$headerBg)

        return this.$header
    }
}
export default Header;