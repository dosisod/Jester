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
