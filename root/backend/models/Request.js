
//const uuid = require('uuid')
const mongoose = require('mongoose')

const Schema = mongoose.Schema


const RequestSchema = new Schema(
    {
        description :
        {
            type: String,
            required: true
        }
        ,
        date : 
        {
            type: String,
            
        }
        ,
        consult : 
        {
            type : Boolean,
         //   required : true
        } 
        ,
        accepted : {
            

            type : Boolean,

           // required : true
        
        },                                  //-1 rejected , 0 pending , 1 accepted
        feedback :
        {
            type: String,
        
        }

    }
)
               
module.exports = Request = mongoose.model('requests',RequestSchema)