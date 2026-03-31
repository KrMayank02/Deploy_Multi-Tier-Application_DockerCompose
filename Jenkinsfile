pipeline {
    agent { label 'slave-node' }

    environment {
        IMAGE_NAME = "multi-tier-node-app"
        CONTAINER_NAME = "multi-tier-container"
        PORT = "3000"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'node', url: 'https://github.com/Ilamparidhi-21/Deploy_Multi-Tier-Application_DockerCompose.git'
            }
        }

        stage('Verify Docker') {
            steps {
                sh 'docker --version'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d \
                --name $CONTAINER_NAME \
                -p $PORT:$PORT \
                --env-file .env \
                $IMAGE_NAME
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'docker ps'
            }
        }

        stage('Health Check') {
            steps {
                sh '''
                curl -f http://localhost:$PORT || exit 1
                '''
            }
        }
    }

    post {
        success {
            echo "✅ App deployed successfully!"
        }
        failure {
            echo "❌ Deployment failed!"
        }
        always {
            cleanWs()
        }
    }
}
