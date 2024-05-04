import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../CartWidget/CartWidget.module.css'

const CartWidget = () => {
    return (
        <div>
            <button type="button" className={`btn btn-primary ${styles.CartWidget}`}><i className={`bi bi-cart2`}></i></button>
        </div>
    )
}

export default CartWidget