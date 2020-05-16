pipeline {
   environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }

    agent { docker { image 'node:latest' } }

    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
