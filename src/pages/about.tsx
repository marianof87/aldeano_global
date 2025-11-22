import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="container py-5">
        <h1 className="mb-4">Nosotros</h1>
        <p className="lead">
          Aldeano Global es una organización dedicada a [describir misión general de la organización].
        </p>

        <div className="row mt-5">
          <div className="col-md-6">
            <h3>Misión</h3>
            <p>
              Nuestra misión es [describir misión concreta]. Trabajamos para generar impacto positivo y brindar soluciones efectivas a nuestras comunidades.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Visión</h3>
            <p>
              Nuestra visión es [describir visión]. Aspiramos a ser líderes en [área de impacto] y fomentar desarrollo sostenible.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h3>Valores</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Integridad</li>
            <li className="list-group-item">Transparencia</li>
            <li className="list-group-item">Colaboración</li>
            <li className="list-group-item">Innovación</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
