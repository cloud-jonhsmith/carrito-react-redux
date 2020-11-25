import { createStore } from "redux";

import monitor1 from '../img/monitor1.jpg';
import monitor2 from '../img/monitor2.jpg';
import monitor3 from '../img/monitor3.jpg';
import monitor4 from '../img/monitor4.jpg';
import monitor5 from '../img/monitor5.jpg';
import monitor6 from '../img/monitor6.jpg';

const initialState = {
    products: [
        {
            id: 1,
            nameProduct: 'Monitor LED LG',
            codeProduct: '11111',
            descProduct: '21\'',
            price: '$200.00',
            stock: 12,
            url: monitor1,
            count: 1
        },
        {
            id: 2,
            nameProduct: 'Monitor a color SAMSUNG',
            codeProduct: '22222',
            descProduct: '27\'',
            price: '$450.00',
            stock: 10,
            url: monitor2,
            count: 1
        },
        {
            id: 3,
            nameProduct: 'Monitor curvo',
            codeProduct: '33333',
            descProduct: '24\'',
            price: '$400.00',
            stock: 6,
            url: monitor3,
            count: 1
        },
        {
            id: 4,
            nameProduct: 'Monitor curvo SAMSUNG',
            codeProduct: '44444',
            descProduct: '32\'',
            price: '$600.00',
            stock: 3,
            url: monitor4,
            count: 1
        },
        {
            id: 5,
            nameProduct: 'Monitor gamer',
            codeProduct: '55555',
            descProduct: '27\'',
            price: '$500.00',
            stock: 4,
            url: monitor5,
            count: 1
        },
        {
            id: 6,
            nameProduct: 'Monitor gamer curvo',
            codeProduct: '66666',
            descProduct: '32\'',
            price: '$700.00',
            stock: 9,
            url: monitor6,
            count: 1
        },
    ],
    productsCar: []
}

const reducerProducts = (state = initialState, action) => {
    if (action.type === "AGREGAR_PRODUCTO") {
        return {
            ...state,
            productsCar: state.productsCar.concat(action.product),
            products: state.products.filter(prod => prod.id !== action.product.id)
        }
    }

    if ( action.type === "QUITAR_PRODUCTO" ) {
        return {
            ...state,
            products: state.productsCar.concat(action.product),productsCar: state.products.filter(prod => prod.id !== action.product.id)
        }
    }

    return state
}

export default createStore(reducerProducts)