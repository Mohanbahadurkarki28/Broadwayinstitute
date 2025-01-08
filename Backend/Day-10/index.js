/* const fs = require('node:fs/promises') */

/*  fs.writeFile('demo.txt','Hello From Node.js')
    .then(() => console.log('File written.'))
    .catch(() => console.log('Error while writing file.'))  */

/* fs.readFile('demo.txt', 'utf8')
    .then(data => console.log(data))
    .catch(error => console.log ('Error while reading file.'))  */


    const http =require('node:http')
    const server = http.createServer((req,res) => {
        if(req.url == '/') {
            res.end('Home page...')
        } else if(req.url == '/contact'){
            res.end('Contact page...')
        }
          else if(req.url == '/about'){
            res.end('About us page')
          } else {
            res.end('No page found')
          }
    })
    server.listen(5000,() => {
        console.log('server started at http://localhost:5000')
        console.log('press ctrl+C to stop')
    })

    // second hand car company to list in online with all the features like home/aboutus/brand/etc.........
