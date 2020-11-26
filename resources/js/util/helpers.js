export const objectToSingleArray = (obj = {})  => {

    let keys = Object.keys(obj);
    let arr = [];

    keys.map( key => {
        console.log(key,obj[key])
        arr = [...arr, ...obj[key]]
    });


    return arr;
}
