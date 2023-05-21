const mongoose = require("mongoose");
const schema = mongoose.Schema;

const membershipDataSchema = new schema({     
    fullName:{
        type: "String",
        require:true
    },
    email:{
        type: "String",
        require:true
    },
    phoneNumber:{
        type: Number,
        require:true
    },
    password:{
        type: Number,
        require:true
    },
    confirmPassword:{
        type: Number,
        require:true
    },
    promoCode:{
        type: Number,
        requre:true
        
    }
})


const MemberDetails = mongoose.model("memberList", membershipDataSchema)
module.exports = MemberDetails