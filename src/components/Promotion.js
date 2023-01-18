class Promotion {
    constructor() {
        this.$main = document.createElement('section')
        this.$main.className = 'screen6'
        this.$main.innerHTML =
            `
    <div class="screen6__pic">
        <picture>
            <source media="(min-width: 465px)" srcset="assets/images/slide-dt.jpg">
            <img src="assets/images/slide-mb.jpg">
        </picture>
    </div>
    <section class="screen7">
            <div class="screen7__list">
                <div class="screen7__item screen7__item6">
                    <img src="assets/images/lixi6.png" alt="">
                </div>
                    <div class="screen7__item screen7__item5">
                        <img src="assets/images/lixi5.png" alt="">
                    </div>
                    <div class="screen7__item screen7__item4">
                        <img src="assets/images/lixi4.png" alt="">
                    </div>
            </div>
            <div class="screen7__box">
                <div class="screen7__item screen7__item2">
                    <img src="assets/images/lixi2.png" alt="">
                </div>
                <div class="screen7__item screen7__item1">
                    <img src="assets/images/lixi1.png" alt="">
                </div>
                <div class="screen7__item screen7__item3">
                    <img src="assets/images/lixi3.png" alt="">
                </div>
            </div>
            <div class="screen7__note">
                100% đến Kangnam <br> là có lộc
            </div>
    </section>
<div class="screen6__box1">
    <div class="container">
        <div class="screen6__des">
        SALE LỚN NHẤT NĂM
        </div>
        <div class="screen6__text">
            <p><b>1. COMBO ĐẸP ĐỘT PHÁ</b></p>
            <p><li>Khi Nâng ngực/ Hút mỡ: <b>Giảm thêm 3%</b> cho Nâng mũi/ Cắt mí/ Thẩm mỹ môi.</li></p>
            <p><li>Khi Nâng mũi: <b>Giảm thêm 3%</b> cho Cắt mí/ Thẩm mỹ môi.</li></p>
            <p><b>2. ƯU ĐÃI ĐẸP TOÀN DIỆN</b></p>
            <p><li>Tẩy nốt ruồi mức 1 chỉ với giá <b>99.000đ</b></li></p>
            <p><li>Cạo vôi và đánh bóng răng mức 1, mức 2 – <b>đồng giá 150.000đ</b></li></p>
            <p><li><b>Giảm 40% Phun xăm </b>khi kết hợp PTTM.</li></p>
            <p><li><b>Giảm 50% </b>Tẩy trắng răng Laser Whitening/ Trám răng thẩm mỹ/ Nhổ răng cho khách hàng PTTM.</li></p>
            <p><li><b>Giảm thêm 5% </b>Cấy mỡ toàn mặt / Căng chỉ toàn mặt / Trẻ hóa Mi Young khi thực hiện tiểu/ đại phẫu.</li></p>
            <p><li><b>Giảm thêm 5% </b>Treo sa trễ/ Tạo hình vú/ Nâng ngực mỡ tự thân khi hút mỡ toàn bụng.</li></p>
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