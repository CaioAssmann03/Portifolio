@AGENTS.md

# Portfólio — Caio Assmann

Site pessoal de Caio Cristiano Antunes Assmann (estudante de ADS no Senac, mirando vagas
de **Analista de Dados Jr.**), construído em Next.js 16 (App Router) + TypeScript +
Tailwind CSS v4 + Framer Motion. Design preto/branco de tipografia grande, com azul
como único acento, inspirado num material de referência que o usuário enviou (não
copiado — reconstruído do zero).

## Comandos

```bash
npm run dev      # dev server (Turbopack)
npm run build    # build de produção — sempre rodar antes de entregar qualquer mudança
npm run lint      # eslint (flat config, eslint-config-next)
npx tsc --noEmit  # type-check isolado, mais rápido que o build completo pra achar erros de tipo
```

Sempre rodar `tsc --noEmit` + `lint` + `build` depois de qualquer alteração antes de
considerar a tarefa concluída. Este projeto já passou por vários ciclos de "funcionou
no build mas quebrou no navegador do usuário" — não confie só no build passar.

## Onde editar o conteúdo (tudo em `data/`, nada hardcoded em componente)

- `data/site.ts` — nome, contatos (e-mail, GitHub, LinkedIn, WhatsApp), URL do site, CV
- `data/nav.ts` — links do menu
- `data/skills.ts` — categorias de skills + nível (0-100, autoavaliação)
- `data/projects.ts` — os 5 projetos do portfólio (ainda com `repoUrl: "#"` — trocar
  pelos links reais assim que os repositórios existirem)
- `data/certifications.ts` — certificados reais da Alura (6 em destaque + lista completa
  agrupada por trilha, usada em `app/certificados/page.tsx`). **Todos os dados aqui são
  reais**, extraídos dos PDFs de certificado do usuário — não inventar/alterar nomes,
  cargas horárias ou datas sem confirmação dele.
- `data/experience.ts` — trajetória real: Eve Imóveis, Secretaria da Saúde, Senac.

## Arquitetura

```
app/
  layout.tsx          metadata, fontes locais (next/font/local), ThemeProvider, JSON-LD
  page.tsx             monta as seções da home, nessa ordem
  certificados/page.tsx  página separada com os ~24 cursos, agrupados por trilha
  api/contact/route.ts   envia e-mail via Resend (precisa de RESEND_API_KEY + CONTACT_TO_EMAIL)
  icon.tsx, opengraph-image.tsx   gerados via next/og (ImageResponse), sem imagem real
  fonts/               Geist Sans/Mono vendorizados localmente (ver seção abaixo)
components/
  layout/    Navbar (route-aware — funciona em / e em /certificados), Footer, BackToTop, CustomCursor
  sections/  Hero, About, Journey (Trajetória), Skills, Projects, Certifications, Contact
  ui/        primitivos reutilizáveis (Reveal, Button, GlassPanel, TiltCard, etc.)
  providers/ ThemeProvider (dark padrão / light via classe `.light` no <html>)
```

## Decisões importantes (não desfazer sem motivo)

- **Fontes vendorizadas localmente em `app/fonts/`, carregadas via `next/font/local`.**
  NÃO reintroduzir `import { GeistSans } from "geist/font/sans"` (pacote `geist`) — em
  um Windows real do usuário, a resolução desse subpath do pacote quebrou com
  `Module not found`. A fonte já está local, não depende de pacote externo nem de rede.
- **`app/globals.css` usa Tailwind v4 CSS-first** (`@theme inline`, sem `tailwind.config.js`).
  As cores são CSS custom properties (`--bg`, `--paper`, `--signal`, etc.) redefinidas em
  `.light`, permitindo troca de tema em runtime sem duplicar utilitários `dark:`.
- **`--wordmark-opacity`** é uma variável separada (mais alta no light mode) porque o
  wordmark gigante do Hero (contorno de texto) fica quase invisível no fundo claro com a
  mesma opacidade do dark — já foi reportado como bug pelo usuário, não regredir.
- **`Reveal` (scroll-in animation) tem um fallback por timeout** (`components/ui/Reveal.tsx`):
  se o `useInView` do Framer Motion não disparar em ~900ms, o conteúdo aparece mesmo
  assim. Isso corrigiu um bug real onde seções inteiras ficavam com `opacity: 0`
  permanentemente no modo dev (Strict Mode). Não voltar a depender só de `whileInView`
  sem esse fallback.
- **`suppressHydrationWarning` no `<body>`** em `app/layout.tsx` — necessário porque
  extensões de navegador (ex: ColorZilla) injetam atributos como `cz-shortcut-listen`
  antes do React hidratar, gerando um warning cosmético que não é bug real.
- **Foto de perfil** (`public/profile.jpg`, real) aparece em tons de cinza no Hero e volta
  à cor no hover — mantém a identidade monocromática do site sem esconder que é uma foto
  real da pessoa.
- **Certificados**: a home mostra 6 em destaque (um por trilha), com link para
  `/certificados` que lista todos. O link de verificação usado em todo lugar é o
  certificado consolidado da Alura (mesma URL para todos) — não inventar URLs
  individuais por curso sem confirmar.

## Formulário de contato

`app/api/contact/route.ts` usa Resend. Sem `RESEND_API_KEY`/`CONTACT_TO_EMAIL`
configurados (env vars, ver `.env.example`), a rota responde `503` de forma graciosa —
isso é esperado em dev/preview, não é bug.

## Pendências conhecidas (perguntar ao usuário antes de "resolver" sozinho)

- Links reais de repositório/demo em `data/projects.ts` (ainda `#`)
- URL do deploy na Vercel (ainda não existe — quando tiver, atualizar `NEXT_PUBLIC_SITE_URL`
  e `data/site.ts`)
- Currículo em Word (fora deste repo, gerado por script separado) pode ficar
  dessincronizado deste site — se pedirem pra atualizar um, perguntar se atualiza o outro
