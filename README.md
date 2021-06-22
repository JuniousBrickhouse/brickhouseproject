# Code sources used:

## parallax:

This can't be done solely with Tailwind. For perspective and translateZ I called a css object inside index.css. Here's the code that I modeled it after: https://www.digitalocean.com/community/tutorials/css-pure-css-parallax

## intersection observer

when using the parallax effect we could no longer use a scroll listener to trigger animation or the nav btn highight change. Instead we had to us intersection observer. Here's a link to the code I ended up using: https://dev.to/producthackers/intersection-observer-using-react-49ko and https://github.com/zygisS22/intersectionObserverApi/blob/master/src/IO-Api-hook.js

## image resizing

Because there are so many images in on this site and many of the images are large, I had to resize the images that I could. I used ImageMagick to do this. Here is the site where I got a template (https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/) and here is the template commandline code that I used:

```
convert JuniousBlue.jpeg -filter Triangle -define filter:support=2 -thumbnail 500 -unsharp 0.25x0.08+8.3+0.045 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB JuniousBlue.gif
```

The '500' in the code above represents the width. Adjust as needed. I had to keep the parallax dividers almost at their full size for quality since they take up the whole viewport.
