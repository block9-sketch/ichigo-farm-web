/**
 * いちご農園 那須野 — Landing Page
 * Design: Premium Food Editorial × High-End Magazine
 * Colors: Burgundy #7D1A1A, Off-white #F9F4EF, Charcoal #1A1A1A, Rose-gold #C8956C
 * Fonts: Playfair Display (EN display) + Noto Serif JP (JP headings) + Noto Sans JP (body)
 */

import { useEffect, useRef, useState } from "react";

// ── Image URLs (CDN) ──────────────────────────────────────────────
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663305741270/UYJzyXJ7QPgfYVvRvdb6Bb/hero-ichigo-EfZ24U87tpychaEpN9UQVb.webp";
const GREENHOUSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663305741270/UYJzyXJ7QPgfYVvRvdb6Bb/greenhouse-ichigo-Jdm59SkSyjzZvt3GhCizvs.webp";
const PICKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663305741270/UYJzyXJ7QPgfYVvRvdb6Bb/picking-ichigo-NusQryKAbME6RUfNvKVSjR.webp";
const GIFT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663305741270/UYJzyXJ7QPgfYVvRvdb6Bb/gift-ichigo-NRm3rLYAQQWhLbBDeurBMX.webp";

// ── Scroll animation hook ─────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── Sub-components ────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "こだわり" },
    { href: "#varieties", label: "品種" },
    { href: "#picking", label: "いちご狩り" },
    { href: "#shop", label: "直売・通販" },
    { href: "#about", label: "農園について" },
    { href: "#access", label: "アクセス" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(249,244,239,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(125,26,26,0.12)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative flex-shrink-0">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <ellipse cx="16" cy="18" rx="11" ry="12" fill="#B5291C" />
              <path d="M16 6 C16 6 13 2 10 3 C13 4 14 7 16 6Z" fill="#2D5016" />
              <path d="M16 6 C16 6 19 2 22 3 C19 4 18 7 16 6Z" fill="#2D5016" />
              <ellipse cx="12" cy="14" rx="2" ry="3" fill="rgba(255,255,255,0.15)" />
            </svg>
          </div>
          <div>
            <div
              className="font-serif text-sm font-bold leading-tight"
              style={{ color: scrolled ? "#1A1A1A" : "#fff" }}
            >
              いちご農園 那須野
            </div>
            <div
              className="text-xs tracking-widest leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: scrolled ? "#7D1A1A" : "rgba(255,255,255,0.7)",
              }}
            >
              NASUNO STRAWBERRY FARM
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium tracking-wider transition-colors duration-200"
              style={{ color: scrolled ? "#1A1A1A" : "rgba(255,255,255,0.85)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#B5291C")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled ? "#1A1A1A" : "rgba(255,255,255,0.85)")
              }
            >
              {l.label}
            </a>
          ))}
          <a
            href="#picking"
            className="text-xs font-bold tracking-wider px-5 py-2 transition-all duration-200"
            style={{
              background: "#B5291C",
              color: "#fff",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#8B1A10")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#B5291C")}
          >
            いちご狩り予約
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: scrolled ? "#1A1A1A" : "#fff" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{ background: "rgba(249,244,239,0.98)", borderTop: "1px solid rgba(125,26,26,0.12)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block px-6 py-3 text-sm font-medium border-b"
              style={{ borderColor: "rgba(125,26,26,0.08)", color: "#1A1A1A" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="p-4">
            <a
              href="#picking"
              className="block text-center py-3 text-sm font-bold text-white"
              style={{ background: "#B5291C", borderRadius: "2px" }}
              onClick={() => setMenuOpen(false)}
            >
              いちご狩りを予約する
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ── HERO ─────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="栃木県産いちご"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(15,5,5,0.82) 0%, rgba(15,5,5,0.55) 55%, rgba(15,5,5,0.2) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-16">
        <div className="max-w-xl">
          <p
            className="mb-5 tracking-widest text-xs font-medium"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#C8956C",
            }}
          >
            Tochigi Strawberry Farm — Since 1988
          </p>
          <h1
            className="mb-6 leading-tight"
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              color: "#fff",
              lineHeight: 1.25,
            }}
          >
            那須野が原が育てた
            <br />
            <span style={{ color: "#F4A0A0" }}>極上のいちご</span>を
            <br />
            あなたの食卓へ
          </h1>
          <p
            className="mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", maxWidth: "420px" }}
          >
            栃木県那須塩原の豊かな大地と清らかな水で、
            とちおとめ・スカイベリーを丹精込めて栽培。
            いちご狩り・産直通販・ギフト対応。
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#picking"
              className="inline-block px-8 py-4 text-sm font-bold tracking-wider text-white transition-all duration-300"
              style={{ background: "#B5291C", borderRadius: "2px" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#8B1A10";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#B5291C";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              いちご狩りを予約する
            </a>
            <a
              href="#shop"
              className="inline-block px-8 py-4 text-sm font-bold tracking-wider transition-all duration-300"
              style={{
                border: "1.5px solid rgba(255,255,255,0.6)",
                color: "#fff",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              通販で購入する
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.6rem", letterSpacing: "0.2em" }}
      >
        <span>SCROLL</span>
        <div
          className="w-px bg-white/40"
          style={{
            height: "40px",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
        <style>{`
          @keyframes scrollLine {
            0%, 100% { opacity: 0.4; transform: scaleY(1); transform-origin: top; }
            50% { opacity: 1; transform: scaleY(0.5); transform-origin: top; }
          }
        `}</style>
      </div>
    </section>
  );
}

// ── FEATURES ──────────────────────────────────────────────────────
function Features() {
  const ref = useFadeUp();
  const items = [
    {
      icon: "🌱",
      title: "土づくりへのこだわり",
      desc: "那須野が原の火山灰土壌を活かし、有機堆肥を丁寧に施した豊かな土台から栽培をスタート。根がしっかり張ることで、甘みと栄養が凝縮されたいちごが育ちます。",
    },
    {
      icon: "💧",
      title: "那須の清流水を使用",
      desc: "那須岳を源とするミネラル豊富な清流水を使用。水質管理を徹底し、いちごが最も喜ぶ環境を整えることで、みずみずしい果実が実ります。",
    },
    {
      icon: "🍓",
      title: "完熟収穫・当日発送",
      desc: "糖度計で一粒ずつ確認し、完熟した最高の状態で収穫。収穫当日に発送するため、農園でもぎたてのフレッシュな味わいをそのままお届けします。",
    },
  ];

  return (
    <section id="features" className="py-24" style={{ background: "#fff" }}>
      <div className="container">
        <div ref={ref} className="fade-up text-center mb-16">
          <p className="section-label mb-3">Our Features</p>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold"
            style={{ color: "#1A1A1A" }}
          >
            那須野農園、3つのこだわり
          </h2>
          <div className="mt-4 mx-auto w-12 h-0.5" style={{ background: "#B5291C" }} />
          <p className="mt-6 text-sm leading-loose max-w-lg mx-auto" style={{ color: "#5a4a40" }}>
            創業から30年以上、栃木の大地と向き合い続けてきた農園が守り続ける、
            おいしさへの真摯なこだわりをご紹介します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const cardRef = useFadeUp();
            return (
              <div
                key={i}
                ref={cardRef}
                className="fade-up p-8 transition-all duration-300 group"
                style={{
                  background: "#F9F4EF",
                  border: "1px solid rgba(125,26,26,0.1)",
                  borderRadius: "4px",
                  transitionDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 16px 48px rgba(125,26,26,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6 text-2xl"
                  style={{ background: "rgba(181,41,28,0.08)", borderRadius: "50%" }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#1A1A1A" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-loose" style={{ color: "#5a4a40" }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── VARIETIES ─────────────────────────────────────────────────────
function Varieties() {
  const ref = useFadeUp();
  const varieties = [
    {
      name: "とちおとめ",
      en: "TOCHIOTOME",
      badge: "定番品種",
      badgeColor: "#B5291C",
      img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80",
      desc: "栃木県が誇る定番品種。適度な酸味と豊かな甘みのバランスが絶妙で、ジューシーな果汁が口いっぱいに広がります。鮮やかな赤色と美しい形も魅力。いちご狩りでも人気No.1の品種です。",
      tags: ["甘酸っぱい", "ジューシー", "香り豊か", "12月〜5月"],
    },
    {
      name: "スカイベリー",
      en: "SKYBERRY",
      badge: "プレミアム",
      badgeColor: "#C9963A",
      img: GIFT_IMG,
      desc: "栃木県が開発した高級ブランド品種。大粒で円錐形の美しいフォルムと、上品な甘みが特徴。糖度が高く、贈り物としても大変喜ばれています。「大きさ・美しさ・おいしさ」三拍子揃った逸品です。",
      tags: ["高糖度", "大粒", "ギフト向き", "1月〜5月"],
    },
  ];

  return (
    <section id="varieties" className="py-24" style={{ background: "#F9F4EF" }}>
      <div className="container">
        <div ref={ref} className="fade-up mb-16">
          <p className="section-label mb-3">Varieties</p>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold"
            style={{ color: "#1A1A1A" }}
          >
            栃木が誇る2つの品種
          </h2>
          <div className="mt-4 w-12 h-0.5" style={{ background: "#B5291C" }} />
          <p className="mt-6 text-sm leading-loose max-w-lg" style={{ color: "#5a4a40" }}>
            栃木県が生んだブランドいちごを、那須野農園が自信を持ってお届けします。
            それぞれの個性をぜひご堪能ください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {varieties.map((v, i) => {
            const cardRef = useFadeUp();
            return (
              <div
                key={i}
                ref={cardRef}
                className="fade-up overflow-hidden group"
                style={{
                  background: "#fff",
                  borderRadius: "4px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={v.img}
                    alt={v.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 tracking-wider"
                    style={{ background: v.badgeColor, borderRadius: "2px" }}
                  >
                    {v.badge}
                  </span>
                </div>
                <div className="p-7">
                  <div
                    className="text-xs tracking-widest mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      color: "#B5291C",
                    }}
                  >
                    {v.en}
                  </div>
                  <h3
                    className="font-serif text-2xl font-bold mb-4"
                    style={{ color: "#1A1A1A" }}
                  >
                    {v.name}
                  </h3>
                  <p className="text-sm leading-loose mb-5" style={{ color: "#5a4a40" }}>
                    {v.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {v.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1"
                        style={{
                          background: "rgba(181,41,28,0.07)",
                          color: "#B5291C",
                          borderRadius: "20px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── PICKING ───────────────────────────────────────────────────────
function Picking() {
  const infoRef = useFadeUp();
  const imgRef = useFadeUp();

  const details = [
    { icon: "📅", label: "開園期間", value: "2025年12月上旬〜2026年5月下旬（予定）" },
    { icon: "🕐", label: "営業時間", value: "9:00〜16:00（最終受付 15:00）" },
    { icon: "👨‍👩‍👧‍👦", label: "対象・人数", value: "2歳以上〜大人まで。1名様からご予約可能" },
    { icon: "⏱", label: "食べ放題時間", value: "30分間（練乳・ハサミ付き）" },
    { icon: "🚗", label: "駐車場", value: "無料駐車場完備（大型バス可）" },
  ];

  return (
    <section
      id="picking"
      className="py-24 relative overflow-hidden"
      style={{ background: "#1A0A05" }}
    >
      {/* BG overlay */}
      <div className="absolute inset-0">
        <img
          src={GREENHOUSE_IMG}
          alt="ハウス"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0" style={{ background: "rgba(15,5,0,0.6)" }} />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Info */}
          <div ref={infoRef} className="fade-up">
            <p
              className="mb-3 tracking-widest text-xs"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#C8956C",
              }}
            >
              Strawberry Picking
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#fff" }}
            >
              いちご狩り体験
            </h2>
            <div className="w-12 h-0.5 mb-6" style={{ background: "#B5291C" }} />
            <p className="text-sm leading-loose mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
              広大なハウスの中で、真っ赤に熟したいちごをお好きなだけ。
              家族連れ・カップル・グループでのご来園をお待ちしています。
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {details.map((d, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 px-4 py-3"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                  }}
                >
                  <span className="text-lg flex-shrink-0 mt-0.5">{d.icon}</span>
                  <div>
                    <div
                      className="text-xs font-bold mb-0.5 tracking-wide"
                      style={{ color: "#F4A0A0" }}
                    >
                      {d.label}
                    </div>
                    <div className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                      {d.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#access"
              className="inline-block px-8 py-4 text-sm font-bold tracking-wider text-white transition-all duration-300"
              style={{ background: "#B5291C", borderRadius: "2px" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#8B1A10")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#B5291C")}
            >
              予約・お問い合わせ
            </a>
          </div>

          {/* Image + price */}
          <div ref={imgRef} className="fade-up relative">
            <img
              src={PICKING_IMG}
              alt="いちご狩り"
              className="w-full object-cover"
              style={{ borderRadius: "4px", boxShadow: "0 24px 64px rgba(0,0,0,0.5)", maxHeight: "520px" }}
            />
            {/* Price tag */}
            <div
              className="absolute -bottom-5 -right-4 md:-right-8 p-5 text-center"
              style={{
                background: "#C9963A",
                borderRadius: "4px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                minWidth: "140px",
              }}
            >
              <div className="text-xs text-white/90 mb-1">大人（中学生以上）</div>
              <div
                className="text-white font-bold"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", lineHeight: 1 }}
              >
                ¥1,800
              </div>
              <div className="text-xs text-white/80 mt-1">小学生 ¥1,400 ／ 幼児 ¥800</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SHOP ──────────────────────────────────────────────────────────
function Shop() {
  const imgRef = useFadeUp();
  const infoRef = useFadeUp();

  const products = [
    { name: "とちおとめ 2パック（約500g）", price: "¥1,200〜" },
    { name: "スカイベリー 2パック（約500g）", price: "¥1,800〜" },
    { name: "ギフトセット（2品種詰め合わせ）", price: "¥3,500〜" },
    { name: "業務用 大箱（約2kg）", price: "¥3,800〜" },
  ];

  return (
    <section id="shop" className="py-24" style={{ background: "#fff" }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={imgRef} className="fade-up">
            <img
              src={GIFT_IMG}
              alt="いちごギフト"
              className="w-full object-cover"
              style={{ borderRadius: "4px", boxShadow: "0 8px 40px rgba(0,0,0,0.1)" }}
            />
          </div>
          <div ref={infoRef} className="fade-up">
            <p className="section-label mb-3">Online Shop & Direct Sales</p>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#1A1A1A" }}
            >
              直売・産直通販
            </h2>
            <div className="w-12 h-0.5 mb-6" style={{ background: "#B5291C" }} />
            <p className="text-sm leading-loose mb-8" style={{ color: "#5a4a40" }}>
              農園直売所では毎朝収穫したてのいちごを販売。
              遠方の方にも産直通販でお届けします。
              ご贈答用のギフトセットも好評です。
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {products.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-4 py-3"
                  style={{
                    background: "#F9F4EF",
                    border: "1px solid rgba(125,26,26,0.1)",
                    borderRadius: "4px",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "#B5291C" }}
                    />
                    <span className="text-sm font-medium" style={{ color: "#1A1A1A" }}>
                      {p.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: "#B5291C" }}>
                    {p.price}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#cta"
              className="inline-block px-8 py-4 text-sm font-bold tracking-wider text-white transition-all duration-300"
              style={{ background: "#B5291C", borderRadius: "2px" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#8B1A10")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#B5291C")}
            >
              通販サイトへ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────
function About() {
  const imgRef = useFadeUp();
  const infoRef = useFadeUp();

  const stats = [
    { num: "30", unit: "年", label: "創業からの歴史" },
    { num: "8", unit: "棟", label: "栽培ハウス数" },
    { num: "2", unit: "品種", label: "栽培品種数" },
  ];

  return (
    <section id="about" className="py-24" style={{ background: "#F9F4EF" }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image with accent border */}
          <div ref={imgRef} className="fade-up relative">
            <img
              src={GREENHOUSE_IMG}
              alt="農園の風景"
              className="w-full object-cover"
              style={{ borderRadius: "4px", boxShadow: "0 8px 40px rgba(0,0,0,0.1)" }}
            />
            <div
              className="absolute -top-4 -left-4 w-full h-full pointer-events-none"
              style={{
                border: "2px solid rgba(181,41,28,0.3)",
                borderRadius: "4px",
                zIndex: -1,
              }}
            />
          </div>

          <div ref={infoRef} className="fade-up">
            <p className="section-label mb-3">About Us</p>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#1A1A1A" }}
            >
              農園について
            </h2>
            <div className="w-12 h-0.5 mb-6" style={{ background: "#B5291C" }} />
            <p className="text-sm leading-loose mb-4" style={{ color: "#5a4a40" }}>
              昭和63年、那須塩原市の地で初代・那須野一郎が小さなハウスからスタートした農園です。
              「本当においしいいちごを、一人でも多くの方に届けたい」という想いは、
              三代目となる現在も変わりません。
            </p>
            <p className="text-sm leading-loose mb-8" style={{ color: "#5a4a40" }}>
              那須野が原の豊かな自然環境と、代々受け継いできた栽培技術を融合させ、
              毎年より美味しいいちごを目指して改良を重ねています。
              農薬使用を必要最低限に抑え、安心・安全な農業を実践しています。
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="text-center py-5"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(125,26,26,0.1)",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    className="font-serif font-bold leading-none mb-1"
                    style={{ fontSize: "1.8rem", color: "#B5291C" }}
                  >
                    {s.num}
                    <span style={{ fontSize: "1rem" }}>{s.unit}</span>
                  </div>
                  <div className="text-xs" style={{ color: "#7a5a50" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── TESTIMONIALS ──────────────────────────────────────────────────
function Testimonials() {
  const ref = useFadeUp();
  const reviews = [
    {
      stars: 5,
      text: "家族でいちご狩りに行きました！子どもたちが大喜びで、大粒で甘いいちごをたくさん食べました。スタッフの方も親切で、また来年も絶対に来たいと思います。",
      name: "田中 様",
      from: "宇都宮市在住・ファミリー",
      initial: "田",
    },
    {
      stars: 5,
      text: "スカイベリーのギフトセットを贈り物に利用しました。受け取った方から「こんなに大きくて甘いいちごは初めて！」と大変喜んでいただけました。梱包も丁寧で安心です。",
      name: "佐藤 様",
      from: "東京都在住・通販利用",
      initial: "佐",
    },
    {
      stars: 5,
      text: "毎年シーズンになると必ず注文しています。とちおとめの甘酸っぱさが大好きで、届くたびに家族全員で争奪戦になります（笑）。今年も楽しみにしています！",
      name: "鈴木 様",
      from: "埼玉県在住・リピーター",
      initial: "鈴",
    },
  ];

  return (
    <section id="testimonials" className="py-24" style={{ background: "#fff" }}>
      <div className="container">
        <div ref={ref} className="fade-up text-center mb-14">
          <p className="section-label mb-3">Customer Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold" style={{ color: "#1A1A1A" }}>
            お客様の声
          </h2>
          <div className="mt-4 mx-auto w-12 h-0.5" style={{ background: "#B5291C" }} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => {
            const cardRef = useFadeUp();
            return (
              <div
                key={i}
                ref={cardRef}
                className="fade-up p-7"
                style={{
                  background: "#F9F4EF",
                  border: "1px solid rgba(125,26,26,0.1)",
                  borderRadius: "4px",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div className="mb-4" style={{ color: "#C9963A", letterSpacing: "3px" }}>
                  {"★".repeat(r.stars)}
                </div>
                <p className="text-sm leading-loose mb-6" style={{ color: "#5a4a40" }}>
                  {r.text}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: "rgba(181,41,28,0.12)", color: "#B5291C" }}
                  >
                    {r.initial}
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: "#1A1A1A" }}>
                      {r.name}
                    </div>
                    <div className="text-xs" style={{ color: "#8a6a5a" }}>
                      {r.from}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── ACCESS ────────────────────────────────────────────────────────
function Access() {
  const ref = useFadeUp();
  const rows = [
    { label: "農園名", value: "いちご農園 那須野" },
    { label: "住所", value: "栃木県那須塩原市那須野〇〇〇番地" },
    { label: "電話", value: "0287-XX-XXXX（9:00〜17:00）" },
    { label: "メール", value: "info@nasuno-ichigo.jp" },
    { label: "直売所", value: "12月〜5月 9:00〜17:00（売り切れ次第終了）" },
    { label: "定休日", value: "シーズン中無休（荒天時・農作業状況により変更あり）" },
    { label: "アクセス", value: "【車】東北自動車道 西那須野塩原ICより約10分\n【電車】JR東北本線 西那須野駅よりタクシー約15分" },
  ];

  return (
    <section id="access" className="py-24" style={{ background: "#F9F4EF" }}>
      <div className="container">
        <div ref={ref} className="fade-up mb-12">
          <p className="section-label mb-3">Access & Info</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold" style={{ color: "#1A1A1A" }}>
            アクセス・基本情報
          </h2>
          <div className="mt-4 w-12 h-0.5" style={{ background: "#B5291C" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <table className="w-full">
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: "1px solid rgba(125,26,26,0.1)" }}
                  >
                    <th
                      className="text-left py-4 pr-4 text-xs font-bold tracking-wide align-top"
                      style={{ color: "#B5291C", width: "90px" }}
                    >
                      {r.label}
                    </th>
                    <td
                      className="py-4 text-sm leading-relaxed"
                      style={{ color: "#5a4a40", whiteSpace: "pre-line" }}
                    >
                      {r.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Map placeholder */}
          <div
            className="flex flex-col items-center justify-center gap-4 min-h-64"
            style={{
              background: "#e8d8d0",
              borderRadius: "4px",
              border: "1px solid rgba(125,26,26,0.15)",
            }}
          >
            <div className="text-4xl">📍</div>
            <div className="text-sm font-medium" style={{ color: "#5a4a40" }}>
              栃木県那須塩原市
            </div>
            <div className="text-xs" style={{ color: "#8a6a5a" }}>
              いちご農園 那須野
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-2 px-5 py-2 text-xs font-bold text-white transition-all duration-200"
              style={{ background: "#B5291C", borderRadius: "2px" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#8B1A10")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#B5291C")}
            >
              Google マップで見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA BANNER ────────────────────────────────────────────────────
function CtaBanner() {
  const ref = useFadeUp();
  return (
    <section
      id="cta"
      className="py-24 relative overflow-hidden"
      style={{ background: "#7D1A1A" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="container relative z-10">
        <div ref={ref} className="fade-up text-center max-w-xl mx-auto">
          <h2
            className="font-serif text-3xl md:text-4xl font-bold mb-5"
            style={{ color: "#fff" }}
          >
            今すぐいちご狩りを予約しよう
          </h2>
          <p className="text-sm leading-loose mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
            シーズン中は混み合います。お早めのご予約をおすすめします。
            ご不明な点はお気軽にお問い合わせください。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0287-XX-XXXX"
              className="inline-block px-8 py-4 text-sm font-bold tracking-wider transition-all duration-300"
              style={{ background: "#fff", color: "#7D1A1A", borderRadius: "2px" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F9F4EF";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              電話で予約する
            </a>
            <a
              href="mailto:info@nasuno-ichigo.jp"
              className="inline-block px-8 py-4 text-sm font-bold tracking-wider transition-all duration-300"
              style={{
                border: "1.5px solid rgba(255,255,255,0.6)",
                color: "#fff",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              メールで問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────
function Footer() {
  const links = [
    { href: "#features", label: "こだわり" },
    { href: "#varieties", label: "品種紹介" },
    { href: "#picking", label: "いちご狩り" },
    { href: "#shop", label: "直売・通販" },
    { href: "#about", label: "農園について" },
    { href: "#access", label: "アクセス" },
  ];

  return (
    <footer style={{ background: "#1A0A05", color: "rgba(255,255,255,0.65)" }}>
      <div className="container py-14">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex-shrink-0">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                  <ellipse cx="16" cy="18" rx="11" ry="12" fill="#B5291C" />
                  <path d="M16 6 C16 6 13 2 10 3 C13 4 14 7 16 6Z" fill="#2D5016" />
                  <path d="M16 6 C16 6 19 2 22 3 C19 4 18 7 16 6Z" fill="#2D5016" />
                </svg>
              </div>
              <div>
                <div className="font-serif text-sm font-bold text-white">いちご農園 那須野</div>
                <div
                  className="text-xs"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}
                >
                  NASUNO STRAWBERRY FARM
                </div>
              </div>
            </div>
            <p className="text-xs leading-loose">
              栃木県那須塩原市で30年以上、<br />
              とちおとめ・スカイベリーを栽培。<br />
              いちご狩り・直売・産直通販対応。
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white mb-4">MENU</h4>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F4A0A0")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white mb-4">CONTACT</h4>
            <ul className="flex flex-col gap-2 mb-6">
              <li>
                <a href="tel:0287-XX-XXXX" className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                  0287-XX-XXXX
                </a>
              </li>
              <li>
                <a href="mailto:info@nasuno-ichigo.jp" className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                  info@nasuno-ichigo.jp
                </a>
              </li>
            </ul>
            <h4 className="text-xs font-bold tracking-widest text-white mb-4">SNS</h4>
            <ul className="flex flex-col gap-2">
              {["Instagram", "Facebook", "X (Twitter)"].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-xs transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F4A0A0")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          <span>&copy; 2025 いちご農園 那須野. All Rights Reserved.</span>
          <span>栃木県那須塩原市</span>
        </div>
      </div>
    </footer>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Features />
      <Varieties />
      <Picking />
      <Shop />
      <About />
      <Testimonials />
      <Access />
      <CtaBanner />
      <Footer />
    </div>
  );
}
