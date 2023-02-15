import React, { useEffect, useState } from "react";
import "./covid.css";
const Covid = () => {
	const [data, setData] = useState([]);
	const getCovidData = async () => {
		try {
			const res = await fetch("https://data.covid19india.org/data.json");
			// console.log(res);
			const actualData = await res.json();
			// console.log(actualData.statewise[0]);
			setData(actualData.statewise[0]);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getCovidData();
	}, []);
	return (
		<>
			<section className="main">
				<h1>Covid data</h1>
				<ul>
					<li className="card">
						<div className="card_main">
							<div className="card_inner">
								<p className="card_name">
									<span>Our</span> Country
								</p>
								<p className="card_num">Bangladesh</p>
							</div>
						</div>
					</li>
					<li className="card">
						<div className="card_main">
							<div className="card_inner">
								<p className="card_name">
									<span>Total</span> Recovered
								</p>
								<p className="card_num">{data.recovered}</p>
							</div>
						</div>
					</li>
					<li className="card">
						<div className="card_main">
							<div className="card_inner">
								<p className="card_name">
									<span>Total</span> Confirmed
								</p>
								<p className="card_num">{data.confirmed}</p>
							</div>
						</div>
					</li>
					<li className="card">
						<div className="card_main">
							<div className="card_inner">
								<p className="card_name">
									<span>Total</span> Deaths
								</p>
								<p className="card_num">{data.deaths}</p>
							</div>
						</div>
					</li>
					<li className="card">
						<div className="card_main">
							<div className="card_inner">
								<p className="card_name">
									<span>Total</span> Active
								</p>
								<p className="card_num">{data.active}</p>
							</div>
						</div>
					</li>
					<li className="card">
						<div className="card_main">
							<div className="card_inner">
								<p className="card_name">
									<span>Total</span> Active
								</p>
								<p className="card_num">{data.lastupdatedtime}</p>
							</div>
						</div>
					</li>
				</ul>
			</section>
		</>
	);
};

export default Covid;
