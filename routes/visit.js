// Functional Integration Test Form

import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

let collection = await db.collection("Visit"); // Change collection name to "Visit"

router.get("/", async (req, res) => {
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
    let query = {_id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        let newDocument = {
            customer: req.body.customer_id,
            car: req.body.car_id,
            date: req.body.date,
            job: req.body.job
        };
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const query = {_id: new ObjectId(req.params.id) };
        const updates = { 
            $set: {
                customer: req.body.customer_id,
                car: req.body.car_id,
                date: req.body.date,
                job: req.body.job
            },
        };
        let results = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating records");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const query = {_id: new ObjectId(req.params.id) };
        let result = await collection.deleteOne(query);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error delete record");
    }
});

export default router;
