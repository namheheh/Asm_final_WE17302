import { Button, Menu, MenuProps } from 'antd'
import React, { useEffect, useState } from 'react'
import { ICategory } from '../types/product';
import { getAllCategory } from '../api/categories';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        children,
        label,
        type,
    } as MenuItem;
}

const Sidebar = (onclick: MenuProps['onClick']) => {
    const [categories, setcategory] = useState<ICategory[]>([]);
    useEffect(() => {
        getAllCategory().then(({ data }) => setcategory(data.categories));
    }, [])
    //Danh sách sản phẩm
    const items: MenuItem[] = [getItem('Danh sách', 'sub1', categories.map((item) => getItem(item.name, item._id)))]

    return (
        <div style={{
            width: '15%',
            position: 'fixed',
            zIndex: 2
        }}>

            <Menu
                onClick={onclick}
                mode="inline"
                theme="dark"
                items={items}
                style={{ textTransform: "uppercase" }}
            />
        </div>

    )
}

export default Sidebar