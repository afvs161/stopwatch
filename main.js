const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const reset = document.querySelector('#reset')

let [milliseconds, seconds, minutes] = [0, 0, 0]
let displayTimer = document.querySelector('.displayTimer')
let int

start.addEventListener('click', () => {
	if (int !== undefined) {
		clearInterval(int)
	}
	int = setInterval(displayTime, 10)
})

pause.addEventListener('click', () => {
	clearInterval(int)
})

reset.addEventListener('click', () => {
	clearInterval(int)
	;[milliseconds, seconds, minutes] = [0, 0, 0]
	displayTimer.innerHTML = '00 : 00 : 000'
})

function displayTime() {
	milliseconds += 10
	if (milliseconds == 1000) {
		milliseconds = 0
		seconds++
		if (seconds == 60) {
			seconds = 0
			minutes++
		}
	}

	displayTimer.innerHTML = `${addOneZero(minutes)} : ${addOneZero(
		seconds
	)} : ${addTwoZeros(milliseconds)}`
}

function addOneZero(a) {
	if (a < 10) {
		return '0' + a
	} else {
		return a
	}
}
function addTwoZeros(a) {
	if (a < 10) {
		return '00' + a
	} else if (a < 100) {
		return '0' + a
	} else {
		return a
	}
}
