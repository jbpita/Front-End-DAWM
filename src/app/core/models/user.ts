export type Roles = "cliente" | "admin"
export interface User{
    correo: string;
    password: string;
}
export interface UserResponse{
    message: string;
    success: string;
    role: Roles;
}