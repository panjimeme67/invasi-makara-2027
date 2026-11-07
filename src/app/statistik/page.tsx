import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { statistikFakultas } from "@/lib/statistik";

const chartColors = ["#173f8f", "#e33d4f", "#f0a23b", "#3d9b83", "#8b79bd"];

export default function StatisticsPage() {
  const facultyStats = statistikFakultas();
  const totalAlumni = facultyStats.reduce((total, faculty) => total + faculty.total, 0);

  return (
    <main className="statistics-page">
      <div className="statistics-container">
        <p className="statistics-eyebrow">DATA & INSIGHTS</p>
        <h1>Statistik Alumni</h1>
        <p className="statistics-lead">Persebaran alumni berdasarkan fakultas dan jalur penerimaan. Grafik diperbarui otomatis dari data direktori alumni.</p>

        <section className="statistics-total">
          <p className="statistics-eyebrow">TOTAL DATA TERCATAT</p>
          <strong>{totalAlumni}</strong>
          <p>Alumni dengan data yang telah dimasukkan.</p>
        </section>

        {facultyStats.length === 0 ? (
          <div className="statistics-empty">
            <strong>Belum ada data statistik.</strong>
            <p>Tambahkan data fakultas dan alumni terlebih dahulu.</p>
          </div>
        ) : (
          <div className="statistics-grid">
            {facultyStats.map((faculty) => (
              <section className="statistics-card" key={faculty.slug}>
                <h2>{faculty.nama}</h2>
                <p>{faculty.total} alumni terdata</p>
                <div className="statistics-chart">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={faculty.jalur} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={85} label>
                        {faculty.jalur.map((entry, index) => <Cell key={entry.name} fill={chartColors[index]} />)}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                {faculty.jalur.map((route, index) => (
                  <div className="statistics-row" key={route.name}>
                    <span><i style={{ background: chartColors[index] }} />{route.name}</span>
                    <strong>{route.value}</strong>
                  </div>
                ))}
              </section>
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
        .statistics-container { max-width: 1080px; margin: auto; padding: 56px 24px 80px; min-height: 55vh; }
        .statistics-eyebrow { color: #e66d7c; font-size: 12px; font-weight: 800; letter-spacing: .18em; }
        h1 { margin: 8px 0 14px; font: 800 clamp(34px, 5vw, 52px) Manrope, sans-serif; color: #17213a; }
        .statistics-lead { max-width: 760px; color: #69738a; font-size: 17px; line-height: 1.8; }
        .statistics-total, .statistics-card, .statistics-empty { padding: 24px; background: white; border: 1px solid #e9ebf1; border-radius: 16px; }
        .statistics-total { margin: 28px 0; }
        .statistics-total strong { display: block; margin: 8px 0; font: 800 48px Manrope, sans-serif; color: #17213a; }
        .statistics-total p:last-child, .statistics-card > p { color: #69738a; }
        .statistics-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .statistics-card h2 { margin: 0 0 8px; font: 800 20px Manrope, sans-serif; }
        .statistics-chart { width: 100%; height: 250px; }
        .statistics-row { display: flex; justify-content: space-between; padding: 9px 0; border-bottom: 1px solid #eef0f4; font-size: 14px; }
        .statistics-row i { display: inline-block; width: 9px; height: 9px; border-radius: 50%; margin-right: 8px; }
        .statistics-empty { margin-top: 20px; text-align: center; }
        .statistics-empty p { color: #69738a; }
        @media (max-width: 760px) { .statistics-container { padding: 44px 20px 64px; } .statistics-grid { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  );
}