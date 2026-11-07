const values = [
  { title: "Berbagi pengalaman", description: "Tempat alumni berbagi cerita dan sudut pandang mengenai perjalanan menuju dan selama berkuliah di UI." },
  { title: "Membuka wawasan", description: "Menyediakan informasi fakultas, program studi, jalur penerimaan, dan kehidupan kampus." },
  { title: "Menghubungkan generasi", description: "Membangun jembatan informasi antara alumni dan adik-adik kelas SMAN 8 Jakarta." },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-container">
        <p className="about-eyebrow">ABOUT US</p>
        <h1>Tentang Invasi Makara</h1>
        <p className="about-lead">Invasi Makara merupakan inisiatif alumni SMAN 8 Jakarta yang sedang menempuh pendidikan di Universitas Indonesia untuk memperkenalkan UI kepada siswa-siswi SMAN 8 Jakarta.</p>
        <div className="about-grid">
          {values.map((value) => (
            <article className="about-card" key={value.title}>
              <h2>{value.title}</h2>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
        <section className="about-note">
          <h2>Lengkapi cerita Invasi Makara</h2>
          <p>Bagian ini dapat dikembangkan dengan sejarah organisasi, visi, misi, susunan tim, dan dokumentasi kegiatan.</p>
        </section>
      </div>
      <style jsx>{`
        .about-container { max-width: 1080px; margin: auto; padding: 56px 24px 80px; min-height: 55vh; }
        .about-eyebrow { color: #e66d7c; font-size: 12px; font-weight: 800; letter-spacing: .18em; }
        h1 { margin: 8px 0 14px; font: 800 clamp(34px, 5vw, 52px) Manrope, sans-serif; color: #17213a; }
        .about-lead { max-width: 760px; color: #69738a; font-size: 17px; line-height: 1.8; }
        .about-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 36px; }
        .about-card { padding: 24px; background: white; border: 1px solid #e9ebf1; border-radius: 16px; }
        .about-card h2, .about-note h2 { margin: 0 0 10px; font: 800 19px Manrope, sans-serif; color: #17213a; }
        .about-card p, .about-note p { margin: 0; color: #69738a; line-height: 1.7; }
        .about-note { margin-top: 32px; padding: 24px; background: #fff; border-radius: 16px; }
        @media (max-width: 760px) { .about-container { padding: 44px 20px 64px; } .about-grid { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  );
}