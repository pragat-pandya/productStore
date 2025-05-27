import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready!");
})


app.listen(5000, () => {
    console.log("Server Started at URL: http://localhost:5000")
});

// QP9dU9tuNmvKRNRU