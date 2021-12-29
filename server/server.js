// 1. IMPORT YOUR DEPENDENCIES
const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000

// 1.5 Configure your mongoose
require("./config/mongoose.config")

// 2. Configure your express
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// 3. Attach routes to your express server
const playerRoutes = require("./routes/player.routes")
playerRoutes(app)

// 4. Run express server
app.listen(port, () => {
    console.log(`Express server running on ${port}`)
})
