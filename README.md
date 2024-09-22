# Text to GeoJSON
### Convert Text to GeoJSON vector format
This glyphs of the characters are extracted and the glyph's coordinates are converted to spatial coordinates. That's it. Uses opentypes.js to read font files.
Live demo app: https://sreekmtl.github.io/textToGeoJSON-demo/
### Warning: Still in development

## 1. Usage

```bash
import textToGeoJSON from 'texttogeojson/index.js'

geojson= await textToGeoJSON(text, fontPath, anchorPoint, options)
```
### Arguments:

```
text : 'String you want to convert'
fontPath : '/path/to/your/ttf/file'
anchorPoint : [Longitude, Latitude]
options= {
    textSize: Number,
    smoothness: Number (Number of points in a bezier curve)
}
```
## 2. Warnings

I haven't tested all kinds of fonts yet. Right now it only reads M,L,Q and Z of glyph paths. So complex fonts won't get perfectly converted. 

## 3. Screenshots
![alt text](https://github.com/sreekmtl/texttogeojson/blob/main/preview/ss-4.png)
![alt text](https://github.com/sreekmtl/texttogeojson/blob/main/preview/ss-5.png)
![alt text](https://github.com/sreekmtl/texttogeojson/blob/main/preview/ss-6.png)
