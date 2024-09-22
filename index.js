import { loadFont } from "./fontLoader.js";
import { glyphToPolygon } from "./glyphToVector.js";

/**
 * 
 * @param {String} text 
 * @param {String} fontPath
 * @param {Array<[Number,Number]>} startPoint
 * @param {Object} options
 * @returns {JSON}
 */

export default async function textToGeoJSON(text, fontPath, startPoint, options={}){

    const {
        textSize=72,
        smoothness=6 //Intermediate points for quadratic bezier curve
    }= options;

    let font;
    await loadFont(fontPath).then(res=>{
        font=res;
    });

    text=text.trim();
    let pathArray=[];
    let charArray= [...text];
    charArray.forEach(char=>{
        let glyph= font.charToGlyph(char);
        let glyphPath= glyph.getPath(0,0,options.textSize);
        //console.log(glyphPath.getBoundingBox());
        pathArray.push(glyphPath);

    });

    console.log(pathArray);
    let geoJSONFeatureCollection= glyphToPolygon(pathArray,startPoint, options.smoothness);
    return geoJSONFeatureCollection;
}
