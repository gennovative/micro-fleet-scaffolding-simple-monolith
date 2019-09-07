const moment = require('moment')
const nowUtc = moment.utc()

module.exports = {
    USERS: [
        {
            name: 'Superman',
            status: 'active',
        },
        {
            name: 'Winter Soldier',
            status: 'locked',
        },
        {
            name: 'Iron Man',
            status: 'deleted',
        },
    ]
}
