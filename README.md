# Mini Movie App

This is a project from the **SlickMediaGroup**. Feedback and questions are welcome!
The project requirements are:
- Making sure colours are accurate
- Ensure paddings/margins are accurate for all different screen sizes
- Ensure font-sizes/letter-spacings/line-heights are accurate for all different screen sizes.
- Implement [this](https://www.figma.com/file/lAyarc95eEn9bkBagPiEgE/Untitled?node-id=0%3A1) design from Figma in React

---
## Commit Acronym
In this project:

-**FEAT** = FEATURE THis means that something has been added to the codebase

-**FIX** = FIXTURE THis means that some part to the codebase has been corrected or fixed.


---
**The live project can be found at [https://random-palette-maker.netlify.app/](https://random-palette-maker.netlify.app/)**

---
## Tech/framework used
Built with React.js using [TmDb API](https://www.themoviedb.org/). While being styles with SCSS.

---
## Screenshot
![image](https://user-images.githubusercontent.com/67756784/155132592-0d17a238-3498-4a92-86e0-816774f6b1a5.png)

---
## File Structure
Inside the **Src** folder, there are three folders namely:
- assets
- components
- styles
---
- **src/assets** : This folder contains the logo and the hero image that was supplied in the figma file
- **src/components** : This folder contains the various components used in the web application
- **src/styles** : This folder contains the stylesheets that complements each of the component file. The **utils.scss** file contains variables that were usef in the project in order to avoid repetition and allow for scalabilty.

---

## Problems Encountered
- **Unsuitable Endpoint** : One of the requirements was to query the OMDB(Open Movie Database). In the course of development, there was no clear endpoint that could be queried inorder to return a set of movies. This cost me over an hour trying to get an endpoint to return a set of movies. I instead used a similar API called [TMBD](https://www.themoviedb.org/) because the was a clear endpoint for quering the required magnitude of data.
- **Unresponsive Design** : Although the design appears to be put together in a short period of time, few of the dimensions from figma did not give the desired appearance because some components were not properly laid out

---

## Installation

Clone project
`git clone https://github.com/valentinesamuel/mytest-app.git`

Install npm and yarn add-ons
`npm install` and `yarn install`

Run project
`yarn start`

Open your browser and enter path
`localhost:3000`

---
## License

[MIT](https://choosealicense.com/licenses/mit/)
Most open source projects use the MIT license.
