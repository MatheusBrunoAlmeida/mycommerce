import styles from './ProductCart.module.css'

import blackShirt from '../../assets/black-shirt.svg'

export function CartProduct() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.productContainer}>
                    <img src={blackShirt.src} className={styles.imgThumb} alt="img" />

                    <div className={styles.infoContainer}>
                        <h1 className={styles.productTitle}>Camisa preta básica</h1>

                        <h4 className={styles.price}>R$ 1,11</h4>
                    </div>
                </div>

                <button className={styles.btnSAddOrDelet}>-</button>
            </div>
        </>
    )
}