import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "./columnas.module.css";

// Sample Data Structure
const categories = [
  {
    name: "Arte",
    items: [
      {
        columnist: "Ana Gomez",
        title: "Miradas Contemporáneas",
        description: "Análisis de las tendencias artísticas actuales y su impacto en la sociedad.",
        link: "https://anagomez-arte.blogspot.com"
      },
      {
        columnist: "Carlos Ruiz",
        title: "Historia del Color",
        description: "Un recorrido por el uso del color a través de los siglos.",
        link: "https://carlosruiz-color.blogspot.com"
      }
    ]
  },
  {
    name: "Cultura",
    items: [
      {
        columnist: "Lucía Fernández",
        title: "Voces Urbanas",
        description: "Crónicas de la vida en la ciudad y sus expresiones culturales.",
        link: "https://lucia-cultura.blogspot.com"
      }
    ]
  },
  {
    name: "Sociedades",
    items: [
      {
        columnist: "Roberto Diaz",
        title: "Dinámicas Sociales",
        description: "Reflexiones sobre cómo interactuamos y construimos comunidad.",
        link: "https://robertodiaz-soc.blogspot.com"
      }
    ]
  },
  {
    name: "Ciencia",
    items: [
      {
        columnist: "Elena Martinez",
        title: "Ciencia para Todos",
        description: "Divulgación científica accesible y relevante.",
        link: "https://elena-ciencia.blogspot.com"
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
          <h5>
            Explora las distintas categorías y descubre a nuestros colaboradores.
            Accede directamente a sus blogs para leer sus artículos completos.
          </h5>
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
