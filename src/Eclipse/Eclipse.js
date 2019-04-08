import React from 'react'
import styles from './styles.css'

const Eclipse = props => (
  <>
    <style>{`${styles.toString()}`}</style>
    <div className="lds-eclipse">
      <div />
    </div>
  </>
)

export default Eclipse
