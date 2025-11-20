export interface Users {
    id?: number;
    rol: "admin" | "cliente";
    name: string;
    last_name: string;
    birth_date: Date;
    email: string;
    password: string;
    img: string; // URL subida a Cloudinary
}
