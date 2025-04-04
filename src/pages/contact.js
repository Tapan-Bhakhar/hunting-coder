import React, { useState } from 'react';
import styles from '@/styles/Contact.module.css';

const Contact = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ desc, setDesc ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, desc };
    // console.log(data);
     fetch('http://localhost:3005/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    })
    .then((response) => response.text())
    .then((data) => {
      console.log('Success:', data);
      // alert('Your response has been recorded successfully!\n\nThank you for contacting us.');
      alert('Your response has been recorded successfully! Thank you for contacting us.');
      setName('');
      setEmail('');
      setPhone('');
      setDesc('');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error submitting your response. Please try again later.');
    });
  };

  const handleChange =  (e) => {
    if(e.target.name === 'name') setName(e.target.value);
    if(e.target.name === 'email') setEmail(e.target.value);
    if(e.target.name === 'phone') setPhone(e.target.value); 
    if(e.target.name === 'desc') setDesc(e.target.value);

  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>

        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Enter your Name</label>
          <input type="text" value={name} onChange={handleChange} className="form-control" id="name" name="name" placeholder="Enter Name" />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email address</label>
          <input type="email" value={email} onChange={handleChange} className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Phone Number</label>
          <input type="phone" value={phone} onChange={handleChange}  className="form-control" id="phone" name="phone" placeholder="Enter Phone no." />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel}>Eleborate your concern</label>
          <textarea value={desc} onChange={handleChange} className="form-control" id="desc" name="desc" placeholder='Write your concern here' />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Contact;
