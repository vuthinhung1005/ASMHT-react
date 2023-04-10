import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../types/product';
import { Link } from 'react-router-dom'
import "../../../src/App.css"
import { ICat } from '../../types/category';
interface DataType {
    key: string | number;
    id: number;
    name: string;
    price: number;
}
interface IProps {
    category: ICat[],
    onRemove: (id: number) => void
}

const ListCategory = (props: IProps) => {
    const removeCat = (id: number) => {
        props.onRemove(id)
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },



        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeCat(record._id)}>Remove</Button>
                    <Button type="primary" ><Link to={`${record._id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: any = props.category.map((item: ICat) => {
        return {
            key: item._id,
            ...item
        }
    })

    return (
        <div>
            <Button type='primary'><Link to={'/admin/category/add'}>Add New Category</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default ListCategory