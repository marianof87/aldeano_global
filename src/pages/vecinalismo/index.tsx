import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./vecinalismo.module.css";

export default function Vecinalismo() {
    return (
        <Layout>
            <Head>
                <title>Vecinalismo | Aldeano Global</title>
                <meta name="description" content="Espacio dedicado al vecinalismo y la participación ciudadana en Aldeano Global." />
            </Head>

            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>Vecinalismo</h1>
                <p className={styles.desc}>Participación, Compromiso y Acción Comunitaria</p>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Nuestra Comunidad</h2>
                    <div className={styles.contentRow}>
                        <div className={styles.textContent}>
                            <p>
                                Capilla del Monte celebró en Octubre de 2025, 440 años de su origen poblacional,
                                en un encuentro que albergó varias causas de celebración. Por un lado Los
                                Centros Vecinales, junto a otras Asociaciones Civiles Educativas y Ambientalistas,
                                tuvieron gran participación; dentro del polo gastronómico que se ofreció a los
                                visitantes, con comidas típicas, siendo de gran importancia para estas
                                Instituciones, a la hora de recaudar fondos para distintas causas sociales. La
                                comunidad rindió homenaje a los Veteranos de Malvinas con un multitudinario
                                desfile por las calles principales de la ciudad: más de 60 veteranos de distintos
                                puntos del país se dieron cita en la localidad del norte cordobés para participar de
                                los Juegos Deportivos que eligieron a Capilla del Monte como sede. En dicho
                                desfile, también estuvieron presentes, como es habitual, diferentes agrupaciones
                                gauchas, ante un gran marco de Publico, para disfrutar de la presencia de varios
                                Ballets Folclóricos, y de un escenario con Músicos de la Región.
                            </p>
                        </div>

                        <div className={styles.imageGrid}>
                            <div className={styles.imagePlaceholder}>
                                <Image
                                    src="/img/vecinalismo/440 aniversario de Capilla-4.jpg"
                                    alt="440 Aniversario Capilla del Monte"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className={styles.imagePlaceholder}>
                                <Image
                                    src="/img/vecinalismo/Formación de Brigadistas.jpg"
                                    alt="Formación de Brigadistas"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className={`${styles.imagePlaceholder} ${styles.widePlaceholder}`}>
                                <Image
                                    src="/img/vecinalismo/Formación de Brigadistas9.jpg"
                                    alt="Comunidad en Acción"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center my-5">
                <Link href="/" className="btn-back-home">
                    Volver al inicio
                </Link>
            </div>
        </Layout>
    );
}
