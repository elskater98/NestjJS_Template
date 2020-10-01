import {IsOptional,IsEmail, IsNotEmpty,IsDate,MinLength,MaxLength,IsArray,IsMobilePhone,ArrayNotEmpty,IsJWT,IsMongoId} from "class-validator";

export class UserDTO {
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
    @IsOptional()
    mobile_phone:string

    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(32)
    password:string;

    @IsDate()
    @IsOptional()
    createdOn:Date

    @IsOptional()
    @IsJWT()
    token:string;

    constructor(values: object = {}) {
        Object.assign(this as UserDTO, values);
    }

}
