
pipeline {

  agent any
  
  environment {
    
    SERVICE_NAME = "WebK8S"
    REPOSITORY_TAG="${YOUR_DOCKERHUB_USERNAME}/webk8s:${BUILD_ID}"
  
    
  
  }
  
  stages {
    
    stage('Preparation') {
         steps {
            cleanWs()
            git credentialsId: 'GitHub', url: "https://github.com/${ORGANIZATION_NAME}/${SERVICE_NAME}"
         }
      }
    
       stage('Build') {
         steps {
            sh 'echo No build required for Webapp.'
         }
      }
    
    stage('Build and Push Image') {
         steps {
           sh 'docker image build -t ${REPOSITORY_TAG} .'
         }
      }
    
    
      stage('Deploy to Cluster') {
          steps {
            sh 'envsubst < ${WORKSPACE}/deploy.yaml | kubectl apply -f -'
          }
      }
  
  
  
  }

}
