# useState et useEffect
Le state local est présent à l’intérieur d’un composant : ce composant peut être re-render autant de fois que l'on veut, mais les données seront préservées. 

useState 
```
Hook qui permet d'ajouter un state local dans un composant fonction.
```
```
useState  permettra de stocker le retour de l'API dans le  state. 
```
useEffect
```
Hook qui permet d'exécuter des actions après le render de nos composants, en choisissant à quel moment et à quelle fréquence cette action doit être exécutée, avec le tableau de dépendances.
```
```
useEffect  nous permettra de déclencher le fetch.
```

# Récupérez les données d'une API

Les données sont au cœur d'une application. Qu'il s'agisse de données locales ou bien qu'elles soient récupérées depuis une API, elles viennent alimenter nos composants et nourrir les interactions avec les utilisateurs.

Une API (Application Programming Interface) est littéralement une interface de programmation d’application : c'est un moyen de communication entre deux logiciels. Concrètement, pour nous, c'est ce qui nous permet de récupérer des données. 

Nous allons utiliser [l'API]( https://github.com/OpenClassrooms-Student-Center/7150606-API-React-intermediaire). Lire le  README.md  .  

Vous avez bien l'API qui tourne en local ? On va aller récupérer le contenu de nos questions sur l'API sur la routehttp://localhost:8000

- [fetch()](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch) est la méthode native pour faire des calls API. 
- Nous aurions très bien pu utiliser des outils comme [Axios](https://github.com/axios/axios)

Pour nous atteler à l'utilisation de l'API, nous allons développer la page /survey  . 

Nous allons continuer à développer cette page afin de récupérer les données depuis l'API. 

L’API nous renvoie l’ensemble des questions sur l’endpointhttp://localhost:8000/survey  .

On peut donc l’appeler, comme nous l’avons dit, dans notre useEffect  pour récupérer les questions. 
Si vous regardez la documentation, vous verrez que la route correspondant aux questions ( http://localhost:8000/survey) est une route GET  , et qu'elle ne requiert pas de paramètre : on pourra récupérer les données en faisantfetch('http://localhost:8000/survey') .

Ici, on a donc uniquement besoin d’appeler l’API à la première initialisation de notre composant, et on précise un tableau de dépendances vide 



pages/Survey/index.jsx : 

```
useEffect(() => {
  fetch(`http://localhost:8000/survey`).then((response) =>
    response
      .json()
      .then(({ surveyData }) => console.log(surveyData))
      .catch((error) => console.log(error))
  )
}, [])
```

Les données de notre questionnaire arrivent dans la console 
Ici, nous avons utilisé des  Promises  . Une autre syntaxe aurait été possible avec des async  / await  . Mais attention, il y a une petite subtilité avec useEffect  .
Bon, ce n’est pas tout d’afficher le retour de notre API dans la console : on veut que ce soit visible dans notre application !
Pour cela, nous allons utiliser le state. À l’aide de useState  , on crée donc :
```
const [questions, setQuestions] = useState({})
```
questions  va nous permettre de stocker l’objet qui a été retourné par l’API. À partir de là, on peut exploiter questions  assez simplement en appelant :
setQuestions(surveyData)  .
Ici, vous avez pu voir dans votre console que surveyData  est un objet ayant pour clé des nombres. C’est très pratique pour s’assurer que les questions sont toujours ordonnées, et on peut tout simplement accéder à une question avec :
```
surveyData[questionNumber]
```

De la même manière, pour savoir s’il faut mettre un lien vers le numéro de question suivant, ou bien un lien vers les résultats, vous pouvez tout simplement vérifier ce que donne l’affirmation :

```
surveyData[questionNumberInt + 1] ?
```
Ce qui nous donne le code suivant :
```
function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    const [surveyData, setSurveyData] = useState({})

    useEffect(() => { setDataLoading(true)   fetch(`http://localhost:8000/survey`)
            .then((response) => response.json()
            .then(({ surveyData }) => console.log(surveyData))
            .catch((error) => console.log(error))
        )   }, [])
 
    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            <QuestionContent>{surveyData[questionNumber]}   </QuestionContent>
            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}
export default Survey

```

# Créez un state loading

Une pratique très répandue consiste à mettre un petit loader pour signifier que les données vont bientôt s’afficher. On pourrait mettre un simple texte “Chargement...”, mais bon, on sait manier le CSS.
Pour cela, on a également besoin d’importer keyframes depuis la bibliothèque styled-components  . 

Création d’un fichier utils/Atoms.jsx : 


```
import colors from './colors'
import styled, { keyframes } from 'styled-components'
const rotate = keyframes` from {  transform: rotate(0deg); }  to { transform: rotate(360deg); }`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`
```
On va maintenant utiliser le state pour afficher notre Loader  . Pour cela, on crée une variable isDataLoading  avec useState  :

```
const [isDataLoading, setDataLoading] = useState(false)
```
Dans le useEffect  , on vient modifier notre booléen :

```
useEffect(() => {
    setDataLoading(true)
    fetch(`http://localhost:8000/survey`)
    .then((response) => response.json())
    .then(({ surveyData }) => { setSurveyData(surveyData)  setDataLoading(false) })
}, [])
```
Ce qui nous permet ainsi de conditionner le rendu de notre composant : le Loader  s’affiche tant que les données chargent, et une fois qu’on les a bien, le contenu de la question s’affiche à la place du Loader  .

```
<SurveyContainer>
    <QuestionTitle>Question {questionNumber}</QuestionTitle>
    {isDataLoading ? ( <Loader />) : (
        <QuestionContent>{surveyData[questionNumber]}</QuestionContent>  )} ... 
</SurveyContainer>
```


