

const mongodb = require("mongodb")

const mongoClinet = mongodb.MongoClient
const conectionUrl = 'mongodb://127.0.0.1:27017'

const dbName = "task-3"

mongoClinet.connect(conectionUrl,(error,res)=>{
    if(error){
        return console.log("ERROR....")
    }
    console.log("SUCCESS")

    const db = res.db(dbName)


    db.collection('users').insertOne(
        {
            name:"Ahmed",
            age:20,
            city:"Elqanater"
        },
        (error,data) =>{
            if(error){
                console.log("Unable to insert data")
            }
            console.log(data.insertedId)
        }
    )    // insertOne   (1)
// ----------------------------------------------
    db.collection('users').insertOne({
        name:"hamed",
        age:25,
        city:"cairo"
    },
    (error,data) =>{
            if(error){
                console.log("Unable to insert data")
            }
            console.log(data.insertedId)
        }
    ) // insertOne   (2)

// ----------------------------------------------------
db.collection ('users').insertMany([
    {
        name : 'ahmed mohamed',
        age : 27
    },
    {
        name : 'reem',
        age : 24
    },
    {
        name : 'tasneem',
        age : 28
    },
    {
        name : 'ahmed adel',
        age : 27
    },
    {
        name : 'adel mohamed',
        age : 40
    },
    {
        name:"hamed hussien",
        age:27
    },
    {
        name:"Asmaa Ahmed",
        age:27
    },
    {
        name:"Hussien",
        age:30
    },
    {
        name:"mohamed mostafa",
        age:27
    },
    {
        name:"Essam",
        age:33
    }


] , (error,data)=>{
    if(error){
        console.log("Unable to insert data")
    }
    console.log(data.insertedCount)
}

)  // insertMany

//---------------------------------------------------

db.collection('users').find({age:27}).toArray((error,users)=>{
    if(error){
        console.log("Error has occurred")
    }
    console.log(users)
})

// --------------------------------------------
db.collection('users').find({age:27}).limit(3).toArray((error,users)=>{
    if(error){
        console.log("Error has occurred")
    }
    console.log(users)
})

//-------------------------------------------------------

db.collection('users').updateOne({
    _id:mongodb.ObjectId("65fef9be8ac6828e7cd05782")},
    {
        $set:{name:"mahmoud"},
        $inc:{age:5}

    })
    .then((data1)=>{
            console.log(data1.modifiedCount)
        })
    .catch((error)=> {console.log(error)})

    // ------------------------------------------------------------

    db.collection('users').updateOne({
        _id:mongodb.ObjectId("65fef9be8ac6828e7cd05783")},
        {
            $set:{name:"Esraa"},
            $inc:{age:5}
        })
        .then((data1)=>{
                console.log(data1.modifiedCount)
            })
        .catch((error)=> {console.log(error)})
// -------------------------------------------------------
db.collection('users').updateOne({
    _id:mongodb.ObjectId("65fef9be8ac6828e7cd05784")},
    {
        $set:{name:"shereen"},
        $inc:{age:5}
    })
    .then((data1)=>{
            console.log(data1.modifiedCount)
        })
    .catch((error)=> {console.log(error)})
// ------------------------------------------------------------
db.collection('users').updateOne({
    _id:mongodb.ObjectId("65fef9be8ac6828e7cd05785")},
    {
        $set:{name:"Toqa"},
        $inc:{age:5}
    })
    .then((data1)=>{
            console.log(data1.modifiedCount)
        })
    .catch((error)=> {console.log(error)})
// --------------------------------------------------------

db.collection('users').deleteMany({age:27})
.then((data1)=>{
    console.log(data1.deletedCount)
})

.catch((error)=> {console.log(error)})





})