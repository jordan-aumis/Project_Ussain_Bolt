const valuesToArray = (obj) => {
    var result = [];
    
    for (var key in obj) {
        result.push(obj[key]);
    }
    console.log("RESULT", typeof result)
    return result;
}

module.exports = valuesToArray;