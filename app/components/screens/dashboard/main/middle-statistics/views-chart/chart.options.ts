export const options = {
	responsive: true,
	scales: {
		x: {
			grid: {
				display: false,
				drawBorder: false
			},
			ticks: {
				font: {
					size: 18
				}
			}
		},
		y: {
			grid: {
				display: false,
				drawBorder: false
			},
			ticks: {
				display: false
			}
		}
	},
	borderRadius: 16,
	borderSkipped: false,
	barThickness: 60,
	plugins: {
		tooltip: {
			backgroundColor: '#fff',
			titleColor: '#222',
			titleFont: {
				size: 18
			},
			bodyColor: '#222',
			bodyFont: {
				size: 16,
				weight: 500
			},
			titleAlign: 'center',
			padding: 12,
			displayColors: false,
			yAlign: 'bottom',
			callbacks: {
				label: function (context: any) {
					if (context.parsed.y !== null) {
						return context.parsed.y.toLocaleString('ru-RU')
					}
				}
			}
		}
	}
}
