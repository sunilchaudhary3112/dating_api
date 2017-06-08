const express = require('express');
const app = express();
const greeting_route = require('./routes/get_greeting');



app.use('/test', greeting_route);
// app.get('/', (req, res)=>{
//     res.send('Hello World');
// });

app.listen(3000, ()=> console.log('Server running at port 3000'));