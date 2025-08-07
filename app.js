const express=require('express')
const mongoose=require('mongoose')
const path=require('path')
const bodyParser=require('body-parser')
const Login=require('./models/Login')
const app=express()
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://starcaptain25:SO0lnk4kD5PDmKDY@powerwebdata.a18cs.mongodb.net/?retryWrites=true&w=majority&appName=PowerWebData')
.then(()=>console.log("connected successfully"))
.catch((err)=>console.log(err))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","login.html"))
})

app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","login.html"))
})
app.get('/sign',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","signup.html"))
})
app.post('/save', async (req, res) => {
    const { username, password } = req.body;

    try {
        const newUser = new Login({ username, password });
        await newUser.save();
        res.send("Signup Successful!");
    } catch (error) {
        res.status(500).send("Error saving data.");
    }
});
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Login.findOne({ username, password });

    if (user) {
      // ✅ Login successful → redirect to index.html
      res.redirect('/index.html');
    } else {
      // ❌ Invalid login → show message
      res.send(`
        <script>
          alert("Invalid username or password!");
          window.location.href = "/login.html";
        </script>
      `);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
app.listen(3000,()=>{
    console.log("server is running successfully on 3000 port")
})