var express = require('express'),
    app = express(),
    query = require("./js/queries.js"),
    con = require("./js/connection")
app.get('/gettickets',(req,res) => {
    query.getTickets(qry => {
        con.makeQuery(qry,result => {
            console.log("Result",result)
            res.send(result)
        })
    })
})
app.listen(process.env.port||2019)