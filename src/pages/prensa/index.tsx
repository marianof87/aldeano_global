import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "./prensa.module.css";
import Image from "next/image";

const prensaEntries = [
    {
        title: "BioElectronic",
        description: "Equipos bioelectrónicos y terapias con frecuencias para la salud integral.",
        image: "/img/auspiciantes/1.jpg",
        alt: "BioElectronic",
        link: "https://bioelectronic.net/index.php"
    },
    {
        title: "Arreglarte",
        description: "Reparación de calzado con calidad y dedicación.",
        image: "/img/auspiciantes/arreglarte.png",
        alt: "Arreglarte",
        link: "",
        phone: "+54 9 11 4036-2627"
    },
    {
        title: "BioVerde",
        description: "Suplementos homeopáticos para tu salud y bienestar natural.",
        image: "/img/auspiciantes/BioVerde.jpg",
        alt: "BioVerde",
        link: "https://www.instagram.com/bioverde_suplementos?igsh=MWV4c3poY2hiZ25jNQ=="
    },
    {
        title: "La Jabonería Natural",
        description: "Jabones, cremas y cosmética natural artesanal.",
        image: "/img/auspiciantes/La Jaboneria.jpeg",
        alt: "La Jabonería Natural",
        link: "ttps://www.instagram.com/lajaboneria_natural?igsh=MThpeW1sdGF6enByeA=="
    },
    {
        title: "Ser Integral",
        description: "Dietética a domicilio: salud y comodidad en tu puerta.",
        image: "/img/auspiciantes/Ser Integral.jpeg",
        alt: "Ser Integral",
        link: "https://pedix.app/serintegral"
    },
    {
        title: "Señorita Bambú",
        description: "Encuadernaciones artísticas y reparación de libros.",
        image: "/img/auspiciantes/srta bambu.png",
        alt: "Señorita Bambú",
        link: "http://sritabambu.com.ar/"
    },
    {
        title: "Clases de Yoga",
        description: "Instructor Cecilia: clases para armonizar cuerpo y mente.",
        image: "/img/auspiciantes/yogafixed.jpg",
        alt: "Clases de Yoga",
        link: "",
        phone: "+54 9 22 4036-2627"
    },
    {
        title: "Showroom Aura",
        description: "Indumentaria femenina en Capilla del Monte.",
        image: "/img/auspiciantes/IMG-20260309-WA0027.jpg",
        alt: "Showroom Aura",
        link: "https://www.instagram.com/auraindu_capilla?utm_source=qr&igsh=eGp3N2cyd2xvZ2Rt"
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
                            <Image
                                src={entry.image}
                                alt={entry.alt}
                                layout="fill"
                                objectFit="contain"
                                className={styles.sponsorImage}
                            />
                        </div>
                        <div className={styles.caption}>
                            <h3>{entry.title}</h3>
                            <p>{entry.description}</p>

                            {entry.phone && (
                                <p className={styles.phone}>
                                    <strong>Contacto:</strong> {entry.phone}
                                </p>
                            )}

                            {entry.link && entry.link !== "#" && (
                                <a href={entry.link} className={styles.sponsorButton} target="_blank" rel="noopener noreferrer">
                                    Visitar
                                </a>
                            )}
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
