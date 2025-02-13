import {Schema, model, models} from 'mongoose';

const userSchema = new Schema({
    email: { 
        type: String, 
        unique: [true, 'Email is already taken'],
        required: [true, 'Email is required'], 
    },
    username: { 
        type: String, 
        required: [true, 'Username is required'], 
        match: [/^[a-zA-Z0-9]+$/, 'Username is invalid'],
    },
    image: {
        type: String
    }
})  

const User = models.User || model('User', userSchema);
export default User;