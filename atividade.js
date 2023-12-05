// Criar um array de objetos com nome e nota de alunos
// Criar função para retornar apenas alunos com nota maior ou igual a 6
// Chamar a função e exibir os resultados

const alunos = [
  { nome: "Aluno1", nota: 8 },
  { nome: "Aluno2", nota: 5 },
  { nome: "Aluno3", nota: 7 },
  { nome: "Aluno4", nota: 9 },
  { nome: "Aluno5", nota: 4 },
];

function filtrarAlunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter((aluno) => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
