import React, { useEffect, useState } from 'react';
import { Layout, Card, Image, List, Button, MenuProps } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { DataType } from '../types/product';
import { Link } from 'react-router-dom';
import header from './header';
import Slideshow from './slideshow';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { getOneCategory } from '../api/categories';
import Sidebar from './sidebar';
interface IProps {
    products: DataType[]
}

const HomePage = (prop: IProps) => {
    const [data, setData] = useState<DataType[]>([])



    const [size, setSize] = useState<SizeType>('large'); // default is 'middle'

    useEffect(() => {
        const newdata = prop.products.map((product: any) => {
            return {
                key: product._id,
                ...product,
            }
        })
        setData(newdata)
    }, [prop])

    const onClick: MenuProps['onClick'] = ({ key }: any) => {
        getOneCategory(key).then(({ data }) => setData(data.products));
    };
    return (
        <Layout >
            <div>
                {header()}
                {Sidebar(onClick)}
            </div>
            <Content style={{ width: "80%", margin: "0 auto", backgroundColor: "white" }}>
                {Slideshow()}
                <div className="site-layout-content" >
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={data}
                        renderItem={(item) => (
                            <Card title={item.name} style={{ margin: 10 }}>
                                <Image
                                    width={200}
                                    src={item.image}
                                />
                                <Link to={"/product/" + item._id}>
                                    <p style={{ color: "red", fontWeight: "bold", fontSize: 16 }}> {item.price} đ</p>
                                    <Button type="primary" size={size}>
                                        Đặt hàng
                                    </Button>
                                </Link>
                            </Card>

                        )
                        }
                    />
                </div>
            </Content >

        </Layout >

    );
};

export default HomePage;
