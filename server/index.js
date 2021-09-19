const fs = require('fs');
const { data } = JSON.parse(fs.readFileSync('../output.json'));
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
 
const app = express()
app.use(express.json())

// mongo-db
const url = 'mongodb://localhost:27017/hkucs';

const client = new MongoClient(url, {})

app.post('/', async (req, res, next) => {
    await client.connect()
    const db = client.db('hkucs')
    const electives = db.collection('electives')
    const { keyword } = req.body;
    let course
    try{
        const course_cursor = electives.find({ keywords: keyword })
        course = await course_cursor.toArray()
    }
    catch(e){
        return next(e)
    }

    return res.json({
        course
    })
})

app.listen(8000, () => console.log('Listening on Port 3000'))