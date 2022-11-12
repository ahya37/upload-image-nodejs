const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.get('/', (req, res) => {
    res.json({
        message: 'server is running'
    })
})

require('./routes/upload.route')(app)

const PORT = 5000


app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`)
});