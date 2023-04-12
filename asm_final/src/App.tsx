import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import ProductPage from './pages/ProductPage';
import { DataType, ICategory, IUser, Iproduct } from './types/product';
import { getAllProduct, deleteProduct, addProduct } from './api/product';
import ProductManagement from './pages/admin/ProductManagement';
import AddProduct from './pages/admin/AddProduct';
import Signin from './pages/signin';
import AddCategory from './pages/category/AddCategory';
import ListCategory from './pages/category/ListCategory';
import { CreateCategory, getAllCategory, updateCategory } from './api/categories';
import instance from './api/instance';
import Signup from './pages/sinup';
import UpdateCategory from './pages/category/updateCate';

const App = () => {

  const [product, setProduct] = useState<DataType[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data.products))
  }, []);

  const [categories, setcategory] = useState<ICategory[]>([]);
  useEffect(() => {
    getAllCategory().then(({ data }) => setcategory(data.categories));
  }, [])

  const onHandleRemove = (key: string, app: any) => {
    if (app == deleteProduct) {
      app(key).then(() => {
        const newpro = product.filter((pro) => pro._id !== key);
        setProduct(newpro);
      })
    }
    else {
      app(key).then(() => {
        const newcate = categories.filter((cate) => cate._id !== key);
        setcategory(newcate);
      })
    }
  }

  const onHandleAdd = (products: any) => {
    addProduct(products).then(() => setProduct([...product, products]))
  }
  const onHandleAddcate = (products: any) => {
    CreateCategory(products).then(() => setProduct([...product, products]))
  }
  const onHandleSignup = (user: IUser) => {
    instance.post("/signup", user).then(() => alert("Đăng ký thành công😍"));
  }
  const onHanleUpdateCate = (category: ICategory) => {
    updateCategory(category).then(() => {
      console.log(category);

      setcategory(categories.map((cate) => cate._id == category._id ? category : cate))
    }).catch((error) => console.log(error)
    )
  }
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup onSignup={onHandleSignup} />} />
          <Route path='product'>
            <Route index element={<ProductPage products={product} />} />
            <Route path=':id' element={<ProductDetail products={product} />} />
          </Route>

          <Route path='admin'>
            <Route index element={<Signin />} />
            <Route path='product'>
              <Route index element={<ProductManagement products={product} onRemove={onHandleRemove} />} />
              <Route path='add' element={<AddProduct categories={categories} onAdd={onHandleAdd} />} />
            </Route>
          </Route>
          <Route path='categories' >
            <Route index element={<ListCategory categories={categories} products={product} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddCategory onAdd={onHandleAddcate} categories={categories} />} />
            <Route path=':id/update' element={<UpdateCategory categories={categories} products={product} onUpdate={onHanleUpdateCate} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
export default App
