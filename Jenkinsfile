pipeline {
    agent { docker { image 'node:latest' } }

    environment {
    }

    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
