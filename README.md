# Code sources used:

## parallax:

This can't be done solely with Tailwind. For perspective and translateZ I called a css object inside index.css. Here's the code that I modeled it after: https://www.digitalocean.com/community/tutorials/css-pure-css-parallax

## intersection observer

when using the parallax effect we could no longer use a scroll listener to trigger animation or the nav btn highight change. Instead we had to us intersection observer. Here's a link to the code I ended up using: https://dev.to/producthackers/intersection-observer-using-react-49ko and https://github.com/zygisS22/intersectionObserverApi/blob/master/src/IO-Api-hook.js
