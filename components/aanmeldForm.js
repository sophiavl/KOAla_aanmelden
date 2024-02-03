import React, { useState } from 'react';
import styles from '../styles/aanmeldForm.module.scss';




const AanmeldForm = () => {
  const [form, setForm] = useState({
    voornaam: '',
    achternaam: '',
    telefoon: '',
    email: '',
  });


  return (
    <section className={styles.aanmelden}>
      <form className={styles.form} onSubmit={submitForm}>
          <label className={styles.label} htmlFor='fname'>Voornaam:</label>
          <input
            type='text'
            id='fname'
            name='voornaam'
            value={form.voornaam}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <label htmlFor='lname'>Achternaam:</label>
          <input
            type='text'
            id='lname'
            name='achternaam'
            value={form.achternaam}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <label htmlFor='phone'>Telefoonnummer:</label>
          <input
            type='text'
            id='phone'
            name='telefoon'
            value={form.telefoon}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <label htmlFor='email'>E-mail:</label>
          <input
            type='text'
            id='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <section className={styles.buttonContainer}>
            <button className={styles.aanmeldknop} type='submit'>
              Meld je aan!
            </button>
          </section>
        </form>
    </section>
  );
}

export default AanmeldForm;
