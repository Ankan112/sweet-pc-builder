// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rjdqp.mongodb.net/?retryWrites=true&w=majority`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run(req, res) {
//   const id = req.query;
//   console.log(id);
//   try {
//     await client.connect();
//     const productsCollection = client
//       .db("sweet-pc-builder")
//       .collection("products");

//     if (req.method === "GET") {
//       const products = await productsCollection.findOne({
//         _id: id,
//       });
//       res.send({ message: "success", status: 200, data: products });
//     }
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// export default run;

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rjdqp.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  const id = req.query;
  console.log(id.productId);

  try {
    await client.connect();
    const productsCollection = client
      .db("sweet-pc-builder")
      .collection("products");

    if (req.method === "GET") {
      const product = await productsCollection.findOne({
        _id: new ObjectId(id.productId), // Convert the 'id' to ObjectId
      });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json({ message: "success", data: product });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
