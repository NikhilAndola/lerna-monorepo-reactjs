const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send("I am a backend server");
});

app.listen(port, (err)=> {
    if (err) {
        console.log(`Error: ${err.message}`); 
    } else {
        console.log(`Server is listening on port ${port}`);
    }
    }
);
