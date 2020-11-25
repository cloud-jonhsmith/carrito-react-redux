import React from 'react';
import { connect } from "react-redux";

const Product = ({products, addProductCar}) => {
    return (
        <section>
            <div>
                {
                    products.map(prod => (
                        <article key={prod.id}>
                            <img src={prod.url} alt={prod.nombre} />
                            <p>{prod.nameProduct} {prod.descProduct}</p>
                            <br/>
                            <p><b>Código:</b> {prod.codeProduct}</p>
                            <p><b>Stock:</b> {prod.stock}</p>
                            <br/>
                            <p>{prod.price}</p>
                            <br/>
                            <button onClick={() => addProductCar(prod)}>Añadir</button>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    products: state.products
  })
  
  const mapDispatchToProps = dispatch => ({
    addProductCar(product) {
      dispatch({
        type: "AGREGAR_PRODUCTO",
        product
      })
    },
  })

export default connect(mapStateToProps, mapDispatchToProps)(Product);