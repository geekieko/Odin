//basic 2

const favouriteBand = {
    name:'Beyond',
    nationality:'Hong Kong',
    genre:'Pop',
    members:5,
    formed:1988,
    split:2020,
    album: {
        name:['ABC','XYZ'],
        released:[1980,1990]
    }
}

let bandInfo = `The band name is ${favouriteBand.name} `
console.log(bandInfo)

let para1 = document.createElement('p');
para1.textContent = bandInfo;
//section.appendChild(para1);