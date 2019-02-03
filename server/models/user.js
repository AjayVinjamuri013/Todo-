var mongoose = require('mongoose');
module.exports.User = mongoose.model('user',{
    email : {
        type : String,
        required : true,
        trim  : true,
        minlength : 1
    }
});