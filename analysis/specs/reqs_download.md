# UC_02 - Fazer Download do TCC

## Descrição
Este caso de uso permite fazer o download do trabalho de conclusão de curso listado no site.
## Atores
Aluno eComp, Visitante, Orientador e Sistema TCC.
## Pré-condições
É necessário estar na página "TCCs concluídos".
## Pós-condições
O download é efetuado e quem o solicitou já está apto a usá-lo.
## Caso Base
1. Quem está na página "TCCs concluídos" deseja efetuar o download de um TCC visualizado na página;
2. Clicar no botão "Download" da sessão "Monografia" do TCC o qual deseja-se baixar;
3. É gerado uma solicitação de download para o site;
4. Site autoriza a solicitação;
## Casos de Exceção
* CE1 - TCC indisponível  
    * CE1.1 - Não houve o upload do TCC no site;
    * CE1.2 - Sistema TCC não disponibiliza o botão "Download";