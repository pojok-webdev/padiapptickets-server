getTickets = (callback) => {
    sql = 'select id,clientname,complaint,kdticket,create_date from tickets '
    sql+= 'where status="1" '
    callback(sql)
}
getTicketsBySegment = (obj,callback) => {
    sql = 'select id,clientname,complaint,kdticket,create_date from tickets '
    sql+= 'where status="1" '
    sql+= 'limit '+obj.segment+', '+obj.offset+' '
    callback(sql)
}
getComplaints = _ => {
  return 'select id,name,description from complaints'
}
saveTicket = (obj) => {
  keys = obj.columns.map(item=>{
    return item.key
  }).join('","')
  vals = obj.columns.map(item=>{
    return item.val
  }).join('","')

  sql = 'insert into '+obj.tableName+' '
  sql+= '("'+keys+'") '
  sql+= 'values '
  sql+= '("'+vals+'") '
  return sql
}
module.exports = {
    getTickets:getTickets,
    getTicketsBySegment:getTicketsBySegment,
    getComplaints:getComplaints,
    saveTicket:saveTicket
}
