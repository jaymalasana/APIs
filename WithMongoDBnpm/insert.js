const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "Neel",
      age: 24,
      Hobbies: ["FIFA", "Web Design"]
    },
    {
      name: "Shyam",
      age: 29,
      Hobbies: ["Travel", "Books"]
    },
    {
      name: "Ram",
      age: 56,
      Hobbies: ["Archary"]
    },
  ]);

  if (result.acknowledged) {
    console.log("Data has been added");
  }
};

insert();
