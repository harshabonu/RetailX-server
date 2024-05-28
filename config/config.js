const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:8080",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};



export { corsOptions };
