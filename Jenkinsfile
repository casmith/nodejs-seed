pipeline {
   environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
        registry = 'casmith/grammy'
        registryCredential = 'dockerhub'
        dockerImage = ''
    }

    agent { docker { image 'node:latest' } }

    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Building image') { 
            steps{
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
    }
}
