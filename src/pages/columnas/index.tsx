import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "./columnas.module.css";

export default function Columnas() {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1 className={styles.title}>Columnas & Redacción</h1>
        <p className={styles.desc}>Artículos, opinión y análisis de nuestros redactores.</p>

        <div className={styles.text}>
          <h5>
            En esta sección encontrarás columnas de opinión, análisis cultural y piezas de
            investigación breve escritas por nuestro equipo y colaboradores. Publicamos
            reseñas, ensayos cortos, entrevistas y reflexiones alrededor de la cultura,
            el arte y la sociedad.
          </h5>
        </div>
      </div>

      <main className={styles.content}>
        <section className={styles.list}>
          {/* Ejemplo de items; reemplazá por contenido real o map sobre datos */}
          <article className={styles.post}>
            <h2 className={styles.postTitle}>Columna de ejemplo 1</h2>
            <p className={styles.postExcerpt}>
              Extracto breve de la columna. Introducción al tema y gancho para leer más.
            </p>
            <p>
              <Link href="/columnas/columna-ejemplo-1" className={styles.readMore}>
                Leer la columna →
              </Link>
            </p>
          </article>

          <article className={styles.post}>
            <h2 className={styles.postTitle}>Columna de ejemplo 2</h2>
            <p className={styles.postExcerpt}>
              Otro extracto de ejemplo con un resumen atractivo para los lectores.
            </p>
            <p>
              <Link href="/columnas/columna-ejemplo-2" className={styles.readMore}>
                Leer la columna →
              </Link>
            </p>
          </article>

          <article className={styles.post}>
            <h2 className={styles.postTitle}>Columna de ejemplo 3</h2>
            <p className={styles.postExcerpt}>
              Resumen corto de la columna número tres. Reemplazá con tu contenido.
            </p>
            <p>
              <Link href="/columnas/columna-ejemplo-3" className={styles.readMore}>
                Leer la columna →
              </Link>
            </p>
          </article>
        </section>
      </main>

      <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <Link href="/" className={styles.backLink}>Volver al inicio</Link>
      </p>
    </Layout>
  );
}
