// code your solution here
// function superbowlWin(year, finder){
//     let result = undefined
//     for(let item of result){
//         if(finder(item) === true){
//             result = year
//         }
//     }
// }
function superbowlWin(record){
    let found = record.find(object => object.result === 'W' )
    console.log(found)
    // return found.year
    if(found === undefined){
        return undefined
    }
    else{
        return found.year
    }

    // if(year.result === 'W'){
    //     return year
    // }
    // else{
    //     return undefined
    // }
    }
    
// let superbowlWin = record.find((record) => {return record.year === "W"})