import { Lista } from "./types";

//Criar uma lista de produtos eletrônicos com os seguintes dados:
//id,nome,preco,desc,imagem=path


export const listaProdutos:Lista[] = [
    {
        id: 1,
        nome: "Smartphone",
        preco: 1500.00,
        desc: "Celular com tela de 6 polegadas",
        imagem: "https://example.com/imagem1.jpg"
    },
    {
        id: 2,
        nome: "Tablet",
        preco: 800.00,
        desc: "Tablet com tela de 10 polegadas",
        imagem: "https://example.com/imagem2.jpg"
    },
    {
        id: 3,
        nome: "Notebook",
        preco: 2500.00,
        desc: "Notebook com processador Intel Core i5",
        imagem: "https://example.com/imagem3.jpg"
    },
    {
        id: 4,
        nome: "Impressora",
        preco: 300.00,
        desc: "Impressora de alta qualidade",
        imagem: "https://example.com/imagem4.jpg"
    },
    {
        id: 5,
        nome: "Fone de Ouvido",
        preco: 200.00,
        desc: "Fone de ouvido sem fio",
        imagem: "https://example.com/imagem5.jpg"
    }
];
