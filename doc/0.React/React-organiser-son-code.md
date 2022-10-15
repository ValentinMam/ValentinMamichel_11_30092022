# Organiser le projet

Ici, nous allons séparer les fichiers selon leur type : composants/style/images, etc.

## Dossier /components

- créer un dossier /components dans /src, où nous mettrons tous nos composants (header,footer,card...)

```
NON OBLIGATOIRE :
On y glisse App.js et on en profite pour changer le chemin d'import dans index.js. Pour ce qui est des autres fichiers, le plus important est index.js que vous devez garder. Vous pouvez également garder index.css, mais vous pouvez supprimer les autres fichiers.
```

## Créer son premier component

créons notre Header dans un fichier JavaScript à part dans /components que nous pouvons appeler Header.js.

- fichier Header.js

```
function Header() {
    return <h1>Le nom de votre projet </h1>
}
export default Header
```

export default ? Il s'agit d'une syntaxe prévue dans l'ES6, qui vous épargnera d'utiliser les accolades au moment de l'import.

- fichier App.js

```
Import Header from './Header'
function App() {
    return <Header />
}
export default App
```

## Import de composant

c’est Webpack qui nous permet d’importer notre composant aussi facilement, avec import. Cet outil particulièrement utile est essentiel pour lier les fichiers entre eux, afin qu’ils soient interprétés par le navigateur. Et dire que Create React App nous a permis de l’installer sans faire aucune configuration.
