import {Frame2 }from '../assets/index'

function Element() {

  return (
    <div>
      <div       style={{
          backgroundImage: `url(${Frame2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh', // Adjust as needed
        }}>

      </div>
    </div>
  )
}

export default Element