# NutMed · Landing pages

Next.js 16 (App Router), deploy na Vercel. Cada LP fica em `conteudo.nutmed.com.br/<slug>`. Detalhes no README.

## Regras do projeto

### Toda página tem Open Graph completo (obrigatório)

Todo link de LP é compartilhado no WhatsApp e nas redes sociais em geral (Facebook, Instagram, LinkedIn, X, Telegram), então **nenhuma LP vai ao ar sem imagem e título de compartilhamento certos**.

Toda LP precisa de:

1. `app/<slug>/page.tsx` com `export const metadata = buildCourseMetadata(course);` (de `lib/metadata.ts`). Isso gera título, descrição, canonical, `og:type`, `og:site_name`, `og:locale`, `og:url`, `og:title`, `og:description` e o `twitter:card = summary_large_image`. O Next completa `og:image` e `twitter:image` com largura, altura, tipo e texto alternativo.
2. `app/<slug>/opengraph-image.tsx` chamando `courseOgImage(course)` (de `lib/og.tsx`). Ele gera uma imagem JPEG 1200x630 (abaixo de 300 KB, com `contentType = OG_CONTENT_TYPE`) com o logo, o nome do curso e a linha de destaque, tudo centralizado, e o grão de papel das postagens por cima.
3. No `content/<slug>.ts`: `seo.title` com o nome exato do curso + " | NutMed", `seo.description` com até 155 caracteres e **sem preço nem campanha** (para não ficar desatualizada), e o bloco `og` (kicker, title, highlight, footer) revisado. Os campos de `og` que ficarem vazios usam o hero.

Antes de subir, confira:

- [ ] `npm run build` passa.
- [ ] `http://localhost:3000/<slug>/opengraph-image` abre um JPEG 1200x630, com menos de 300 KB e o título certo.
- [ ] Título e logo cabem no quadrado central da imagem (o WhatsApp às vezes recorta em quadrado).
- [ ] Imagem OG: texto do curso sobre o degradê roxo, com a foto do Hero do curso bem suave ao fundo. Use uma versão pequena e levemente desfocada (480x252, blur ~1,6, ~10 KB) em content og.image, para o fundo aparecer um pouco (pedido da Juliana) — nunca a foto do hero em tamanho cheio.
- [ ] O código-fonte da página tem `<title>`, `meta description`, `link rel="canonical"`, `og:title`, `og:image` e `twitter:card` corretos.
- [ ] O slug novo está na lista de `app/sitemap.ts`.

### Favicon oficial da NutMed (obrigatório)

Toda LP usa o favicon oficial do nutmed.com.br (a elipse lilás/violeta com "NutMed"), nunca o quadrado violeta com "N". Ele vem de `app/icon.svg` e `app/apple-icon.png` (180x180, fundo branco), que o Next aplica a todas as rotas. Não crie `favicon.ico`, ícone por LP nem `icons` no `metadata`. Antes de subir, confira que `/icon.svg` mostra a elipse e que o `<head>` da LP tem `link rel="icon"` apontando para ele.

### Outras regras

- Textos em pt-BR, com linguagem neutra de gênero ("nutricionistas").
- Nunca commitar `.env`/`.env.local` com chaves reais. Variáveis ficam na Vercel.
- O endereço do site vem de `lib/site.ts`: `NEXT_PUBLIC_SITE_URL`, depois o domínio da Vercel, depois `https://conteudo.nutmed.com.br`.
