export default {
  jwtSecret: process.env.MONGODB_SECRET || `MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA2vOMbfP11bZDIrTRVH4fk6VOfvSx3XnDSfqgwcvX1f0fxyOp7xHhA6ZOv9cN726RuNB/g1nE3G5ugOS3f28N`,
  DB: {
    URI: process.env.MONGODB_URI || "mongodb://cosmos-mongodb-shopping2021:J6PRt1bVoRHdssoxHQWOWPJkW1sLmUJ214CTTMIZOylFkCjWuqBfASECqIB2vzovJJA47MIQp8EIuTdWrqIL0A==@cosmos-mongodb-shopping2021.mongo.cosmos.azure.com:10255/?ssl=true&appName=@cosmos-mongodb-shopping2021@",
  },
  server: {
    port: process.env.PORT || 8000 
  }
}