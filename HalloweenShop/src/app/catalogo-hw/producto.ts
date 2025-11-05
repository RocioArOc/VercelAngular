export class Producto {
    nombre: string;
    imagen: string;
    precio: number;
    disponible: boolean;

    constructor(nombre: string, imagen: string, precio: number, disponible: boolean) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.disponible = disponible;
    }

    get getNombre(): string {
        return this.nombre;
    }

    set setNombre(nombre: string) {
        this.nombre = nombre;
    }

    get getImagen(): string {
        return this.imagen;
    }

    set setImagen(imagen: string) {
        this.imagen = imagen;
    }

    get getPrecio(): number {
        return this.precio;
    }

    set setPrecio(precio: number) {
        this.precio = precio;
    }

    get isDisponible(): boolean {
        return this.disponible;
    }

    set setDisponible(disponible: boolean) {
        this.disponible = disponible;
    }
}