import {mongoose} from 'mongoose';

const messageSchema = new mongoose.Schema({
    senderId: {
        type: string, //Clerk user Id
        required: true,
    },
    receiverId: {
        type: string, //Clerk user Id
        required: true,
    },
    content: {
        type: string,
        required: true,
    },
}, {timestamps:true}); // createdAt , updatedAt

export const Message = mongoose.model("Message", messageSchema);