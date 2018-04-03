module.exports = {

    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://bpereira:bpereira@ds231715.mlab.com:31715/bryme',
    SECRET_TOKEN: 'miclavedetokens'

}