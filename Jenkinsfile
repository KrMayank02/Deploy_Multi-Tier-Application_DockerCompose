pipeline {
    agent { label 'slave-node' }

    environment {
        APP_NAME = "multi-tier-app"
        COMPOSE_FILE = "docker-compose.yml"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/KrMayank02/Deploy_Multi-Tier-Application_DockerCompose.git'
            }
        }

        stage('Verify Docker Setup') {
            steps {
                sh 'docker --version'
                sh 'docker-compose --version || docker compose version'
            }
        }

        stage('Stop Existing Containers') {
            steps {
                sh '''
                if [ -f ${COMPOSE_FILE} ]; then
                    docker-compose down || docker compose down || true
                fi
                '''
            }
        }

        stage('Build & Start Containers') {
            steps {
                sh '''
                docker-compose up -d --build || docker compose up -d --build
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        success {
            echo "✅ Deployment Successful!"
        }
        failure {
            echo "❌ Deployment Failed!"
        }
        always {
            cleanWs()
        }
    }
}
