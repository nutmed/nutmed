# NutMed · Landing pages

Next.js 16 (App Router), deploy na Vercel. Cada LP fica em `conteudo.nutmed.com.br/<slug>`. Detalhes no README.

## Regras do projeto

### Toda página tem Open Graph completo (obrigatório)

Todo link de LP é compartilhado no WhatsApp e nas redes sociais em geral (Facebook, Instagram, LinkedIn, X, Telegram), então **nenhuma LP vai ao ar sem imagem e título de compartilhamento certos**.

Toda LP precisa de:

1. `app/<slug>/page.tsx` com `export const metadata = buildCourseMetadata(course);` (de `lib/metadata.ts`). Isso gera título, descrição, canonical, `og:type`, `og:site_name`, `og:locale`, `og:url`, `og:title`, `og:description`, `og:image`/`twitter:image` (com largura, altura, tipo e texto alternativo) e o `twitter:card = summary_large_image`.
2. O curso incluído na lista de `lib/courses.ts`. Dela saem o sitemap e a imagem de compartilhamento `/og/<slug>.jpg` (gerada no build por `app/og/[file]/route.ts` com `courseOgImage(course)` de `lib/og.tsx`): JPEG 1200x630, abaixo de 300 KB, com o logo, o nome do curso e a linha de destaque, tudo centralizado, e o grão de papel das postagens por cima. **Não** crie `app/<slug>/opengraph-image.tsx`: o endereço padrão do Next (`/<slug>/opengraph-image?<hash>`) não mostrava a foto no WhatsApp; o endereço fixo terminado em `.jpg` resolve.
3. No `content/<slug>.ts`: `seo.title` com o nome exato do curso + " | NutMed", `seo.description` com até 155 caracteres e **sem preço nem campanha** (para não ficar desatualizada), e o bloco `og` (kicker, title, highlight, footer) revisado. Os campos de `og` que ficarem vazios usam o hero.

Antes de subir, confira:

- [ ] `npm run build` passa.
- [ ] `http://localhost:3000/og/<slug>.jpg` abre um JPEG 1200x630, com menos de 300 KB e o título certo.
- [ ] Título e logo cabem no quadrado central da imagem (o WhatsApp às vezes recorta em quadrado).
- [ ] Imagem OG: texto do curso sobre o degradê roxo, com a foto do Hero do curso bem suave ao fundo. Use uma versão pequena e levemente desfocada (480x252, blur ~1,6, ~10 KB) em content og.image, para o fundo aparecer um pouco (pedido da Juliana) — nunca a foto do hero em tamanho cheio.
- [ ] O código-fonte da página tem `<title>`, `meta description`, `link rel="canonical"`, `og:title`, `og:image` e `twitter:card` corretos.
- [ ] O curso novo está na lista de `lib/courses.ts`.
- [ ] Depois do deploy, teste o link no WhatsApp (de preferência com `?v=1` no fim, porque o WhatsApp guarda a prévia antiga de cada link) e no [Sharing Debugger do Facebook](https://developers.facebook.com/tools/debug/).

### Favicon oficial da NutMed (obrigatório)

Toda LP usa o favicon oficial do nutmed.com.br (a elipse lilás/violeta com "NutMed"), nunca o quadrado violeta com "N". Ele vem de `app/icon.svg` e `app/apple-icon.png` (180x180, fundo branco), que o Next aplica a todas as rotas. Não crie `favicon.ico`, ícone por LP nem `icons` no `metadata`. Antes de subir, confira que `/icon.svg` mostra a elipse e que o `<head>` da LP tem `link rel="icon"` apontando para ele.

### Outras regras

- Textos em pt-BR, com linguagem neutra de gênero ("nutricionistas").
- Nunca commitar `.env`/`.env.local` com chaves reais. Variáveis ficam na Vercel.
- O endereço do site vem de `lib/site.ts`: `NEXT_PUBLIC_SITE_URL`, depois o domínio da Vercel, depois `https://conteudo.nutmed.com.br`.
