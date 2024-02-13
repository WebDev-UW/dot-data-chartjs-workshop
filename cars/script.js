const data = fetch("/cars/data.csv").then(res => res.text()).then(data => {
	const rowsStrings = data.split("\n")
	const rows = rowsStrings.map(row => row.split(",")).slice(1, -1)

	console.log(rows)

	const manualRows = rows.filter(row => row[8] == "1")
	const automaticRows = rows.filter(row => row[8] == "0")

	const manualDataset = manualRows.map(row => ({
		x: +row[6],
		y: +row[1],
		r: +row[4] / 10,
		label: row[0]
	}))

	const automaticDataset = automaticRows.map(row => ({
		x: +row[6],
		y: +row[1],
		r: +row[4] / 10
	}))

	console.log(manualDataset)
	console.log(automaticDataset)

	const ctx = document.getElementById("my-chart");

	new Chart(ctx, {
		type: "bubble",
		data: {
			datasets: [
				{
					label: "Manual Cars",
					data: manualDataset,
				},
				{
					label: "Automatic Cars",
					data: automaticDataset,
				}

			],
		},
		options: {
			plugins: {
				title: {
					display: true,
					text: "Fuel Efficiency and Weight vs Quarter Mile Time"
				}
			},
			scales: {
				x: {
					title: {
						display: true,
						text: "Weight (1000lbs)"
					}
				},
				y: {
					title: {
						display: true,
						text: "Fuel Efficiency (mpg)"
					}
				},
			},
		}
	});
})
