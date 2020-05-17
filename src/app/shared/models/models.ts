export interface Tabela {
  id: number;
  apelido: string;
  nome: string;
}

export interface Condicao {
  id: number;
  valor: string;
}

export interface Acao {
  id: number;
  nome: string;
  appNome: string;
  classe: string;
  metodo: string;
  regras: Regra[];
}

export interface Coluna {
  id: number;
  nome: string;
  apelido: string;
  cabecalho: string;
  tamanho: number;
  formato: Formato;
  mascara: Mascara;
  alinhamento: Alinhamento;
  regras: Regra[];
}

export interface Regra {
  id: number;
  nome: string;
  valor: string;
}

export enum Formato {
  N = 'Numérico',
  A = 'Alfanumérico',
}

export enum Mascara {
  nenhum = 'Nenhum',
  numerico = 'Numérico',
}

export enum Alinhamento {
  center = 'Centro',
  left = 'Esquerda',
  right = 'Direita',
}
