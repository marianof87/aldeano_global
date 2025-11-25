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
        <h5>
            El contenido que Aldeano Global ofrece incluye una amplia variedad de temáticas, desde la historia del arte 
            hasta la literatura contemporánea, así como la música tradicional de distintas culturas. 
            A través de redes sociales como YouTube, Facebook e Instagram, promovemos el análisis profundo 
            de obras literarias, artes visuales y temas actuales. 
        </h5>
        </div>
      </div>

      <main className={styles.content}>
        <section className={styles.grid}>
          <div className={styles.episode}>
            <h3>Lista de Podcasts en YouTube</h3>
            <p>Contenido audiovisual.</p>
            <p>_________________________________________________________</p>
            <p>Link: Nombre y descripción de la sección/podcast/programa</p>
            <p>Link: Nombre y descripción de la sección/podcast/programa</p>
            <p>Link: Nombre y descripción de la sección/podcast/programa</p>
            <p>Link: Nombre y descripción de la sección/podcast/programa</p>
            <p>Link: Nombre y descripción de la sección/podcast/programa</p>
            <p>Link: Nombre y descripción de la sección/podcast/programa</p>
            <p>Link: Nombre y descripción de la sección/podcast/programa</p>
            <p>Link: Nombre y descripción de la sección/podcast/programa</p>
          </div>
        </section>

      </main>

        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <Link href="/" className={styles.backLink}>Volver al inicio</Link>
        </p>
    </Layout>
  );
}
