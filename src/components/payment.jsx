import React from 'react';
import pay1 from '../assets/jirds_pay.jpg';
import pay2 from '../assets/jirds1.jpg';

const Pay = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Pay Here</h1>
      <div style={styles.imagesContainer}>
        <img src={pay1} alt="First" style={styles.image} />
        <img src={pay2} alt="Second" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    height: '100vh',
    boxSizing: 'border-box',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '2rem',
    textAlign: 'center',
  },
  imagesContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    margin: '10px',
    maxWidth: '45%',
    height: 'auto',
    flex: '1 1 300px',
  },
};

export default Pay;
