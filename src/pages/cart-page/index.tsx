import { Header } from "../../components/Header";
import { CartProduct } from "../../components/CartProduct";

import styles from './cart-page.module.css'
import { useSelector } from "react-redux";
import { IState } from "../../store";
import { ICartItem } from "../../store/modules/cart/types";
import { ProductCard } from "../../components/ProductCard";
import { useCallback, useEffect, useState } from "react";

export default function CartPage() {
    const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

    const [totalPrice, setTotalPrice] = useState(Number)

    useEffect(()=>{
        console.log(cart)
        total()
    },[])

    const total = () =>{
        cart.map(item => {
            // setTotalPrice(soma)
        })
    }

    return (
        <>
            <Header
                title="Meu carrinho"
                quantity={2}
            />

            <div className={styles.mainContainer}>
                {cart.map(item => (
                    <ProductCard
                        key={item.product.id}
                        title={item.product.title}
                        price={item.product.price}
                        image={item.product.image}
                        quantity={item.quantity}

                    >
                    </ProductCard>
                ))}
            </div>


            <div className={styles.contianerTotal}>
                <h1>Total</h1>

                <h1 className="">R$ {totalPrice}</h1>
            </div>

            <div className={styles.footer}>
                <button className={styles.btnFinish}>Finalizar compra</button>
            </div>
        </>
    )
}