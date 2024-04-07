import dotenv from "dotenv";
dotenv.config();
import { createServer } from "./server.js";
import connectDB from "./src/db/index.js";

const isProd = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 8081;

console.log("welcome to Node.js");

connectDB().then(() => {
  createServer({ isProd }).then(({ app }) => {
    app.listen(
      PORT,
      console.log(`Server started on http://localhost:${PORT}/`)
    );
  });
});

//unhendle promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error ${err.message}`);
  console.log("shutting down the server due to unhandler promise rejection");

  server.close(() => process.exit(1));
});
