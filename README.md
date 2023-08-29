<h1 align="center"> Portfolio Website (ReactJS + GitHub + Firebase) </h1>

This project developed by React.JS & used Github workflow to deploy the project to firebase.

## 🏁 Getting Started

Clone down the repository using `git` or Download the project file.

## 🛠 Installation & Setup

1. Installation: Run `npm install` in the project directory.

2. After installlation, you can run: `npm start` to start-up the project.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## ⚙️ Deploy to Firebase using GitHub Actions

1. Set-up the <a href="https://console.firebase.google.com/">Firebase</a> account, then ***Create a project***.

2. Open your terminal & run `npm install -g firebase-tools` to install the `firebase-cli`.

3. Open your project on the terminal & run `firebase login:ci` to login Firebase & generate token for your project.

4. Go to your repository in GitHub.<br>

    * Go to ***Settings*** tab.
    * Select ***Secrets & variables***
    * Click ***Actions***.
    * Click ***New repository secret*** & paste the token.

6. Go to ***Actions*** tab in your repository & Choose ***NodeJS*** workflow template.

7. Search ***GitHub Action for Firebase*** in marketplace & set-up your workflow.yaml.

8. Go back your terminal & run `firebase init` in your project directory.<br>

   You will be prompted to respond to some questions.
   
     * Choose hosting: Configure files for Firebase hosting and (optionally) set up GitHub Action deploys.
     * Use an existing project: Select the Firebase project you created earlier (`react-firebase-app`).
     * Enter `build` as the public directory.
     * Configure as a single-page app: `Yes`.
     * Set up automatic builds and deploys with GitHub: `No`.
   
## Usage Instructions

Open the project folder & Navigate to `/src/components/`. <br/>
You will find all the components used & you can edit your information accordingly.
