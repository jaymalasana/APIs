const dbConnect = require('./mongodb')

// dbConnect().then( (res) => {
//   res.find({name: "Jay"}).toArray().then((data) => {
//     console.log(data);
//   })
// })

// console.log(dbConnect());

const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
}

main();