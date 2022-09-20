import { Schema, model } from 'mongoose';

interface IUser {
    username: string,
    pubkey: string,
    privkey: string
}

const userSchema = new Schema<IUser>({
    username: {type: String, required: true},
    pubkey: {type: String, required: true, unique: true},
    privkey: {type: String, required: true, unique: true},
})

export const User = model<IUser>('User', userSchema);