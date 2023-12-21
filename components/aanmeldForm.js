import React, { useState } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import styles from '../styles/aanmeldForm.module.scss';

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;


const AanmeldForm = () => {
  const [form, setForm] = useState({
    voornaam: '',
    achternaam: '',
    telefoon: '',
    email: '',
  });

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  const appendSpreadsheet = async (row) => {
    try{
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        priavte_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
      });

      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      await sheet.addRow(row);
      setForm({
        voornaam: '',
        achternaam: '',
        telefoon: '',
        email: '',
      });
    } catch (e) {
      console.error('Error: ', e);
    }
  }

  const submitForm = (e) => {
    e.preventDefault();

    if(
      form.voornaam !== '' &&
      form.achternaam !== '' &&
      form.telefoon !== '' &&
      form.email !== ''
    ) {
      const newRow = {
        voornaam: form.voornaam,
        achternaam: form.achternaam,
        telefoonnummer: form.telefoon,
        email: form.email,
      };
  
      appendSpreadsheet(newRow);
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  

  return (
    <section className={styles.aanmelden}>
      <form className={styles.form} onSubmit={submitForm}>
          <label className={styles.label} htmlFor='fname'>Voornaam:</label>
          <input
            type='text'
            id='fname'
            name='voornaam'
            value={formData.voornaam}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <label htmlFor='lname'>Achternaam:</label>
          <input
            type='text'
            id='lname'
            name='achternaam'
            value={formData.achternaam}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <label htmlFor='phone'>Telefoonnummer:</label>
          <input
            type='text'
            id='phone'
            name='telefoon'
            value={formData.telefoon}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <label htmlFor='email'>E-mail:</label>
          <input
            type='text'
            id='email'
            name='email'
            value={formData.email}
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
