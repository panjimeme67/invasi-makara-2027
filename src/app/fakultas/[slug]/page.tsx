import Link from "next/link";
import { notFound } from "next/navigation";
import { fakultas } from "@/data/fakultas";

export function generateStaticParams() {
  return fakultas.map((item) => ({ slug: item.slug }));
}

export default async function DetailFakultas({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = fakultas.find((faculty) => faculty.slug === slug);
  if (!item) notFound();

  const lists = [
    { title: "Fun Facts", items: item.funFacts },
    { title: "Pencapaian", items: item.pencapaian },
    { title: "Program Studi", items: item.programStudi },
    { title: "Prospek Kerja", items: item.prospekKerja },
  ];

  return <div className="content">
    <Link className="back" href="/fakultas">← Kembali ke daftar fakultas</Link>
    <div className="eyebrow">{item.singkatan}</div>
    <h1 className="page-title">{item.nama}</h1>
    <p className="lead">{item.deskripsi || "Deskripsi fakultas akan ditambahkan."}</p>
    <div className="grid" style={{ marginTop: 30 }}>
      <article className="tile"><h3>Sejarah</h3><p>{item.sejarah || "Informasi akan ditambahkan."}</p></article>
      <article className="tile"><h3>Budaya</h3><p>{item.budaya || "Informasi akan ditambahkan."}</p></article>
      {lists.map((section) => <article className="tile" key={section.title}>
        <h3>{section.title}</h3>
        {section.items.length ? <ul>{section.items.map((value, index) => <li key={index}>{value}</li>)}</ul> : <p>Informasi akan ditambahkan.</p>}
      </article>)}
    </div>
  </div>;
}