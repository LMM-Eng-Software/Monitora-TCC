# UC_03 - Fazer Login

## Descrição
Este caso permite que um aluno do curso de eComp ou o orientador possam fazer login em suas contas no sistema, permitindo assim diferenciá-los dos visitantes. A senha do aluno será o seu número de matrícula, e a do orientador, seu id de professor da universidade.
## Ator
Orientador, Aluno eComp, Visitante, Sistema TCC.
## Pré-condições
O aluno deve estar matriculado no curso de Engenharia da Computação da UPE, e o orientador deve ser um professor de Engenharia da Computação da UPE qualificado para o papel de orientador.
## Pós-condições
O sistema deve reconhecer, caso os dados batam com o banco de dados, o acesso do usuário cadastrado, e efetuar o login.
## Caso Base
1. Na página inicial, clica-se na seta, localizada no canto superior direto;
1. O Sistema TCC redireciona para a página de login;
2. O usuário insere seus dados para login (cpf e senha) e clica em "Enviar";
3. O sistema TCC faz uma consulta no banco de dados da Universidade, a fim de descobrir se o usuário é um aluno matriculado na Universidade e está inserido na disciplina de Trabalho de Conclusão de Curso;
4. O usuário é redirecionado para sua página de perfil;
## Caso Alternativo
* CA1 - Login professor
    * CA1.1 - No passo 3 do caso base, o orientador utiliza seu id de professor ao invés de um número de matrícula para realizar o login;
    * CA1.2 - O sistema faz uma consulta no banco de dados da Universidade, a fim de reconhecer os dados do professor;  
    * CA1.3 - O orientador é redirecionado para sua página de perfil;
* CA2 - Login fora da página inicial
    * CA2.1 - Na página TCCs agendados ou TCCs concluídos clica-se na seta, localizada no canto superior direito da página;
    * CA2.1 - O Sistema TCC redireciona para a página de login;
    * CA2.1 - Se for um orientador volta ao passo 3 do caso alternativo 1, Senão volta ao passo 3 do caso base;
## Casos de Exceção
* CE1 - Usuário sem cadastro  
    * CE1.1 - No passo 4 do caso base e no passo 2 do caso alternativo 1, se o usuário não atender a nenhuma das preposições, o acesso será negado. No entanto, ele poderá utilizar outros aspectos do site;
    * CE1.2 - Sistema TCC gera um aviso dizendo "Usuário não cadastrado";
* CE2 - Campo não informado
  * CE2.1 - No passo 3 do caso base e no passo 1 do caso alternativo 1, tenta-se submitar o formulário com 1 ou mais campos sem as devidas informações;
  * CE2.2 - Sistema TCC impede que o formulário seja submitado e destaca o campo não preenchido, mostrando a mensagem "Preencha este campo.";
  * CE2.3 - O formulário permanece inalterado. Volta ao passo 1 do caso de Exceção até que o usuário preencha todos os campos;
  * CE2.4 - O formulário está devidamente preenchido e pode ser submitado;