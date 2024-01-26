// require your server and launch it
// const server = require('./api/server.js');

// const port = 9000;


// server.listen(port, () => {
//     console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
// })ss

const server = require('./api/server');

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));