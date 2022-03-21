# Mini Movie App

This is a project from the **SlickMediaGroup**. 

Feedback and questions are welcome!


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
**The live project can be found at [https://mytest-app.vercel.app/](https://mytest-app.vercel.app/)**

---
## Tech/framework used
Built with React.js using [TMBD API](https://www.themoviedb.org/). While being styles with SCSS.

---
## Screenshot

-Desktop Version
![image](https://user-images.githubusercontent.com/67756784/159370932-8bfce834-4c34-4368-b90e-cce72fe0d09e.png)


-Tablet Version
![image](https://user-images.githubusercontent.com/67756784/159370851-4f182960-1c62-4629-8ba5-930729bc6291.png)


-Mobile Version
![image](https://user-images.githubusercontent.com/67756784/159370885-28b3195b-5350-4aa2-8ff4-ac1df24b96d5.png)

*Because i love what i do, i decided to take this project a step further by using the search term entered by the user to make another call to the API which returns movies that matches. Without getting rid of the original movies that loaded when the application was first launched*


-Desktop Version
![image](https://user-images.githubusercontent.com/67756784/159372444-47a9affa-8730-498a-82ee-20b2e09d18cc.png)

-Tablet Version
![image](https://user-images.githubusercontent.com/67756784/159372501-9d830eab-8479-43e1-a1fa-3acffa25245e.png)


-Mobile Version
![image](https://user-images.githubusercontent.com/67756784/159372518-6847c373-167e-47da-b702-54473d9cfcf1.png)



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
- **Unsuitable Endpoint** : One of the requirements was to query the OMDB(Open Movie Database). In the course of development, there was no clear endpoint that could be queried inorder to return a set of movies. This cost me over an hour trying to query an endpoint to return a set of movies. I instead used a similar API called [TMBD](https://www.themoviedb.org/) because the was a clear endpoint for quering the required magnitude of data.
- **Unresponsive Design** : Although the design appears to be put together in a short period of time, few of the dimensions from figma did not give the desired appearance because some components were not properly laid out.
- **Barely Incomplete Data** : Not all movies have an image, some of the movies objects return null.
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


