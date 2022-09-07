import styles from './Header.module.css'

import BagIcon from '../../assets/bag-handle.svg'
import Link from 'next/link'
import { ArrowBendDownLeft, ArrowDownLeft, ArrowLeft, ArrowLineLeft } from 'phosphor-react'
import { useSelector } from 'react-redux'
import { IState } from '../../store'
import { ICartItem } from '../../store/modules/cart/types'

interface HeaderProps {
    title: string
    quantity: number
}

export function Header({ title, quantity }: HeaderProps) {
    const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
    quantity = cart.length
    return (
        <>
            <div className={styles.container} >

                {title == "Meu carrinho" ? (
                    <div className={styles.backIcon}>
                        <Link href="/" >
                            <ArrowLeft />
                        </Link>
                    </div>
                ) : ('')}

                <h1>{title}</h1>

                <div className={styles.iconContainer}>
                    <img className={styles.icon} src={BagIcon.src} alt="" />

                    {quantity > 0 ? (
                        <Link href="cart-page">
                            <div className={styles.quantity}>{quantity}</div>
                        </Link>
                    ) : ('')}
                </div>
            </div>
        </>
    )
}