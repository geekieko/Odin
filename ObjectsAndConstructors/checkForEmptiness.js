//write function isEmpty(obj) returns true if obj has no properties, false otherwise

function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}