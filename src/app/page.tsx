"use client";

import Link from "next/link";

const exploreItems = [
  { title: "Cerita Alumni", description: "Kenali perjalanan alumni SMAN 8 Jakarta yang melanjutkan studi di UI.", href: "/alumni", action: "Jelajahi alumni" },
  { title: "Data & Statistik", description: "Lihat persebaran alumni berdasarkan fakultas dan jalur penerimaan.", href: "/statistik", action: "Lihat statistik" },
  { title: "Kenali Fakultas", description: "Temukan gambaran kehidupan akademik dan bidang studi di UI.", href: "/fakultas", action: "Jelajahi fakultas" },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-container">
          <p className="home-eyebrow">SMAN 8 JAKARTA × UNIVERSITAS INDONESIA</p>
          <h1>Langkah dari <span>Delapan</span>, menuju Makara.</h1>
          <p className="home-intro">Ruang berbagi cerita dan informasi dari alumni SMAN 8 Jakarta untuk membantu adik-adik mengenal Universitas Indonesia lebih dekat.</p>
          <div className="home-actions">
            <Link href="/tentang" className="home-button">Kenali Invasi Makara</Link>
            <Link href="/alumni" className="home-button home-button-outline">Lihat direktori alumni</Link>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-container">
          <p className="home-eyebrow">EXPLORE</p>
          <h2>Kenali lebih dekat dunia UI</h2>
          <p className="home-description">Mulai perjalanan eksplorasi kampus melalui cerita, data, dan informasi fakultas.</p>
          <div className="home-card-grid">
            {exploreItems.map((item) => (
              <article className="home-card" key={item.href}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href={item.href}>{item.action} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-purpose">
        <div className="home-container">
          <p className="home-eyebrow">OUR PURPOSE</p>
          <h2>Informasi yang dekat. Inspirasi yang nyata.</h2>
          <p>Invasi Makara menjadi jembatan antara pengalaman alumni dan rasa ingin tahu siswa SMAN 8 Jakarta tentang kehidupan perkuliahan di Universitas Indonesia.</p>
          <Link href="/tentang" className="home-button">Baca selengkapnya</Link>
        </div>
      </section>

      <style jsx>{`
        .home-container { max-width: 1080px; margin: 0 auto; }
        .home-hero { background: #101b3d; color: white; padding: 100px 24px 110px; }
        .home-eyebrow { color: #e66d7c; font-size: 12px; font-weight: 800; letter-spacing: .18em; }
        .home-hero h1 { max-width: 780px; margin: 20px 0; font: 800 clamp(42px, 7vw, 76px)/1.05 Manrope, sans-serif; }
        .home-hero h1 span { color: #ff7784; }
        .home-intro { max-width: 600px; color: #d6dced; font-size: 17px; line-height: 1.8; }
        .home-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
        .home-button { display: inline-block; padding: 13px 20px; border-radius: 9px; background: #e33d4f; color: white; font-weight: 700; }
        .home-button-outline { background: transparent; border: 1px solid #ffffff66; }
        .home-section, .home-purpose { padding: 76px 24px; }
        .home-section h2, .home-purpose h2 { margin: 8px 0; font: 800 clamp(28px, 4vw, 40px) Manrope, sans-serif; }
        .home-description { color: #69738a; line-height: 1.7; max-width: 650px; }
        .home-card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 28px; }
        .home-card { padding: 24px; background: white; border: 1px solid #e9ebf1; border-radius: 16px; }
        .home-card h3 { margin: 0 0 10px; font: 800 19px Manrope, sans-serif; }
        .home-card p, .home-purpose p { color: #69738a; line-height: 1.7; }
        .home-card a { display: inline-block; margin-top: 18px; color: #173f8f; font-weight: 700; }
        .home-purpose { background: white; }
        .home-purpose > .home-container > p:not(.home-eyebrow) { max-width: 760px; font-size: 17px; margin: 18px 0 24px; }
        @media (max-width: 760px) { .home-hero { padding: 76px 20px 86px; } .home-section, .home-purpose { padding: 58px 20px; } .home-card-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}