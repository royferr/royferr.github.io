<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roy Ferr's Website</title>
    <meta name="description" content="Welcome to Roy Ferr's personal website.">
    <link rel="stylesheet" href="styles.css"> <!-- You can link to an external CSS file for styling -->
</head>
<body>
    <header>
        <h1>Welcome to Roy Ferr's Website</h1>
    </header>
    
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    
    <main>
        <section>
            <h2>About Me</h2>
            <p>My name is roy, I love coding, can edit videos (decently) adn learning python, javascript, html.</p>
        </section>
        
        <section>
            <h2>My Portfolio</h2>
            <p>nothin here yet.</p>
        </section>
        
        <section>
            <h2>Contact Me</h2>
            <p>royferr3ll@gmail.com.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2023 Roy Ferr</p>
    </footer>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
    <title>Guess the Number Game</title>
    <style>
        body {
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Guess the Number Game</h1>
    <p>Guess a number between 1 and 100:</p>
    <input type="number" id="guess" min="1" max="100">
    <button onclick="checkGuess()">Submit Guess</button>
    <p id="message"></p>

    <script>
        // Generate a random number between 1 and 100
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            const guess = document.getElementById("guess").value;
            attempts++;

            if (guess < randomNumber) {
                setMessage("Try a higher number!");
            } else if (guess > randomNumber) {
                setMessage("Try a lower number!");
            } else {
                setMessage(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
                disableInput();
            }
        }

        function setMessage(message) {
            document.getElementById("message").textContent = message;
        }

        function disableInput() {
            document.getElementById("guess").disabled = true;
        }
    </script>
</body>
</html>
This is a simple HTML game where the player guesses a number, and the script checks if the guess is too high or too low compared to the randomly generated number. When the player correctly guesses the number, it displays a victory message. You can copy and paste this code into an HTML file and open it in a web browser to play the game.

Keep in mind that this is a basic example. Building more complex games in HTML typically involves the use of game development libraries or frameworks like Phaser, Three.js (for 3D games), or even game engines like Unity for web-based games.

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>YouTube Profile Link</title>
</head>
<body>
    <p>Visit the YouTube profile: <a href="https://www.youtube.com/@royfrr" target="_blank">royfrr's YouTube</a></p>
</body>
</html>



