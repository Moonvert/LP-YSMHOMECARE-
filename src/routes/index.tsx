import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield,
  Users,
  MapPin,
  Stethoscope,
  Activity,
  HandHeart,
  ClipboardList,
  MessagesSquare,
  MessageCircle,
  Phone,
  ChevronDown,
  Quote,
  Clock,
  Check,
} from "lucide-react";
import heroImg from "@/assets/hero-care.jpg";
import aboutImg from "@/assets/about-family.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YSM Health Care | Cuidado humanizado e profissional no seu lar" },
      {
        name: "description",
        content:
          "Home care premium em São Paulo, Rio de Janeiro e Santa Catarina. Equipe exclusiva por paciente, sem rotatividade. Há mais de 12 anos cuidando de quem você ama.",
      },
      { property: "og:title", content: "YSM Health Care | Cuidado humanizado no seu lar" },
      {
        property: "og:description",
        content:
          "Cuidadores, enfermeiros, fisioterapeutas e médicos. Equipe exclusiva, cuidado 24h em SP, RJ e SC.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20YSM%20Health%20Care.";

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white">
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center ring-1 ring-white/20">
            <Stethoscope className="h-5 w-5 text-navy" strokeWidth={2.25} />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-xl tracking-wide">YSM</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">Health Care</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/85">
          <a href="#diferenciais" className="hover:text-gold transition">Diferenciais</a>
          <a href="#servicos" className="hover:text-gold transition">Serviços</a>
          <a href="#como-funciona" className="hover:text-gold transition">Como funciona</a>
          <a href="#sobre" className="hover:text-gold transition">Sobre</a>
          <a href="#faq" className="hover:text-gold transition">FAQ</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gold text-navy px-5 py-2.5 text-sm font-medium hover:bg-gold-soft transition shadow-[var(--shadow-gold)]"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100vh] flex items-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Cuidadora segurando carinhosamente a mão de uma paciente idosa em casa"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-soft mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Home Care Premium · Desde 2014
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Cuidado humanizado.
            <br />
            <span className="text-gold">Profissionais exclusivos.</span>
            <br />
            Conforto no seu lar.
          </h1>
          <p className="text-lg text-white/85 max-w-2xl mb-10 leading-relaxed">
            Há mais de 12 anos cuidando de quem você ama, com equipe contratada especialmente para
            cada paciente, sem rotatividade e sem improvisos.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 rounded-full bg-gold text-navy px-7 py-4 text-base font-medium hover:bg-gold-soft transition shadow-[var(--shadow-gold)]"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com um especialista agora
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base text-white hover:bg-white/10 transition"
            >
              Conhecer serviços
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { icon: Clock, label: "12 anos de mercado" },
              { icon: MapPin, label: "SP, RJ e SC" },
              { icon: Users, label: "Equipe exclusiva" },
              { icon: Activity, label: "Cuidado 24h" },
            ].map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-3 border-t border-white/15 pt-4"
              >
                <t.icon className="h-5 w-5 text-gold" />
                <span className="text-sm text-white/90">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Empathy() {
  const items = [
    {
      icon: Shield,
      title: "Medo de deixar seu familiar sozinho ou mal assistido",
    },
    {
      icon: Users,
      title: "Dificuldade de encontrar profissionais confiáveis e estáveis",
    },
    {
      icon: HandHeart,
      title: "Desejo de manter seu ente querido em casa, com dignidade e segurança",
    },
  ];
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
            Sabemos como você se sente
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-3 leading-tight">
            Entendemos o que sua família está vivendo
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-white rounded-2xl p-8 border border-border hover:border-gold/50 transition shadow-[var(--shadow-soft)]"
            >
              <div className="h-12 w-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5">
                <it.icon className="h-6 w-6 text-navy" strokeWidth={1.75} />
              </div>
              <p className="text-navy text-lg leading-snug font-medium">{it.title}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
          A YSM foi criada para resolver exatamente isso. Cada paciente recebe uma equipe formada
          especificamente para ele. <span className="text-navy font-medium">Sem substituições constantes, sem cuidadores genéricos.</span>
        </p>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    {
      icon: Shield,
      title: "Profissional fixo e dedicado",
      desc: "Contratamos o cuidador ideal para cada paciente. Sem rotatividade, sem adaptações constantes.",
    },
    {
      icon: Stethoscope,
      title: "Equipe multidisciplinar completa",
      desc: "Cuidadores, enfermeiros, fisioterapeutas e médicos quando necessário.",
    },
    {
      icon: HandHeart,
      title: "Cuidado humanizado acima de tudo",
      desc: "O paciente não é um número. É uma pessoa com história, rotina e necessidades únicas.",
    },
    {
      icon: MapPin,
      title: "Atendimento domiciliar e hospitalar",
      desc: "Presentes onde o paciente precisar: em casa ou acompanhando na internação.",
    },
  ];
  return (
    <section id="diferenciais" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Diferenciais</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-3">
            Por que famílias escolhem a YSM?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative p-8 rounded-2xl border border-border bg-white hover:bg-navy hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="h-12 w-12 rounded-xl bg-gold/15 group-hover:bg-gold flex items-center justify-center mb-6 transition">
                <it.icon className="h-6 w-6 text-gold group-hover:text-navy transition" strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-xl mb-3 group-hover:text-white">{it.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/80 leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: HandHeart, title: "Cuidadores de Idosos", desc: "Atendimento domiciliar e hospitalar com profissionais fixos e treinados." },
    { icon: Stethoscope, title: "Enfermagem Especializada", desc: "Técnicos e enfermeiros para procedimentos e cuidados clínicos." },
    { icon: Activity, title: "Fisioterapia Domiciliar", desc: "Reabilitação e manutenção da mobilidade no conforto de casa." },
    { icon: ClipboardList, title: "Acompanhamento Hospitalar", desc: "Suporte completo durante internações, 24h por dia." },
    { icon: Shield, title: "Monitoramento Contínuo", desc: "Supervisão técnica constante e relatórios para a família." },
    { icon: MessagesSquare, title: "Suporte à Família", desc: "Orientação humanizada para decisões e rotinas de cuidado." },
  ];
  return (
    <section id="servicos" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Serviços</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-3">Nossos Serviços</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group bg-white rounded-2xl p-8 border border-border hover:border-gold hover:shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="h-12 w-12 rounded-xl bg-navy text-gold flex items-center justify-center">
                  <it.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <span className="text-xs uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition">
                  YSM
                </span>
              </div>
              <h3 className="font-serif text-xl text-navy mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Entre em contato via WhatsApp", desc: "Atendimento direto com nosso especialista." },
    { n: "02", title: "Entrevista personalizada", desc: "Entendemos a história e as necessidades do paciente." },
    { n: "03", title: "Orçamento sob medida", desc: "Montamos um plano de cuidado específico para o caso." },
    { n: "04", title: "Início imediato", desc: "Sua equipe exclusiva começa o atendimento." },
  ];
  return (
    <section id="como-funciona" className="bg-navy text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Processo</span>
          <h2 className="font-serif text-3xl sm:text-4xl mt-3">Como funciona?</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="h-14 w-14 rounded-full bg-gold text-navy font-serif text-lg flex items-center justify-center mb-5 relative z-10 shadow-[var(--shadow-gold)]">
                {s.n}
              </div>
              <h3 className="font-serif text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 rounded-full bg-gold text-navy px-7 py-4 font-medium hover:bg-gold-soft transition shadow-[var(--shadow-gold)]"
          >
            <MessageCircle className="h-5 w-5" />
            Quero iniciar agora
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { v: "12+", l: "Anos no mercado" },
    { v: "3", l: "Estados: SP, RJ e SC" },
    { v: "1:1", l: "Equipe exclusiva" },
  ];
  return (
    <section id="sobre" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Sobre a YSM</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-3 mb-6 leading-tight">
            12 anos cuidando de quem mais importa
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
            <p>
              Fundada em 2014 no Hospital Sírio-Libanês, a YSM Health Care nasceu da convicção de
              que cuidar é, antes de tudo, escutar. Hoje atendemos famílias em São Paulo, Rio de
              Janeiro e Santa Catarina, com uma equipe composta por cuidadores, enfermeiros,
              fisioterapeutas e médicos.
            </p>
            <p>
              Somos reconhecidos pelo cuidado humanizado, personalizado e pela continuidade do
              profissional ao lado de cada paciente, porque vínculo é parte fundamental do
              tratamento.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-navy mb-1">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gold/10 rounded-3xl -z-10" />
          <img
            src={aboutImg}
            alt="Família ao lado de paciente idoso e enfermeira da YSM"
            loading="lazy"
            width={1024}
            height={1024}
            className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-full object-cover aspect-[4/5]"
          />
          <div className="absolute -bottom-6 -left-6 bg-navy text-white p-5 rounded-2xl max-w-[220px] shadow-[var(--shadow-soft)] hidden sm:block">
            <Check className="h-5 w-5 text-gold mb-2" />
            <p className="text-sm leading-snug">
              Atendimento desde o Hospital Sírio-Libanês.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Finalmente encontrei um cuidador que minha mãe realmente aceita. A YSM entendeu o perfil dela e trouxe a pessoa certa.",
      name: "Mariana S.",
      role: "Filha de paciente",
    },
    {
      quote:
        "A tranquilidade de saber que há um profissional qualificado com meu pai 24h não tem preço.",
      name: "Roberto F.",
      role: "Filho de paciente",
    },
    {
      quote:
        "Outros serviços mudavam o cuidador toda semana. Na YSM, o mesmo profissional está com meu avô há meses.",
      name: "Carla M.",
      role: "Neta de paciente",
    },
  ];
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Depoimentos</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-3">
            O que dizem as famílias que atendemos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-border shadow-[var(--shadow-soft)] relative"
            >
              <Quote className="h-10 w-10 text-gold mb-4" strokeWidth={1.5} />
              <p className="text-navy/90 leading-relaxed mb-6 text-[15px]">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-navy to-navy-soft text-gold font-serif flex items-center justify-center">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-navy text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="font-serif text-lg text-navy group-hover:text-gold transition">{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-gold shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-6" : "max-h-0"}`}
      >
        <p className="text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

function FAQ() {
  const items = [
    {
      q: "Vocês atendem minha região?",
      a: "Atendemos São Paulo (especialmente zona sul), Rio de Janeiro e Santa Catarina.",
    },
    {
      q: "Qual o prazo para início do atendimento?",
      a: "Trabalhamos para iniciar o mais rápido possível após a aprovação do orçamento, respeitando a urgência de cada caso.",
    },
    {
      q: "Os profissionais são fixos ou rotativos?",
      a: "Diferencial YSM: contratamos um profissional específico para cada paciente. Evitamos ao máximo a substituição.",
    },
    {
      q: "Qual o valor médio do serviço?",
      a: "Os valores são personalizados conforme a complexidade do caso. Entre em contato para um orçamento sem compromisso.",
    },
    {
      q: "Vocês atendem também dentro do hospital?",
      a: "Sim. Oferecemos acompanhamento hospitalar com cuidadores e técnicos de enfermagem.",
    },
  ];
  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Dúvidas frequentes</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-3">Perguntas frequentes</h2>
        </div>
        <div>
          {items.map((it) => (
            <FAQItem key={it.q} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative bg-navy text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gold blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Comece agora</span>
        <h2 className="font-serif text-3xl sm:text-5xl mt-4 mb-6 leading-tight">
          Seu familiar merece <span className="text-gold">o melhor cuidado.</span>
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Fale agora com um especialista YSM e receba um plano de cuidado personalizado, sem
          compromisso.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-3 rounded-full bg-gold text-navy px-8 py-4 text-base font-medium hover:bg-gold-soft transition shadow-[var(--shadow-gold)]"
        >
          <MessageCircle className="h-5 w-5" />
          Falar no WhatsApp agora
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/70">
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Atendimento humanizado</span>
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Orçamento sem compromisso</span>
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Início rápido</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70 py-12 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 text-white mb-4">
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
              <Stethoscope className="h-5 w-5 text-navy" strokeWidth={2.25} />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-xl">YSM</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">Health Care</div>
            </div>
          </div>
          <p className="text-white/60 leading-relaxed">
            Cuidado humanizado e profissional no conforto do seu lar.
          </p>
        </div>
        <div>
          <div className="text-white font-medium mb-3">Atuação</div>
          <ul className="space-y-2">
            <li>São Paulo, SP</li>
            <li>Rio de Janeiro, RJ</li>
            <li>Santa Catarina, SC</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-medium mb-3">Contato</div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-soft transition"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
          <div className="mt-3 inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-gold" /> Atendimento 24h
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 mt-10 pt-6 border-t border-white/10 text-xs text-white/40 text-center">
        © {new Date().getFullYear()} YSM Health Care. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gold text-navy flex items-center justify-center shadow-[var(--shadow-gold)] hover:scale-105 transition"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Empathy />
      <Differentials />
      <Services />
      <HowItWorks />
      <About />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
