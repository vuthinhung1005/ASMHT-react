import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import AddProductPage from './pages/admin/AddProduct'
import Dashboard from './pages/admin/Dasboard'
import ProductManagementPage from './pages/admin/ProductManagement'
import UpdateProductPage from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'
import Admin from '../src/layout/Admin'
import Logins from '../src/pages/admin/auth/Login'
import Client from './layout/Client'
import { ICat } from './types/category'
import { addCat, getAllCat, removeCat, updateCat } from './api/category'
import ListCategory from './pages/admin/ListCategory'
import AddCategory from './pages/admin/AddCategory'
import UpdateCat from './pages/admin/UpdateCat'


function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [cat, setcat] = useState<ICat[]>([])
  useEffect(() => {
    (async () => {
      const { data } = await getAllProduct()
      setProducts(data.data)
    })()
  }, [])
  useEffect(() => {
    (async () => {
      const { data } = await getAllCat()
      setcat(data)
    })()
  }, [])
  const onHandleRemove = async (id: number) => {
    console.log(id)
    await deleteProduct(id)
    const data = (products.filter((item: IProduct) => item._id !== id))
    setProducts(data)
  }
  const onHandleAdd = async (product: IProduct) => {
    console.log(product)
    const data = await addProduct(product)
    setProducts([...products, product])
  }
  const onHandleUpdate = async (id: number | string, product: IProduct) => {
    const data = await updateProduct(id, product)
    const list = products.map((c: IProduct) => c._id === id ? product : c)
    setProducts(list)
  }

  const onHandleRemoveCat = async (id: number) => {
    console.log(id)
    await removeCat(id)
    const data = cat.filter(c => c._id != id)
    setcat(data)

  }
  const onHandleAddCat = async (cata: ICat) => {
    console.log(cata)
    const { data } = await addCat(cata)
    setcat([...cat, cata])
  }
  const onHandleUpdateCat = async (id: string | number, cata: ICat) => {
    console.log(id, cata)
    await updateCat(id, cata)
    const list = cat.map(c => c._id === id ? cata : c)
    setcat(list)
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Client />}>
          <Route index element={<HomePage products={products} />} />
          <Route path='products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
          <Route path='products/:id' element={<ProductDetailPage products={products} />} />
          <Route path='login' element={<Logins />} />
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
          <Route path='category'>
            <Route index element={<ListCategory category={cat} onRemove={onHandleRemoveCat} />} />
            <Route path='add' element={<AddCategory onAdd={onHandleAddCat} />} />
            <Route path=':id/update' element={<UpdateCat onUpdate={onHandleUpdateCat} products={products} />} />
          </Route>
        </Route>
      </Routes>

    </div >
  )
}

export default App