import mongoose, { ConnectOptions } from "mongoose";
import config from "../config/config"

const dbOptions: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true
}

mongoose.connect(config.DB.URI, dbOptions).then(
  () => { /** ready to use. },
  err => { /** handle initial connection error */ }
);

const conection = mongoose.connection;

conection.once('open', () => {
  console.log('MongoDB connection established.');
});

conection.on('error', err => {
  console.log('error', err);
})