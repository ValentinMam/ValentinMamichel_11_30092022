
# CSS in JS

Le scope correspond aux parties de notre code qui ont accès à un élément, comme une variable, ou une classe CSS. Il peut être global (comme c'est le cas pour les classes CSS), ou bien concerner une partie spécifique du code.

Pour scoper le style, il existe des solutions, telles que des méthodologies d'architecture de CSS ou bien des outils spécifiques comme Sass (qui requiert un préprocesseur). Mais depuis quelques années, le CSS in JS émerge comme l'une des solutions à notre problème.

Le CSS in JS est généré… avec du JavaScript. Il sera inséré dans le DOM dans un élément  ```<style>.```

On garde l'idée que le style est attaché à un composant spécifique, directement dans le même fichier. 
Il existe plusieurs solutions de CSS in JS, avec leurs syntaxes propres. Ici nous allons nous intéresser à la bibliothèque styled components. 

```
npm install styled-components
```


# Logique styled components
La principale chose à comprendre est que tout est composant. 

Dans  components/Card/index.jsx : 

```
// import 
import styled from 'styled-components'

// const 
const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`
const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #5843e4;
`
```
```
function Card({ label, title, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>{title}</span>
    </div>
  )
}
```
Vous pouvez ainsi générer tous les éléments existants du DOM… mais pas que. Si je veux styliser un élément qui vient d'une bibliothèque, Styled components prévoit ce cas. 

components/Header/index.jsx : 

```
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  background-color: #f5f5f5;
  text-decoration: none;
  font-size: 18px;
`
function Header() {
  return (
    <nav>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/survey/1">Questionnaire</StyledLink>
      <StyledLink to="/freelances">Profils</StyledLink>
    </nav>
  )
}
export default Header
```

# Passez des props dans le CSS

On va pouvoir passer des props à nos composants directement depuis notre composant React. Voyons voir concrètement ce que cela donne dans notre  components/Header :

```
const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: #5843E4;`}
`
```
```
    <StyledLink to="/survey/1" $isFullLink>
        {' '}
        Faire le test{' '}
      </StyledLink>
```

```$``` permet de signaler à  styled-components  que notre prop nous sert pour le style, et qu'elle ne doit pas être passée dans le DOM.
Il est uniquement nécessaire pour passer une prop si le composant en question est un composant React, comme ici pour  Link  (et non un élément HTML). Si mon styled component était basé sur une simple balise  a  , je pourrais totalement utiliser la prop  isFullLink  sans le ```$``` .

# Utilisez des variables 

- On crée donc un dossier  /utils  directement dans  src/  
- Dans lequel on met un dossier  /style
- On y crée notre fichier  colors.js  :

```
const colors = {
  primary: '#e71c87',
  secondary: '#8186A0',
  backgroundLight: '#F9F9FC',
}
export default colors
```

Pour l'utiliser, il nous suffit de l'importer directement dans notre template string components/Header/index.jsx : 

```
import colors from '../../utils/style/color'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
```

components/Card/index.jsx : 

```
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import DefaultPicture from '../../assets/react-logo.svg'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card

```
pages/Freelances/index.jsx : 

```
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/color'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
]

function Freelances() {
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelances
```


# Créez un style global

src/index.jsx : 

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'

// on importe styled-components 

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      margin: 0;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>

    // on importe GlobalStyle 

      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
```