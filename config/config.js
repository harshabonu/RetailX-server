const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:8080",
    "https://retail-x-one.vercel.app",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};



export { corsOptions };
