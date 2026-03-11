import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "./podcasts.module.css";

export default function Podcasts() {
  return (
    <Layout>

      <div className={styles.hero}>
        <h1 className={styles.title}>YouTube Podcasts</h1>
        <p className={styles.desc}>Charlas, entrevistas y episodios en video.</p>
        <div className={styles.text}>
          <p className={styles.text_content}>
            El contenido que Aldeano Global ofrece incluye una amplia variedad de temáticas, desde la historia del arte
            hasta la literatura contemporánea, así como la música tradicional de distintas culturas.
            A través de redes sociales como YouTube, Facebook e Instagram, promovemos el análisis profundo
            de obras literarias, artes visuales y temas actuales.
          </p>
        </div>
      </div>

      <main className={styles.content}>
        <section className={styles.grid}>
          <div className={styles.episode}>
            <h3>Aldeano Global en YouTube</h3>
            <p>Contenido audiovisual.</p>
            <p>_________________________________________________________</p>
            <div className={styles.buttonContainer}>
              <a href="https://www.youtube.com/@aldeano_global" target="_blank" rel="noopener noreferrer" className={styles.youtubeButton}>
                Visitar Canal de YouTube
              </a>
              <a href="https://www.youtube.com/@aldeano_global/podcasts" target="_blank" rel="noopener noreferrer" className={styles.youtubeButton}>
                Ver Podcast en YouTube
              </a>
            </div>
          </div>
        </section>

      </main>

      <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <Link href="/" className={styles.backLink}>Volver al inicio</Link>
      </p>
    </Layout>
  );
}
