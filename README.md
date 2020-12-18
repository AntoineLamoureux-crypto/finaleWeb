# FullStack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Fix du bug pour l'insertion d'image afin que cela soit déployé sur GitHub Pages

1)- Connecter votre projet à votre répertoire Github distant
git remote add origin https://github.com/AntoineLamoureux-crypto/tpSynAntoineL.git

2)- Préparer (vérifier) les fichiers à envoyer à mon Repo Github (Stage)
git add .
///////////////////////////
git add -A : Stage All (nouveau + modifier, supprimer)
git add . : Stage All (nouveau + modifier) SEULEMENT
git add -u : Stage All (modifier, supprimer) SEULEMENT

3)- Commiter les fichiers en état de Stage
git commit -m "Le message"

4)- Pousser le code
git push -u origin master

Etape 2

1)-
2)-Builder de projet
ng build --prod --base-href="https://AntoineLamoureux-crypto.github.io/TpSynAntoineL/"

3)- Pousser le code (git add. && git commit -m "MESSAGE" && git push)

4)- Allez dans Github/VotreRepo/github pages

5)- Dans l'option source : choisir la branche master
