# UC_03 - Fazer Login

## Descrição
Este caso permite que um aluno do curso de eComp ou o orientador possam fazer login em suas contas no sistema, permitindo assim diferenciá-los dos visitantes.  
## Ator
Orientador, Aluno eComp, Sistema TCC.
## Pré-condições
O aluno deve estar matriculado no curso de Engenharia da Computação, e o orientador deve ser um professor que esteja fazendo o papel de orientação
## Pós-condições
O sistema deve reconhecer, caso os dados batam com o banco de dados, o acesso do usuário cadastrado, e efetuar o login.
## Caso Base
1. O aluno acessa a página de "Acessar Sistema"
2. Em seguida, insere seus dados para login (cpf e matrícula) e clica em "Enviar"
3. O sistema faz uma consulta no banco de dados da Universidade, a fim de descobrir se o aluno está matriculado na Universidade e está inserido na disciplina de Trabalho de Conclusão de Curso.
4. O usuário é redirecionado para sua página de perfil
## Caso Alternativo
* CA1 - Login professor
    * CA1.1 - O orientador utiliza seu id de professor ao invés de um número de matrícula para realizar o login;
    * CA1.2 - O sistema faz uma consulta no banco de dados da Universidade, a fim de reconhecer os dados do professor e se ele está apto à orientação;  
    * CA1.3 - O orientador é redirecionado para sua página de perfil;
## Casos de Exceção
* CE1 - Usuário sem cadastro  
    * CE1.1 - No passo 3 do caso base e do caso alternativo, se o usuário não atender a nenhuma das preposições, o acesso será negado. No entanto, ele poderá utilizar outros aspectos do sistema
* CE2 - Campo não informado
  * CE2.1 - No passo 2 do caso base, tenta-se submitar o formulário com 1 ou mais campos sem as devidas informações;
  * CE2.2 - Sistema TCC impede que o formulário seja submitado e destaca o campo não preenchido, mostrando a mensagem "Preencha este campo."
  * CE2.3 - O formulário permanece inalterado e volta ao passo 1 do caso de Exceção até que o orientador preencha todos os campos
  * CE2.4 - O formulário está devidamente preenchido e pode ser submitado;