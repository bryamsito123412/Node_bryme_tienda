const mongoose = require("mongoose");
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if (err) throw err
    console.log("conexion ok")

})

app.listen(config.port, () => {
    console.log(`Api corriendo ${config.port}`);
});