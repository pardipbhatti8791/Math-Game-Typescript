function startGame() {
    // Starting new game
    let messageElement = document.getElementById("messages");
    messageElement!.innerText = 'Welcome to Multimath! Starting new games...!!!'
}

document.getElementById('startGame')!.addEventListener('click', startGame);
