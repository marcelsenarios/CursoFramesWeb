const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost/db_finance', {useNewUrlParser : true});
/*caso tenha usurio, senha e porta*/
//module.exports = mongoose.connect('mongodb://usuario:senha@localhost:porta/db_finance', {useNewUrlParser : true});