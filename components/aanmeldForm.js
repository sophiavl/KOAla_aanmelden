import React, { useState } from 'react';
import styles from '../styles/aanmeldForm.module.scss';

const AanmeldForm = () => {
  const [formData, setFormData] = useState({
    voornaam: '',
    achternaam: '',
    telefoon: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('',{
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.nextTick.GOOGLE_PRIVATE_KEY,
      });
      await doc.useServiceAccountAuth({
      });

      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];

      // Append data to the Google Sheet
      await sheet.addRow({
        Voornaam: formData.voornaam,
        Achternaam: formData.achternaam,
        Telefoon: formData.telefoon,
        Email: formData.email,
      });

      console.log('Form data submitted successfully');
      // Optionally, show a success message or navigate to a "thank you" page
    } catch (error) {
      console.error('Error submitting form data:', error.message);
      // Handle error as needed
    }
  };
  

  return (
    <section className={styles.aanmelden}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
          <label className={styles.label} htmlFor='fname'>Voornaam:</label>
          <input
            type='text'
            id='fname'
            name='voornaam'
            value={formData.voornaam}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
          <label htmlFor='lname'>Achternaam:</label>
          <input
            type='text'
            id='lname'
            name='achternaam'
            value={formData.achternaam}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
          <label htmlFor='phone'>Telefoonnummer:</label>
          <input
            type='text'
            id='phone'
            name='telefoon'
            value={formData.telefoon}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
          <label htmlFor='email'>E-mail:</label>
          <input
            type='text'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
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
