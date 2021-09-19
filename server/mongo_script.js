const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017/', {});
const data = require('../output.json')

const addElectiveData = async() => {
    await client.connect();
    const db = client.db('hkucs')
    const electives = db.collection('electives')

    for ( let i=0; i<data.length; ++i){
        electives.insertOne(data[i])
    }
}

addElectiveData()