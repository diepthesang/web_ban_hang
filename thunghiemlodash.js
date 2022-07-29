var _ = require('lodash');

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

var ten = _.filter(name, { name: 'linh' })
console.log(ten)