const fs = require("fs");
const bodyParser=require("body-parser");
const jsonServer=require("json-server");
const jwt = require("jsonwebtoken");
const { isBuffer } = require("util");
const server =jsonServer.create();
const userdb =JSON.parse(fs.readFileSync("./Pages/Users.json", "utf-8 "));

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY ="72676376";
const expiresIn ="1h";

function createToken(payload){
    return jwt.sign(payload,SECRET_KEY,{expiresIn});
}
function isAuthenticated({email,password}){
    return(
        userdb.Users.findIndex((Users)=> Users.email===email&& Users.password===password)!==-1
    )
}
server.post("./api/auth/register",(req,res)=>{
    const{email,password}=req.body;
    if(isAuthenticated({email,password})){
        const status=401;
        const message="Email&password already exist";
        res.status(status).json({status,message});
        return;
    }
    fs.readFile("./Users.json",(err,data)=>{
        if(err){
            const status=401;
            const message=err;
            res.status(status).json({status,message});
            return;
        }
        let data=JSON.parse(data.toString());
        let last_item_id=data.Users[data.Users.length -1].id;
        data.Users.push({id:last_item_id+1,email:email,password:password});
        let writeData=fs.writeFile("./Users.json",
        JSON.stringify(data),
        (err,result)=>{
            if(err){
                const status=401;
                const message=err;
                res.status(status).json({status,message});
                return;  
            }
        }
        )
    });
});
server.post("./api/auth/login",(req,res)=>{
    const{email,password}=req.body;
    if(isAuthenticated({email,password})){
        const status=401;
        const message="Mailiniz veya şifreniz hatalı";
        res.status(status).json({status,message});
        return;
    }
    const acces_token=createToken({email,password});
    res.status(200).json({access_token});
});
server.listen(5000,()=>{
    console.log("Running fake api json serve");
})