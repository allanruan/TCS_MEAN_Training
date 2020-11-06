var port = 9090
var express = require("express");
var app = express(); //creating the reference
app.use(express.json());
//middleware, mainly security, logger
console.log("Module loaded....");
app.use((req,res,next)=>{
    console.log("Middleware Called .....");
    console.log(req.url);
    console.log(req.method);
    next();
})
app.get("/",(req,res)=>{
    res.send("Welcome to Express Module Get Method");
})

app.get("/a",(req,res)=>{
    res.send("Welcome to Express Module Get Method Specific for a");
})
app.get("/b",(req,res)=>{
    res.send("Welcome to Express Module Get Method Specific for b");
})
app.get("/c",(req,res)=>{
    res.send("Welcome to Express Module Get Method Specific for c");
})
//http://localhost:9090/user/raj/deep
app.get("/user/:fname/:lastname",(req,res)=>{
    console.log(req.params);
    let user = req.params.fname;
    // res.send("You sent path param data");
    res.send("Welcome "+user);
})
app.get("/emp",(req,res)=>{
    let id = req.query["id"];
    let name = req.query["name"];
    let salary = req.query["salary"];
    res.send(" Id is " + id + " Name is "+ name+ " Salary is "+salary);
})

/*
path:login
    if condition username and pass is correct success or failure
    login.html action = http://localhost:9090/login"
        textField
        PasswordField
        Submit
    query pattern
*/
app.get("/login",(req,res)=>{
    let uname = req.query["uname"];
    let password = req.query["password"];
    if(uname=="Allan" && password=="Ruan"){
        res.send("Login Success!");
    }else{
        res.send("Login Fail!");

    }
})

app.get("/loginPage",(req,res)=>{
    res.sendFile("C:/TCS_MEAN_Training/NodeJS_With_Expressmodule/login.html");
})

app.post("/",(req,res)=>{
    console.log("Post Method Called....");
    res.send("Welcome to post method");

})
app.post("/login",(req,res)=>{
    let uname = req.body.uname;
    let password = req.body.password;
    console.log(uname);
    console.log(password);

    if(uname=="Allan" && password=="Ruan"){
        res.send("Login Success!");
    }else{
        res.send("Login Fail!");

    }
})

app.put("/",(req,res)=> {
    res.send("Put Method Call.......");
})
app.put("/updateEmp",(req,res)=> {
    // res.send("Put Method Call.......");
    let salary = req.body.salary;
    let id = req.body.id;
    console.log("ID is " + id + " Salary is "+ salary);
    res.send("Salary is " + (salary+5000));
    //eval() it is use to convert string to number.
})

app.delete("/",(req,res)=>{
    res.send("Delete Method Call......")
})
app.delete("/deleteEmp/:id",(req,res)=>{
    let id = req.params.id;
    res.send("ID is :" +id);
})
app.listen(port,()=>console.log(`Server is running on ${port}`));