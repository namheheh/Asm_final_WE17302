import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Table, Popconfirm, Button, Anchor } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './admin.css'
import { DataType } from '../../types/product';
import { deleteProduct } from '../../api/product';
const { Header, Content, Footer } = Layout;

interface IProps {
    products: DataType[]
    onRemove: (key: string, app: any) => void
}
const ProductManagement = (prop: IProps) => {

    const [data, setData] = useState<DataType[]>([])

    useEffect(() => {
        const newdata = prop.products.map((product: any) => {
            return {
                key: product._id,
                ...product,
            }
        })
        setData(newdata)

    }, [prop])


    const removeProduct = (key: string) => {
        prop.onRemove(key, deleteProduct)
    }
    const columns: ColumnsType<DataType> = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img src={image} alt='product' width={200} />
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (record) => {
                return (
                    <Popconfirm
                        title="Xóa ẻ"
                        description="Mài có muốn xóa ẻ k?"
                        onConfirm={() => removeProduct(record.key)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary">Delete</Button>
                    </Popconfirm>
                )
            },
        },
    ];

    return (
        <Layout className="layout">
            <div style={{ padding: '20px' }}>
                <Anchor
                    direction="horizontal"
                    items={[
                        {
                            key: 'Home',
                            href: '/product',
                            title: 'Home',
                        },
                        {
                            key: 'Product',
                            href: '/admin/product',
                            title: 'Product',
                        },
                        {
                            key: 'Categories',
                            href: '/categories',
                            title: 'Categories',
                        }
                    ]}
                />
            </div>

            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" >
                    <Table
                        columns={columns}
                        expandable={{
                            expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
                            rowExpandable: (record) => record.name !== 'Not Expandable',
                        }}
                        dataSource={data}
                    />
                </div>
            </Content>
            <Button type="primary">
                <a href="product/add">Thêm sản phẩm</a>
            </Button>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default ProductManagement;

