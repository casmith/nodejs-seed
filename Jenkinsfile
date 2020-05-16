pipeline {
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
