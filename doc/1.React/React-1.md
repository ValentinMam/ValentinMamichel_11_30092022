# Installez votre app avec Create React App

```
npx create-react-app mon-projet
```

# Architecturez votre projet par modules

Liberté sur la structure de leur projet
[Documentation React](https://fr.reactjs.org/docs/faq-structure.html)

Lorsque vous utilisez des frameworks tels que [Next](https://nextjs.org/) ou [Gatsby](https://www.gatsbyjs.com/), une structure de fichiers toute faite vous sera déjà proposée.

Créer des dossiers dans /src

```
dossier /assets
dossier /components
dossier /styles
dossier /pages
```

NON OBLIGATOIRE : dossier supplémentaire dans /src
Je l'utilise pour tester mon ui.

```
dossier /ui
```

Dans /pages , on met App.js , qu'on renomme en Home.jsx .
On n'oublie pas de mettre à jour les paths des imports, par exemple dans index.js

```
import Home from './pages/Home;
```

Pas d'obligation d'utiliser l'extension .jsx .
Votre fichier React fonctionnera très bien aussi avec une extension .js, avantage :

```
vous voyez en un coup d'œil quand votre fichier contient du React, et quand il n'en contient pas.
```

Pour les architectures, il n'existe pas de solution parfaite à utiliser dans tous les cas.

- Découpage selon les fonctionnalités : [documentation React](https://fr.reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes)
- atomic design, qui facilite la collaboration avec les designers : [Cours](https://openclassrooms.com/fr/courses/5249021-initiez-vous-a-la-methode-atomic-design)

# ESLint

Pour les erreurs

```
Dans package.json , vous verrez qu'ESLint fait déjà partie des outils préconfigurés par Create React App.
```

Test

```
console.log d'une variable non déclarée :console.log(ceciEstUneErreur)
```

Rien ne se passe, il faut télécharger l'extension sur VSCode.

# Prettier

Pour le formatage

```
Contrairement à ESLint, Prettier n'est pas installé de base avec Create-React-App.
```

Installation

```
npm install prettier
```

Ensuite, téléchargez l'extension sur VSCode.

Configuration

```
Settings/ barre de recherche : "format" et activer formatOnSave.
Elle permettra de formater le fichier à chaque fois que vous sauvegardez
```


```
Settings/ barre de recherche : "require config" et activer l'option.
Elle permettra de formater uniquement les fichiers qui ont une configuration Prettier.
```
Fichier de configuration 

```
À la racine de votre projet, créez un fichier  .prettierrc  dans lequel vous allez pouvoir préciser quelques règles. Exemple :

{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2
}
```
La documentation de [Prettier](https://prettier.io/docs/en/options.html)



