import {IsOptional,IsEmail, IsNotEmpty,IsDate,MinLength,IsArray,IsMobilePhone,ArrayNotEmpty,IsJWT,IsMongoId} from "class-validator";

export class User {
    @IsOptional()
    @IsMongoId()
    _id:string;

    @IsNotEmpty()
    username:string;

    @IsEmail()
    email:string;

    @IsArray()
    @ArrayNotEmpty()
    roles: string [];

    @IsNotEmpty()
    full_name:string;

    @IsMobilePhone('es-ES')
    mobile_phone:string

    @IsNotEmpty()
    @MinLength(4)
    @MinLength(32)
    password:string;

    @IsDate()
    createdOn:Date

    @IsOptional()
    @IsJWT()
    token:string;

    constructor(values: object = {}) {
        Object.assign(this as User, values);
    }

}
