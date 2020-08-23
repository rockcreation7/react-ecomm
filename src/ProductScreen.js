import React from 'react';
import { Link } from 'react-router-dom'
import data from '../data';

export function ProductScreen(props) {
        return <>{data.products.map((product) => (
            <>
              <div>{product.name}</div>
              <div>{product.price}</div>
              <div>{product.rating}</div>
              <div>{product.category}</div>
              <div>{product._id}</div>
            </>
          ))}  
          </>
    }
}