

function Element() {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70vh',
      color: '#fff',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // optional dark overlay
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Discover Our Latest Collection</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
        Shop the trendiest products of the season. High quality, unbeatable prices.
      </p>
      <button style={{
        marginTop: '2rem',
        padding: '12px 24px',
        backgroundColor: '#ff7f50',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
      }}>
        Shop Now
      </button>
    </div>
    
  )
}

export default Element