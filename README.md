# Information
[![License](https://poser.pugx.org/eluceo/ical/license)](https://packagist.org/packages/eluceo/ical)
[![Latest Stable Version](https://poser.pugx.org/eluceo/ical/v/stable)](https://packagist.org/packages/eluceo/ical)
[![Monthly Downloads](https://poser.pugx.org/eluceo/ical/d/monthly)](https://packagist.org/packages/eluceo/ical)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/markuspoerschke/iCal/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/markuspoerschke/iCal/?branch=master) 
[![Code Coverage](https://scrutinizer-ci.com/g/markuspoerschke/iCal/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/markuspoerschke/iCal/?branch=master) 
[![Build Status](https://travis-ci.org/markuspoerschke/iCal.svg?branch=master)](https://travis-ci.org/markuspoerschke/iCal)

App generating flashcards with your voice

# demo

you found a demo here:
```
https://kovoel.herokuapp.com
```

# Installation

please download and install node.js
url:
```
https://nodejs.org/en/
```

minimum version for node.js is: v9.5.0


please generate a free "Google Cloud Translation API" 
here:
```
https://cloud.google.com/translate/docs/
```
Put this into process.env.GoogleCloudTranslationApiKey.


please install the dependencies with the following command:
```
yarn install
```

for starting the client-side-application please execute the
following command:
```
yarn hack
```

for starting the server-side application please execute the 
following command:
```
yarn start
```

please install PostgreSQL in the minimum version 10.3
you can download PostgreSQL here:
https://www.postgresql.org/
After installation please create a database with the
following command:
```
"CREATE DATABASE kovoel" | psql
```

