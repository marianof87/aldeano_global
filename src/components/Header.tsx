import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand">
            Aldeano Global
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/expresiones" className="nav-link">
                  Expresiones
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/personas" className="nav-link">
                  Personas
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/salud-ciencia-conciencia" className="nav-link">
                  Salud, Ciencia y Conciencia
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
