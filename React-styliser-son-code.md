# Style dans React

## ClassName

Comme en HTML, nous pouvons associer des attributs à nos éléments : id, href, src fonctionnent normalement en JSX. En revanche, il existe des mots réservés en JavaScript, tels que class.

Il suffit pour cela d'utiliser l'attribut className , et de lui préciser une string. D'ailleurs, vous pouvez utiliser plusieurs classes sur un élément en les mettant à la suite, séparées par un espace.

- Créons dans /src un dossier /styles qui va regrouper nos fichiers CSS. On peut y glisser index.css en n'oubliant pas de modifier le path relatif pour importer index.css dans index.js.

- Je crée donc mon fichier Header.css qui va me permettre de styliser mon composant.

- Header.js , je wrappe mon h1 dans une div à laquelle je précise la className :

```
<div className='header'>
    <h1>Mon projet</h1>
</div>

```

- Header.css , où on crée la classe correspondante :

```

.header {
    color: black;
    text-align: right;
    padding: 32px;
    border-bottom: solid 3px black;
}


```

- Header.js :

```
import '../styles/Header.css'
```

## Atrribut style

les éléments React acceptent également l'attribut style pour styliser un composant. À la différence des éléments HTML, pour lesquels cet attribut est également accepté, il faut lui passer un objet en paramètre. On appelle cette méthode du inline style.

```
Privilégiez davantage la méthode des classNames, ou d'autres méthodes avec des librairies tierces, par exemple.
```

Il existe de nombreuses autres manières de styliser son application, en utilisant par exemple les CSS modules intégrés directement par Create React App (en anglais), ou en ajoutant des bibliothèques tierces. Vous pouvez par exemple utiliser Sass, ou bien encore (c’est ma technique préférée) le CSS in JS. Et même pour ça, il existe également plusieurs manières de faire.

## Images

- Dans /src, on crée un dossier /assets dans lequel on vient mettre notre fichier logo.png,

- Dans Header.js :

```
import logo from '../assets/logo.png'
```

Vous voyez ici, on déclare en fait une variable logo à laquelle on assigne le contenu de notre image.

- Puis vous pouvez l'utiliser dans un élément img, ce qui nous donne pour notre Header.js :

```
import logo from '../assets/logo.png'
import '../styles/Header.css'
function Header() {
    const title = 'votre projet'
    return (
        <div className=’header'>
            <img src={logo} alt='mettre alt' className='class logo' />
            <h1 className='title name'>{title}</h1>
        </div>
    )
}
export default Header

```

La propriété alt permet ici de respecter les normes d’accessibilité
