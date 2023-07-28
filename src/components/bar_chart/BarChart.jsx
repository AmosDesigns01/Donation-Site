"use client"
import React from 'react'
import styles from './page.module.css'
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const items = [
	{
		id: 1,
		color: "brown",
		name: "Alexander brown hall"
	},
	{
		id: 2,
		color: "lightblue",
		name: "Kuti hall"
	},
	{
		id: 3,
		color: "red",
		name: "Tedder hall"
	},
	{
		id: 4,
		color: "yellow",
		name: "Mellanby hall"
	},
	{
		id: 5,
		color: "teal",
		name: "Queen Elizabeth hall"
	},
	{
		id: 6,
		color: "blue",
		name: "Independence hall"
	},
	{
		id: 7,
		color: "purple",
		name: "Idia hall"
	},
	{
		id: 8,
		color: "teal",
		name: "Bello hall"
	},
	{
		id: 9,
		color: "lightgreen",
		name: "Awolowo all"
	},
	{
		id: 10,
		color: "magenta",
		name: "Nnamdi Azikwe hall"
	},
]

const NameBox = ({item: {color, name}}) => {
	return (
		<div className={styles.namebox}>
			<span className={styles[`${color}`]}></span>
			<p>{name}</p>
		</div>
	)
}

function BarChart() {
return (
	<div className={styles.bar_chart}>
	<div className={styles.text}>
		<h1>Donations received so far</h1>
		<p>Each bars represent the payment by each individual halls</p>
		<hr />
	</div>
	<div className={styles.chart}>	
	<div style={{ maxWidth: "1050px" }}>
		<Bar
		data={{
			// Name of the variables on x-axies for each bar
			labels: ["", "", "", "", "", "", "", "", "", ""],
			datasets: [
			{
				// Label for bars
				label: "total count/value",
				// Data or value of your each variable
				data: [	240, 220, 210, 90, 200, 40, 210, 70, 150, 170],
				// Color of each bar
				backgroundColor: ["brown", "lightblue", "red", "yellow", "teal", "blue", "purple", "teal", "lightgreen"],
				// Border color of each bar
				borderColor: ["brown", "lightblue", "red", "yellow", "teal", "blue", "purple", "teal", "lightgreen"],
				borderWidth: 0.5,
			},
			],
		}}
		// Height of graph
		height={400}
		options={{
			maintainAspectRatio: false,
			scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true
                    }
                }],
			},
			legend: {
			labels: {
				fontSize: 15,
			},
			},
		}}
		/>
	</div>
	</div>
	<div className={styles.bottom}>
		{items.map((item) => <NameBox item={item} key={item.id}/>)}
	</div>
	</div>
);
}

export default BarChart;
