require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const prisma = require('./lib/prisma');

app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');


app.get('/test/:name', (req,res,next)=>{
  let guestList = {
    'aly':{
      arabicName: "علي",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'omar':{
      arabicName: "رجل يا شيراتوني/ثندراوي انت",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'zizo':{
      arabicName: "زيزو باشا",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'sonic':{
      arabicName: "سونيك بيه",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'mezo':{
      arabicName: "ميزو",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'bodi':{
      arabicName: "بدابيدو",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'nour':{
      arabicName: "نور",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'essam':{
      arabicName: "عوصو",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'montag':{
      arabicName: "مونتاج باشا",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'alaa':{
      arabicName: "باشمهندس لولو",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'mousa':{
      arabicName: "استاذ موسى",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'rowanMousa':{
      arabicName: "استاذة روان",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'tarek':{
      arabicName: "طارق بيه",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'rowanTarek':{
      arabicName: "روان هانم",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'apdo':{
      arabicName: "شنكل",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'salmaApdo':{
      arabicName: "سلمى",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'hassan':{
      arabicName: "حسن بيه",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'mariamHassan':{
      arabicName: "مريم",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'superalaa':{
      arabicName: "باشمهندس لولو",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'superalaawife':{
      arabicName: "باشمهندسة إيمان",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'hamada':{
      arabicName: "مادا",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'ayman':{
      arabicName: "مون",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'aymangirlfriend':{
      arabicName: "جماعة أيمن بوالينو",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'youssef':{
      arabicName: "باشمهندس يوسف",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'hala':{
      arabicName: "ام ملك",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'malak':{
      arabicName: "ملوكة",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'mowada':{
      arabicName: "مودة هانم",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'masa':{
      arabicName: "مساميسو",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'gamila':{
      arabicName: "جمل",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'ahmed':{
      arabicName: "شيخ احمد",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'mezo':{
      arabicName: "علي",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'kholod':{
      arabicName: "خلود",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'haidy':{
      arabicName: "هايدي",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'salma':{
      arabicName: "سلمى",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'esraa':{
      arabicName: "إسراء",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'me2o':{
      arabicName: "ميئو",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'gehad':{
      arabicName: "جهاد",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'zeyad':{
      arabicName: "زوز",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'khaled':{
      arabicName: "أستاذ خالد",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'nada':{
      arabicName: "أستاذة ندى",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'ayman':{
      arabicName: "أستاذ أيمن",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'eman':{
      arabicName: "طنط إيمان",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'habiba':{
      arabicName: "حبيبة",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'reham':{
      arabicName: "ريهام",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'rowaida':{
      arabicName: "رويدا",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'mona':{
      arabicName: "منى",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'hazem':{
      arabicName: "حازم",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'hatem':{
      arabicName: "حاتم",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'youssefRowaida':{
      arabicName: "يوسف",
      message:"يارب تخلص الماستر على خير ^^"
    },
    'ruby':{
      arabicName: "روبي",
      message:"يارب تخلص الماستر على خير ^^"
    },
  }
  res.render("test.ejs", {data: guestList[req.params.name]})
})

app.post('/api/send_message', async (req,res,next)=>{
  console.log(req.body);
  let message = await prisma.message.create({data: {
    message: req.body.message,
    data: req.body.data,
    sender: req.body.sender
  }})
  res.send("tmam");
})

app.use((err, req, res, next) => {
    console.log(err);
    if(err?.message == 'Not Authorized'){
      return res.sendStatus(401);
    }
    if(err.errors || err.messages || err.message){
      return res.sendStatus(400);
    }
    res.sendStatus(500);
})

app.listen(PORT, () => console.log("Server started on port 3000"));