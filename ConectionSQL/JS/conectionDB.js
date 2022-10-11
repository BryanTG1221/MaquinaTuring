    const { createConnection } = require('mysql');
    const cors = require('cors');
    const express = require('express');

    const app = express();

    const ZTstudios = createConnection ({
        host : 'localhost',
        user : 'root',
        database : 'lenguajes',
        connectionLimit : 10
    });

    ZTstudios.connect();

    app.get('/products/:id', cors(), function (req, res, next) {
        res.json({msg: 'This is CORS-enabled for a Single Route'})
      })

    app.get('/consulta', cors(), (req, res,next) => {

        ZTstudios.query("SELECT * FROM dataStudio", (err, result) => {
            res.json(result);
        }); 

    });


    app.listen(3000, () => {
        console.log('Example app listening on port 3000!');
    });
    