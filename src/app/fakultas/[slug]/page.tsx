import Link from "next/link";
import { notFound } from "next/navigation";
import { fakultas } from "@/data/fakultas";

export function generateStaticParams() {
  return fakultas.map((faculty) => ({ slug: faculty.slug }));
}

export default async function FacultyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const faculty = fakultas.find((item) => item.slug === slug);
  if (!faculty) notFound();

  const informationSections = [
    { title: "Fun Facts", content: faculty.funFacts },
    { title: "Pencapaian", content: faculty.pencapaian },
    { title: "Program Studi", content: faculty.programStudi },
    { title: "Prospek Kerja", content: faculty.prospekKerja },
  ];

  return (
    <main className="faculty-detail-page">
      <div className="faculty-detail-container">
        <Link className="faculty-back" href="/fakultas">← Kembali ke daftar fakultas</Link>
        <p className="faculty-detail-eyebrow">{faculty.singkatan}</p>
        <h1>{faculty.nama}</h1>
        <p className="faculty-detail-lead">{faculty.deskripsi || "Deskripsi fakultas akan ditambahkan."}</p>

        <div className="faculty-detail-grid">
          <section className="faculty-detail-card">
            <h2>Sejarah</h2>
            <p>{faculty.sejarah || "Informasi sejarah akan ditambahkan."}</p>
          </section>
          <section className="faculty-detail-card">
            <h2>Budaya</h2>
            <p>{faculty.budaya || "Informasi budaya akan ditambahkan."}</p>
          </section>
          {informationSections.map((section) => (
            <section className="faculty-detail-card" key={section.title}>
              <h2>{section.title}</h2>
              {section.content.length > 0 ? (
                <ul>{section.content.map((item, index) => <li key={index}>{item}</li>)}</ul>
              ) : <p>Informasi akan ditambahkan.</p>}
            </section>
          ))}
        </div>
      </div>
      <style jsx>{`
        .faculty-detail-container { max-width: 1080px; margin: auto; padding: 56px 24px 80px; min-height: 55vh; }
        .faculty-back { display: inline-block; margin-bottom: 24px; color: #173f8f; font-weight: 700; }
        .faculty-detail-eyebrow { color: #e66d7c; font-size: 12px; font-weight: 800; letter-spacing: .18em; }
        h1 { margin: 8px 0 14px; font: 800 clamp(34px, 5vw, 52px) Manrope, sans-serif; color: #17213a; }
        .faculty-detail-lead { max-width: 760px; color: #69738a; font-size: 17px; line-height: 1.8; }
        .faculty-detail-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 30px; }
        .faculty-detail-card { padding: 24px; background: white; border: 1px solid #e9ebf1; border-radius: 16px; }
        .faculty-detail-card h2 { margin: 0 0 10px; font: 800 19px Manrope, sans-serif; color: #17213a; }
        .faculty-detail-card p, .faculty-detail-card li { color: #69738a; line-height: 1.7; }
        .faculty-detail-card ul { padding-left: 20px; }
        @media (max-width: 760px) { .faculty-detail-container { padding: 44px 20px 64px; } .faculty-detail-grid { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  );
}