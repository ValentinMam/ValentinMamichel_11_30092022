# Single Page Application

Début des années 2000, le concept de SPA commence à émerger.

- Les utilisateurs ne chargent une page web qu'une seule fois (le fameux index.html).
- Au lieu de récupérer toute la page avec un call API, on les récupère de manière distincte, petite partie par petite partie, ce qui permet à l'utilisateur d'interagir de manière beaucoup plus dynamique.
- L'utilisateur peut naviguer entre plusieurs pages, et JavaScript (React) gère l'affichage de nouvelles pages au sein du même domaine, sans qu'un rafraîchissement complet de la page soit nécessaire.


```
Certains inconvénients : vos utilisateurs doivent impérativement avoir JavaScript pour que votre site fonctionne, ou bien au niveau du SEO qui est plus laborieux pour les Single Page Applications.
```

Gatsby ou bien Next.js sont des frameworks basés sur React qui permettent de générer notre application côté serveur, et donc de faire du Server Side Rendering (SSR).

Ils génèrent le HTML depuis React côté serveur, et puis l'envoient avec chaque page déjà générée au client. Pour ce qui est de leur routing, ils mettent leur propre solution à disposition. Elle se comporte comme du routing de SPA au niveau de l'expérience utilisateur, mais qui est un peu plus complexe qu'il n'y paraît. 


# React Router 

React ne nous fournit pas directement une solution pour gérer les routes de notre application. 
Il existe donc plusieurs solutions de routing. 

Une route permet d'afficher des composants de manière conditionnelle, si le path (chemin) de l'URL correspond au path de la route. On lui passe en prop le path auquel la route correspond, et elle se charge d'afficher les children qui lui sont passés.

[Documentation React Router](https://v5.reactrouter.com/web/guides/quick-start)

Installation
```
npm install react-router-dom   
```

Commençons par le Router. Il doit être placé à la racine de notre arborescence de composants, et va permettre d'englober toutes les routes que nous allons définir. Fichier index.jsx  à la racine de notre projet.

Remarques : fichier index.jsx react-router-dom 5.2  
```
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/freelances">
          <Freelances />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
```


fichier index.jsx react-router-dom 6.4

```
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
```
1. Les pages

pages/Home/index.jsx


```
function Home() {
  return (
    <div>
      <h1> Page d'accueil 🏠</h1>
    </div>
  )
}

export default Home
```

pages/Freelances/index.jsx


```
function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
    </div>
  )
}

export default Freelances
```
pages/Survey/index.jsx

```
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
      {questionNumberInt === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  )
}

export default Survey
```
pages/Results/index.jsx
```
function Results() {
  return (
    <div>
      <h1>Résultats</h1>
    </div>
  )
}

export default Results
```


2. Les composants

components/Header/index.jsx

```
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey/1">Questionnaire</Link>
      <Link to="/freelances">Profils</Link>
    </nav>
  )
}

export default Header
```
components/Error/index.jsx

```
function Error() {
  return (
    <div>
      <h1>Oups 🙈 Cette page n'existe pas</h1>
    </div>
  )
}

export default Error
```
