class Promotion {
    constructor() {
        this.$main = document.createElement('section')
        this.$main.className = 'screen6'
        this.$main.innerHTML =
            `
    <div class="screen6__pic">
        <picture>
            <source media="(min-width: 465px)" srcset="assets/images/page1-bg.jpg">
            <img src="assets/images/page1-bg-mb.jpg">
        </picture>
    </div>
<div class="screen6__box1">
    <div class="container">
        <div class="screen6__des">
        HỘI XUÂN THẨM MỸ
        </div>
        <div class="screen6__text">
            <p><b>1. ĐI CÀNG NHIỀU – GIẢM CÀNG SÂU </b></p>
            <p><li>Giảm thêm 3% cho dịch vụ Nâng mũi/ Cắt mí khi đi nhóm 2 người</li></p>
            <p><b>2. TRI ÂN KHÁCH HÀNG PTTM </b></p>
            <p><li><b>Giảm 40% Phun xăm</b> khi kết hợp PTTM </li></p>
            <p><li><b>Giảm 50%</b> Tẩy trắng răng Laser Whitening/ Trám răng thẩm mỹ/ Nhổ răng cho khách hàng PTTM</li></p>
            <p><li><b>Giảm thêm 5%</b> Cấy mỡ toàn mặt / Căng chỉ toàn mặt / Trẻ hóa Mi Young khi thực hiện tiểu phẫu, đại phẫu</li></p>
            <p><li><b>Tặng 1 buổi chăm sóc da miễn phí</b> (điện di C/ điện di cho khách hàng đăng ký dịch vụ VIP)</li></p>
        </div>
    </div>
</div>
<div class="screen6__box">
    <div class="container">
        <div class="screen6__title">
            khuyến mãi đặc biệt các dịch vụ
        </div>
        <table class="screen6__table table">
            <thead>
                <tr>
                    <th>DỊCH VỤ</th>
                    <th>MỨC GIẢM</th>
                    <th>GIÁ SAU KM</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cắt mí 6D</td>
                    <td>-25%</td>
                    <td>12 Triệu</td>
                </tr>
                <tr>
                    <td>Nâng mũi 6D Sugiform</td>
                    <td>-25%</td>
                    <td>55.5 Triệu</td>
                </tr>
                <tr>
                    <td>Các dịch vụ hàm mặt 3D</td>
                    <td>-25%</td>
                    <td>55.5 Triệu</td>
                </tr>
                <tr>
                    <td>Thu mỏng môi</td>
                    <td>-25%</td>
                    <td>6 Triệu</td>
                </tr>
                <tr>
                    <td>Trẻ hóa Mi Young</td>
                    <td>-25%</td>
                    <td>35.25 - 65.25 Triệu</td>
                </tr>
                <tr>
                    <td>Nâng ngực K-nature 4D</td>
                    <td>-25%</td>
                    <td>51.75 Triệu</td>
                </tr>
                <tr>
                    <td>Giảm mỡ</td>
                    <td>-50%</td>
                    <td>32 Triệu</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    `


    }
    render() {
        return this.$main
    }
}
export default Promotion