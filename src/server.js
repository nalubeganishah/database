const express = require("express");
const mongoose = require("mongoose")
const router = require("./routes/router")
const cors = require("cors")
const bodyParser = require("body-parser")
// const {format} = require("date-fns")
// const {v4: uuid} = require("uuid")
const app = express();

 app.use(bodyParser.urlencoded({ extended: true}))
 app.use(bodyParser.json())
 app.use(cors())


const PORT = 3000

const url = "mongodb+srv://nalubeganishah10:123@membership.tp5z2xn.mongodb.net/registered-clients"

app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "./create account.html")
})



app.use(express.json())
app.use('/', router)

app.use(express.static("frontEnd"))


mongoose.connect(url).then(() => {
    app.listen(PORT, () => {
        console.log(`codenerds app is running on port ${PORT}`)
    })
}).catch(error => { console.log("error dectected : ", error) })

// // console.log(format(new Date(), 'yyyMMdd\tHH:mm:ss'))
// // console.log(uuid())
// app.use(express.json())
// //declare route, helps to access your website through browser and you can declare multiple routes on your application
// app.use('/', router)
//   const url = "mongodb+srv://nalubeganishah10:123@membership.tp5z2xn.mongodb.net/registered-clients"
  
//   mongoose.connect(url).then(() =>{
//   app.listen(3000, ()=>{
//     console.log('cq8final-project app is running on port 3000')
// })

// }).catch(error =>{console.log("error occured at:", error)})