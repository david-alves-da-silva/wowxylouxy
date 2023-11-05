import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../../lib/state/actions";
const Row = ({ id, name, price, quantity }) => {
    const dispatch = useDispatch();
    const updateCartAction = (e) => {
        dispatch(updateCart(id, e.target.value));
    };
    const removeFromCartAction = (e) => {
        e.preventDefault();
        dispatch(removeFromCart(id));
    };
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };
    return (
        <tr>
            <td>
                <figure className="itemside">
                    <div className="aside">
                        <img src={`images/items/${id}.jpg`} className="img-sm" />
                    </div>
                    <figcaption className="info">
                        <a href="#" className="title text-dark">
                            {name}
                        </a>
                    </figcaption>
                </figure>
            </td>
            <td>
                <select
                    className="form-control"
                    value={quantity}
                    onChange={updateCartAction}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </td>
            <td>
                <div className="price-wrap">
                    <span className="price">${price * quantity}</span>
                </div>
            </td>
            <td className="text-right">
                <a
                    data-original-title="Save to Wishlist"
                    title=""
                    href="#"
                    className="btn btn-light"
                    data-toggle="tooltip"
                    // onClick={() => null}
                    onClick={toggleLike}
                >
                    {" "}
                    <i className={`fas fa-heart ${liked ? ' text-danger fa-lg ' : 'text-dark'}`}></i>
                </a>
                <a
                    href=""
                    className="btn btn-light btn-round"
                    onClick={removeFromCartAction}
                >
                    {" "}
                    Remove
                </a>
            </td>
        </tr>
    );
};
export default Row;
