# HTML Slides created in React JS

See https://jeanem.github.io/html-slides/

## Setup

-   Check that your Node version is Node 8 (LTS) or later
-   git clone https://github.com/jeanem/html-slides.git
-   npm install

## Deploy locally and to Github page

-   to run locally: npm run start
    -   if you get a node-sass error you may need to install it separately
    -   npm install node-sass --save
-   to deploy to github page, on the master branch: npm run deploy

## Pointing to other slide decks

Replace the name of the slide deck in the BodyContent and SlidesInfo imports in four spots within the App.js, components/PrintView.js and the components/SlideView.js

## Building to place slides in another hosting spot

-   replace "html-slides" in two spots in package.json with slideshow name
-   in the public/index.html replace "HTML Slides" in the title tag with the slideshow display name
-   change favicon if applicable

## Structure of project

-   index.js
    -   App.js
        -   components
            -   PrintView.js
            -   SlideVliew.js

These are the two major views and pull in other components in that folder like the Header.js, etc. They then point to

-   slides
    -   [the particular slide deck]
        -   components
            -   BodyContent.js
            -   SlidesInfo.js

These files are kept at the slide deck level so they can be customized for the presentation -- e.g. the WCAG 2.1 has consistent resource links that warranted a resource section on each slide whereas the CSUN 2019 deck did not.

Individual slides are wrapped within the BodyContent and for the most part are simple components to return markup, but be more complex if needed.
