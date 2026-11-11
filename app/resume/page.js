// Old /resume link → send visitors to the details section on the home page.
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = { title: "Résumé" };

export default function Resume() {
  return (
    <main className="room" style={{ textAlign: "center", paddingTop: 80 }}>
      <meta httpEquiv="refresh" content={`0; url=${base}/#experience`} />
      <a href={`${base}/#experience`}>Taking you to my experience…</a>
    </main>
  );
}
