import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "./panaderia.module.css";

export default function Panaderia() {
    return (
        <Layout>
            <div className={styles.hero}>
                <h1 className={styles.title}>Panadería</h1>
                <p className={styles.desc}> Aromas y Sabores de la Antigua Tradición Europea.</p>

                <div className={styles.text}>
                    <p>
                        Este es un proyecto de panadería de transición de nueva generación,
                        ya que trabajamos con harina agroecológicas,
                        el tiempo originalmente respetado de leudado biológico en nuestras masas madres,
                        y la seriedad en la elección de las materias primas que se utilizan para confeccionar la
                        panificación de manera consciente.
                    </p>
                </div>
            </div>

            <p style={{ textAlign: "center", marginTop: "3rem", marginBottom: "3rem" }}>
                <Link href="/" className={styles.backLink}>Volver al inicio</Link>
            </p>
        </Layout>
    );
}
