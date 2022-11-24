class Promotion {
    constructor() {
        this.$main = document.createElement('section')
        this.$main.className = 'screen6'
        this.$main.innerHTML =
            `
    <div class="screen6__pic">
    <img src="assets/images/page6-bg.jpg?ver=7" alt="">
</div>
<div class="screen6__box1">
    <div class="container">
        <div class="screen6__des">
            QUÀ SIÊU TO MỪNG SINH NHẬT
        </div>
        <div class="screen6__text">
            <p><b>1. TẶNG 999 SUẤT SALE TO SINH NHẬT</b></p>
            <p><li><b>Tặng 1 Triệu:</b> Cắt mí 6D/ Perfect Eyes/ Nâng mũi cấu trúc 4D/ Giảm mỡ Vaser 4D toàn bụng/Thẩm mỹ môi 6D/ Trẻ hóa Mi Young (mới)</li></p>
            <p><li><b>Tặng 2 Triệu:</b>Nâng mũi 6D/ Nâng mũi sụn sườn các loại/ Nâng ngực 6D/6D VIP/ Hút mỡ 6D tia sương toàn bụng/ Trị sẹo Scar Nano từ 4 buổi/ Trị nám liệu trình từ 6 buổi</li> </p>
            <p><li><b>Tặng 3 Triệu:</b>Khách hàng thực hiện hàm mặt (Chỉnh hàm hô móm / Hạ gò má/ Gọt hàm/ combo hàm mặt các loại)</li></p>
            <p><b>2. VOUCHER LAN TỎA </b></p>
            <p><li>Tặng <b>Voucher 300K</b> khi check – in hoặc livestream chia sẻ về dịch vụ tiểu phẫu/ Laser & Spa.</li></p>
            <p><li>Tặng <b>Voucher 1.000.000đ</b> khách hàng chia sẻ cảm nhận liên quan đến dịch vụ đại phẫu, cho phép lộ mặt (Nâng ngực – Hút mỡ)</li></p>
            <p><li>Minigame tại cơ sở tặng bộ mỹ phẩm cao cấp, vàng, bông tai vàng…</li></p>
            <p><b>3. CƠ HỘI TRÚNG XE SH</b></p>
            <p><li>Cơ hội trúng xe SH trị giá hơn <b>100 triệu</b> cho khách hàng có hóa đơn từ 10 triệu</li></p>
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
                    <td>32.25 - 65.25 Triệu</td>
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