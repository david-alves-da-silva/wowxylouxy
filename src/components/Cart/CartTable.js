import React from 'react';
import CartFooter from './CartFooter'

const CartTable = ({ children }) => {
    return (
        <>
            <div className="card">
                <table className="table table-borderless table-shopping-cart">
                    <thead className="text-muted">
                        <tr className="small text-uppercase">
                            <th scope="col">Product</th>
                            <th scope="col" width="120">Quantité</th>
                            <th scope="col" width="120">Prix</th>
                            <th scope="col" className="text-right" width="200"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {children}
                    </tbody>
                </table>
                <CartFooter />
            </div>
            <div className="alert alert-success mt-3">
                <p className="icontext"><i className="icon text-success fa fa-truck"></i> Livraison gratuite sous 1 à 2 semaines</p>
            </div>
        </>
    )
}
export default CartTable