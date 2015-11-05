[![Codecrystal](https://img.shields.io/badge/code-crystal-5CB3FF.svg)](http://codecrystal.herokuapp.com/crystalise/liberty-x/custom-image-rating/master)
[![bitHound Score](https://www.bithound.io/github/liberty-x/custom-image-rating/badges/score.svg)](https://www.bithound.io/github/liberty-x/custom-image-rating)
[![bitHound Dependencies](https://www.bithound.io/github/liberty-x/custom-image-rating/badges/dependencies.svg)](https://www.bithound.io/github/liberty-x/custom-image-rating/master/dependencies/npm)
## Custom Image Rating - React Component

### Who?

You still wanted more after [LX Issue](https://github.com/liberty-x/lxissue) didn't you?

From the same team who brought you such hits as LX News :newspaper:, LX Search :mag: and the infamous LX Riddle :question: Liberty-X, a team in the 6th iteration of the Founders & Coders academy, brings you Custom Image Rating (React Component).

Our unchanged lineup is formed of members [Justen Barget](https://github.com/Jbarget), [Rachel Black](https://github.com/RachelBLondon), [Huw Davies](https://github.com/hdrdavies) and [Ruth Uwemedimo](https://github.com/rug1). :two_women_holding_hands::two_men_holding_hands:


### What?

This week we will aim to make a React component that we hope to publish via npm.
The component will be a customisable rating system that can be used in a variety of situations.
Where the fraction ("x out of y" or "x/y") is represented by "x" number of custom pictures.

![](https://files.gitter.im/RachelBLondon/libert-x/iR4b/wireframes-five-stars.png)

### How?

We will be using React to create the component and using the "props" to set the outcome of the image.
eg. {max-rating: 5, rating: 4, image: http://img-src}

If you would like to download the repo, you will need to type these commands into your terminal:

1. ```npm install```
2. ```npm run dev:build```
3. ```npm run dev:start```

You will then have a ```bundle.js``` file, and the page will be available at localhost:8080/bundle.

### Props to supply

Please use the **exact** spellings:

|Prop name|Prop Type|Description|
|:-------:|:-------:|:---------:|
|```image``` |string|A string of the image's URL|
|```maxRating``` |number|The scale of the rating i.e. if you are rating something 3 out of 10, this value would be 10!|
|```rating``` |number|The rating on the scale i.e. if you are rating something 3 out of 10, this value would be 3!|
|```animation```|boolean|```false``` If you don't want animation, ```true``` if you do! |
