// components
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { Button, Form, Input, Select } from 'antd';
import { Iproduct, ICategory, DataType } from '../../types/product';

import type { FormInstance } from 'antd/es/form';

type Props = {
    categories: ICategory[],
    products: DataType[],
    onUpdate: (category: ICategory) => void
}

const UpdateCategory = ({ categories, onUpdate, products }: Props) => {
    const { Option } = Select;
    const formRef = React.useRef<FormInstance>(null);
    const [form] = Form.useForm();

    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const concurren = categories.find((cate) => cate._id === id);
        if (concurren) {
            formRef.current?.setFieldsValue(concurren);
        }
    }, [categories])

    const onFinish = (data: any) => {
        const newupdate = {
            _id: id,
            ...data,
        }
        onUpdate(newupdate);
        // navigate("/categories")
        console.log(newupdate)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <div>
            <h1 className='text-center'>Update Category</h1>
            <Form
                name="control-hooks"
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 1000 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
                ref={formRef}
            >

                <Form.Item
                    label="Category name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your Category name!' }]}
                >
                    <Input autoComplete="name" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateCategory