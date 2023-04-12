import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import { DataType } from '../types/product';
import header from './header';
import { Content } from 'antd/es/layout/layout';


interface Iporps {
    products: DataType[]
}

const ProductDetail = (props: Iporps) => {
    const { id } = useParams()
    const [product, setproduct] = useState<DataType>()
    useEffect(() => {
        const cureenProduct = props.products.find((product) => product._id === String(id))
        setproduct(cureenProduct)
    }, [props])
    return (
        <Layout>
            {header()}

            <Content style={{ width: "80%", margin: "50px auto", }}>
                <Row>
                    <Col span={4}></Col>
                    <Col span={8}>
                        <div>
                            <h2>{product?.name}</h2>
                            <hr />
                            <img src={product?.image} width={400} height={300} alt="" />
                        </div>
                    </Col>
                    <Col span={6} style={{ margin: "80px 20px" }}>
                        <div>
                            <div style={{ fontSize: "24px" }} >
                                <b style={{ color: "red" }}>{Number(product?.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</b>
                                <p><del>{Number("20000000").toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</del></p>
                            </div>
                        </div>

                        <div style={{ margin: "100px 0" }}>
                            <b style={{ fontSize: "24px" }}>
                                Chi tiết sản phẩm
                            </b>
                            <p>{product?.description}</p>
                        </div>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </Content>
        </Layout >
    )
}

export default ProductDetail