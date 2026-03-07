import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./panaderia.module.css";

export default function Panaderia() {
    return (
        <Layout>
            <Head>
                <title>Panadería | Aldeano Global</title>
                <meta name="description" content="Descubre la tradición de la panadería nórdica europea en Aldeano Global." />
            </Head>

            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>Panadería</h1>
                <p className={styles.desc}>Aromas y Sabores de la Antigua Tradición Europea</p>
            </section>

            {/* Process Explanation */}
            <section className={styles.processSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Proceso Tradicional Nórdico</h2>
                    <div className={styles.contentRow}>
                        <div className={styles.textContent}>
                            <p>
                                Nuestra panadería se fundamenta en la herencia de los antiguos maestros panaderos de
                                <strong> Europa del Norte</strong>. Utilizamos harinas agroecológicas de molienda de piedra,
                                preservando el germen y toda la riqueza nutricional del grano.
                            </p>
                            <p>
                                El corazón de nuestro proceso es el <strong>leudado biológico de larga fermentación</strong>.
                                Respetamos los tiempos naturales de nuestras masas madre, permitiendo que las enzimas y
                                bacterias beneficiosas transformen el cereal en un alimento noble, digerible y de aroma profundo.
                            </p>
                            <p>
                                Cada pieza es confeccionada de manera consciente, seleccionando materias primas
                                locales de la más alta pureza para ofrecer una panificación de transición que
                                conecta el pasado con el bienestar del presente.
                            </p>
                        </div>

                        <div className={styles.imageGrid}>
                            <div className={styles.imagePlaceholder}>
                                <Image
                                    src="/img/panaderia/pexels-skyler-ewing-266953-10011797.jpg"
                                    alt="Tradición Panadera"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className={styles.imagePlaceholder}>
                                <Image
                                    src="/img/panaderia/pexels-skyler-ewing-266953-9513725.jpg"
                                    alt="Materia Prima Calidad"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className={`${styles.imagePlaceholder} ${styles.widePlaceholder}`}>
                                <Image
                                    src="/img/panaderia/pexels-veraphoto-14193051.jpg"
                                    alt="Masa Madre Natural"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaContainer}>
                <div className={styles.container}>
                    <h3>¿Deseas probar nuestras especialidades?</h3>
                    <p>Visita nuestro sitio dedicado para pedidos y catálogo completo.</p>
                    <a
                        href="#"
                        className={styles.ctaButton}
                        onClick={(e) => {
                            if (e.currentTarget.getAttribute('href') === '#') {
                                e.preventDefault();
                                alert('Próximamente estaremos vinculando nuestra tienda online. ¡Gracias por tu interés!');
                            }
                        }}
                    >
                        Visitar la Panadería
                    </a>
                    <p></p>
                    <p>O puedes contactarnos al whatsapp +54 9 3541 33-5419</p>
                </div>
            </section>

            <div className={styles.backLinkContainer}>
                <Link href="/" className={styles.backLink}>
                    ← Volver al inicio
                </Link>
            </div>
        </Layout>
    );
}
