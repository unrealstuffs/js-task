const height = 100
const speed = 50
const rollDown = 30

let distance = 0
let day = 1
let time = 'day'

while (distance < height) {
	if (time === 'day') {
		distance += speed
		time = 'night'
	} else {
		distance -= rollDown
		time = 'day'
		day++
	}
}

console.log(day)
