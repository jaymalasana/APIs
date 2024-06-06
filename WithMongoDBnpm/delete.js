const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect()
    let result = await data.deleteMany({
        name: "Sam"
    })
    if(result.acknowledged){
        console.log("Data has been deleted");
    }
}

deleteData();