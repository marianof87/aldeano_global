import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "./columnas.module.css";

// Sample Data Structure
const categories = [
  {
    name: "Sociedades",
    items: [
      {
        columnist: "Columnas & Redacción",
        title: "Sociedades",
        description: "Reflexiones sobre cómo interactuamos y construimos comunidad.",
        link: "https://comunicacionagloba.wixsite.com/aldeano-global/sociedades"
      }
    ]
  },
  {
    name: "Salud y bienestar",
    items: [
      {
        columnist: "Columnas & Redacción",
        title: "Espacio de Salud",
        description: "Contenido sobre salud y bienestar.",
        link: "https://comunicacionagloba.wixsite.com/aldeano-global/bienestar"
      }
    ]
  },
  {
    name: "Educación",
    items: [
      {
        columnist: "Columnas & Redacción",
        title: "Horizontes Educativos",
        description: "Reflexiones sobre el futuro de la educación.",
        link: "https://comunicacionagloba.wixsite.com/aldeano-global/educacion"
      }
    ]
  },
  {
    name: "Arte y Cultura",
    items: [
      {
        columnist: "Columnas & Redacción",
        title: "Miradas Contemporáneas",
        description: "Análisis de las tendencias artísticas actuales y su impacto en la sociedad.",
        link: "https://comunicacionagloba.wixsite.com/aldeano-global/arte-y-cultura"
      }
    ]
  }
];

export default function Columnas() {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1 className={styles.title}>Columnas & Redacción</h1>
        <p className={styles.desc}>Nuestra red de columnistas y sus espacios personales.</p>

        <div className={styles.text}>
          <p>
            Explora las distintas categorías y descubre a nuestros colaboradores.
            Accede directamente a sus blogs para leer sus artículos completos.
          </p>
        </div>
      </div>

      <main className={styles.content}>
        {categories.map((category) => (
          <section key={category.name} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category.name}</h2>
            <div className={styles.list}>
              {category.items.map((item, index) => (
                <article key={index} className={styles.post}>
                  <h3 className={styles.columnistName}>{item.columnist}</h3>
                  <h4 className={styles.columnTitle}>{item.title}</h4>
                  <p className={styles.description}>{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Ver en Blogspot &rarr;
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <p style={{ textAlign: "center", marginTop: "3rem", marginBottom: "3rem" }}>
        <Link href="/" className={styles.backLink}>Volver al inicio</Link>
      </p>
    </Layout>
  );
}
