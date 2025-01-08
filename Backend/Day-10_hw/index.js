    const http =require('node:http')
    const server = http.createServer((req,res) => {
        if(req.url == '/') {
            res.end('Welcome to my Second Hand Car Dealership')
        } else if(req.url == '/Brands'){
            res.end('We have Differents brands, TOYOTA, Honda, Suzuki, KIA')
        }
          else if(req.url == '/suv'){
            res.end('Toyota --Fortuner, Rav4, Prado')
        
          } 
          else if(req.url == '/sedans'){
            res.end('Honda --Civic, Accord, ')
        
          } 
          else if(req.url == '/hatchbacks'){
            res.end('Suzuki --swift, Baleno')
        
          } 
          else if(req.url == '/about'){
            res.end('Welcome to Our pages. we have a dealership since 2008')
          }
          else if(req.url == '/contact'){
            res.end('Feel Free to contact us on 98XXXXXXXX')
          }
          else {
            res.end('No page found')
          }
    })
    server.listen(5000,() => {
        console.log('server started at http://localhost:5000')
        console.log('press ctrl+C to stop')
    })

