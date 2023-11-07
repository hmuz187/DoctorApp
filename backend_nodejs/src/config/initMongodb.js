const mongoose = require('mongoose')
require('dotenv').config()
const connectionString = process.env.MONGODB_URL

class Database {
    constructor(){
        this.connect()
    }

    connect(type='mongodb'){
        mongoose.connect(connectionString, {maxPoolSize: 50})
        .then(()=>{console.log(`connected database`)})
        .catch(()=>{console.log(`failed to connect db`)})
    }

    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb