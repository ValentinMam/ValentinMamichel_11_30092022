# Create React App

Également créé par les équipes de Facebook, Create React App est un outil qui vous aidera à faire tout ce que je viens de vous citer. S'il existe d'autres outils (Next, Gatsby, Parcel, etc.), Create React App reste la référence, notamment pour les nouveaux utilisateurs de React.
Create React App va vous permettre de générer un squelette de code pour votre application. Il embarque un certain nombre d'outils préconfigurés, tels que Webpack, Babel et ESLint, afin de vous garantir la meilleure expérience de développement possible.

## Installez et lancez CRA

gestionnaire de paquet (package manager)

- yarn
- npm

commande :

- npx create-react-app nom-du-projet

## Extensions VS Code

- Prettier
- EsLint

## Dossiers installés

1. node_modules : c’est là que sont installées toutes les dépendances de notre code. Ce dossier peut vite devenir très volumineux.
2. public : dans ce dossier, vous trouverez votre fichier index.html et d’autres fichiers relatifs au référencement web de votre page.
3. src : vous venez de rentrer dans le cœur de l’action. L’essentiel des fichiers que vous créerez et modifierez seront là.

## Fichiers installés

1. package.json : situé à la racine de votre projet, il vous permet de gérer vos dépendances (tous les outils permettant de construire votre projet), vos scripts qui peuvent être exécutés avec yarn, etc. Si vous examinez son contenu, vous pouvez voir des dépendances que vous connaissez : React et ReactDOM :

- vous y trouverez react-scripts, créé par Facebook, qui permet d’installer Webpack, Babel, ESLint et d’autres pour vous faciliter la vie ;

2. index.html : dans /public

- Il s'agit du template de votre application. Il y a plein de lignes de code, mais vous remarquez `<div id="root"></div> `

3. index.js : dans /src

- permet d’initialiser notre app React

4. App.js : dans /src

- notre premier composant React

5. README.md

- page d’explication si vous mettez votre code sur GitHub, par exemple.

6. .gitignore

- fichier qui précise ce qui ne doit pas être mis sur GitHub, typiquement le volumineux dossier des node_modules.

## Supprimer les fichiers inutiles

Tous les fichiers non évoqués plus haut peuvent être supprimés.

## Différence dependencies et devDependencies

Les deux sont installées depuis votre package manager.

- les dependencies sont des dépendances qui sont nécessaires à notre code pour fonctionner, aussi bien en local qu'en production.

- les devDependencies sont uniquement nécessaires pour la phase de développement.

## Démarrez votre projet

Voir README.md crée avec le projet (commandes).

- npm start : http://localhost:3000/
