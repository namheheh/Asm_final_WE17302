import { Col } from "antd";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const fadeImages = [
    {
        url: 'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/31/638159015819146668_F-H1_800x300.png',
        caption: 'Loa Bluetooth giảm đến 30% '
    },
    {
        url: 'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/1/638159394660829533_F-H1_800x300.png',
        caption: 'Sắm Robot Ecovacs N10 ngay'
    },
    {
        url: 'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/3/638161126584785152_F-H1_800x300.png',
        caption: 'Realme C55 MỚI giảm đến 400.000đ'
    },
    {
        url: 'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/8/638165128219834891_F-H1_800x300.png',
        caption: 'Reno8 T Series giá từ 8.490.000đ'
    }

];
const url_title = "https://images.fpt.shop/unsafe/fit-in/1200x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/6/638163937174297349_F-H7_1200x100.png"

const Slideshow = () => {
    return (
        <div>
            <div style={{ width: 800, margin: "0 auto" }} >
                <p style={{ fontSize: 24, marginBottom: 10, color: "red", fontWeight: "bold" }}> KHUYẾN MÃI HOT</p>

                <Slide indicators={(index: any) =>
                    <Col style={{ cursor: "pointer", margin: "3px 0" }} span={6}>
                        <div style={{ fontWeight: "bold", fontSize: 14 }}>{fadeImages[index].caption}</div>
                    </Col>}>
                    {fadeImages.map((fadeImage, index) => (
                        <div key={index} style={{ textAlign: "center" }} >
                            <img style={{ width: '100%', height: 300 }} src={fadeImage.url} />
                        </div>
                    ))}
                </Slide>


            </div >
            <p>
                <img style={{ width: '100%', height: 100, margin: "50px 0" }} src={url_title} />
            </p>
        </div>


    )
}
export default Slideshow