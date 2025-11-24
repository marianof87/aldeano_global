import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className='part1'>
        <h1 className="mb-4">Plataforma Cultural</h1>
        <p className="lead">
          -ALDEANO GLOBAL ES UN MEDIO DIGITAL-</p>
          <p>· </p>
          <h5 className='txt'>Un espacio de comunicación cultural que aborda múltiples expresiones artísticas, sociales y científicas. Nos dedicamos a la difusión de contenidos que promueven el conocimiento, la reflexión y el diálogo en torno a temas de interés cultural y social. Ofrecemos una variedad de formatos, incluyendo columnas de opinión, podcasts en YouTube y espacios para prensa y difusión.</h5>
          </div>
          <div className='group'>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card1">
              <div className="card1-body">
                <h5 className="card1-title">Columnas & Redacción</h5>
                <p className="card1-text">Nuestras columnas de redactores</p>
          
          </div>
          </div>
          
          
          <div className="col-md-4">
            <div className="card2">
              <div className="card2-body">
                <h5 className="card2-title">YouTube Podcasts</h5>
                <p className="card2-text">Disfrutá de nuestros podcasts</p>
              
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
        </div>
      
      <img 
  src="/img/logo.png" 
  alt="Aldeano Global Logo" 
  className="body-logo"
/>
      <div>
        <h5 className='card4'>
La promoción de la diversidad cultural y el respeto intercultural es uno de nuestros objetivos principales. 
A través de la interacción en redes sociales y la difusión de contenido de calidad, Aldeano Global no solo informa, sino que también inspira a sus seguidores a valorar la riqueza de las culturas del mundo, destacando la importancia del entendimiento mutuo y el intercambio de ideas.
        </h5>
        </div>
    </Layout>
  );
}
