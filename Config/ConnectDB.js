const mangoose = require ('mongoose')

const connectDB =async()=>{
    try { 
    await   mangoose.connect( 'mongodb://127.0.0.1:27017' )
        console.log('DB is connected')
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB