# Kovoel
こえ(Koe / Voice)　+ おぼえる（Oboeru / Memorize）

App generating flashcards with your voice

You find a demo here:
- https://kovoel.herokuapp.com

## Getting Started
### Prerequisites

- node => v9.5.0
- yarn
- PostgreSQL => v10.3

### Google Translation API
1. Generate a free [Google Cloud Translation API](https://cloud.google.com/translate/docs/)
2. Put the API key into process.env.GoogleCloudTranslationApiKey

## 1. Installing

Run the following command to install the dependencies.
```
$ yarn install
```
### 2. Creating DB & Running migration & Seeding dummy data
```
$ "CREATE DATABASE kovoel" | psql
$ yarn migrate
$ yarn seed
```
### 3. Starting Client-Side Application
Run the folloing command to start the client-side application.
```
$ yarn hack
```
### 4. Starting Server-Side Application
Run the folloing command to start the client-side application.
```
$ yarn start
```
=> You'll see the app on http://localhost:3000!
