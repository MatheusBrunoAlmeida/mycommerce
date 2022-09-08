import styles from './ProductCard.module.css'

interface ProductCardProps {
    title: string
    price: number
    image: string
    quantity?: number
    children?: any
}

export function ProductCard({ title, price, image, quantity, children }: ProductCardProps) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.productContainer}>
                    <img src={image} className={styles.imgThumb} alt="img" />

                    <div className={styles.infoContainer}>
                        <h1 className={styles.productTitle}>{title}</h1>

                        <h4 className={styles.price}>R$ {price}</h4>
                    </div>

                    
                </div>

                {/* @ts-ignore */}
                {quantity > 0 ? (
                    <div className={styles.quantity}> {quantity} </div>
                ) : ('')}

                {children}
            </div>
        </>
    )
}