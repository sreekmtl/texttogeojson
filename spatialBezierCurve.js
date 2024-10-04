/**
 * 
 * @param {Array<[number, number]>} startPoint
 * @param {Array<[number, number]>} endPoint
 * @param {Array<[Array, Array]>} controlPoint
 * @param {Number} smoothness
 * @returns {Array<[number, number]>} An array of [x, y] coordinates representing the points.
 */

export function getBezierCurve(startPoint,endPoint,controlPoint,smoothness){

    if (smoothness===undefined){
        smoothness=6;
        
    }else if (smoothness===0){
        smoothness=1;
    }

    let intermediatePoints=parseInt(smoothness);

    if (controlPoint.length===1){
        //Quadratic bezeir curve

        let p0X= startPoint[0];
        let p0Y= startPoint[1];
        
        let p1X= controlPoint[0][0];
        let p1Y= controlPoint[0][1];

        let p2X= endPoint[0];
        let p2Y= endPoint[1];

        let points=[];

        for (let i=1; i<=intermediatePoints; i++){
            let t= 1/intermediatePoints;
            t= t*i;

            let pX= (Math.pow((1-t),2)*p0X)+ (2*(1-t)*t*p1X)+ (Math.pow(t,2)*p2X);
            let pY= (Math.pow((1-t),2)*p0Y)+ (2*(1-t)*t*p1Y)+ (Math.pow(t,2)*p2Y);

            points.push([pX, pY]);


        }

        return points;

    }else if (controlPoint.length===2){
        //Cubic bezier curve

        let p0X= startPoint[0];
        let p0Y= startPoint[1];
        
        let p1X= controlPoint[0][0];
        let p1Y= controlPoint[0][1];

        let p2X= controlPoint[1][0];
        let p2Y= controlPoint[1][1];

        let p3X= endPoint[0];
        let p3Y= endPoint[1];

        let points=[];

        for (let i=1; i<=intermediatePoints; i++){
            let t= 1/intermediatePoints;
            t= t*i;

            let pX= (Math.pow((1-t),3)*p0X)+ (3*Math.pow((1-t),2)*t*p1X)+(3*(1-t)*Math.pow(t,2)*p2X)+(Math.pow(t,3)*p3X);
            let pY= (Math.pow((1-t),3)*p0Y)+ (3*Math.pow((1-t),2)*t*p1Y)+(3*(1-t)*Math.pow(t,2)*p2Y)+(Math.pow(t,3)*p3Y);

            points.push([pX, pY]);


        }

        return points;

    }
    
}

