# Caso de uso: Buscar TCC

## Descrição:
Este caso de uso permite filtrar os resultados de TCC visualizáveis com base no dado de entrada do usuário no campo "Buscar".
## Atores:
Aluno eComp, Visitante, Orientador.
## Pré-condição:
Estar na página de "Visualizar TCCs".
## Pós-condição:
Usuário visualiza TCCs com base na sua pesquisa.
## Caso Base:
1. Usuário deseja visualizar TCCs com um tema específico;
1. Usuário insere no campo "Buscar" o tema de TCC o qual deseja visualizar;
1. Sistema TCC realiza um filtro nos TCCs disponíveis no site;
1. Sistema TCC exibe os resultados correspondentes à pesquisa do usuário;
## Casos Alternativos:
* CA1 - Busca por autores
  * CA1.1 - Usuário deseja visualizar TCCs feitos por determinado autor;  
  * CA1.2 - Usuário insere o nome do autor do TCC no campo "Buscar";  
  * CA1.3 - Retorna ao passo 3 do caso base;  
* CA2 - Busca por banca  
  * CA2.1 - Usuário deseja visualizar TCCs os quais foram avaliados por um membro específico da banca;  
  * CA2.2 - Usuário insere o nome do membro da banca no campo "Buscar";  
  * CA2.3 - Retorna ao passo 3 do caso base;  
## Casos de Exceção:
* CE1 - Entrada Inválida  
  * CE1.1 - Usuário insere uma entrada no campo "Buscar";  
  * CE1.2 - Sistema TCC não encontra resultados correspondentes de TCCs disponíveis no site ao fazer o filtro;  
  * CE1.3 - Sistema TCC exibe uma notificação "Nenhum resultado encontrado";  
  * CE1.4 - Sistema TCC mantém os resultados de busca já visualizáveis;  
## Nota Auxiliar:
O "filtro" refere-se ao ato de selecionar apenas os resultados correspondenetes à pesquisa feita pelo usuário. Tal seleção ocorre por meio de correspondência de palavras chaves, ou seja, equivalência entre os principais termos usados na pesquisa e os que estão disponíveis no site.
