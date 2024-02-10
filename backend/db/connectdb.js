import mongoose from "mongoose"

const connectdb =(url)=>{
    mongoose.set('strict',true)
    mongoose.connect(url)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
}

export default connectdb