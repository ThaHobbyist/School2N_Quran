const mongoose = require('mongoose')

module.exports = async () => {
  /* Connect to DB */
  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect(
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      }
    ).then(() => console.log(
      'DB Connection successful.'
    ))
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    throw error
  }
}
