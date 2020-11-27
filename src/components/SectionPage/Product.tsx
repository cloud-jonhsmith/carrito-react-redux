import React from 'react';
import { connect } from "react-redux";

const Product = ({products, addProductCar}) => {
    return (
        <>
          {
            products.map(prod => (
                <article className="card" key={prod.id}>
                    <img src={prod.url} alt={prod.nombre} />
                    <p>{prod.nameProduct} {prod.descProduct}</p>
                    <br/>
                    <p><b>Código:</b> {prod.codeProduct}</p>
                    <p><b>Stock:</b> {prod.stock}</p>
                    <br/>
                    <p>{prod.price}</p>
                    <br/>
                    <button className="btn-addHamper" onClick={() => addProductCar(prod)}>Añadir</button>
                </article>
            ))
            }
        </>
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