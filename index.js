// console.log("we are good to go")
// this the way to create server rather than express
const http=require("http")
const fs=require("fs")
// it's is used to create server
const server=http.createServer()

const port=8000;



server.on("request",(req,res)=>{
    // console.log("api is working ");
    // return res.end("server is connected")
    // here we didn't have routes so we have to check it by ourself
    let data="we are new here and we will are looking for creating "
    let data1="this is used to append data";
    if(req.method==="GET" && req.url==="/")
        {
        return res.end("server is running on Home");
        }
        else if(req.method==="GET" && req.url=="/login")
            {
                return res.end("server is running on Login")
            }
            // to write something in a file 
            else if(req.method==="GET"&& req.url==="/write")
                {
                   fs.writeFile("demo.txt", data, (err)=>{
                    if(err){
                        console.log(err)
                        throw err;
                    }
                    else
                    {return res.end("write sucessfully");}
                   }
                )
                   }
                //    used to write some without deleting the old data
              
                   else if(req.method==="GET"&& req.url==="/append")
                    {
                       fs.appendFile("demo.txt", data1, (err)=>{
                        if(err){
                            console.log(err)
                            throw err;
                        }
                        else
                        {return res.end("write sucessfully using append");}
                       }
                    )
                       }
                       else if(req.method==="GET"&& req.url==="/read")
                        {
                           fs.readFile("demo.txt",  (err,data)=>{
                            if(err){
                                console.log(err)
                                throw err;
                            }
                            else
                            {return res.end(data);}
                           }
                        )
                           }
                           else if(req.method==="GET"&& req.url==="/delete")
                            {
                               fs.unlink("demo.txt", (err)=>{
                                if(err){
                                    console.log(err)
                                    throw err;
                                }
                                else
                                {return res.end("write sucessfully using append");}
                               }
                            )
                               }
                       
                }
)
// it's is used to make the server listener
server.listen(port,()=>{
    console.log(`server is running fine on ${port}`)
})

