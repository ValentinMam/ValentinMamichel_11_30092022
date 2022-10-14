# Découvrez le typage

Les PropTypes sont une des méthodes les plus répandues pour sécuriser le type des props que reçoivent vos composants.
En termes de typage, le typage de JavaScript est considéré comme "faible" : JS fonctionne sur du [typage dynamique](https://developer.mozilla.org/fr/docs/Glossary/Dynamic_typing) et n'assure pas de type safety.

Cela veut dire que lorsqu'on déclare une nouvelle variable, on ne précise pas de quel type sera la nouvelle variable, le code s'adapte à la volée, et on peut tout à fait changer le type d'une variable, contrairement à un langage "typage statique"

Exemple en JS (typage dynamique)

```
let maVariable = 42
maVariable = "quarante trois"
```

Exemple en C (typage statique)

```
int maVariable; // "int" signifie integer
maVariable = 42; // OK
maVariable = "Quarante trois"; // NON OK !
```

Cette flexibilité peut aussi causer votre perte.
C'est pourquoi il existe des outils pour assurer ses arrières, tels que les PropTypes.

# Installez PropTypes

La bibliothèque PropTypes vous permet de déclarer le type des props qui est attendu lorsque vous les récupérez dans vos composants, et de déclencher un warning si ça ne correspond pas. 

```
npm install prop-types
```

Nous allons coder la base des  Card  dans la page  /freelances.

Dans le dossier  /components  , on vient créer un nouveau dossier  /Card  dans lequel vous pouvez créer un fichier  index.jsx. 

```
function Card({ label, title, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </div>
  )
}
export default Card
```
Ce composant récupère 3 props :  label  ,  title  et  picture  . 

Nous allons utiliser les  Card  dans notre fichier  Freelances/index.jsx. 
(pas encore de  datas)
Nous allons créer un tableau d'objets nous-mêmes, qu'on déclare dans  /pages/Freelances/index.jsx  :
```
import DefaultPicture from '../../assets/react-logo.svg'
import Card from '../../components/Card'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
]

function Freelances() {
  return (
    <div>
      {' '}
      <h1>Freelances 👩·💻👨·💻👩·💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  )
}

export default Freelances
```
On va donc importer  PropTypes  depuis la bibliothèque et utiliser  Card.propTypes  pour préciser les types de chacune des propriétés.
Components/Card/index.jsx : 


```
import PropTypes from 'prop-types'

function Card({ label, title, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </div>
  )
}
Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
}
export default Card
```

# Testez une prop
Retournez sur pages/Freelances/index.jsx et testez le : 

```
<Card
   key={`${profile.name}-${index}`}
   label={profile.jobTitle}
   picture={profile.picture}
   title={42}
 />
```
title n'est plus une string : message d'erreur dans la console ! 
Ici, nous n'avons que des  strings  , mais il existe bien plus de types supportés par  propTypes  . Vous pourrez les trouver dans la [doc de React](https://fr.reactjs.org/docs/typechecking-with-proptypes.html#proptypes).


# Exigez une prop

Pour cela, il suffit d'ajouter  isRequired  à la suite du type déclaré.
components/Card/index.jsx : 
```
Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
}
```
Si on enlève un prop title d'un de nos profil   
```
 {
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
```
Message d'erreur dans la console ! 

# Définissez une prop par défaut

Nous allons utiliser  defaultProps. Dans l'exemple précédent, au lieu de déclencher une erreur pour notre propriété manquante (alors qu'on avait précisé  isRequired), nous aurions pu aussi déclarer une propriété par défaut.

Juste en dessous de  Card.propTypes  , nous déclarons un objet  Card.

components/Card/index.jsx : 
```
Card.defaultProps = {title: 'Mon titre par défaut',}
```

Jusqu'à il y a quelques années, prop-types  était la solution recommandée pour typer ses props. Mais aujourd'hui, il existe d'autres solutions, telles que TypeScript ou Flow. 

