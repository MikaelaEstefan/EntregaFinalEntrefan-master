import './Cart.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { carrito, vaciarCarrito, cantidadTotal, total} = useContext(CarritoContext)

    if(cantidadTotal === 0) {
        return (
            <div>
                <h1> No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className="cart-container">
            {carrito.map(producto => <CartItem key={producto.id} {...producto}/>)}

            <div className="cart-summary">
                <h3>Total: ${total}</h3>
                <h3>Cantidad Total: {cantidadTotal}</h3>
            </div>

            <div className="cart-buttons">
                <button onClick={() => vaciarCarrito()} className='clear-button'>Limpiar Carrito</button>
                <Link to='/checkout' className='checkout-button'>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart