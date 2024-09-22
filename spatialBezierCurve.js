/**
 * 
 * @param {Array<[number, number]>} startPoint
 * @param {Array<[number, number]>} endPoint
 * @param {Array<[number, number]>} controlPoint
 * @param {Number} smoothness
 * @returns {Array<[number, number]>} An array of [x, y] coordinates representing the points.
 */

export function getQuadraticBezierCurve(startPoint,endPoint,controlPoint,smoothness){

    if (smoothness===undefined){
        smoothness=6;
    }else if (smoothness===0){ //preventing division by zero
        smoothness=1; 
    }

    let p0X= startPoint[0];
    let p0Y= startPoint[1];
    
    let p1X= controlPoint[0];
    let p1Y= controlPoint[1];

    let p2X= endPoint[0];
    let p2Y= endPoint[1];

    let intermediatePoints=parseInt(smoothness);

    let points=[];

    for (let i=1; i<=intermediatePoints; i++){
        let t= 1/intermediatePoints;
        t= t*i;

        let pX= (Math.pow((1-t),2)*p0X)+ (2*(1-t)*t*p1X)+ (Math.pow(t,2)*p2X);
        let pY= (Math.pow((1-t),2)*p0Y)+ (2*(1-t)*t*p1Y)+ (Math.pow(t,2)*p2Y);

        points.push([pX, pY]);


    }

    return points;

}