import app from "./app";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes";
import { createDefaultAdmin } from "./init/createAdmin";

dotenv.config();

const PORT = process.env.PORT || 4000;

// Ejecutar admin al arrancar
createDefaultAdmin();

//servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

app.use("/user", userRouter)