import {Schema,model} from 'mongoose';

const videoSchema = new Schema({
    title:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        trim:true,
    },
    secUrl:{
        type:String,
        trim:true,
    },
    playUrl:{
        type:String,
        trim:true,
    },
    duration:{
        type:Number,
    },
    module:{
        type:Schema.Types.ObjectId,
        ref:'Module',
    },
    progress:{
        type:Number,
        default:0,
    },
    preview:{
        type:Boolean,
        default:false,
    }

},{timestamps:true});

const Video = model('Video',videoSchema);
export default Video;