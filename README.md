# CubeChaser
*The backend server repo for this project can be found at [cubechaser-backend](https://github.com/sberdup/p2-backend-cubechaser) on github.*

CubeChaser is a single html page application that uses react and react-router-v6 to incorporate client side routing for a better user experience.

## Main Menu
When navigating to the main page at http://localhost:3000 or the deployed version at [netlify](https://main--ephemeral-stardust-824d3d.netlify.app/), the title screen for CubeChaser is displayed. From here, the user can navigate via < Link/> elements to the game (/game), or the high score page (/scores).

Additionally, there is a button on the main menu that the user can click to show/hide the game instructions. These are as follows:
1. Move your block using the ← ↑ → ↓ arrow keys.
2. Get yellow power cubes to add to your score and speed but...
3. Watch out for the red cubes!

## Leaderboard
The section of the application displaying previous high scores features a link to return to the main menu, and a link to jump into a new game. On the page itself, high scores are retrieved from the backend JSON server and sorted so that the top score will always be shown at the top.

## CubeChaser Game
After starting a new game, the player is presented with a box representing the play space. At the top, a link to quit to the main menu is shown and below that, a line of text tracking the current number of yellow cubes collected. Below that, a green and purple rectangle that the player can control in two dimensions via the arrow keys appears. And near the middle of the screen is a yellow square with a star on it referred to as a 'power cube'.

*Note: If the player does not collect a cube within several seconds, a helpful message will appear at the top to ensure the player clicks inside the play space to be able to control the rectangle.*

Upon collecting one yellow square, a red square with a skull and crossbones will enter the play space. Unlike the yellow variety, this 'death cube' will move on its own in the X and Y direction until it hits a wall. Upon hitting a wall, the death cube will bounce off with the same velocity in the opposite direction. If the death cube touches the player object, a game over will occur. After each power cube is collected, a new one will spawn in a random location in the arena. After 3 power cubes are collected, the player will see a message that says *Speed up!* in the middle of the screen, reflecting a mobility increase. Speed increases are granted at a few thresholds, all the way up to 60 cubes collected.

To balance these speed increases, additional death cubes will also spawn at a few power cube thresholds. Each one has a higher speed than the last. At 50 power cubes collected, 4 death cubes will be on the field. The object of the game is simply to avoid coming into contact with them while collecting as many power cubes as possible. 

### Game over
When the player touches a death cube, the game screen will be replaced by a game over screen that says **You died!**. This is technically a fourth route on the application, but it is not reachable by standard methods and if the user simply navigates manually to http://localhost:3000/newhighscore (or the equivalent on the deployed version) without playing the game, they will not be permitted to post a legitimate high score. Name entry for a high score is limited to 5 characters, as visually suggested by 5 blank dashes on the high score entry form. Having been programmatically navigated here upon death, the user will also be automatically navigated to the leaderboard section of the site after submitting their record so they can immediately view it. 

*Note: if the user fails to submit a name, an alert prompt will let the user know this.*

## Parting Words
Thank you for playing CubeChaser! I hope you enjoy it.