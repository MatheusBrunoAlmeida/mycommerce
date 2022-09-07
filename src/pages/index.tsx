import type { NextPage } from 'next'
import { Header } from '../components/Header'

import styles from '../styles/Home.module.css'
import { ProductCard } from '../components/ProductCard'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../store/modules/cart/actions'
import { IProduct } from '../store/modules/cart/types'

const Home: NextPage = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const dispatch = useDispatch()

  const catalog = useSelector(state => state);

  useEffect(() => {
    api.get('/products').then(response => {
      setProducts(response.data)
    })
  },[])



  const handleAddProductToCart = useCallback((product: IProduct) =>{
    dispatch(addProductToCart(product))
  },[dispatch])

  return (
    <>
      <Header title='Home'
        quantity={3}
      />

      <div className={styles.mainContainer}>
        {products.map(product => {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            >
              <button
                className={styles.btnSAddOrDelet}
                onClick={()=>handleAddProductToCart(product)}
              >
                +
              </button>
            </ProductCard>
          )
        })}
      </div>
    </>
  )
}

export default Home
