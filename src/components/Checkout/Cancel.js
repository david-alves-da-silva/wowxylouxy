
import React, { useEffect } from 'react'
const styles = {
  height: '100vh',
  fontSize: 20
}
function Cancel({ history }) {
  useEffect(() => setTimeout(() => history.push('/cart'), 3000))
  return (
    <>
      <div style={styles} className='d-flex justify-content-center align-items-center'>
        <div className="alert alert-warning mt-3 mb-3">
          <p className="icontext"><i className="icon text-cancel fa fa-thumbs-up"></i>Vous serez redirigé dans quelques secondes ...</p>
        </div>
      </div>
    </>
  );
}
export default Cancel