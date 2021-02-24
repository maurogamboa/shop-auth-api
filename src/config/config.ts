export default {
  jwtSecret: process.env.MONGODB_SECRET || `MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA2vOMbfP11bZDIrTRVH4fk6VOfvSx3XnDSfqgwcvX1f0fxyOp7xHhA6ZOv9cN726RuNB/g1nE3G5ugOS3f28N`,
  DB: {
    URL: process.env.MONGODB_URI || "",
    USER: process.env.MONGODB_USER || "",
    PASSWORD: process.env.MONGODB_PASSWORD || "",
  },
  server: {
    port: process.env.PORT || 8000 
  }
}