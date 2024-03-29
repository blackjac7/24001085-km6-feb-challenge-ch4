const { Car } = require("./models");
const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/cars", async (req, res) => {
    const cars = await Car.findAll();

    if (cars.length === 0) {
        return res.status(404).json({ message: "No cars found" });
    }
    res.status(200).json({
        message: "Cars retrieved successfully",
        data: cars,
    });
});

app.get("/api/cars/:id", (req, res) => {
    const { id } = req.params;
    Car.findByPk(id).then((car) => {
        if (car) {
            res.status(200).json({
                message: "Car retrieved successfully",
                data: car,
            });
        } else {
            res.status(404).json({ message: `Car with id ${id} not found` });
        }
    });
});

app.post("/api/cars", async (req, res) => {
    const car = await Car.create(req.body);
    res.status(201).json({
        message: "Car created successfully",
        data: car,
    });
});

app.put("/api/cars/:id", async (req, res) => {
    const { id } = req.params;
    const car = await Car.findByPk(id);
    if (!car) {
        return res.status(404).json({ message: `Car with id ${id} not found` });
    }
    await car.update(req.body);
    res.status(200).json({
        message: "Car updated successfully",
        data: car,
    });
});

app.delete("/api/cars/:id", async (req, res) => {
    const { id } = req.params;
    const car = await Car.findByPk(id);
    if (!car) {
        return res.status(404).json({ message: `Car with id ${id} not found` });
    }
    await car.destroy();
    res.status(200).json({ message: "Car deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
