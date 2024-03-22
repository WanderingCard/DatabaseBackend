import express from "express";
import cors from "cors";
import records from "./routes/record.js"
// import cars from "./routes/car.js"
// import customers from "./routes/customer.js"
// import jobs from "./routes/job.js"
// import services from "./routes/service.js"
// import technicians from "./routes/technican.js"
// import visits from "../routes/visit.js"
import test from "./routes/test.js"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
// app.use("/record", records);
app.use("/test", test);
// app.use("/cars", cars);
// app.use("/customers", customers);
// app.use("/jobs", jobs);
// app.use("/services", services);
// app.use("/technicians", technicians);
// app.use("/visit", visits);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});