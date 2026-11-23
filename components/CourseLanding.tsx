import Image from "next/image";
import type { Campaign, Course } from "@/content/types";
import Icon from "./Icon";
import LeadForm from "./LeadForm";
import Botanical from "./Botanical";
import Reveal from "./Reveal";
import GlassLeaf from "./GlassLeaf";

// Formato curto de captação: desperta interesse e leva ao formulário.
// Preço, grade completa, professores e dúvidas ficam com o comercial.
// Visual segue os posts da NutMed: degradê lilás → violeta → magenta com grão, cards de vidro com foto.

function SectionTitle({ kicker, title, intro, light, center = true }: { kicker?: string; title: string; intro?: string; light?: boolean; center?: boolean }) {
  return (
    <div data-reveal className={`section-title ${center ? "text-center mx-auto" : ""} ${light ? "section-title--light" : ""}`}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2>{title}</h2>
      <span className="title-underline" aria-hidden="true" />
      {intro && <p>{intro}</p>}
    </div>
  );
}

// Selo no modelo do selo de desconto dos posts: estrela recortada fúcsia, texto em volta girando devagar.
function PracticeBadge() {
  return (
    <span className="practice-badge" aria-label="Aulas práticas com pacientes reais">
      <svg className="practice-badge__shape" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M99.70 50.00 L99.60 50.87 L99.30 51.72 L98.81 52.56 L98.17 53.37 L97.41 54.15 L96.58 54.90 L95.71 55.61 L94.86 56.30 L94.07 56.98 L93.38 57.65 L92.82 58.32 L92.42 59.02 L92.19 59.74 L92.13 60.51 L92.24 61.32 L92.49 62.18 L92.85 63.10 L93.28 64.06 L93.76 65.07 L94.22 66.09 L94.63 67.13 L94.94 68.16 L95.12 69.15 L95.15 70.10 L95.00 70.98 L94.66 71.78 L94.14 72.49 L93.45 73.10 L92.61 73.62 L91.66 74.05 L90.61 74.40 L89.53 74.70 L88.44 74.96 L87.39 75.22 L86.41 75.49 L85.52 75.81 L84.77 76.20 L84.15 76.68 L83.66 77.26 L83.32 77.96 L83.09 78.77 L82.96 79.68 L82.91 80.69 L82.89 81.76 L82.88 82.88 L82.84 84.01 L82.74 85.11 L82.55 86.15 L82.25 87.10 L81.82 87.92 L81.27 88.61 L80.58 89.14 L79.77 89.51 L78.85 89.71 L77.85 89.78 L76.79 89.71 L75.69 89.56 L74.58 89.34 L73.49 89.10 L72.45 88.88 L71.47 88.73 L70.56 88.66 L69.73 88.72 L68.98 88.92 L68.32 89.29 L67.72 89.81 L67.18 90.48 L66.68 91.29 L66.20 92.20 L65.71 93.17 L65.21 94.18 L64.67 95.16 L64.09 96.09 L63.45 96.91 L62.75 97.59 L61.99 98.10 L61.18 98.42 L60.32 98.55 L59.42 98.47 L58.50 98.21 L57.57 97.79 L56.64 97.23 L55.72 96.60 L54.83 95.91 L53.96 95.23 L53.12 94.60 L52.31 94.06 L51.52 93.65 L50.76 93.39 L50.00 93.30 L49.24 93.39 L48.48 93.65 L47.69 94.06 L46.88 94.60 L46.04 95.23 L45.17 95.91 L44.28 96.60 L43.36 97.23 L42.43 97.79 L41.50 98.21 L40.58 98.47 L39.68 98.55 L38.82 98.42 L38.01 98.10 L37.25 97.59 L36.55 96.91 L35.91 96.09 L35.33 95.16 L34.79 94.18 L34.29 93.17 L33.80 92.20 L33.32 91.29 L32.82 90.48 L32.28 89.81 L31.68 89.29 L31.02 88.92 L30.27 88.72 L29.44 88.66 L28.53 88.73 L27.55 88.88 L26.51 89.10 L25.42 89.34 L24.31 89.56 L23.21 89.71 L22.15 89.78 L21.15 89.71 L20.23 89.51 L19.42 89.14 L18.73 88.61 L18.18 87.92 L17.75 87.10 L17.45 86.15 L17.26 85.11 L17.16 84.01 L17.12 82.88 L17.11 81.76 L17.09 80.69 L17.04 79.68 L16.91 78.77 L16.68 77.96 L16.34 77.26 L15.85 76.68 L15.23 76.20 L14.48 75.81 L13.59 75.49 L12.61 75.22 L11.56 74.96 L10.47 74.70 L9.39 74.40 L8.34 74.05 L7.39 73.62 L6.55 73.10 L5.86 72.49 L5.34 71.78 L5.00 70.98 L4.85 70.10 L4.88 69.15 L5.06 68.16 L5.37 67.13 L5.78 66.09 L6.24 65.07 L6.72 64.06 L7.15 63.10 L7.51 62.18 L7.76 61.32 L7.87 60.51 L7.81 59.74 L7.58 59.02 L7.18 58.32 L6.62 57.65 L5.93 56.98 L5.14 56.30 L4.29 55.61 L3.42 54.90 L2.59 54.15 L1.83 53.37 L1.19 52.56 L0.70 51.72 L0.40 50.87 L0.30 50.00 L0.40 49.13 L0.70 48.28 L1.19 47.44 L1.83 46.63 L2.59 45.85 L3.42 45.10 L4.29 44.39 L5.14 43.70 L5.93 43.02 L6.62 42.35 L7.18 41.68 L7.58 40.98 L7.81 40.26 L7.87 39.49 L7.76 38.68 L7.51 37.82 L7.15 36.90 L6.72 35.94 L6.24 34.93 L5.78 33.91 L5.37 32.87 L5.06 31.84 L4.88 30.85 L4.85 29.90 L5.00 29.02 L5.34 28.22 L5.86 27.51 L6.55 26.90 L7.39 26.38 L8.34 25.95 L9.39 25.60 L10.47 25.30 L11.56 25.04 L12.61 24.78 L13.59 24.51 L14.48 24.19 L15.23 23.80 L15.85 23.32 L16.34 22.74 L16.68 22.04 L16.91 21.23 L17.04 20.32 L17.09 19.31 L17.11 18.24 L17.12 17.12 L17.16 15.99 L17.26 14.89 L17.45 13.85 L17.75 12.90 L18.18 12.08 L18.73 11.39 L19.42 10.86 L20.23 10.49 L21.15 10.29 L22.15 10.22 L23.21 10.29 L24.31 10.44 L25.42 10.66 L26.51 10.90 L27.55 11.12 L28.53 11.27 L29.44 11.34 L30.27 11.28 L31.02 11.08 L31.68 10.71 L32.28 10.19 L32.82 9.52 L33.32 8.71 L33.80 7.80 L34.29 6.83 L34.79 5.82 L35.33 4.84 L35.91 3.91 L36.55 3.09 L37.25 2.41 L38.01 1.90 L38.82 1.58 L39.68 1.45 L40.58 1.53 L41.50 1.79 L42.43 2.21 L43.36 2.77 L44.28 3.40 L45.17 4.09 L46.04 4.77 L46.88 5.40 L47.69 5.94 L48.48 6.35 L49.24 6.61 L50.00 6.70 L50.76 6.61 L51.52 6.35 L52.31 5.94 L53.12 5.40 L53.96 4.77 L54.83 4.09 L55.72 3.40 L56.64 2.77 L57.57 2.21 L58.50 1.79 L59.42 1.53 L60.32 1.45 L61.18 1.58 L61.99 1.90 L62.75 2.41 L63.45 3.09 L64.09 3.91 L64.67 4.84 L65.21 5.82 L65.71 6.83 L66.20 7.80 L66.68 8.71 L67.18 9.52 L67.72 10.19 L68.32 10.71 L68.98 11.08 L69.73 11.28 L70.56 11.34 L71.47 11.27 L72.45 11.12 L73.49 10.90 L74.58 10.66 L75.69 10.44 L76.79 10.29 L77.85 10.22 L78.85 10.29 L79.77 10.49 L80.58 10.86 L81.27 11.39 L81.82 12.08 L82.25 12.90 L82.55 13.85 L82.74 14.89 L82.84 15.99 L82.88 17.12 L82.89 18.24 L82.91 19.31 L82.96 20.32 L83.09 21.23 L83.32 22.04 L83.66 22.74 L84.15 23.32 L84.77 23.80 L85.52 24.19 L86.41 24.51 L87.39 24.78 L88.44 25.04 L89.53 25.30 L90.61 25.60 L91.66 25.95 L92.61 26.38 L93.45 26.90 L94.14 27.51 L94.66 28.22 L95.00 29.02 L95.15 29.90 L95.12 30.85 L94.94 31.84 L94.63 32.87 L94.22 33.91 L93.76 34.93 L93.28 35.94 L92.85 36.90 L92.49 37.82 L92.24 38.68 L92.13 39.49 L92.19 40.26 L92.42 40.98 L92.82 41.68 L93.38 42.35 L94.07 43.02 L94.86 43.70 L95.71 44.39 L96.58 45.10 L97.41 45.85 L98.17 46.63 L98.81 47.44 L99.30 48.28 L99.60 49.13Z" />
        <circle cx="50" cy="50" r="26.5" className="practice-badge__inner" />
      </svg>
      <svg className="practice-badge__ring" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path id="pb-ring" d="M50 50m-33.5 0a33.5 33.5 0 1 1 67 0a33.5 33.5 0 1 1 -67 0" />
        </defs>
        <text>
          <textPath href="#pb-ring" startOffset="0" textLength="208" lengthAdjust="spacing">
            AULAS PRÁTICAS • CLÍNICA-ESCOLA • NUTMED •&#160;
          </textPath>
        </text>
      </svg>
      <span className="practice-badge__center">
        <b>Pacientes</b>
        reais
      </span>
    </span>
  );
}

