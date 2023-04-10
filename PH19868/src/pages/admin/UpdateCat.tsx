import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product'
import { useNavigate, useParams } from 'react-router-dom';
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
import { getOneProduct } from '../../api/product';
import axios from 'axios';

interface IProps {
    onUpdate: (product: IProduct) => void
}
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const UpdateCat = (props: IProps) => {
    const [cat, setcat] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await getAllCat()
            setcat(data)
        })()
    }, [])
    const { id } = useParams()
    const [pro, setpro] = useState([])
    const [ca, setca] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await getOneProduct(id)
            setpro(data)
            setca(data.categoryId)
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


    const navigate = useNavigate()
    const [name, setname] = useState('')
    const [price, setprice] = useState()
    const [cate, setcate] = useState('')
    const [description, setdescription] = useState('')
    const cats: any = {}
    const handleInput = (e: any) => {
        e.preventDefault()
        cats.name = name

        props.onUpdate(id, cats)
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

                <Form.Item label="Cat Name">
                    <Input name="name" onChange={(value) => setname(value.target.value)} placeholder={cat.name} />
                </Form.Item>


                <Form.Item label="Add Category">
                    <Button onClick={handleInput}>Update</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateCat