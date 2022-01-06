# UC_04 - Marcar Data de Defesa

## Descrição
Este caso de uso permite ao orientador informar ao aluno qual será a data em que ele irá fazer a apresentação de defesa do TCC
## Atores
Orientador, Sistema TCC.
## Pré-condições
É necessário estar logado como Orientador.
## Pós-condições
O sistema deve exibir uma mensagem de "Defesa Agendada!", e os dados da apresentação, bem como data e hora, devem ser dispostos no cronograma de defesas agendadas.
## Caso Base
1. O orientador deseja agendar uma data de defesa, previamente acordada com o aluno de eComp;
2. O orientador clica no botão "Agendar Defesa";
3. Sistema TCC gera uma tela para a visualização de um formulário para preenchimento, com os dados do título do TCC, os autores, a data e o horário da defesa;
4. Ao submitar o formulário, os dados da apresentação serão dispostos no cronograma de defesas da Universidade, mostrando as informações que foram preenchidas no formulário;
## Casos de Exceção
* CE1 - Entrada Inválida  
  * CE1.1 - Orientador insere um dia e horário que já está ocupado ou uma data inválida;  
  * CE1.2 - O Sistema TCC, ao receber a informação, faz uma busca no banco de dados do cronograma, e, ao iterar pela lista de datas e horários, percebe que já existe um dia e hora iguais aos que foram preenchidos;  
  * CE1.3 - O Sistema TCC não faz a adição da defesa ao cronograma, e exibe uma notificação "Já existe uma defesa marcada para este horário!", não preenchendo o input e esperando uma nova entrada do usuário;  
* CE2 - Campo não informado
  * CE2.1 - No passo 4 do caso base, tenta-se submitar o formulário com 1 ou mais campos sem as devidas informações;
  * CE2.2 - Sistema TCC impede que o formulário seja submitado e destaca o campo não preenchido mostrando a mensagem "Preencha este campo."
  * CE2.3 - Formulário permanece inalterado e volta ao passo 1 do caso de Exceção até que o orientador preencha todos os campos
  * CE2.4 - Formulário está devidamente preenchido e pode ser submitado;