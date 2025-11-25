import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>

      {/* --- SECCIÓN PRINCIPAL --- */}
      <div className='part1'>
        <h1 className="mb-4">Plataforma Cultural</h1>
        <p className="lead">-ALDEANO GLOBAL ES UN MEDIO DIGITAL-</p>
        <p>·</p>
        <h5 className='txt'>
          Un espacio de comunicación cultural que aborda múltiples expresiones artísticas, sociales y científicas.
          Nos dedicamos a la difusión de contenidos que promueven el conocimiento, la reflexión y el diálogo.
        </h5>
      </div>

      {/* --- CARDS (nuevo estilo) --- */}
      <div className='group'>
        <div className="row mt-5">

          {/* CARD 1 */}
          <div className="col-md-4 d-flex justify-content-center">
            <Link href="/columnas" legacyBehavior>
              <a className="card card1" aria-label="Columnas y Redacción">
                <div className="header">
                  <div className="img-box" aria-hidden>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" fill="#42c16e"/>
                    </svg>
                  </div>
                  <span className="title">Columnas</span>
                </div>
                <div className="content">
                  <h5>Nuestras columnas de redactores, opinión y análisis.</h5>
                  
                </div>
              </a>
            </Link>
          </div>

          {/* CARD 2 */}
          <div className="col-md-4 d-flex justify-content-center">
            <Link href="/podcasts" legacyBehavior>
              <a className="card card2" aria-label="YouTube Podcasts">
                <div className="header">
                  <div className="img-box" aria-hidden>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 3a6 6 0 00-6 6v4a6 6 0 0012 0V9a6 6 0 00-6-6zm0 16a4 4 0 01-4-4v-4a4 4 0 118 0v4a4 4 0 01-4 4z" fill="#42c16e"/>
                    </svg>
                  </div>
                  <span className="title">Podcasts</span>
                </div>

                <div className="content">
                  <h5>Charlas, entrevistas y contenido audiovisual en YouTube.</h5>
                </div>
              </a>
            </Link>
          </div>

          {/* CARD 3 */}
          <div className="col-md-4 d-flex justify-content-center">
            <Link href="/prensa" legacyBehavior>
              <a className="card card3" aria-label="Prensa y Difusión">
                <div className="header">
                  <div className="img-box" aria-hidden>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M4 4h16v2H4zm0 4h10v2H4zm0 4h16v2H4zm0 4h10v2H4z" fill="#42c16e"/>
                    </svg>
                  </div>
                  <span className="title">Prensa</span>
                </div>

                <div className="content">
                  <h5>Promoción, difusión y participación cultural. Conocé y hacete conocer.</h5>
                  
                </div>
              </a>
            </Link>
          </div>

        </div>
      </div>

      {/* --- LOGO --- */}
      <img 
        src="/img/logo.png" 
        alt="Aldeano Global Logo" 
        className="body-logo"
      />

      {/* --- TEXTO FINAL --- */}
      <div>
        <h5 className='card4'>
          La promoción de la diversidad cultural y el respeto intercultural es uno de sus objetivos principales.
          A través de la interacción en redes sociales y la difusión de contenido de calidad, Aldeano Global no solo informa,
          sino que también inspira a sus seguidores a valorar la riqueza de las culturas del mundo, destacando la importancia
          del entendimiento mutuo y el intercambio de ideas.
        </h5>
      </div>

    </Layout>
  );
}

