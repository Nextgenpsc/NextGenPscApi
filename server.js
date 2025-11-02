const app = require("./app")

const dotenv = require("dotenv")
dotenv.config({path: ".env"})

app.listen(ProcessingInstruction.env.PORT, () => {
    console.log(`App is running on http://localhost${process.env.PORT}`)
})