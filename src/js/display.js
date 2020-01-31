class Fraction {
	constructor(denomenator) {
		this.denomenator=denomenator || 0
		this.numerator=0
	}

	addBoth() {
		this.addTop()
		this.addBottom()
	}

	addTop() {
		this.numerator++
	}

	addBottom() {
		this.denomenator++
	}
}

function updateFraction(fraction, id) {
	document.getElementById(id).innerText=(
		fraction.numerator +
		"/" +
		fraction.denomenator
	)
}
