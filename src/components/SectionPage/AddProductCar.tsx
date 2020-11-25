import React from "react"
import { connect } from "react-redux";

const AddProductCar = ({productsCar, deleteProduct}) => (
    <section>
        <h2>CARRITO DE COMPRAS</h2>
        <div>
            {
                productsCar.map(prod => (
                    <article key={prod.id}>
                        <div>
                            <img src={prod.url} alt={prod.nameProduct}/>
                            <button onClick={() => deleteProduct(prod)}>X</button>
                        </div>
                        <p>{prod.nameProduct}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    productsCar: state.productsCar
})

const mapDispatchToProps = dispatch => ({
    deleteProduct(product) {
        dispatch({
            type: "QUITAR_PRODUCTO",
            product
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProductCar)