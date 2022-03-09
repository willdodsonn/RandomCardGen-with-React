import React, { useEffect } from "react";

function CardGen() {
	const generateRandomSuit = () => {
		let suit = ["♦", "♥", "♠", "♣"];
		let randomSuit = Math.floor(Math.random() * suit.length);
		return suit[randomSuit];
	};
	const generateRandomNumber = () => {
		let indexNumbers = [
			"A",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"J",
			"Q",
			"K",
		];
		let randomNum = Math.floor(Math.random() * indexNumbers.length);
		return indexNumbers[randomNum];
	};

	// let suit = generateRandomSuit();
	// document.querySelector(".symbol").innerHTML = suit;
	// document.querySelector(".other-symbol").innerHTML = suit;
	// document.querySelector(".number").innerHTML = generateRandomNumber();

	// useEffect(() => {

	// }, []);

	return (
		<div>
			<div className="container-fluid text-center">
				<div className="card">
					<div className="symbol"></div>
					<div className="number"></div>
					<div className="other-symbol"></div>
				</div>
				<button
					className="button"
					onClick={() => {
						let suit = generateRandomSuit();
						document.querySelector(".symbol").innerHTML = suit;
						document.querySelector(".other-symbol").innerHTML =
							suit;
						document.querySelector(".number").innerHTML =
							generateRandomNumber();
					}}>
					New Card
				</button>
			</div>
		</div>
	);
}

export default CardGen;
