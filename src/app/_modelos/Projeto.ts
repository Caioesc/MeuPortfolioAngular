import { Tag } from "./Tag";

export interface Projeto{
    id: number;
    nome: string;
    resumo: string;
    descricao: string;
    projetoLink: string;
    imagens: string[];
    tags: Tag[];
}
