getTickets = (callback) => {
    sql = 'select id,kdticket from tickets '
    sql+= 'where status="1" '
    callback(sql)
}
module.exports = {
    getTickets:getTickets
}