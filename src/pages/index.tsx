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
                      <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" fill="#42c16e" />
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
                      <path d="M12 3a6 6 0 00-6 6v4a6 6 0 0012 0V9a6 6 0 00-6-6zm0 16a4 4 0 01-4-4v-4a4 4 0 118 0v4a4 4 0 01-4 4z" fill="#42c16e" />
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
                      <path d="M4 4h16v2H4zm0 4h10v2H4zm0 4h16v2H4zm0 4h10v2H4z" fill="#42c16e" />
                    </svg>
                  </div>
                  <span className="title">Auspiciantes</span>
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

      {/* --- REDES SOCIALES --- */}
      <div className="socialSection">
        <div className="text-center">
          <a href="https://www.facebook.com/Aldeanos.glob" target="_blank" rel="noopener noreferrer" className="socialIcon" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <span className="socialLabel">Facebook</span>
        </div>

        <div className="text-center">
          <a href="https://www.instagram.com/aldeano_global/" target="_blank" rel="noopener noreferrer" className="socialIcon" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#f09433" }} />
                  <stop offset="25%" style={{ stopColor: "#e6683c" }} />
                  <stop offset="50%" style={{ stopColor: "#dc2743" }} />
                  <stop offset="75%" style={{ stopColor: "#cc2366" }} />
                  <stop offset="100%" style={{ stopColor: "#bc1888" }} />
                </linearGradient>
              </defs>
              <path fill="url(#ig-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <span className="socialLabel">Instagram</span>
        </div>
      </div>

    </Layout>
  );
}

