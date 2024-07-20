## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Refinamento

### Página de Produto Intelbras - PDP

**Descrição:**

A página de produtos será desenvolvida utilizando Next.js, TypeScript e CSS Modules. Para garantir a responsividade e utilização de arquivos .svg, serão utilizados dois pacotes externos uma para importação de arquivos .svg e outro para detecção de dispositivos, pois em Server Components o acesso ao objeto `window` do navegador não é possível. Os pacotes utilizados serão `ua-parser-js` e o `@svgr/webpack`. _(Durante o desenvolvimento, outros pacotes podem ser utilizados)_

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

# product-page
