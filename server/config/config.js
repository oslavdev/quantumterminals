const config = {
    production:{
        SECRET: 'TimeEatsUs124C1!@',
        DATABASE: process.env.MONGODB_URI
    },
    default:{
        SECRET: 'SUPERSECRETPASSWORD123',
        DATABASE: 'mongodb://localhost:27017/memogame'
    }
}

exports.get = function get(env){
    return config[env] || config.default
}
