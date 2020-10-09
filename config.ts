export default () => ({
    port: process.env.PORT || parseInt(process.env.PORT, 10) || 3000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://admin:password@localhost:27017/db',
    default_user:{
        username:"admin",
        email:"admin@enterprise.org",
        roles:["Administration","User"],
        full_name:"Administration NestJS",
        mobile_phone:"666999333",
        password:"password"
    },
    jwt_key:process.env.JWT_KEY || '2dmrfE2vga'
});
