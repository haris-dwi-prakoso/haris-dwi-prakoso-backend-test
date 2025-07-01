function hasGenerator(n) {
    for (let i = 1; i < n; i++) {
        let numString = String(i);
        let genNum = 0;
        if (numString.length == 1) genNum = i + i;
        else {
            subNums = numString.split("");
            genNum += i;
            for (let j = 0; j < subNums.length; j++) {
                genNum += Number.parseInt(subNums[j]);
            }
        }
        if (genNum === n) return true;
    }
    return false;
}

function totalSelfNums(n) {
    let selfNums = []
    for (let i = 1; i < n; i++) {
        if (!hasGenerator(i)) selfNums.push(i);
    }
    console.log(selfNums);
    let total = 0;
    for (let i = 0; i < selfNums.length; i++) {
        total += selfNums[i];
    }
    return total;
}

console.log(totalSelfNums(5000));