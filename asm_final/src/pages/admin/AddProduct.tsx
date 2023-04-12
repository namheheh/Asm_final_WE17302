import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, InputNumber, Select, Upload } from 'antd';
import { ICategory, Iproduct } from '../../types/product'
const { Option } = Select;
interface Props {
    onAdd: (products: Iproduct) => void
    categories: ICategory[],
}
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
const AddProductPage = (props: Props) => {
    const navigate = useNavigate();
    const onHandleSubmit = (data: Iproduct) => {
        props.onAdd(data);
        navigate('/admin/product')
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

                <Form.Item name={'price'} label="Price" rules={[{ required: true, type: 'number' }]}>
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    name={"image"}
                    label="Image"
                    rules={[{ required: true, message: 'Please input image!' }]}
                >
                    <Input autoComplete="image" />
                </Form.Item>

                <Form.Item name={'description'} label="description">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="categoryId" label="CategoryId" rules={[{ required: true }]}>
                    <Select
                        placeholder="Chọn danh mục"
                        allowClear
                    >
                        {props.categories.map((cate, index) => {
                            return (
                                <Option key={index} value={cate._id}>{cate.name}</Option>
                            )
                        })}
                    </Select>
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

export default AddProductPage