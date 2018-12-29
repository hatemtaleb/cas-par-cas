var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'cas_par_cas',
    password : 'SchihgfXGIlXYEsLOco8',
    database : 'cas_par_cas_db'
});
module.exports=connection;
