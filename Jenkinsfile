pipeline{
    agent none
    stages{
        stage('Stage'){
            agent any
            steps{
                echo "executing yarn ..."
                nodejs('Node-16.6.1'){
                    sh "yarn"
                }
            }       
        }
        stage('Build'){
            agent any
            steps{
                echo "yarn build"
                nodejs('Node-16.6.1'){
                    sh "yarn build"
                }
            }
            post {
        always {
            archiveArtifacts artifacts: 'build/*', onlyIfSuccessful: true
        }
       }
        }
        
        stage('Deploy'){
            agent any
            steps{
            sh label: '', script: '''
sudo pwd
sudo ls -al
sudo cp -rf ./build/* /usr/share/nginx/html/
sudo systemctl restart nginx
'''
        }
    }
}
}
