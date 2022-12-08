const points = [55, 2, 34, 23, 7, 1, 100];

const shuffleArray = () => {
    for( let i = points.length -1; i > 0; i-- ) {
        const j = Math.floor(Math.random() * (i+1));
        const k = points[i];
        points[i] = points[j];
        points[j] = k 
    }
    console.log(points)
}

shuffleArray();