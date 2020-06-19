

const mysql = require("mysql");
const fastcsv = require("fast-csv");
const fs = require("fs");
const cws = fs.createWriteStream("AB_NYC_2019.csv");

// Criando conexão com o banco de dados mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "tech_challenge"
});

// Abrindo a conexão 
connection.connect(error => {
  if (error) throw error;

  // Montando a query conforme solicitado
  connection.query("SELECT id, host_id, price, number_of_reviews, last_review FROM ab_nyc_2019", function(error, data, fields) {
    if (error) throw error;

    let jsonData = JSON.parse(JSON.stringify(data));
    console.log("jsonData", jsonData);

    fastcsv
      .write(jsonData, { headers: true })
      .on("finish", function() {
        console.log("Arquivo gerado com sucesso!");
      })
      .pipe(cws);
  });
});