import Express from "express";

const app = Express();
// const PORT = "https://hire-backend.vercel.app/";
const PORT = 3000;

app.get("/hello",(req, res)=>{
    res.json("Hello World");
});

app.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`);
})

export default app;