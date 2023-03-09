import { MongoClient, config } from "../deps.ts";
import { IProduct } from "../types/products.ts";

const { MONGO_URI_HOST, MONGO_URI_USER, MONGO_URI_PASSWORD } = config();
const client = new MongoClient();

await client.connect({
  db: "productos",
  tls: true,
  servers: [
    {
      host: MONGO_URI_HOST,
      port: 27017,
    },
  ],
  credential: {
    username: MONGO_URI_USER,
    password: MONGO_URI_PASSWORD,
    db: "productos",
    mechanism: "SCRAM-SHA-1",
  },
});
const db = client.database("productos");
export const productDB = db.collection<IProduct>("productos");
