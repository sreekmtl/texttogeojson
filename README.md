# Text to GeoJSON
### Convert Text to GeoJSON vector format
This glyphs of the characters are extracted and the glyph's coordinates are converted to spatial coordinates. That's it. Uses opentypes.js to read font files.
Live demo app: https://sreekmtl.github.io/textToGeoJSON-demo/
### Warning: Still in development

## 1. Usage

```js
import textToGeoJSON from 'texttogeojson'

await textToGeoJSON(text, fontPath, anchorPoint, options).then(geojson=>{
//rest of the code
})
```
### Arguments:

- `text` : String to convert
- `fontPath` : path to ttf/otf files
- `anchorPoint` : [X, Y] Only supports EPSG:3857 (Web mercator projection) as of now
- `options` : { 
        textSize: Number,
        smoothness: Number (Number of points in a bezier curve)
}


## 2. Warnings

I haven't tested all kinds of fonts yet. Right now it only reads M,L,Q, C and Z of glyph paths. Only tested with ttf and otf fonts yet. 

## 3. Screenshots
![alt text](https://github.com/sreekmtl/textToGeoJSON-demo/blob/main/preview/ss-4.png)
![alt text](https://github.com/sreekmtl/textToGeoJSON-demo/blob/main/preview/ss-5.png)
![alt text](https://github.com/sreekmtl/textToGeoJSON-demo/blob/main/preview/ss-6.png)
