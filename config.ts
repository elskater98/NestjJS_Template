export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    MONGO_URI:'mongodb://admin:password@localhost:27017/db'
});
