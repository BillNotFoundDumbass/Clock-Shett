const secondHand = document.querySelector('.second-hand');
const minutehand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

console.log(hourHand)

function setDate () {
    const now = new Date();
    const offset = 90;
    const seconds = now.getSeconds();
    const secondDegrees = ((360 / 60) * seconds) + offset;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((360 / 60) * minutes) + offset;
    minutehand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((360 / 12) * hours) + offset;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(hours)
}

setInterval(setDate, 1000);
