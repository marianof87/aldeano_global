import Layout from '../../components/Layout';
import Link from 'next/link';
import styles from '../../styles/Blog.module.css';
import Head from 'next/head';

export default function BlogLanding() {
    return (
        <Layout>
            <Head>
                <title>Blog | Aldeano Global</title>
                <meta name="description" content="Descubre el Blog de Aldeano Global, un espacio dedicado a la reflexión, el conocimiento y la cultura." />
            </Head>

            <div className={styles.blogContainer}>
                <div className={styles.glassCard}>
                    <h1 className={styles.title}>Blog de Aldeano Global</h1>

                    <div className={styles.description}>
                        <p>
                            Bienvenido a nuestro rincón de pensamiento. El Blog de <strong>Aldeano Global</strong> es una extensión de nuestra misión:
                            un espacio vibrante donde la cultura, la ciencia y la consciencia se encuentran para generar diálogos transformadores.
                        </p>
                        <p>
                            Aquí compartimos perspectivas profundas sobre el vecinalismo, el arte y los desafíos de nuestra sociedad contemporánea,
                            buscando siempre inspirar y conectar a nuestra comunidad global.
                        </p>
                    </div>

                    <a
                        href="https://comunicacionagloba.wixsite.com/aldeano-global"
                        className={styles.ctaButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ir al Blog
                    </a>
                </div>

                <div className="text-center mt-5 mb-5">
                    <Link href="/" className="btn-back-home">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
