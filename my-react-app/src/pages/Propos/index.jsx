import Banniere from '../../components/Banniere'
import paysage2 from '../../assets/paysage2.png'
import styled from 'styled-components'
import Collapse from '../../components/Collapse'
import arrowclose from '../../assets/arrowclose.png'

// attention index en key

const DivStyled = styled.div`
  position: relative;
  height: 223px;
  border-radius: 25px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const contenus = [
  'Les annonces postées sur Kasa garantissent une fiabilité total. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux criètes de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.  Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
]

const valeur = ['Fiabilité', 'Respect', 'Service', 'Sécurité']

function Propos() {
  return (
    <>
      <DivStyled>
        <Banniere image={paysage2} />
      </DivStyled>
      <div className="collapse">
        {contenus.map((content, index) => {
          return (
            <Collapse
              key={index}
              valeur={valeur[index]}
              contenu={content}
              arrow={arrowclose}
            />
          )
        })}
      </div>
      {/* <div className="collapse">
        <Collapse
          valeur="Fiabilité"
          contenu="Les annonces postées sur Kasa garantissent une fiabilité total. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. "
          arrow={arrowclose}
        />
        <Collapse
          valeur="Respect"
          contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          arrow={arrowclose}
        />
        <Collapse
          valeur="Service"
          contenu="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          arrow={arrowclose}
        />
        <Collapse
          valeur="Sécurité"
          contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux criètes de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.  Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          arrow={arrowclose}
        />
      </div> */}
    </>
  )
}
export default Propos
