import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product'
import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    DatePicker, Select,
    InputNumber,
    Upload,
} from 'antd';
import { getAllCat } from '../../api/category';
import axios from 'axios';

interface IProps {
    onAdd: (product: IProduct) => void
}
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const AddCategory = (props: IProps) => {
    const [cat, setcat] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await getAllCat()
            setcat(data)
        })()
    }, [])
    // const [images, setimage] = useState('')
    // const handleUpload = async ({ file }) => {
    //     const cloud_name = 'due9gb9nq';
    //     const preset_name = 'nhung2003';
    //     const folder = 'WE17301'
    //     const api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
    //     const formdata = new FormData();
    //     formdata.append('upload_preset', preset_name)
    //     formdata.append('folder', folder)
    //     formdata.append('file', file)
    //     const reponse = await axios.post(api, formdata, {
    //         headers: { "Content-Type": "multipart/form-data" }
    //     })
    //     setimage(reponse.data.secure_url)
    // }
    // console.log(images)
    const navigate = useNavigate()
    const [name, setname] = useState('')
    const [price, setprice] = useState()
    const [cate, setcate] = useState('')
    const [description, setdescription] = useState('')
    const cata: any = {}
    const handleInput = (e) => {
        e.preventDefault()
        cata.name = name
        // product.price = price
        // product.description = description
        // product.categoryId = cate
        // product.image = images
        // console.log(product)
        props.onAdd(cata)
        navigate('/admin/category')
    }

    return (
        <div>


            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"

                style={{ maxWidth: 600 }}
            >

                <Form.Item label="Category Name">
                    <Input name="name" onChange={(value) => setname(value.target.value)} />
                </Form.Item>





                {/* <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item> */}


                <Form.Item label="Add Category">
                    <Button onClick={handleInput}>ADD</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddCategory