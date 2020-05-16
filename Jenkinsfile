pipeline {
   environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
        registry = 'casmith/grammy'
        registryCredential = 'dockerhub'
        dockerImage = ''
    }
    agent any
    stages {
        stage('build') {
            agent { docker { image 'node:latest' } }
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Building image') { 
            agent any
            steps{
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
        stage('Deploy Image') {
            steps{
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Remove Unused docker image') {
            steps {
                sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }
    }
}
