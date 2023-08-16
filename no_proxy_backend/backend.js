const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/no_proxy', { useNewUrlParser: true });


app.use(cors())

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));

var rec = ''
var rec2 = ''
var index = 0
var current_value = 0
var object




const no_proxy_schema = new mongoose.Schema({
  ROLL_number: String,
  PED_LAB: Number,
  TP: Number,
  PDC: Number,
  PI: Number,
  BRM: Number


})


const person = mongoose.model("person", no_proxy_schema, "person")




var current_class


app.post('/', (req, res) => {
  rec = req.body.message
  rec2 = req.body.class_ongoing
  index++
  
  person.find()
    .then((result) => {
      if (index == 1||rec2!=current_class) {
        console.log(result[0].ROLL_number);
        if (rec2 == 'BRM') {
          console.log('yha tak chal rha');
          current_value = result[0].BRM;
          person.updateOne({ ROLL_number: rec }, { BRM: current_value + 1 })
            .then(() => {
              console.log('update on BRM by one');
              current_class=rec2
              console.log(current_class)
            });
          
          }

        ///////////////////////////////////////////////////////////////////////////////////////////      
        else if (rec2 == 'PED_LAB') {
          console.log('yha tak chal rha');
          current_value = result[0].PED_LAB;
          person.updateOne({ ROLL_number: rec }, { PED_LAB: current_value + 1 })
            .then(() => {
              console.log('update on PED_LAB by one');
              current_class=rec2
              console.log(current_class)
            });
            
        }
         
        


       ///////////////////////////////////////////////////////////////////////////////////////////

       else if (rec2 == 'TP') {
        console.log('yha tak chal rha');
        current_value = result[0].TP;
        person.updateOne({ ROLL_number: rec }, { TP: current_value + 1 })
          .then(() => {
            console.log('update on TP by one');
            current_class=rec2
            console.log(current_class)
          });
          
      }

       ////////////////////////////////////////////////////////////////////////////////////////////
       else if (rec2 == 'PDC') {
        console.log('yha tak chal rha');
        current_value = result[0].PDC;
        person.updateOne({ ROLL_number: rec }, { PDC: current_value + 1 })
          .then(() => {
            console.log('update on PDC by one');
            current_class=rec2
            console.log(current_class)
          });
          
      }
      
       ///////////////////////////////////////////////////////////////////////////////////////////////

       else if (rec2 == 'PI') {
        console.log('yha tak chal rha');
        current_value = result[0].PI;
        person.updateOne({ ROLL_number: rec }, { PI: current_value + 1 })
          .then(() => {
            console.log('update on PI by one');
            current_class=rec2
            console.log(current_class)
          });
          
      }
 
       ///////////////////////////////////////////////////////////////////////////////////////////////     




        }
      });
});




app.get('/',(req,res)=>{
res.send("hello from backend")
})




////////////////////////// global obejct ////////////////////////

var t={
PED_LAB:0


}



//////////////////////////////////////////////////

app.post('/chart_data',(req,res)=>{


//roll=console.log(req.body.roll)  
person.find()
.then((result)=>{

console.log(result[0].PED_LAB)
var student_roll=req.body.roll


for (var i=0;i<70;i++)
{
if(result[i].ROLL_number==student_roll)
{

  var o={PED_LAB:result[i].PED_LAB,
    TP:result[i].TP,
    PDC:result[i].PDC,
    PI:result[i].PI,
    BRM:result[i].BRM
    }
    
    res.send(o)
 break

}


}


// var o={PED_LAB:result[0].PED_LAB,
// TP:result[0].TP,
// PDC:result[0].PDC,
// PI:result[0].PI,
// BRM:result[0].BRM
// }

// res.send(o)




})








//res.send(`got data in backend ${roll}`)








})








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})