// const cohort1 = process.argv[2]
// const user = process.env.USER
// const shell = process.env.SHELL


// if (cohort1 === 'web-49') {
//     console.log(`${cohort1} is the best`)
// }
// else {
//     console.log(`boooh cohort ${cohort1}`)
// }

// console.log(`user is ${user}`)
// console.log(`shell is ${shell}`)


 require('dotenv').config()
 const path = require('path')

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static( path.join(__dirname, 'client/build')))

app.get('/hello', (req,res) => {
    res.json({ message: 'hey there'})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})