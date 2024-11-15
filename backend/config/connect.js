const mongoose = require('mongoose');

const connectionOfDb = () => {
  mongoose
    .connect("mongodb+srv://anantharaman783:anantharaman783@cluster0.7gc7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      throw new Error(`Could not connect to MongoDB: ${err}`);
    });
};

module.exports = connectionOfDb;
