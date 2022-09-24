var Connection = require('tedious').Connection;


const dbSeting = {
    user:'sa',
    password: 'Melissa2636*',
    server: 'localhost',
    database: 'seguimiento',    
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

var connection = new Connection (dbSeting);

connection.on('connect', function(err){
    console.log(err);
    if(err!=null){
         console.log("not connected");
    }
    else{  
          console.log("Connected")
          connection.close();
    };
});


