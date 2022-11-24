
import Client from "../components/Client.js"
import Doctor from "../components/Doctor.js"
import Information from "../components/Information.js"
import Price from "../components/Price.js"
import Process from "../components/Process.js"
import Promotion from "../components/Promotion.js"

const doctor = new Doctor()
const client = new Client()
const process = new Process()
const information = new Information
const price = new Price
const promotion = new Promotion
export const app = document.getElementById('root')
export const menu = [
    {
        title:'Bác sĩ',
        link: 'bac-si',
        component: doctor
    }, {
        title:'Khách hàng',
        link: 'khach-hang',
        component: client
    }, {
        title:'Quy trình',
        link: 'quy-trinh',
        component: process
    }, {
        title:'Thông tin',
        link: 'thong-tin',
        component: information
    }, {
        title:'Bảng giá',
        link: 'bang-gia',
        component: price
    }, {
        title:'Khuyến mãi',
        link: 'khuyen-mai',
        component: promotion
    }
]
export const sidebar = [
    {
        menu: 'Cắt Mí'
    },{
        menu: 'Nâng Mũi'
    },{
        menu: 'Nâng Ngực' 
    },{
        menu: 'Hàm Mặt'
    },{
        menu: 'Giảm Mỡ'
    },{
        menu: 'Cấy Mỡ'
    },{
        menu: 'Trẻ Hóa Da'
    },{
        menu: 'Tạo Hình Môi' 
    },{
        menu: 'Căng Da (PT)'
    }
]