export default function CourseLanding({ course, campaign, showPending = false }: { course: Course; campaign: Campaign | null; showPending?: boolean }) {
  const fullName = `${course.hero.title} ${course.hero.highlight}`;
  const formProps = { courseSlug: course.slug, courseName: fullName, conversionId: course.rdConversionId, campaign: campaign?.slug };
  const [featured, ...features] = course.features;

  return (
    <>
      <Reveal />
      {campaign && (
        <div className="offer-bar">
          <div className="container">
            <span className="offer-dot" /> {campaign.bar.text}
            <a href="#inscricao">{campaign.bar.cta}</a>
          </div>
        </div>
      )}

      <header className="lp-header">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="https://nutmed.com.br" aria-label="NutMed, cursos de nutrição" className="lp-logo">
            <Image src="/img/nutmed-logo-light.svg" alt="NutMed" width={112} height={70} priority />
          </a>
          <a href="#inscricao" className="btn-nm btn-nm--accent btn-nm--sm">
            Quero saber mais
          </a>
        </div>
      </header>

      <main>
        {/* HERO + FORMULÁRIO */}
        <section className="hero grain" id="inscricao">
          <Botanical className="deco deco--hero-r sway" />
          <Botanical variant="leaf" className="deco deco--hero-l sway sway--slow" />
          <div className="container position-relative">
            <div className="row align-items-center g-4 g-lg-5">
              <div className="col-lg-7">
                <p className="cobrand rise">NutMed</p>
                <p className="hero-kicker rise" style={{ animationDelay: ".05s" }}>
                  Pós-graduação <span>2027</span>
                </p>
                <p className="hero-modality">
                  Modalidade <b>3</b> em 1
                </p>

                <div className="hero-card-wrap rise" style={{ animationDelay: ".15s" }}>
                <div className="glass-card hero-card">
                  <div className="glass-card__text">
                    <h1>
                      {course.hero.title} <span>{course.hero.highlight}</span>
                    </h1>
                  </div>
                  {course.hero.image && (
                    <div className="glass-card__photo">
                      <Image src={course.hero.image} alt={course.hero.imageAlt || ""} fill sizes="(min-width: 992px) 280px, 45vw" priority />
                    </div>
                  )}
                </div>

                  <PracticeBadge />
                </div>

                <p className="hero-sub">{course.hero.subtitle}</p>

                <ul className="hero-chips">
                  {course.hero.chips.map((c) => (
                    <li key={c.label}>
                      <Icon name={c.icon} size={18} />
                      {c.label}
                    </li>
                  ))}
                </ul>

                <div className="hero-badges">
                  <div className="hero-modes">
                    {course.modes.map((m) => (
                      <span key={m.title}>
                        <Icon name={m.icon} size={18} /> {m.title}
                      </span>
                    ))}
                    {course.hero.seals.map((s) => (
                      <span key={s} className="mec">
                        <Icon name="badge" size={18} /> {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-5 rise" style={{ animationDelay: ".3s" }}>
                {campaign && (
                  <div className="ticket">
                    <span className="ticket__brand">
                      Black <Image src="/img/nutmed-logo.svg" alt="NutMed" width={64} height={40} />
                    </span>
                    <span className="ticket__body">
                      <b>{campaign.ticket.label}</b>
                      {campaign.ticket.text}
                    </span>
                  </div>
                )}
                <LeadForm
                  {...formProps}
                  formId="form-hero"
                  title="Garanta sua vaga na Turma 2027"
                  subtitle="Deixe seus dados e a equipe NutMed fala com você pelo WhatsApp com a grade completa, os valores e as condições."
                />
              </div>
            </div>
          </div>
        </section>

        {/* NÚMEROS */}
        <section className="stats-wrap">
          <div className="container">
            <div className="stats">
              {course.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {course.topics && (
          <div className="marquee" aria-label={course.topics.join(", ")}>
            <div className="marquee__track" aria-hidden="true">
              {[0, 1].map((k) => (
                <span key={k}>
                  {course.topics!.map((t) => (
                    <span key={t} className="marquee__item">
                      {t}
                      <Icon name="leaf" size={18} />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* PARA QUEM É + GANCHO CFN */}
        <section className="sec paper grain">
          <Botanical variant="rosemary" className="deco deco--paper-l sway sway--slow" />
          <div className="container position-relative">
            <div className="row g-4 g-lg-5 align-items-center">
              <div className="col-lg-6">
                <SectionTitle kicker="Para quem é" title={course.audience.title} center={false} />
                <p className="lead-text">{course.audience.intro}</p>
                <ul className="check-list">
                  {course.audience.bullets.map((b) => (
                    <li key={b}>
                      <Icon name="check" size={20} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              {course.hook && (
                <div className="col-lg-6">
                  <div className="hook-card" data-reveal>
                    <span className="hook-kicker">
                      <Icon name="leaf" size={18} /> {course.hook.kicker}
                    </span>
                    <h3>{course.hook.title}</h3>
                    <p>{course.hook.text}</p>
                    <div className="hook-num">
                      <strong>200h+</strong>
                      <span>de fitoterapia na grade</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* EIXOS DO CONTEÚDO */}
        <section className="sec sky grain" id="conteudo">
          <GlassLeaf id="gl1" className="gl gl--a float" />
          <GlassLeaf id="gl2" className="gl gl--b float float--slow" />
          <GlassLeaf id="gl3" className="gl gl--c gl--blur float" />
          <div className="container position-relative">
            <SectionTitle kicker="Conteúdo" title={course.modules.title} intro={course.modules.intro} />
            {showPending && <p className="pending-note text-center">A confirmar: os eixos podem mudar se a grade foi revista com o novo nome.</p>}
            <div className="row g-3 g-md-4 justify-content-center">
              {course.modules.groups.map((g) => (
                <div className="col-md-6 col-lg-4" key={g.title}>
                  <div className="axis" data-reveal>
                    {g.icon && (
                      <span className="axis-icon">
                        <Icon name={g.icon} size={24} />
                      </span>
                    )}
                    <div>
                      <h3>{g.title}</h3>
                      <p>{g.summary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
              <a href="#inscricao" className="btn-nm btn-nm--accent">
                Quero saber mais <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* PRÁTICA: card de vidro com foto + diferenciais */}
        <section className="sec post-bg grain">
          <Botanical className="deco deco--post-r sway" />
          <div className="container position-relative">
            <SectionTitle kicker="Diferenciais" title="Prática de verdade, do primeiro ao último encontro" light />
            {showPending && <p className="pending-note text-center">Foto de banco de imagem (Magnific). Se houver fotos reais da clínica-escola, preferir.</p>}
            {featured && (
              <div className="glass-card feature-card" data-reveal>
                <div className="glass-card__text">
                  <span className="feature-icon">
                    <Icon name={featured.icon} size={26} />
                  </span>
                  <h3>{featured.title}</h3>
                  <p>{featured.text}</p>
                </div>
                {featured.image && (
                  <div className="glass-card__photo">
                    <Image src={featured.image} alt={featured.title} fill sizes="(min-width: 992px) 520px, 90vw" />
                  </div>
                )}
              </div>
            )}
            <div className="row g-4 mt-1 scroll-row">
              {features.map((f) => (
                <div className="col-md-4" key={f.title}>
                  <div className="glass-card glass-card--small" data-reveal>
                    <span className="feature-icon">
                      <Icon name={f.icon} size={24} />
                    </span>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL: foto desfocada + círculo de vidro, como a capa dos posts */}
        <section className="sec cta-final grain" id="turma-2027">
          {course.ctaImage && (
            <div className="cta-photo" aria-hidden="true">
              <Image src={course.ctaImage} alt="" fill sizes="100vw" />
            </div>
          )}
          {(
            <div className="tapes" aria-hidden="true">
              {["tape--1", "tape--2"].map((t) => (
                <div className={`tape ${t}`} key={t}>
                  <div className="tape__track">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <span key={i}>{campaign?.tape ?? course.tape} •</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          <GlassLeaf id="gl4" className="gl gl--d float float--slow" />
          <GlassLeaf id="gl5" className="gl gl--e gl--blur float" />
          <div className="container position-relative">
            <div className="row g-4 g-lg-5 align-items-center">
              <div className="col-lg-6">
                <div className="glass-stage" data-reveal>
                  <span className="glass-stage__tab">Inscrições abertas</span>
                  <div className="glass-circle">
                    <span className="glass-circle__pill">Pós-graduação presencial</span>
                    <h2>
                      Nutrição de Precisão <em>Funcional e Fitoterapia</em>
                    </h2>
                    <span className="glass-circle__date">
                      <i>Início:</i> {course.startLabel ?? "Turma 2027"}
                    </span>
                    <strong className="glass-circle__limit">Vagas limitadas!</strong>
                  </div>
                  <p className="glass-stage__proof">
                    <span aria-hidden="true">★★★★★</span>
                    Mais de 15 mil nutricionistas formados desde 2005
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <LeadForm
                  {...formProps}
                  formId="form-final"
                  title="Quero falar com a NutMed"
                  subtitle={campaign?.formNote ?? "Receba a grade completa, os valores e as condições para a Turma 2027."}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-3">
              <Image src="/img/nutmed-logo-light.svg" alt="NutMed" width={96} height={60} />
            </div>
            <div className="col-md-9 text-md-end">
              <ul className="lp-contacts">
                <li>
                  <a
                    href="https://wa.me/5521995432570"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="footer-whatsapp"
                  >
                    <Icon name="whatsapp" size={18} /> (21) 99543-2570
                  </a>
                </li>
                <li>
                  <a href="tel:+552122404217" data-cta="footer-telefone">
                    <Icon name="phone" size={18} /> (21) 2240-4217
                  </a>
                </li>
                <li>
                  <a href="https://nutmed.com.br" target="_blank" rel="noopener noreferrer" data-cta="footer-site">
                    <Icon name="globe" size={18} /> nutmed.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rua+da+Quitanda,+187,+Centro,+Rio+de+Janeiro+RJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="footer-endereco"
                  >
                    <Icon name="pin" size={18} /> Rua da Quitanda, 187 · Centro · Rio de Janeiro (RJ)
                  </a>
                </li>
              </ul>
              <p>
                PRONUTRI JFC Treinamento Profissional Ltda · CNPJ 07.704.449/0001-80 ·{" "}
                <a href="https://nutmed.com.br/politica-de-privacidade/" target="_blank" rel="noopener noreferrer">
                  Política de Privacidade
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
