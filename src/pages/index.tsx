import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container py-5">
        <h1 className="mb-4">Plataforma Cultural</h1>
        <p className="lead">
          -Aldeano Global es un medio digital-</p>
          <p className="text">Un espacio de comunicación cultural que aborda múltiples expresiones artísticas, sociales y científicas. Nos dedicamos a la difusión de contenidos que promueven el conocimiento, la reflexión y el diálogo en torno a temas de interés cultural y social. Ofrecemos una variedad de formatos, incluyendo columnas de opinión, podcasts en YouTube y espacios para prensa y difusión.</p>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card1">
              <div className="card1-body">
                <h5 className="card1-title">Columnas & Redacción</h5>
                <p className="card1-text">Nuestras columnas de redactores</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card2">
              <div className="card2-body">
                <h5 className="card2-title">YouTube Podcasts</h5>
                <p className="card2-text">Conocé nuestros podcasts</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card3">
              <div className="card3-body">
                <h5 className="card3-title">Prensa & Difusión</h5>
                <p className="card3-text">Conocé y hacete conocer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
