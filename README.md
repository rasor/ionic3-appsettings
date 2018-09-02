# Ionic AppSettings Demo

Ionic3 app-scripts has since version 3.2.0 support of [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack) for supplying config setting for dev and prod.  
This means you can do like this:

```bash
# Build for dev using settings in .env.dev
ionic build --dev
# Build for prod using settings in .env.prod
ionic build --prod --aot
```

Howto do that? See `Setup with dev and prod settings`.  
If you need more environments, then you could use the app-scripts copy script for having more .env files and copy them to root before build.  
Howto do that? Continue in `Setup with more environments`  

# Setup with dev and prod settings

* First create a Ionic3 project

```bash
# Verify if you have latest ionic3 installed
ionic help
# Install latest ionic3, if it is not already installed
npm install -g ionic@3.20.0
# Create a blank project
ionic start ionic3-appsettings blank
# enter project folder
cd .\ionic3-appsettings
# open in VSCode
code .

# Optionally add a readme.md file and a licence file to the project

# Test drive
ionic serve

# Create a project in github with the same name
# Upload your code to github
git remote add origin https://github.com/rasor/ionic3-appsettings.git
git push -u origin master

# Update app-scripts to at least "3.2.0" - but less than 4.0.0
npm update @ionic/app-scripts@3.2.0

```

* Add to file `src/declarations.d.ts`

```typescript
// src/declarations.d.ts
// https://github.com/ionic-team/ionic-app-scripts/pull/1471#issue-210604229
declare var process: { env: { [key: string]: string | undefined; } };
```

* Add a dev file `.env.dev`

```text
// .env.dev
// https://github.com/ionic-team/ionic-app-scripts/pull/1471#issue-210604229

ENVIR_NAME=Develpment
SOME_KEY=abc-dev
```

* Add a prod file `.env.prod`

```text
// .env.prod
// https://github.com/ionic-team/ionic-app-scripts/pull/1471#issue-210604229

ENVIR_NAME=Production
SOME_KEY=def-prod
```

* Add a property to Home page logic `src/pages/home/home.ts`

```typescript
export class HomePage {

  envirName: string;

  constructor(public navCtrl: NavController) {
    this.envirName = process.env.ENVIR_NAME;
  }
}
```

* Show property in Home page `src/pages/home/home.html`

```html
<ion-content padding>
  <p>You are viewing environment <strong>{{envirName}}</strong></p>
</ion-content>
```

```bash
# Test drive
ionic serve
# It will write 'Develpment' for envirName
```

```bash
# Build for prod
npm run build --prod --aot
# Now you can drop your /www folder to your prod web server
```

# Setup with more environments

With more environments than dev and prod you need to use the app-scripts copy script...  
To be continued.

Recommended:  
Add `.env.*` to your `.gitignore` file

### Links 

* [feature(environment configuration) by nphyatt](https://github.com/ionic-team/ionic-app-scripts/pull/1471)
* [ionic](https://www.npmjs.com/package/ionic) versions
* [Deploying Ionic to Azure](https://rasor.github.io/deploying-ionic-to-azure.html)

The End