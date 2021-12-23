import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import { useParams, useRouteMatch } from "react-router-dom";

const styles = StyleSheet.create({
	h1: {
		fontSize: "7.5em",
		margin: "15px 0px",
		fontWeight: "bold",
	},
	h2: {
		fontWeight: "bold",
	},
});
const Error = () => {
	const { brand } = useParams();
	// const { url } = useRouteMatch();
	return (
		<div class="col-md-6 align-self-center">
			<h1 className={css(styles.h1)}>you params is : {brand}</h1>
			<h1 className={css(styles.h1)}>404</h1>
			<h2 className={css(styles.h2)}>UH OH! You're lost.</h2>
			<p>
				The page you are looking for does not exist.
			</p>
		</div>
	);
};

export default Error;
