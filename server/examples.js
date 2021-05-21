let r1 = {
    bugs: [
        { quality: 1, isFinded: true, time: 2 },
        { quality: 1, isFinded: true, time: 4 },
        { quality: 1, isFinded: true, time: 3 },
        { quality: 1, isFinded: true, time: 5 },
        { quality: 1, isFinded: true, time: 7 },
        { quality: 2, isFinded: true, time: 15 },
        { quality: 2, isFinded: false },
        { quality: 2, isFinded: false },
    ]
}

let r2 = {
    bugs: [
        { quality: 1, isFinded: true, time: 3 },
        { quality: 1, isFinded: false },
        { quality: 1, isFinded: false },
        { quality: 1, isFinded: false },
        { quality: 1, isFinded: false },
        { quality: 2, isFinded: true, time: 4 },
        { quality: 2, isFinded: true, time: 4 },
        { quality: 2, isFinded: true, time: 4 },
    ]
}

function calcRating_2(result) {
    let rate = 0;
    let averageTime = 0;
    let findedCount = 0;
    result.bugs.forEach(bug => {
        if (bug.isFinded) {
            averageTime += bug.time;
            findedCount++;
        }
    });
    console.log('Average', averageTime)
    averageTime = averageTime / findedCount;
    console.log('Average', averageTime)
    return (result.bugs.reduce((res, bug) => {
        return bug.isFinded
            ? res += (bug.quality * (25.5 / bug.time))
            : res
    }, 0) / result.bugs.length).toFixed(3);

    
}
console.log('result1: ', calcRating_2(r1))
console.log('result2: ', calcRating_2(r2))
