export default {
  jwtSecret: process.env.MONGODB_SECRET || "somesecretetoken",
  DB: {
    URL: process.env.MONGODB_URI || "",
    USER: process.env.MONGODB_USER || "",
    PASSWORD: process.env.MONGODB_PASSWORD || "",
  },
  server: {
    port: process.env.PORT || 8000 
  }
}