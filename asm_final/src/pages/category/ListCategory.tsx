import { Anchor, Breadcrumb, Button, Image, Layout, Menu, message, Popconfirm } from 'antd';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { DataType, Iproduct, ICategory } from '../../types/product';
import { RemoveCategory } from '../../api/categories';
import { Content, Footer, Header } from 'antd/es/layout/layout';
type Props = {
    categories: ICategory[],
    products: DataType[],
    onRemove: (_id: string, app: any) => void
}



const ListCategory = ({ categories, products, onRemove }: Props) => {
    const HandleDelete = (_id: string) => {
        onRemove(_id, RemoveCategory);
    }
    const columns: ColumnsType<ICategory> = [
        {
            title: 'Danh mục',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Popconfirm
                        placement="top"
                        title={"Bạn có chắc chắn xóa"}
                        description={"Xóa rồi là mất"}
                        onConfirm={() => HandleDelete(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button style={{ marginRight: 5 }} type='primary' danger><Link to={"/categories/" + record._id + "/update"}>Sửa</Link></Button>
                        <Button type='primary' danger>Xóa</Button>
                    </Popconfirm>
                </Space >
            ),
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
                    <Breadcrumb.Item>Category</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" >
                    <Table
                        columns={columns}
                        dataSource={categories}
                    />
                </div>
            </Content>
            <Button type="primary">
                <a href="categories/add">Thêm danh mục</a>
            </Button>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
}

export default ListCategory