import Layout from '../components/Layout';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert('Mensaje enviado correctamente!');
        setForm({ name: '', email: '', message: '' });
      } else {
        alert(`Error: ${data.message || 'No se pudo enviar el mensaje'}`);
      }
    } catch (error) {
      alert('Error al enviar el mensaje');
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className={`container py-5 ${styles.container}`}>

        {/* Title with background style */}
        <div className="text-center">
          <h1 className={styles.title}>Contacto</h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Form container - Clean white bg, shadow */}
            <div className="bg-white rounded p-4 p-md-5 shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className={`form-label ${styles.label}`}>Nombre</label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${styles.input}`}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className={`form-label ${styles.label}`}>Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${styles.input}`}
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className={`form-label ${styles.label}`}>Mensaje</label>
                  <textarea
                    name="message"
                    className={`form-control ${styles.input}`}
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-dark" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Back button aligned left */}
        <div className="mt-5">
          <Link href="/" className={styles.backLink}>
            Volver al inicio
          </Link>
        </div>
      </div>
    </Layout>
  );
}
