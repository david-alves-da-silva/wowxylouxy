import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../lib/state/selectors";
import Layout from "./Layout";
import Row from "./Row";

const Cart = () => {
	const { items } = useSelector((state) => ({ ...state.cart }));
	const total = useSelector(selectCartTotal);
	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
		localStorage.setItem("total", total);
	}, []);
	return (
		<>
			<Layout>
				{false && (
					<p
						className="d-flex justify-content-center align-items-center"
						style={{ fontSize: 20 }}
					>
						Votre panier est vide
					</p>
				)}
				{items.map((item) => (
					<Row key={item.id} {...item} />
				))}
			</Layout>
		</>
	);
};
export default Cart;
