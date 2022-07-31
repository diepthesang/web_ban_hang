var _ = require('lodash');
const { config } = require('process');

var name = [
    {
        name: 'sang',
        id: 1
    },
    {
        name: 'sa',
        id: 1
    },
    {
        name: 's',
        id: 1
    },
    {
        name: 'linh',
        id: 1
    },
]

var incl = name.includes({ name: 'sang', id: 1 })

console.log(incl)



var arr1 = [{ name: 'sang' }, 'thu trang'];

console.log(arr1.includes({ name: 'sang' }))