import { Button, Col, Menu, Input, MenuProps, Row, Space } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import React, { useEffect, useState } from 'react'
import { Header } from 'antd/es/layout/layout';
const { Search } = Input;
const header = () => {
    const [size, setSize] = useState<SizeType>('large');

    const onSearch = (value: string) => console.log(value);
    return (
        <Header style={{ padding: 0, height: '15vh' }}>
            <div style={{ width: "100%", position: "fixed", height: '15vh', background: 'rgba(0,0,0,0.85)', zIndex: 2 }}>

                <Row style={{
                    alignItems: "center",
                    height: '15vh',
                    right: 0,
                    position: 'absolute',
                    width: "85%",
                }}>
                    <Col span={4}>
                        <a href="/product"><img src="https://jobseekers.vn/wp-content/uploads/2017/01/FPTShop_logo.jpg" width={150} height={50} alt="" /></a>
                    </Col>

                    <Col span={12}>
                        <Search
                            placeholder="Tìm kiếm sản phẩm"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                        />
                    </Col>
                    <Col span={7} style={{ textAlign: "right", marginRight: "10px" }}>
                        <Space wrap>
                            <Button size={size} type="primary" ><a href="/signup">Đăng Ký</a></Button>
                            <Button size={size} type="primary"><a href="/signin">Đăng nhập</a> </Button>
                        </Space>
                    </Col>
                </Row>
            </div>
        </Header >
    )
}
export default header 