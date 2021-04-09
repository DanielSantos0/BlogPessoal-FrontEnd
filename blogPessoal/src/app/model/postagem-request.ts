import { Tema } from "./tema"
import { User } from "./user"

export class PostagemRequest {
    public titulo: string
    public texto: string
    public data: Date
    public usuarioId: number
    public temaId: number
}