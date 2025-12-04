# 🛒 Backend – API REST (Node.js + Express + TypeScript + MySQL)

Este es el backend oficial del proyecto. Proporciona endpoints para:

- Registro y login de usuarios (con JWT)
- Gestión de productos
- Gestión de noticias (solo Admin)
- Carrito de compras
- Procesamiento de órdenes (checkout)

---

# 🚀 Instalación en Local



## 1. Clonar el repositorio

```bash
git clone <URL-DEL-REPO>
cd backend
npm install

```

## 2. Configurar variables de entorno (.env)

```bash
PORT=4000

# Base de datos
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=ecommerce
DB_PORT=3306

# JWT
JWT_SECRET_KEY=mi_clave_super_secreta
JWT_EXPIRES_IN=1h

# Cloudinary
CLOUDINARY_CLOUD_NAME=<tu_cloud>
CLOUDINARY_API_KEY=<tu_key>
CLOUDINARY_API_SECRET=<tu_secret>
```

## 3. Generar build de TypeScript
```bash
npm run build
```

## 4. Ejecutar el servidor
```bash
npm run dev
```

## 5. Documentacion basica
- al arrancar el servidor se lanza una doc simple con los endpoints hasta ahora:

## 6. Captura de la documentación

![documentación](https://github.com/No-Country-simulation/S11-25-Equipo-54-WebApp/blob/backend/backend/public/img/capture_1.png)