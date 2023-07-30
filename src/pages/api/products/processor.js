const { MongoClient, ServerApiVersion } = require("mongodb");
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
  try {
    await client.connect();
    const productsCollection = client
      .db("sweet-pc-builder")
      .collection("products");

    if (req.method === "GET") {
      const products = await productsCollection
        .find({ category: "Processor" })
        .toArray();
      res.send({ message: "success", status: 200, data: products });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default run;
