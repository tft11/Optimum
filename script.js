onst gameLinks = [
            "https://example-game1.com",
            "https://example-game2.com",
            "https://example-game3.com"
        ];
        
        // Variable to keep track of the current game index
        let currentGameIndex = 0;

        // Function to switch the game
        function switchGame() {
            // Increment the index
            currentGameIndex = (currentGameIndex + 1) % gameLinks.length;
            // Update the iframe source
            const gameFrame = document.getElementById('gameFrame');
            gameFrame.src = gameLinks[currentGameIndex];
        }

        // Add event listener to the button
        document.getElementById('switchButton').addEventListener('click', switchGame); function switchGame(url) {
            const gameFrame = document.getElementById('gameFrame');
            gameFrame.src = url; // Change the source of the iframe
        }
