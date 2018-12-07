const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../config/config').get(process.env.NODE_ENV);
const SALT_I = 10;

const userSchema = mongoose.Schema({
  score:{
      type:String,
      default:'n/a'
  },
  level:{
      type:String,
      required:true
  },
  mistakes:{
      type:String,
      default:'0'
  },
  time:{
      type:String,
      default:'n/a'
  },
  difficulty:{
      type:String,
      required:true,
      min:1,
      max:4
  },
  best:{
      type:String,
      default:'n/a'
  },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    name:{
        type:String,
        maxlength:100
    },
    token:{
        type:String
    },
    firstStart:{
      type:Boolean,
      default:true
    },
    firstEver:{
      type:Boolean,
      default:true
    },
    firstEnter:{
      type:Boolean,
      default:true
    },
    final:{
      type:Boolean,
      default:false
    },
    messages:{
      type:Array,
      default: 'n/a'
    }
})

userSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(SALT_I,function(err,salt){
            if(err) return next(err);

            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next()
    }
})

userSchema.methods.comparePassword = function(candidatePassword,cb){
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err) return cb(err);
        cb(null,isMatch);
    })
}

userSchema.methods.generateToken = function(cb){
    var user = this;
    var token = jwt.sign(user._id.toHexString(),config.SECRET);

    user.token = token;
    user.save(function(err,user){
        if(err) return cb(err);
        cb(null,user)
    })
}

userSchema.statics.findByToken = function(token,cb){
    var user  = this;

    jwt.verify(token,config.SECRET,function(err,decode){
        user.findOne({"_id":decode,"token":token},function(err,user){
            if(err) return cb(err);
            cb(null,user)
        })
    })
}


userSchema.methods.deleteToken = function(token,cb){
    var user = this;

    user.update({$unset:{token:1}},(err,user)=>{
        if(err) return cb(err);
        cb(null,user)
    })
}


const User = mongoose.model('User',userSchema)

module.exports = { User }
