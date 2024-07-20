## Rodando projeto localmente

#### Clonagem do Repositório:

Utilize o comando `git clone` para clonar o repositório do projeto no seu
diretório local.

```bash
git clone https://github.com/devcarlosl/product-page.git
```

#### Instalação das Dependências:

Acesse o diretório do projeto clonado e instale as dependências do projeto

```bash
yarn install
#ou seu gerenciador de pacotes preferido
```

#### Execução do Projeto:

Após a instalação das dependências, execute o comando para rodar o projeto
localmente.

```bash
yarn dev
#ou seu gerenciador de pacotes preferido
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Refinamento

### Página de Produto Intelbras - PDP

**Descrição:**

A página de produtos será desenvolvida utilizando Next.js, TypeScript e CSS Modules. Para utilização de arquivos .svg, será utilizado um pacote externo para importação de arquivos .svg. O pacote utilizado será o `@svgr/webpack`. _(Durante o desenvolvimento, outros pacotes podem ser utilizados)_

**Dados do produto:**

- **Requisição**: Ao abrir a página, será necessário fazer uma requisição à API para buscar os detalhes do produto. O endpoint e a query já estão pré-disponibilizados.

**A página contará com:**

- **Cabeçalho e rodapé:** Imagens já disponibilizadas serão utilizadas para o cabeçalho e rodapé da página.
- **Banner:**
  - **Imagem do produto, título e descrição:** O banner exibirá a imagem do produto, seu título e descrição.
  - **Funcionalidade "Ver galeria":** Ao clicar em um botão oculto que só aparece quando o mouse passa sobre o centro da imagem do banner, um carrossel com imagens relacionadas ao produto será exibido.
  - **Navegação no carrossel:** Dois botões de navegação (esquerda e direita) e um botão de zoom serão disponibilizados. Ao clicar no botão de zoom, a imagem será ampliada, o fundo escurecerá e botões de navegação para esquerda e direita também estarão disponíveis. Clicar no fundo fecha o zoom.
  - **Thumbnails:** Miniaturas das imagens do carrossel serão exibidas logo abaixo do mesmo, funcionando como botões de navegação para a respectiva imagem.
- **Sessões de descrição do produto:**
  - **Layout não mobile:** A imagem será exibida alternadamente à direita e à esquerda, com título e descrição do lado oposto.
  - **Layout mobile:** A imagem será exibida acima, com título e descrição abaixo, em todas as sessões.
- **Sessão "Encontre um instalador":**
  - **Layout desktop:** Ícone, descrição e botão "Encontre um instalador" serão exibidos lado a lado.
  - **Layout mobile:** O botão "Encontre um instalador" será posicionado abaixo do ícone e da descrição.
- **Sessão "Você precisa de ajuda":**
  - **Links de redirecionamento:** Cada link terá um ícone, uma descrição e um comportamento de carrossel no layout mobile, alternando as opções ao deslizar o dedo para a esquerda ou direita.
- **Sessão de Breadcrumb:**
  - **Caminho até a página do produto:** A página terá um breadcrumb para exibir o caminho de navegação até a página do produto.

### _Observações_

O layout deve ser responsivo e respeitar o Figma pré disponibilizado.

```

```
