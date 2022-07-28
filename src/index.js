const messages = [
    "Emmanuel", "Tania", "Julieth", "Diego", "Carolina", "Paulina"
]
const randomMsg = () =>{
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}

module.exports = {randomMsg}