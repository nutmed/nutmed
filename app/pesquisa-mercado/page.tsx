import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import Botanical from "@/components/Botanical";
import GlassLeaf from "@/components/GlassLeaf";
import Reveal from "@/components/Reveal";
import {
  intents,
  market,
  marketReads,
  rioCompetitors,
  seasonality,
  segments,
  sourceGroups,
  terms,
  titleRows,
  titleRules,
  trends,
  validation,
  verdicts, type Intent, type Tone } from "./data";
import s from "./pesquisa.module.css";

// Página interna de estudo: fora do Google, fora do sitemap, sem formulário nem CTA de venda.
export const metadata: Metadata = {
  title: "Pesquisa de mercado: novas pós-graduações 2027 | NutMed",
  description: "Estudo interno de demanda, concorrência e segmentação para as próximas pós-graduações da NutMed.",
  robots: { index: false, follow: false },
};

const toneClass: Record<Tone, string> = { green: s.toneGreen, orange: s.toneOrange, magenta: s.toneMagenta };
const intentClass: Record<Intent, string> = { Compra: s.intentBuy, Estudo: s.intentStudy, Paciente: s.intentPatient };

function SectionTitle({ kicker, title, intro, light }: { kicker: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div data-reveal className={`section-title text-center mx-auto ${light ? "section-title--light" : ""}`}>
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      <span className="title-underline" aria-hidden="true" />
      {intro && <p className={s.intro}>{intro}</p>}
    </div>
  );
}

function IntentTag({ intent }: { intent: Intent }) {
  return <span className={`${s.intent} ${intentClass[intent]}`}>{intent}</span>;
}

function TrendArrow({ dir }: { dir?: "up" | "down" }) {
  if (!dir) return null;
  return (
    <span className={`${s.arrow} ${dir === "up" ? s.arrowUp : s.arrowDown}`} aria-label={dir === "up" ? "em alta" : "em queda"}>
      {dir === "up" ? "▲" : "▼"}
    </span>
  );
}

