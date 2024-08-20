# Hino Desenhos

:::info
**Modulo**: Hino Desenho

**Objetivo**: Permitir a visualização de desenhos da engenharia através do ‘Hino Desenhos’
:::

:::danger
**Requisitos**: 

1. A pasta no servidor onde os desenhos estão hospedadas devem estar com acesso a leitura habilitado.
2. Os desenhos devem estar devidamente renomeados e registrados em ‘EN Desenhos’
3. A conexão do módulo ‘Hino Desenhos’ deve estar configuradas
:::

---

Obtenha o pacote de instalação do ‘Hino Desenhos’ **[clicando aqui](https://drive.google.com/drive/folders/12qNVCFm2QnXvQPDJbxX8yqSim2mGA13E?usp=sharing)** e realizando o downaload. Após realizar o download do arquivo siga as instruções abaixo.

![hino-desenhos](./img/hino-desenhos/hino-desenhos.png)

## Instruções para ‘Hino Desenhos’

### Instalação na estação de visualização dos desenhos.

Escolha qual computador vai ficar a disposição para executar o ‘Hino Desenhos’, as instruções pode ser replicadas para mais de uma máquina se necessário.

- Localize o arquivo baixado

![hino-desenhos-1](./img/hino-desenhos/hino-desenhos-1.png)

- Recorte o arquivo e mova para o Disco Local (C:)

![hino-desenhos-2](./img/hino-desenhos/hino-desenhos-2.png)

- Extraia o arquivo em uma pasta no mesmo local

![hino-desenhos-3](./img/hino-desenhos/hino-desenhos-3.png)

- Dentro da pasta criada ‘HINODESENHOS’, localize o arquivo de aplicação chamado ‘**Hino.Desenho.exe**’

![hino-desenhos-4](./img/hino-desenhos/hino-desenhos-4.png)

…e envie um atalho do ícone para a área de trabalho do computador.

![hino-desenhos-5](./img/hino-desenhos/hino-desenhos-5.png)

Para executar o aplicativo, basta o usuário dar dois cliques no ícone enviado para área de trabalho. Não é necessário realizar nenhum tipo de login.

---

### Configuração da conexão em ‘Hino Desenhos’.

A conexão permite que o aplicativo ‘Hino Desenhos’ realize a leitura e a visualização dos desenhos no aplicativo, sem a conexão não é possível o aplicativo encherga os desenhos da engenharia. Para realizar a conexão solicite os dados de conexão do ERP ao suporte ou se já tiver em posse dos dados siga as instruções abaixo.

- Dentro da pasta local do ‘HINODESENHOS’ localize o arquivo ‘**Hino.Conexões.exe**’

![hino-desenhos-6](./img/hino-desenhos/hino-desenhos-6.png)

- Execute o aplicativo com dois cliques, ao executar será aberto o **Gerênciador de Conexões**

![hino-desenhos-7](./img/hino-desenhos/hino-desenhos-7.png)

- Clique no sinal de ‘**+**’ para iniciar a inclusão de uma nova conexão.

![hino-desenhos-8](./img/hino-desenhos/hino-desenhos-8.png)

A conexão deve ser a mesma do ERP para que o aplicativo consiga visualizar as Estruturas e os Desenhos cadastrados no aplicativo. Porém o nome da conexão de ser ‘**DESENHO**’ 

- Preencha o nome ‘**Conexão**’
- Preencha o ‘**Servidor de Banco**’
- Preencha o ‘**Usuário do Banco**’
- Preencha a ‘**Senha do Usuário do Banco**’

![hino-desenhos-9](./img/hino-desenhos/hino-desenhos-9.png)

- Clique em  ‘**Testar Conexão**’, se os dados estiverem corretos a conexão será bem sucedida.

![hino-desenhos-10](./img/hino-desenhos/hino-desenhos-10.png)

- Clique em salvar e fechar o Gerênciador.

![hino-desenhos-11](./img/hino-desenhos/hino-desenhos-11.png)

Agora com a conexão estabelecida o aplicativo ‘**Hino Desenhos**’ já consegue olhar para os dados dentro do ERP.

---

### Configurando o ERP para apontar os dados de Desenhos para o aplicativo.

Algumas parâmetrizações no ERP são necessárias para que o aplicativo ‘**Hino Desenhos**’ possa apresentar os dados .

- Nos parâmetros de ‘(EN)ENGENHARIA’ defina o caminho da pasta onde são guardados os desenhos, é preciso que a pasta esteja em um servidor online e que o computador que vai executar o aplicativo ‘**Hino Desenhos**’ tenha a permissão de acesso na rede.

![hino-desenhos-12](./img/hino-desenhos/hino-desenhos-12.png)

- No módulo de Engenharia, acesse ‘Desenhos’

![hino-desenhos-13](./img/hino-desenhos/hino-desenhos-13.png)

- Clique em novo e realize o cadastro do desenho, preencha os dados e clique em Salvar

![hino-desenhos-14](./img/hino-desenhos/hino-desenhos-14.png)

- Na aba ‘Revisão’ clique em novo e cadasstre a revisão do desenho. Após realizado o preenchimento dos dados necessários salve o desenho.

![hino-desenhos-15](./img/hino-desenhos/hino-desenhos-15.png)

- Na pasta onde estão os desenhos, verifique se o nome do arquivo é o mesmo do código do desenho cadastrado no ERP

![hino-desenhos-16](./img/hino-desenhos/hino-desenhos-16.png)

---

### Abrindo o desenho de engenharia no aplicativo Hino Desenho
- Execute o aplicativo ‘**Hino Desenhos**’ clicando duas veses no ícone que pode estar na área de trabalho ou no local definido no início desse tutorial.

![hino-desenhos-17](./img/hino-desenhos/hino-desenhos-17.png)

- Ao executar o aplicativo irá abrir. Esse aplicativo não pede senha e nem usuário pois se conectar direto ao ERP se a conexão estiver estabelecida.
- 
![hino-desenhos-18](./img/hino-desenhos/hino-desenhos-18.png)

- Clique nos ‘…’ para listar os produtos e verificar os que possuem algum desenho vinculado

![hino-desenhos-19](./img/hino-desenhos/hino-desenhos-19.png)

Os produtos serão exibidos…..

![hino-desenhos-20](./img/hino-desenhos/hino-desenhos-20.png)

- Clique no produto desejado e depois clique em ‘**Carregar**’. Ao clicar em carregar, a árvore de produtos será expandida.

![hino-desenhos-21](./img/hino-desenhos/hino-desenhos-21.png)

Atente-se a legenda que possibilita identificar se um determinado produto tem ou não desenho vinculado . 

![hino-desenhos-22](./img/hino-desenhos/hino-desenhos-22.png)

- Selecione o produto que tem desenho, e clique em ‘**Abrir desenho**’

![hino-desenhos-23](./img/hino-desenhos/hino-desenhos-23.png)

Ao clicar em ‘Abrir desenho’ se o caminho para pasta estiver correto e as permissões de acesso pela estação aos arquivos estiverem configurados o desenho será carregado e exibido.

![hino-desenhos-24](./img/hino-desenhos/hino-desenhos-24.png)

Através do Hino desenhos é possível apenas explorar o documento, não é possível editar, excluir ou alterar os arquivos na pasta de destino.