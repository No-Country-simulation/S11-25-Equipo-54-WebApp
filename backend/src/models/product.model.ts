export interface Product {
    id?: number;
    marca: string;
    titulo: string;
    descripcion: string;
    precio: number;
    img: string; // URL cloudinary
    huella_co2: number; // hardcode
}
