export interface Class {
  id: number;
  name: string;
  watched: boolean;
  isCurrent: boolean;
  currentTime?: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  totalTime?: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const classes: Class[] = [
  { id: 1, name: "Arquitetura Mobile II", watched: false, isCurrent: false },
  { id: 2, name: "Arquitetura Mobile I", watched: false, isCurrent: false },
  { id: 3, name: "Micro-front-end II", watched: false, isCurrent: false },
  { id: 4, name: "Fundamentos de redação técnico-científica", watched: false, isCurrent: false },
  { id: 5, name: "Micro-front-end I", watched: false, isCurrent: false },
  { id: 6, name: "Gerenciamento e Estruturação de API's II", watched: false, isCurrent: false },
  { id: 7, name: "Noções gerais sobre o desenvolvimento do TCC", watched: false, isCurrent: false },
  { id: 8, name: "Gerenciamento e Estruturação de API's I", watched: false, isCurrent: false },
  { id: 9, name: "Gerenciamento e Estruturas de Filas II", watched: false, isCurrent: false },
  { id: 10, name: "Gerenciamento e Estruturas de Filas I", watched: false, isCurrent: false },
  { id: 11, name: "NoSQL x SQL II", watched: false, isCurrent: false },
  { id: 12, name: "Introdução ao Deep Learning", watched: false, isCurrent: false },
  { id: 13, name: "NoSQL x SQL I", watched: false, isCurrent: false },
  { id: 14, name: "Padrões de Projetos (Design Patterns) II", watched: false, isCurrent: false },
  { id: 15, name: "Padrões de Projetos (Design Patterns) I", watched: false, isCurrent: false },
  { id: 16, name: "Domain Driven Design (DDD) II", watched: false, isCurrent: false },
  { id: 17, name: "Domain Driven Design (DDD) I", watched: false, isCurrent: false },
  { id: 18, name: "Podcast TCC - Extra - Provas Finais", watched: false, isCurrent: false },
  { id: 19, name: "Podcast TCC - Defesa do TCC", watched: false, isCurrent: false },
  { id: 20, name: "Palestra: Aplicações do Retail Media no mercado de consumo", watched: false, isCurrent: false },
  { id: 21, name: "Gerenciamento de Testes (TDD) II", watched: false, isCurrent: false },
  { id: 22, name: "Podcast TCC - Entrega do TCC e agendamento de defesa", watched: false, isCurrent: false },
  { id: 23, name: "Gerenciamento de Testes (TDD) I", watched: false, isCurrent: false },
  { id: 24, name: "Podcast TCC - Coleta e Análise de Dados", watched: false, isCurrent: false },
  { id: 25, name: "Palestra: Carreira dos Sonhos 2024", watched: false, isCurrent: false },
  { id: 26, name: "Paradigmas de Desenvolvimento de Software II", watched: false, isCurrent: false },
  { id: 27, name: "Podcast TCC - Resultados Preliminares", watched: false, isCurrent: false },
  { id: 28, name: "Paradigmas de Desenvolvimento de Software I", watched: false, isCurrent: false },
  { id: 29, name: "Podcast TCC - Formatação", watched: false, isCurrent: false },
  { id: 30, name: "Palestra: Como a Inteligência Artificial está transformando o mercado de consumo", watched: false, isCurrent: false },
  { id: 31, name: "Arquitetura Limpa (Clean Architecture) II", watched: false, isCurrent: false },
  { id: 32, name: "Podcast TCC - Software de Similaridade (Turnitin)", watched: false, isCurrent: false },
  { id: 33, name: "Arquitetura Limpa (Clean Architecture) I", watched: false, isCurrent: false },
  { id: 34, name: "Podcast TCC - Viabilidade econômica", watched: false, isCurrent: false },
  { id: 35, name: "Liderança em Projetos de Tecnologia II", watched: false, isCurrent: false },
  { id: 36, name: "Podcast TCC - Projeto de Pesquisa", watched: false, isCurrent: false }
]; 