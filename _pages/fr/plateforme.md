---
layout: page
title:  "Plate-forme technique"
lang: fr
permalink: "/plateforme/"
trans_url: "/platform/"
---

# Un ensemble technologique moderne, sécurisé et évolutif

![Ensemble technologique]({{ site.baseurl }}/assets/img/kubernetesfr.png){:width="500 px"}

Nous avons essayé d’utiliser des solutions de source ouverte, qui sont largement utilisées, qui sont mises à jour fréquemment, qui fonctionnent à la fois sur serveur et client, et qui sont axées sur l’utilisateur, le développement itératif et la mise à l’épreuve continue dans notre choix des technologies à l’étape Alpha. Cette décision nous permet de livrer des produits à temps avec un niveau de sécurité plus élevé et moins de bogues.

# Choix d’ingénierie
 > * **JavaScript :** Il s’agit du langage de programmation que les navigateurs Web peuvent utiliser pour créer des pages Web. Cela nous permet d’utiliser un langage unique à la fois pour l’avant et l’arrière-scène du système; la sécurité et l’efficacité sont garanties.
 > * **React :** Il s’agit d’une bibliothèque JavaScript créée par Facebook. Elle permet aux développeurs de créer rapidement des applications, des ressources et des outils robustes et de haute qualité en rassemblant des composants ensemble.
 > * **GraphQL API :** GraphQL est une interface centrée sur l’utilisateur ou client, qui est située entre l’application web et les bases de données. Il fournit une puissante validation des données et permet aux utilisateurs d’obtenir les données qu’ils veulent en une seule requête.
 > * **Microservices:** Il s’agit d’un style d’architecture logicielle qui structure une application comme un ensemble de services séparés. La construction de plus grands services à partir de plus petits services les rend plus résilients et plus faciles à changer avec le temps puisqu’un microservice est un service autonome qui peut être (re)construit en quelques semaines seulement.
 > * **Kubernetes :** Il s’agit d’une plate-forme de source ouverte permettant d’exploiter des microservices ensemble. Elle offre du rendement et une capacité de mise à l’échelle dès le départ. 
 > * **Infonuage :** L’utilisation de Kubernetes comme plate-forme signifie que notre application fonctionne partout où Kubernetes fonctionne. Pendant la durée du projet, cette transférabilité nous a permis de passer de Microsoft Azure AKS de la GRC, à GKE de Google et à EKS d’Amazon.

# Les avantages de ces choix
> * **Coûts :** Le maintien du coût du changement à un faible niveau est un thème important dans tous les choix technologiques que nous avons faits. La gestion des coûts de commutation nous permet de suivre l’évolution du marché avec l’industrie ou les fournisseurs de commutation.
> * **Sécurité :** L’API GraphQL est strictement typée. Elle nous permet d’empêcher les attaquants d’utiliser les données pour pirater la base de données. Kubernetes facilite également le renforcement du service contre les attaques en mettant en place un point d’entrée unique. Nous avons utilisé des conteneurs Docker qui n’utilisent que ce qui est nécessaire pour fonctionner (rien de plus) et un gestionnaire de paquets avec analyse de vulnérabilité intégrée.
> * **Facilité de maintenance du code :** Le suivi d’une approche de microservice nous permet de décomposer le service global en éléments hautement faciles à maintenir et à mettre à l’essai, couplés de manière lâche et déployables de manière indépendante. Un principe central de React est la pratique consistant à écrire votre application Web dans des blocs séparés appelés _components_. Cela signifie qu’il faut regrouper tout le code et le style pour créer des éléments de l’interface utilisateur (par exemple, la bannière). Cela rend le code facile à comprendre et à mettre à l’essai de manière indépendante. Il permet également de réutiliser facilement les composants à plusieurs endroits. 
> * **Visibilité du système :** Kubernetes facilite la centralisation de la journalisation et permet d’avoir une vue d’ensemble du bon fonctionnement du système.
> * **Fiabilité du système :** L’utilisation de React et de GraphQL nous permet de minimiser le trafic réseau nécessaire à l’utilisation de l’application. Les garanties de fiabilité de Microsoft, associées à l’architecture robuste de Kubernetes, nous donnent l’assurance que le système sera hautement disponible.
> * **Accessibilité :** La construction de notre application à partir de composants React nous a permis de valider et de tester les exigences d’accessibilité de base dès le début du projet (par exemple, la navigation au clavier et l’utilisation de lecteurs d’écran) et de travailler vers la conformité minimale à la norme WCAG 2.1AA.
> * **Bilinguisme :** > Nous avons utilisé une bibliothèque React appelée `lingui` pour rendre l’application bilingue dès le début du projet. Cela nous permet de tester et d’affiner l’expérience en français, aussi facilement que nous pouvons le faire en anglais.
> * **Rendement :** Pour obtenir une application rapide, nous avons utilisé Google Cloud et Azure Kubernetes. Mais qu’entend-on par « rapide »? Les tests de charge ont montré que l’application peut traiter 120 rapports par seconde (~430 000 par heure); c’est-à-dire qu’elle est 5 000 fois plus rapide que le système actuel de signalement des fraudes (le Centre antifraude du Canada a reçu 150 000 appels et 1 200 courriels[1]). Nous avons effectué des tests de charge à l’aide de l’outil de test de charge [k6](https://docs.k6.io). Cela nous a permis de simuler l’action de personnes remplissant le formulaire et de voir comment l’application se comporte lorsque les utilisateurs y accèdent simultanément. Vous pouvez voir les utilitaires [d’accueil](https://github.com/cds-snc/report-a-cybercrime/blob/master/frontend/utils/loadTesting.js) et [api](https://github.com/cds-snc/report-a-cybercrime/blob/master/api/utils/loadTesting.js) pour plus de détails.
  
# DevOps

Nous utilisons GitOps. Cela signifie essentiellement que [GitHub](https://github.com/cds-snc/report-a-cybercrime) est la « source unique de vérité » pour notre application. Cela nous permet d’itérer rapidement, en procédant à un déploiement plusieurs fois par jour.

Le pipeline (un fichier .yaml) dans Azure se déclenche lorsqu’un développeur fait une requête de tirage (PR) à GitHub et que celle-ci est approuvée et fusionnée. Le pipeline exécute une série de commandes npm (vérification du code, des traductions, et des compilations), construit un conteneur de la zone référentielle en question et pousse le ou les conteneurs vers ACR (Azure Container Registry). Nous avons ensuite un programme appelé Flux qui fonctionne dans notre grappe AKS (Azure Kubernetes Service) qui surveille le registre et y place les nouvelles images.
