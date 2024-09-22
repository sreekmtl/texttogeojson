import opentype from 'opentype.js';

 export async function loadFont(fontPath) {
    try {
        const response = await fetch(fontPath);  
        const buffer = await response.arrayBuffer();  
        const font = opentype.parse(buffer);  

        return font;

    } catch (error) {
        console.error('Error loading font:', error);  
    }
}



