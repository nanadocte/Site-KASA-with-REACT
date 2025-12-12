import styled from 'styled-components'
import { useState } from 'react'
import arrowclose from '../../assets/arrowclose.png'
import arrowopen from '../../assets/arrowopen.png'
const ArrowStyled = styled.img`
  height: 13.71px;
  width: 24px;
`

function Collapse({ valeur, contenu }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="collapse__item">
      <div className="collapse__topbar" onClick={() => setOpen(!open)}>
        <h3 className="collapse__title">{valeur}</h3>
        <ArrowStyled
          className="collapse_arrow"
          src={open ? arrowclose : arrowopen}
          alt="toggle"
        ></ArrowStyled>
      </div>
      {open && (
        <div className="collapse__contenu">
          {Array.isArray(contenu) ? (
            contenu.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{contenu}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Collapse
