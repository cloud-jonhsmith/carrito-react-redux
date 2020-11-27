import React from "react"
import { connect } from "react-redux";

const AddProductCar = ({productsCar, total, deleteProduct, minusCount, plusCount}) => (
    <>
        <h2>CARRITO DE COMPRAS</h2>
        <ul className='menu-hamper'>
            <li className='item-hamper-menu bolt-letter'>Código</li>
            <li className='item-hamper-menu bolt-letter'>Producto</li>
            <li className='item-hamper-menu bolt-letter'>Cantidad</li>
            <li className='item-hamper-menu bolt-letter'>Precio</li>
            <li className='item-hamper-menu'>#</li>
        </ul>
        {
            productsCar.map(prod =>
            <ul key={prod.id} className='list-product-hamper'>
                <li className='item-hamper-product color-item-letter-gray'>{prod.codeProduct}</li>
                <li className='item-hamper-product color-item-letter-gray'>{prod.nameProduct}</li>
                <li className='item-hamper-product color-item-letter-gray'>
                    <i className="fas fa-minus-circle icon-size color-item-letter-black" onClick={ () => minusCount(prod)}></i>
                    {prod.count}
                    <i className="fas fa-plus-circle icon-size color-item-letter-black" onClick={ () => plusCount(prod)}></i>
                </li>
                <li className='item-hamper-product color-item-letter-gray'>{prod.price}</li>
                <li className='item-hamper-product'>
                    <i className="fas fa-trash icon-size" onClick={ () => deleteProduct(prod)}></i>
                </li>
            </ul>
            )
        }
        {
            <div className='total-price'><p>Total: {total}</p></div>
        }
    </>
)

const mapStateToProps = state => ({
    productsCar: state.productsCar,
    total: state.total
})

const mapDispatchToProps = dispatch => ({
    deleteProduct(product) {
        dispatch({
            type: "QUITAR_PRODUCTO",
            product
        })
    },
    minusCount(product) {
        dispatch({
            type: "DISMINUIR_CANTIDAD",
            product
        })
    },
    plusCount(product) {
        dispatch({
            type: "AUMENTAR_CANTIDAD",
            product
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProductCar)