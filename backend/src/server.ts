import app from "./app";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes";

dotenv.config();

const PORT = process.env.PORT || 4000;

//servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

app.use("/user", userRouter)