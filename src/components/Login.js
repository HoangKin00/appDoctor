import { getLogin } from "../apis/user.js"
import { getPage } from "../util/getPage.js"

class Login {
    constructor (){
        this.$container = document.createElement('section')
        this.$container.className='screen3'

        this.$box = document.createElement('div')
        this.$box.className='screen3__box'

        this.$pic = document.createElement('div')
        this.$pic.className='screen3__pic'

        this.$img = document.createElement('img')   
        this.$img.src = 'assets/images/login-tt.png'

        this.$form = document.createElement('div')
        
       

        this.$inputGroup = document.createElement('div')
        this.$inputGroup.className='screen3__inputGroup'

        this.$name = document.createElement('input')
        this.$name.type = 'text'
        this.$name.placeholder = 'Tên đăng nhập *'

        this.$password = document.createElement('input')
        this.$password.type = 'password'
        this.$password.placeholder = 'Mật khẩu *'

        this.$btn = document.createElement('div')
        this.$btn.className = 'login'

        this.$submitBtn = document.createElement('button')
        this.$submitBtn.className = 'btnLogin'
        this.$submitBtn.type = 'submit'
        this.$submitBtn.innerHTML = 'Đăng nhập'
        this.$submitBtn.addEventListener('click', () => {
            this.clickLogin()
        })
    }
    clickLogin = async() => {
        const dataLogin = await getLogin({user:this.$name.value, password:this.$password.value})
        if(!dataLogin) {
            this.$name.style.border = '1px solid red'
            this.$password.style.border = '1px solid red'
            return
        } 
        localStorage.setItem('isLogin',dataLogin.isLogin)
        sessionStorage.setItem('link','bac-si')
        getPage()
    }

    render(){
        this.$container.appendChild(this.$box);
        this.$box.appendChild(this.$pic);
        this.$pic.appendChild(this.$img);
        this.$box.appendChild(this.$form);
        this.$form.appendChild(this.$inputGroup)
        this.$inputGroup.appendChild(this.$name)
        this.$inputGroup.appendChild(this.$password)
        this.$form.appendChild(this.$btn)
        this.$btn.appendChild(this.$submitBtn)
        return this.$container;

    }
}
export default Login;