import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form, Input, InputNumber, Select } from 'antd';
import { ICategory, Iproduct } from '../../types/product'
const { Option } = Select;
interface Props {
    categories: ICategory[],
    onAdd: (onHanleAddCate: any) => void
}
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        name: '${label} is not a valid name!',
        number: '${label} is not a valid number!',
    },

};
const AddCategory = (props: Props) => {
    const navigate = useNavigate();
    const onHandleSubmit = (data: Iproduct) => {
        props.onAdd(data);
        navigate('/categories')
    }
    return (
        <div>
            <Form
                {...layout}
                style={{ maxWidth: 600 }}
                validateMessages={validateMessages}
                onFinish={onHandleSubmit}
            >
                <Form.Item name={'name'} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddCategory