pipeline {
    agent { label 'production' }

    environment {
        COMPOSE_FILE = "docker-compose.yml"
        PROJECT_NAME = "multi-tier-app"
    }

    stages {

        stage('Checkout') {
            steps {
                // Multibranch automatically checks out code
                echo "Code already checked out by Jenkins"
            }
        }

        stage('Verify Environment') {
            steps {
                sh '''
                echo "User: $(whoami)"
                docker --version
                docker compose version || docker-compose --version
                '''
            }
        }

        stage('Stop Old Containers') {
            steps {
                sh '''
                if [ -f ${COMPOSE_FILE} ]; then
                    docker compose down || docker-compose down || true
                fi
                '''
            }
        }

        stage('Build & Deploy') {
            steps {
                sh '''
                docker compose up -d --build || docker-compose up -d --build
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                docker ps
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Application Deployed Successfully!"
        }
        failure {
            echo "❌ Deployment Failed!"
        }
        always {
            cleanWs()
        }
    }
}
