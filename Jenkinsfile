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
        }
        stage('Deploy'){
            agent any
            steps{
            sh label: '', script: '''
sudo cp -rf build /usr/share/nginx/html/
'''
        }
    }
}
}
