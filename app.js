const app = require('express')();

const PORT =  process.env.PORT  ||3000;

app.get("/",(req,res)=>{
    res.send("hi Dipanwita Ki kor6is ree 😁😁")
});

app.listen(PORT,()=>{
    console.log(`Server is listening at port ${PORT}`)
})


