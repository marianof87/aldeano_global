import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "./prensa.module.css";
import Image from "next/image";

const prensaEntries = [
    {
        title: "Evento Cultural 2024",
        description: "Cobertura completa sobre la participación en el simposio de arte y tecnología.",
        image: "/img/gallery/prensa1.jpg", // Placeholder until user provides real images
        alt: "Participación en evento"
    },
    {
        title: "Mención en el Diario Local",
        description: "Reconocimiento a la labor de difusión cultural y científica en la región.",
        image: "/img/gallery/prensa2.jpg",
        alt: "Recorte de periódico"
    },
    {
        title: "Entrevista Audiovisual",
        description: "Diálogo sobre el impacto de Aldeano Global en la comunidad digital.",
        image: "/img/gallery/prensa3.jpg",
        alt: "Entrevista en video"
    }
];

export default function Prensa() {
    return (
        <Layout>
            <div className={styles.hero}>
                <h1 className={styles.title}>Nuestros Auspiciantes</h1>
                <p className={styles.desc}>Espacio de difusión para emprendedores y colaboradores.</p>

                <div className={styles.text}>
                    <p>
                        Aldeano Global es un proyecto en constante expansión. Nuestra visión también es la de
                        apoyar a los emprendedores y a;adir valor a su trabajo. Por eso, hemos creado esta sección
                        para dar a conocer sus proyectos y colaboraciones.
                    </p>
                </div>
            </div>

            <section className={styles.gallery}>
                {prensaEntries.map((entry, index) => (
                    <article key={index} className={styles.prensaItem}>
                        <div className={styles.imageContainer}>
                            {/* Usamos un div como placeholder si la imagen no existe aún */}
                            <div className={styles.imagePlaceholder}>
                                <span>Espacio para Imagen</span>
                            </div>
                        </div>
                        <div className={styles.caption}>
                            <h3>{entry.title}</h3>
                            <p>{entry.description}</p>
                        </div>
                    </article>
                ))}
            </section>

            <p style={{ textAlign: "center", marginTop: "3rem", marginBottom: "5rem" }}>
                <Link href="/" className={styles.backLink}>Volver al inicio</Link>
            </p>
        </Layout>
    );
}
