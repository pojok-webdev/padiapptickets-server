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
app.get('/getticketsbysegment/:segment/:offset',(req,res) => {
    query.getTicketsBySegment(req.params,qry => {
        con.makeQuery(qry,result => {
            console.log("Result",result)
            res.send(result)
        })
    })
})
app.get('/getcomplaints',(req,res) => {
  con.makeQuery(query.getComplaints(),result => {
      console.log("Result",result)
      res.send(result)
  })
})
app.post('/saveticket',(req,res)=>{
  
})
//app.listen(process.env.port||2019)
app.listen(2019,_=>{
console.log('Application run on port 2019')
})
