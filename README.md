## Questions To Answer:

This is your chance to talk about the prompt! Please provide these answers on your README.

- Please share your screen resolution, OS, browser version (best if you're using latest) you used to test in so we can look at it in:

I am on a Mac and am using chrome to view the project. The screen resolution is 1900px x 860px. I made it as responsive as I could with the time.

- What part of the design did you get stuck on? What took the most time? Similarly, what was the easiest part?

The part that took the most time is getting used to Material UI. I know I could have built it from something else but I saw that Material Ui already had a similar dashboard setup so I used that. I have not worked with Material UI except for one of my projects called a color picker app (private on github because I am working on the backend part of that). Also I tried to use as much of the overrides with the css components as much as possible but towards the end I felt it was quicker to use css in App.css instead.

I got stuck on deciding the best way to do the menu nav. I redid it a few times because I tried to make it as efficient as possible.

The easiest part for me was making the grid work. Material UI made that pretty easy.

- What part of the design didn't make sense? Did you change anything?

The part that could've made the design easier to use would be the location of the settings button that is stuck on the side of the screen. In the comp, it looked like it was obscuring the elements in the dashboard. It would have been better if it was next to the dropdown arrow on the header. It would be easier for the user to click on without accidentally hitting the 'filter range' button or 'date' dropdown. The blue dash on the active 'Dashboard' was also not really necessary because it's already highlighted white so I didn't make the tick in the design. The spacing between the different nav categories is a bit much. Especially if you have an admin user that has all the options, then the list could get really long.

- If you had more time, what would you have liked to implement?

If I had more time, I would like to clean up my files and make it less repetitive. I also made css in the App css file and the /styles/Dashboard.js so I'd like to clean those up too. Some of the css can be better organized in components so that it's easier to manage in the future. I would also do all the bonus items that were in the instructions. I tried to do the graphs a little bit and made it somewhat responsive.

- What did you have to research or lookup while working on this?

I had to look up Material UI stuff (components, how to override theme, etc). I also had to look up rechart and how to use that.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
