# UC_07 - Defesas Agendadas

## Descrição
Este caso de uso permite visualizar o cronograma de defesas agendadas.
## Atores
Aluno eComp, Visitante, Orientador, Sistema TCC.
## Pré-condições
É necessário estar na página inicial do site.
## Pós-condições
Usuário visualiza a página contendo o cronograma de defesas agendadas, com as defesas sendo organizadas em ordem de apresentação.
## Caso Base
1. Quem acessa o site deseja visualizar a lista das defesas de TCCs agendadas;
2. Clicar no botão "Defesas Agendadas";
3. Sistema TCC gera um cronograma atualizado das defesas de TCCs agendadas;
4. Quem clicou no botão é redirecionado para a página de visualizar defesas de TCCs agendadas;
## Caso de Exceção:
* CE1 - TCCs não agendados
    * CE1.1 - No passo 3 do Caso Base, O Sistema TCC não consegue gerar um cronograma devido à falta de TCCs agendados no site;
    * CE1.2 - Quem clicou no botão é redirecionado para a página de visualizar defesas de TCCs agendadas;
    * CE1.3 - Sistema TCC mostra a mensagem "Não há defesas agendadas" ao invés de mostrar o cronograma;