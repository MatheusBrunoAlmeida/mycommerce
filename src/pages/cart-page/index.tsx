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

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        totalCalc()
    }, [])


    const totalCalc = async () => {
        let totalsum = 0

        cart.map(item => {
            totalsum = totalsum + (item.product.price * item.quantity)
        })

        setTotalPrice(totalsum)
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


            <div className={styles.totalSection}>
                <div className={styles.contianerTotal}>
                    <h1>Total</h1>

                    <h1 className="">R$ {totalPrice.toFixed(2)}</h1>
                </div>

                {totalPrice >= 10 ? (
                    <div className={styles.fretContainer}>
                        <h1 className={styles.fretTitle}>Parabéns, sua compra tem frete grátis !</h1>
                    </div>
                ) : ('')}
            </div>

            <div className={styles.footer}>
                <button className={styles.btnFinish}>Finalizar compra</button>
            </div>
        </>
    )
}