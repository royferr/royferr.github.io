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
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>other stuff i coded.</title>
</head>
<body>
      Other Stuff I Coded
</body>
</html>
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

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Random Quote Generator</title>
    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
        }
        #quote-container {
            margin: 100px;
            padding: 20px;
            border: 2px solid #333;
            border-radius: 10px;
            background-color: #fff;
        }
    </style>
</head>
<body>
    <h1>Random Quote Generator</h1>
    <div id="quote-container">
        <p id="quote">Click the button to get a random quote!</p>
        <button id="generate-button">Generate Quote</button>
    </div>
    
    <script>
        const quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "In the middle of every difficulty lies opportunity. - Albert Einstein",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
        ];

        const quoteContainer = document.getElementById("quote-container");
        const quoteText = document.getElementById("quote");
        const generateButton = document.getElementById("generate-button");

        generateButton.addEventListener("click", () => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            quoteText.textContent = quotes[randomIndex];
        });
    </script>
</body>
</html>

