import { createConnection } from 'mysql';



function insertIntoDb(usern,pass,email){

var con = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tw"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO user (username, password, email) VALUES ?";
   var data= [[usern,pass,email]];
  con.query(sql,[data], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

}

export{insertIntoDb};