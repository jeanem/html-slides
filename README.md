# HTML Slides created in React JS

For a demo, see https://jeanem.github.io/wcag-2.1/

## Description

The idea behind this HTML slide show is to create an accessible slide deck and be able to demonstrate coding techniques right within the slides.

To that end, each slide is an individual React component with JSX which will render into markup. Slide creation and editing is done directly in the code as there is not a GUI attached.

## Setup and deploying locally

-   Check that your Node version is Node 8 (LTS) or later
-   git clone https://github.com/uw-cop-frontend/html-slides.git
-   `npm install`
    -   note if errors happen initially with the install you may need to delete the package-lock.json and rerun
-   in VS Code, install the Prettier extension

    -   to enable go in the upper left go to `Code > Preferences > Settings`
    -   search for the word `format`
    -   find `Editor: Default Formatter` and in the dropdown select `esbenp.prettier-vscode`
    -   find `Format On Save` and ensure it is checked

-   to run locally: `npm run start`
    -   if you get a node-sass error you may need to install it separately
    -   `npm install node-sass --save`

## Contributing to multi-presenter slide decks

-   create a new branch `git checkout -b my-branch`
-   under `src\slides` find the presentation slide deck (e.g. `js-session-2`)
-   and the section folder that you will contribute to (e.g. `intro, part-1`, etc.)
-   each section is composed of slides and a list to track their order and meta-data
-   to create a new slide
    -   duplicate one of the example slides in your folder and rename it with your slide name
    -   open the list file (`\_{section name}List.js)` and add the meta data for the slide
    ```
      {
    title: 'Part 1 Exercises',
    shortTitle: 'Part 1 Exercises',
    directory: 'part-1',
    contentFile: 'Exercises',
    baseURL: null,
    detailLink: null,
    linkTitle: null,
    },
    ```
    -   the order of slide in this list determines the order in the presentation
-   edit your slide by adding content between the `<div> tag` -
    ```
    function Slide(props) {
    return (
        <div>
        <p>Exercises for this section</p>
        </div>
    );
    }
    ```
    -   the format is JSX which is similar to HTML but has some exceptions like attribute names, e.g. instead of `class` it is `className` - [this article](https://medium.com/@wilstaley/jsx-vs-html-3aeb55ed6ee4) explains it
    -   note that all tags need to be closed or the program will error
-   verify the slide(s) display correctly by running the slides locally (see section above)
-   push your commits and branch to GitHub
    -   `git push origin my-branch`

## Format options

### Code examples

-   for plain rendering inline with white background (small snippets): <br />
    `` <code>{`<script>alert();</script>`}</code> ``
-   for larger blocks with white background: <br />
    `` <pre> <code> {`<script>alert();</script>`} </code> </pre> ``

### Quotes

-   Using the `<blockquote>` tag will add the large quotes:

```
<blockquote cite="Secrets of the JavaScript Ninja, page 90">A closure is [2] the scope created when [1] a function is declared that [3] allows the function to access and manipulate variables that are external to that function.</blockquote>
```

-   `<q>` for inline quotes adds italics

### Reference links

If the content on a slide is from a predominate source you want to reference, adding the link and title will add it to the bottom of the slide:

```
    {
      title: 'Primitives',
      shortTitle: 'Primitives',
      contentFile: 'Primitives',
      baseURL: '',
      detailLink: 'https://developer.mozilla.org/en-US/docs/Glossary/Primitive',
      linkTitle: 'MDN article: Primitives',
    },
    {
      title: 'Numbers',
      shortTitle: 'Numbers',
      contentFile: 'Numbers',
      baseURL: 'https://eloquentjavascript.net/01_values.html',
      detailLink: '#h_flOCH3CuFg',
      linkTitle: 'Eloquent JavaScript: Numbers',
    },
```

## Deck setup

### Pointing to other slide decks

Replace the name of the slide deck in the BodyContent and SlidesInfo imports in four spots within the `App.js`, `components/PrintView.js` and the `components/SlideView.js`

### Building to place slides in another hosting spot

-   replace "html-slides" in two spots in package.json with slideshow name
-   in the public/index.html replace "HTML Slides" in the title tag with the slideshow display name
-   change favicon if applicable

### Structure of project

```

-   index.js
    -   App.js
        -   components
            -   PrintView.js
            -   SlideView.js

```

These are the two major views and pull in other components in that folder like the `Header.js`, etc. They then point to

```

-   slides
    -   [the particular slide deck]
        -   components
            -   BodyContent.js
            -   SlidesInfo.js

```

These files are kept at the slide deck level so they can be customized for the presentation -- e.g. the WCAG 2.1 has consistent resource links that warranted a resource section on each slide whereas the CSUN 2019 deck did not.

Individual slides are wrapped within the BodyContent and for the most part are simple components to return markup, but can be more complex if needed.

TODO:

-   deploying to GitHub page for this repo as well as the presentation repo
    -   to deploy to GitHub page, on the main branch: `npm run deploy`

```

```
