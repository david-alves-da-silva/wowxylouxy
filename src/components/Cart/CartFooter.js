import React from 'react';
import { Link } from "react-router-dom";

const CartFooter = () => (
    <div className="card-body border-top ">
        <button className="btn btn-primary float-md-right"><Link to='/checkout' className="text-light">Effectuer l'achat <i className="fa fa-chevron-right"></i></Link></button>
        <button className="btn btn-secondary float-md-right  mr-2"><Link to='/' className="text-light"> Continuer vos achats <i className="fa fa-chevron-right"></i></Link></button>
    </div>
)
export default CartFooter