# BaobabBrain

BaobabBrain est une plateforme d'apprentissage en ligne permettant aux étudiants de suivre des cours et de passer des examens, et aux professeurs de créer et de publier des cours ainsi que des examens.

## Technologies

BaobabBrain utilise les technologies suivantes :

- HTML, CSS et JavaScript pour la partie frontend
- Python et Django pour la partie backend
- MySQL pour la base de données

## Fonctionnalités

BaobabBrain propose les fonctionnalités suivantes :

### Utilisateur

- Inscription et connexion
- Gestion de profil (nom, adresse e-mail, mot de passe, rôle)
- Gestion de session utilisateur

### Étudiant

- Consultation des cours disponibles
- Inscription aux cours
- Consultation des cours suivis
- Suivi de progression dans les cours
- Passage d'examens
- Consultation de notes et résultats d'examens
- Consultation de certificats obtenus

### Professeur

- Création et publication de cours
- Création et publication d'examens
- Consultation de progression des étudiants inscrits à ses cours

## Installation

Pour installer BaobabBrain en local, suivez les étapes suivantes :

1. Clonez le dépôt GitHub :

```
git clone https://github.com/Mnafyndiaye/BaobabBrain.git
```

2. Créez un environnement virtuel et activez-le :

```
python -m venv env
source env/bin/activate
```

3. Installez les dépendances du projet :

```
pip install -r requirements.txt
```

4. Créez la base de données :

```
python manage.py migrate
```

5. Créez un superutilisateur pour avoir accès à l'interface d'administration :

```
python manage.py createsuperuser
```

6. Lancez le serveur de développement :

```
python manage.py runserver
```

Le site web sera disponible à l'adresse `http://localhost:8000`.

## Contribution

Si vous souhaitez contribuer à BaobabBrain, veuillez suivre les étapes suivantes :

1. Fork le dépôt
2. Créez une branche pour votre fonctionnalité : `git checkout -b fonctionnalite/nom-de-la-fonctionnalite`
3. Committez vos modifications : `git commit -m 'Ajout de la fonctionnalité X'`
4. Push vos modifications sur votre fork : `git push origin fonctionnalite/nom-de-la-fonctionnalite`
5. Créez une pull request sur le dépôt d'origine

## Auteurs

- [Maman Nafy Ndiaye](https://github.com/Mnafyndiaye)
- [Modou Aicha Diop](https://github.com/modouaicha023)
