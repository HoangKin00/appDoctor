import Home from "../components/Home.js";
import Login from "../components/Login.js";

const app = document.getElementById('root')
const login = new Login()
const home = new Home()
let currentPage = null;
export const setPage = (component) => {
    if (currentPage) {
        app.removeChild(currentPage);
    }
    currentPage = app.appendChild(component.render())
}
export const getPage = () => {
    if (!localStorage.getItem('isLogin')) {
        setPage(login)
        return
    }
    setPage(home)
    return
}