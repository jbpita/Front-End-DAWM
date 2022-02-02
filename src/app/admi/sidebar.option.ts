export interface Option {
    id: number;
    icon: string;
    name: string;
    path: String;
  }

export const side_option = [
    {
        id: 1,
        icon: "bi bi-plus-square",
        name: "Registrar Producto",
        path: "form-product"
    },
    { 
        id: 2,
        icon: "bi bi-plus-square",
        name: "Registrar Marca",
        path: "form-marca"
    },
    {
        id: 3,
        icon: "bi bi-bar-chart-line",
        name: "Estadistica",
        path: "stadistic"
    },
    {
        id: 4,
        icon: "bi bi-person",
        name: "Usuario",
        path: "user"
    },
    {
        id: 5,
        icon: "bi bi-list-ol",
        name: "Lista de Productos",
        path: "list-product"
    }
]