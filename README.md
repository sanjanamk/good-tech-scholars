# Good Tech Scholars

Good Tech Scholars is a virtual program that enables college students to develop industry skills through hands‐on experience, workshops, and projects. With guidance from IBM mentors, students collaborate to solve real‐world challenges using digital technologies with an intent to get students industry ready for Software product engineering Jobs.

## Scripts to run the project

### `npm install`

Downloads all the required dependencies specified in the package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Script for deployment

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Customizing the project

The content of the project is driven by the data in `translation.js` present in the folder `src/translation`.

Each section in the translation file corresponds to the different parts in the project.

- headband -> Headband (Good Tech Scholars, description)
- tabs -> Tabs (Theme, Learning, etc)
- program -> About the program
- about -> Know more about IBM
- oppurtunities -> Learning opportunities
- badges -> Badges and Credentials
- schedule -> Schedule
- connect -> Connect with us
- faq -> Frequently Asked Questions
- contact -> Questions, Suggestions, Concerns?
- footer -> Footer (Contact, Privacy, etc)

For the Connect with us customisation, all the images need to be added at `src/assets/connect` and the image name should be mapped with the `img` property of the corresponding person in the `connect` section of the translation.js.