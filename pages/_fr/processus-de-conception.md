---
layout: page
title: Processus de conception
lang: fr
trans_url: Design workflow
---
Les décisions prises pour ce service proviennent directement des résultats de recherche avec les utilisateurs, d'entretiens avec les différents propriétaires du produit ou du plan de service. Ces informations sont utilisées dans la conception du système de conception local qui s'aligne à ces exigences. En retour, ces mêmes exigences définissent certaines portions de notre système de conception, plus précisément les principes de conception, le guide de conception des questions et de la bibliothèque locale de composantes.

La bibliothèque locale de composantes est conçue dans Figma, puis intégrée dans une bibliothèque de composantes React. Celles-ci contribuent à part égale au système de conception local.

## Figma

### Bibliothèque locale de composantes

Dans Figma, la bibliothèque locale de composantes est utilisée pour assembler et prototyper les suggestions provenant des résultats de recherche ou des propriétaires du produit. 

### Itération principale

La référence, utilisée par les développeurs afin d'intégrer les nouvelles fonctionnalités, est située dans l'itération principale. Celle ci ne doit pas changer pendant la durée totale du sprint.

Les fonctionnalités (Features) sont utilisées afin d'itérer le produit durant un sprint. À la toute fin d'un sprint, toutes les fonctionnalités jugées prêtes sont déplacées dans l'itération principale. Lorsque l'on effectue ce déplacement vers l'itération principale, il est toujours conseillé de mettre à jour le parcours utilisateur (user flow). 

![Diagramme montrant que la bibliothèque de composantes Figma est une dépendance de la version principale, et que les version archivées proviennent de la version principale de l'itération actuelle.](/assets/img/figma-structure-fr.png "Structure des fichiers Figma")

### Archivage

Des copies des itérations principales sont archivées dans de nouveaux fichiers Figma. L'itération actuelle est toujours dans le même fichier Figma. Ainsi, nous pouvons toujours nous fier sur le même URL pour le fichier Figma. Lors de la création d'une copie archivée, chaque instance d'une composante doit être détachée afin d'éviter de briser les copies archivées lors d'une mise à jour de la bibliothèque de composantes locales. 

![Diagramme montrant le processus pour archiver une version principale.](/assets/img/sprint-to-sprint-process-fr.png "Archivage de la version principale")

## Code

### Bibliothèque locale de composantes

La bibliothèque locale de composantes React reflète exactement la bibliothèque locale de composantes dans Figma. Il est très important de les garder synchronisées.

Les composantes React sont construites avec la bibliothèque de composantes Chakra ui. Celle-ci permet d'assurer une fondation solide en ce qui a trait à l'accessibilité des composantes d'interface locales. Chakra ui est facilement personnalisable et permet l'assemblage de composantes plus complexes. La méthode la plus simple pour adapter les composantes Chakra ui est d'importer une de celle-ci et de l'exporter en lui passant certains paramètres qui la modifient. En procédant ainsi, il est possible de créer des composantes accessibles et compatibles avec l'apparence visuelle de la Boîte à outils de l’expérience Web (BOEW).

## Storybook

Chaque composante contient sa propre documentation par l'entremise de Storybook.js. La documentation est écrite en MDX (Markdown + JSX) et permet une approche modulaire de la documentation de la bibliothèque de composantes locale. Cette documentation doit renseigner la façon dont la composante doit être intégrée ou assemblée dans l'interface des pages, formulaires ou toute autre portion de l'interface visible de l'application. 

La création de documentation storybook est la responsabilité de la personne qui crée une nouvelle composante ou met à jour le fonctionnement d'une composante existante. De facçon générale, chaque composante contient un bref tutoriel, des exemples, les variations disponibles et la définition des types te propriétés (props).

![Diagramme montrant comment la documentation est contenue dans chaque composante, à même le code source de celle-ci.](/assets/img/storybook-modular-documentation-fr.png "Documentation modulaire Storybook")