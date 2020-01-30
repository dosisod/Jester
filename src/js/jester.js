const jester={

Test: class {
	constructor() {
		this.passed=false
		this.failed=false
	}
},

run: function(tests) {
	var total=new Fraction(tests.length)
	var fails=new Fraction()
	var passes=new Fraction()

	nu("total-tests").innerText=""
	nu("passed-tests").innerText=""
	nu("failed-tests").innerText=""

	console.log(tests)
	console.log(tests[0].pass)
	console.log(tests[0].fail)

	for (const i in tests) {
		if (tests[i].passed) {
			passes.addBoth()
			fails.addBottom()
		}
		else if (tests[i].failed) {
			fails.addBoth()
			passes.addBottom()
		}

		total.addTop()
		updateFraction(total, "total-tests")

		updateFraction(passes, "passed-tests")
		updateFraction(fails, "failed-tests")
	}
}

}

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

function toggleError(element) {
	const errorBox=element
		.parentElement
		.getElementsByTagName("code")[0]

	if (element.innerText==="v") {
		element.innerText=">"
		collapseError(errorBox)
	}
	else {
		element.innerText="v"
		expandError(errorBox)
	}
}

function collapseError(errorBox) {
	errorBox.classList.remove("jester-error-expand")
}

function expandError(errorBox) {
	errorBox.classList.add("jester-error-expand")
}
