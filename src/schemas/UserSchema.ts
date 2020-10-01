import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document{
    @Prop({type:String, unique:true,required:true})
    username: string;

    @Prop({type:String, unique:true,required:true})
    email:string;

    @Prop({type:[String],required:true})
    roles: string[];

    @Prop({type:String,required:true})
    password:string;

    @Prop({type:String})
    mobile_phone:string

    @Prop({type:String})
    full_name:string;

    @Prop({type:Date,default:Date.now()})
    createdOn:Date
}

export const UserSchema = SchemaFactory.createForClass(User);
