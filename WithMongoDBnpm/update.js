const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateMany(
    { name: "Jay" },
    { $set: { Country: "India" } }
);
if(result.acknowledged){
    console.log("Data has been updated");
}
}

updateData();