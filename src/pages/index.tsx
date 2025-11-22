import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container py-5">
        <h1 className="mb-4">Aldeano Global</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima eaque dolore ipsam aspernatur eligendi, vitae quia hic sint sequi dignissimos ut tenetur saepe sapiente dolor facere dicta blanditiis rem soluta.
        </p>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Misión</h5>
                <p className="card-text">Nuestra misión es...</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Visión</h5>
                <p className="card-text">Nuestra visión es...</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Valores</h5>
                <p className="card-text">Nuestros valores son...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