function SourceGroup({ group, cols }: { group: (typeof sourceGroups)[number]; cols?: boolean }) {
  return (
    <div className={s.sourceGroup}>
      <h3>{group.title}</h3>
      <ul className={cols ? s.sourceCols : undefined}>
        {group.items.map((it) => (
          <li key={it.name}>
            {it.url ? (
              <a href={it.url} target="_blank" rel="noopener noreferrer">
                {it.name}
              </a>
            ) : (
              <b>{it.name}</b>
            )}
            {it.detail && <span>{it.detail}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

const levelLabel = { pico: "Pico", medio: "Médio", baixa: "Baixa" } as const;

export default function Page() {
  return (
    <>
      <Reveal />

      <header className="lp-header">
        <div className={`container d-flex align-items-center justify-content-between ${s.headRow}`}>
          <a href="https://nutmed.com.br" aria-label="NutMed, cursos de nutrição" className="lp-logo">
            <Image src="/img/nutmed-logo-light.svg" alt="NutMed" width={112} height={70} priority />
          </a>
          <nav className={s.nav} aria-label="Seções da pesquisa">
            <a href="#veredito">Veredito</a>
            <a href="#mercado">Mercado</a>
            <a href="#busca">Busca</a>
            <a href="#concorrencia">Concorrência</a>
            <a href="#titulo">Título</a>
            <a href="#validacao">Validação</a>
            <a href="#fontes">Fontes</a>
          </nav>
          <span className={`pill pill--glass ${s.internal}`}>Estudo interno</span>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className={`hero grain ${s.hero} ${s.anchor}`} id="veredito">
          <Botanical className="deco deco--hero-r sway" />
          <Botanical variant="leaf" className="deco deco--hero-l sway sway--slow" />
          <div className="container position-relative">
            <div className={s.heroHead}>
              <span className={`${s.heroKicker} rise`}>Pesquisa de mercado · cursos 2027</span>
              <h1 className={`${s.heroTitle} rise`} style={{ animationDelay: ".08s" }}>
                Onde estão os alunos das <span>próximas pós da NutMed</span>
              </h1>
              <p className="hero-sub rise" style={{ animationDelay: ".15s" }}>
                Quanto os nutricionistas buscam por cada tema, quem já disputa esses alunos, por quanto, e como segmentar a captação.
              </p>
              <ul className={`hero-chips rise ${s.chips}`} style={{ animationDelay: ".2s" }}>
                <li>
                  <Icon name="pin" size={18} /> Brasil e Rio de Janeiro
                </li>
                <li>
                  <Icon name="globe" size={18} /> Google Trends 5 anos
                </li>
                <li>
                  <Icon name="users" size={18} /> 20 concorrentes mapeados
                </li>
                <li>
                  <Icon name="calendar" size={18} /> 25/11/2026
                </li>
              </ul>
            </div>

            <div className="row g-3 g-lg-4 mt-2">
              {verdicts.map((v, i) => (
                <div className="col-lg-4" key={v.name}>
                  <article className={`glass-card ${s.verdict} ${toneClass[v.tone]} rise`} style={{ animationDelay: `${0.28 + i * 0.08}s` }}>
                    <div className={s.verdictHead}>
                      <span className={s.verdictNum}>{v.n}</span>
                      {v.recommended && <span className={s.recommended}>Recomendado</span>}
                    </div>
                    <h2 className={s.verdictName}>{v.name}</h2>
                    <dl className={s.metrics}>
                      {v.metrics.map((m) => (
                        <div key={m.label}>
                          <dt>{m.label}</dt>
                          <dd>
                            <TrendArrow dir={m.trend} /> {m.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <p className={s.verdictText}>{v.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RECOMENDAÇÃO */}
        <section className={`sec grain ${s.reco} ${s.anchor}`} id="recomendacao">
          <GlassLeaf id="pm-gl1" className={`gl gl--d float float--slow ${s.glDesk}`} />
          <div className="container position-relative">
            <div className="row g-4 g-lg-5 align-items-center">
              <div className="col-lg-7" data-reveal>
                <span className={s.recoKicker}>
                  <Icon name="star" size={16} /> Recomendação
                </span>
                <h2 className={s.recoTitle}>
                  Abrir <em>Nutrição e Gastroenterologia</em> primeiro, no formato 3 em 1 da Pós em Nutrição de Precisão.
                </h2>
                <p className={s.recoText}>
                  Presencial no Centro do Rio, ao vivo e gravado, com a clínica-escola como prova de prática e o interesse crescente por microbiota a favor. Nutrição
                  Comportamental entra em segundo, com a prática supervisionada como diferencial para fugir da guerra de preço do EAD. Enteral e Parenteral fica em espera até
                  existir parceria hospitalar.
                </p>
              </div>
              <div className="col-lg-5" data-reveal>
                <ol className={s.order}>
                  <li className={s.toneGreen}>
                    <b>1</b>
                    <span>
                      Nutrição e Gastroenterologia <small>Abrir primeiro</small>
                    </span>
                  </li>
                  <li className={s.toneOrange}>
                    <b>2</b>
                    <span>
                      Nutrição Comportamental <small>Em segundo, com prática supervisionada</small>
                    </span>
                  </li>
                  <li className={s.toneMagenta}>
                    <b>3</b>
                    <span>
                      Enteral e Parenteral <small>Em espera até ter hospital parceiro</small>
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* TAMANHO DO MERCADO */}
        <section className={`sec paper grain ${s.anchor}`} id="mercado">
          <Botanical variant="rosemary" className="deco deco--paper-l sway sway--slow" />
          <div className="container position-relative">
            <SectionTitle
              kicker="Tamanho do mercado"
              title="Quantos nutricionistas existem, e quantos já fazem pós"
              intro="Os números oficiais da profissão mostram um público grande, com o Rio em 2º lugar entre os estados, e acostumado a se especializar."
            />
            <div className="row g-3 g-lg-4">
              {market.map((m) => (
                <div className="col-sm-6 col-lg-3" key={m.label}>
                  <div className={s.bigStat} data-reveal>
                    <strong>{m.value}</strong>
                    <span className={s.bigStatLabel}>{m.label}</span>
                    <p>{m.detail}</p>
                    <small>{m.source}</small>
                  </div>
                </div>
              ))}
            </div>
            <div className={`row g-3 g-lg-4 ${s.reads}`}>
              {marketReads.map((r) => (
                <div className="col-lg-6" key={r}>
                  <p className={s.read} data-reveal>
                    <Icon name="leaf" size={20} />
                    {r}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MÉDIA DE BUSCA */}
        <section className={`sec sky grain ${s.anchor}`} id="busca">
          <GlassLeaf id="pm-gl2" className={`gl gl--a float ${s.glDesk}`} />
          <GlassLeaf id="pm-gl3" className={`gl gl--c gl--blur float ${s.glDesk}`} />
          <div className="container position-relative">
            <SectionTitle kicker="Média de busca" title="Quanto se busca por cada tema no Google" />

            <div className="row g-3 mb-4 mb-lg-5">
              {intents.map((it) => (
                <div className="col-md-4" key={it.tag}>
                  <div className={`axis ${s.intentCard}`} data-reveal>
                    <IntentTag intent={it.tag} />
                    <div>
                      <h3>{it.title}</h3>
                      <p>{it.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row g-4">
              <div className="col-lg-7">
                <div className={s.panel} data-reveal>
                  <h3 className={s.panelTitle}>Interesse no Google Trends</h3>
                  <p className={s.panelSub}>Índice 0 a 100 · Brasil · 5 anos · coletado em 25/11/2026</p>
                  <div className={s.tableWrap}>
                    <table className={s.table}>
                      <thead>
                        <tr>
                          <th>Termo</th>
                          <th>Média</th>
                          <th>Início → hoje</th>
                          <th>RJ no ranking</th>
                        </tr>
                      </thead>
                      <tbody>
                        {trends.map((t) => (
                          <tr key={t.term} className={t.ref ? s.refRow : undefined}>
                            <td>
                              {t.term}
                              {t.ref && <span className={s.refTag}>ref.</span>}
                            </td>
                            <td>
                              <span className={s.meter}>
                                <span style={{ width: `${t.avg}%` }} />
                              </span>
                              <b>{t.avg}</b>
                            </td>
                            <td className={s.nowrap}>
                              <TrendArrow dir={t.trend} /> {t.change}
                            </td>
                            <td>{t.rj}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className={s.panel} data-reveal>
                  <h3 className={s.panelTitle}>Sazonalidade</h3>
                  <p className={s.panelSub}>Quando a busca sobe ao longo do ano</p>
                  <div className={s.bars} role="img" aria-label="Picos em março, abril, maio, agosto e setembro; baixa em julho e dezembro; médio nos demais meses.">
                    {seasonality.map((m) => (
                      <div key={m.m} className={`${s.bar} ${s[`bar_${m.level}`]}`} title={`${m.m}: ${levelLabel[m.level]}`}>
                        <span />
                        <small>{m.m}</small>
                      </div>
                    ))}
                  </div>
                  <ul className={s.legend}>
                    <li className={s.bar_pico}>
                      <i /> Pico
                    </li>
                    <li className={s.bar_medio}>
                      <i /> Médio
                    </li>
                    <li className={s.bar_baixa}>
                      <i /> Baixa
                    </li>
                  </ul>
                  <p className={s.tip}>
                    <Icon name="calendar" size={18} /> Os meses de maior procura indicam a melhor janela para abrir matrículas: fevereiro a abril e julho a setembro.
                  </p>
                </div>
              </div>
            </div>

            <div className={s.termsBlock}>
              <h3 className={s.blockTitle} data-reveal>
                Termos estimados por curso
              </h3>
              {terms.map((c, i) => (
                <details key={c.name} className={`${s.acc} ${toneClass[c.tone]}`} open={i === 0} data-reveal>
                  <summary>
                    <span className={s.accDot} />
                    {c.name}
                    <span className={s.accTotal}>{c.rows.find((r) => r.total)?.volume} buscas de curso/mês</span>
                    <span className={s.accChevron} aria-hidden="true" />
                  </summary>
                  <div className={s.tableWrap}>
                    <table className={s.table}>
                      <thead>
                        <tr>
                          <th>Termo</th>
                          <th>Intenção</th>
                          <th className="text-end">Buscas/mês (estimado)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {c.rows.map((r) => (
                          <tr key={r.term} className={r.total ? s.totalRow : undefined}>
                            <td>{r.term}</td>
                            <td>{r.intent && <IntentTag intent={r.intent} />}</td>
                            <td className={`text-end ${s.nowrap}`}>{r.volume}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </details>
              ))}
              <p className={s.note} data-reveal>
                Os volumes mensais são estimativas de ordem de grandeza: as buscas por curso são pequenas demais para o Google Trends. Os números exatos e o custo por clique saem
                do Planejador de Palavras-chave do Google Ads.
              </p>
            </div>
          </div>
        </section>

        {/* CONCORRÊNCIA */}
        <section className={`sec paper grain ${s.anchor}`} id="concorrencia">
          <Botanical variant="rosemary" className="deco deco--paper-l sway sway--slow" />
          <div className="container position-relative">
            <SectionTitle kicker="Concorrência" title="Quem já disputa esses alunos, e por quanto" />

            {/* Concorrência presencial no Rio */}
            <div className={s.rio} data-reveal>
              <h3 className={s.rioTitle}>
                <Icon name="pin" size={22} /> Concorrência presencial no Rio
              </h3>
              <div className="row g-3 g-lg-4">
                <div className="col-lg-6">
                  {rioCompetitors.map((r) => (
                    <div className={s.rioCard} key={r.name}>
                      <b>
                        {r.url ? (
                          <a href={r.url} target="_blank" rel="noopener noreferrer">
                            {r.name} <Icon name="arrow" size={14} />
                          </a>
                        ) : (
                          r.name
                        )}
                      </b>
                      <span className={s.rioCourse}>{r.course}</span>
                      <p>{r.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className={s.conclusion}>
                <Icon name="star" size={20} />
                <span>
                  <b>Na nossa pesquisa online, não encontramos pós presencial no Rio específica de Gastroenterologia ou de Nutrição Comportamental.</b> Nos 3 cursos foco, o único
                  concorrente presencial direto que apareceu é a Terapia Nutricional do IDOR. As pós de Nutrição Clínica geral ficaram de fora porque não disputam o mesmo aluno.
                  <br />
                  <br />
                  <small>
                    Levantamento feito em sites e agregadores em 25/11/2026, vale uma confirmação rápida com as instituições. Nos 3 temas também há boas opções em EAD e
                    online ao vivo (nas tabelas de cada curso, logo abaixo), e é ali que está boa parte da concorrência.
                  </small>
                </span>
              </p>
            </div>


            {segments.map((c) => (
              <article key={c.name} className={`${s.course} ${toneClass[c.tone]}`}>
                <header className={s.courseHead} data-reveal>
                  <span className={s.courseNum}>{c.n}</span>
                  <h3>{c.name}</h3>
                  <span className={s.seal}>{c.seal}</span>
                </header>

                <div className={`${s.box} ${s.boxArgs}`} data-reveal>
                  <h4 className={s.boxTitle}>
                    <Icon name="chat" size={18} /> {c.argsTitle}
                  </h4>
                  <ul className={`${s.args} ${s.argsCols}`}>
                    {c.args.map((a) => (
                      <li key={a.text} className={a.kind === "con" ? s.con : s.pro}>
                        <span aria-hidden="true">{a.kind === "con" ? "–" : "+"}</span>
                        {a.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${s.box} ${s.boxTable}`} data-reveal>
                  <h4 className={s.boxTitle}>
                    <Icon name="badge" size={18} /> Concorrentes
                  </h4>
                  <div className={s.tableWrap}>
                    <table className={`${s.table} ${s.compTable}`}>
                      <thead>
                        <tr>
                          <th>Concorrente</th>
                          <th>Modalidade</th>
                          <th>Carga</th>
                          <th>Duração</th>
                          <th>Preço</th>
                        </tr>
                      </thead>
                      <tbody>
                        {c.competitors.map((k) => (
                          <tr key={k.name}>
                            <td className={s.compName}>
                              {k.url ? (
                                <a href={k.url} target="_blank" rel="noopener noreferrer">
                                  {k.name}
                                  <Icon name="arrow" size={14} />
                                </a>
                              ) : (
                                k.name
                              )}
                            </td>
                            <td>{k.mode}</td>
                            <td className={s.nowrap}>{k.hours}</td>
                            <td>{k.length}</td>
                            <td className={s.price}>{k.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TÍTULO DE ESPECIALISTA */}
        <section className={`sec sky grain ${s.anchor}`} id="titulo">
          <GlassLeaf id="pm-gl5" className={`gl gl--a float ${s.glDesk}`} />
          <div className="container position-relative">
            <SectionTitle
              kicker="Título de especialista"
              title="Qual curso ajuda o aluno a virar especialista"
              intro="A pós não é obrigatória para o título, mas conta pontos, e só alguns temas levam a uma especialidade reconhecida."
            />
            <div className={s.panel} data-reveal>
              <div className={s.tableWrap}>
                <table className={`${s.table} ${s.titleTable}`}>
                  <thead>
                    <tr>
                      <th>Curso</th>
                      <th>Especialidade reconhecida</th>
                      <th>Situação</th>
                      <th>O que significa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {titleRows.map((r) => (
                      <tr key={r.course} className={toneClass[r.tone]}>
                        <td className={s.titleCourse}>
                          <span className={s.accDot} /> {r.course}
                        </td>
                        <td>{r.specialty}</td>
                        <td>
                          <span className={`${s.status} ${s[`status_${r.kind}`]}`}>{r.status}</span>
                        </td>
                        <td className={s.titleNote}>{r.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row g-3 g-md-4 mt-1">
              {titleRules.map((r) => (
                <div className="col-md-4" key={r.label}>
                  <div className={`axis ${s.ruleCard}`} data-reveal>
                    <div>
                      <h3>{r.label}</h3>
                      <p>{r.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className={s.implication} data-reveal>
              <Icon name="badge" size={22} />
              <span>
                <b>Implicação:</b> uma pós NutMed em Gastro com 360h ou mais ajuda o aluno a pontuar para o título de especialista.
              </span>
            </p>
          </div>
        </section>

        {/* VALIDAÇÃO COM A PRÓPRIA BASE */}
        <section className={`sec paper grain ${s.anchor}`} id="validacao">
          <GlassLeaf id="pm-gl4" className={`gl gl--b float float--slow ${s.glDesk}`} />
          <div className="container position-relative">
            <SectionTitle
              kicker="Validação com a própria base"
              title="Perguntar primeiro para quem já é NutMed"
              intro="Uma pesquisa curta com alunos atuais e ex-alunos (mais de 15 mil formados desde 2005) mostra se o interesse se confirma dentro de casa antes de abrir a turma."
            />
            <ol className={`row g-3 g-md-4 ${s.steps}`}>
              {validation.map((st, i) => (
                <li className="col-md-6 col-lg-3" key={st.title}>
                  <div className={`axis ${s.step}`} data-reveal>
                    <span className={s.stepNum}>{i + 1}</span>
                    <div>
                      <h3>{st.title}</h3>
                      <p>{st.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FONTES */}
        <section className={`${s.sources} ${s.anchor}`} id="fontes">
          <div className="container">
            <h2 className={s.sourcesTitle}>
              <Icon name="file" size={20} /> Fontes
            </h2>
            <div className="row g-4 g-lg-5">
              <div className="col-lg-6">
                {sourceGroups.slice(0, 2).map((g) => (
                  <SourceGroup key={g.title} group={g} />
                ))}
                <div className={s.sourceGroup}>
                  <h3>Nota de método</h3>
                  <p>
                    Desk research em 25/11/2026 nos sites das instituições e nos agregadores Guia da Carreira e Quero Bolsa, mais Google Trends (Brasil, 5 anos). Preços
                    conforme anunciados em 25/11/2026, vários com desconto de novembro até 30/11. Instituto LG, Instituto Nutrir, UniCesde e Unifor não abriram para leitura.
                    Os volumes mensais são estimativas. Nenhuma instituição foi conferida no e-MEC.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                {sourceGroups.slice(2).map((g) => (
                  <SourceGroup key={g.title} group={g} cols />
                ))}
              </div>
            </div>
            <p className={s.signature}>Pesquisa e análise: UPDO · Responsável: Rodrigo Bueno · 25/11/2026</p>
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
                  <a href="https://www.google.com/maps/search/?api=1&query=Rua+da+Quitanda,+187,+Centro,+Rio+de+Janeiro+RJ" target="_blank" rel="noopener noreferrer">
                    <Icon name="pin" size={18} /> Rua da Quitanda, 187 · Centro · Rio de Janeiro (RJ)
                  </a>
                </li>
              </ul>
              <p>PRONUTRI JFC Treinamento Profissional Ltda · CNPJ 07.704.449/0001-80 · Documento interno, não indexado</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
