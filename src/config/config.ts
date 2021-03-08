export default {
  jwtSecret: process.env.JWT_SECRET || `MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA2vOMbfP11bZDIrTRVH4fk6VOfvSx3XnDSfqgwcvX1f0fxyOp7xHhA6ZOv9cN726RuNB/g1nE3G5ugOS3f28N`,
  DB: {
    URI: process.env.MONGODB_URI || "",
  },
  server: {
    port: process.env.PORT || 8000 
  }
}