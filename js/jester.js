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
