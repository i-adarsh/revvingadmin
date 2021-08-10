pipeline{
    agent none
    stages{
        stage('yarn'){
            agent any
            steps{
                echo "executing yarn ..."
                nodejs('Node-16.6.1'){
                    sh "yarn install"
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
            sh label: '', script: '''rm -rf dockerimg
mkdir dockerimg
cd dockerimg
cp /root/revvingadmin/public/* .
touch Dockerfile
cat <<EOT>>Dockerfile
FROM nginx:latest
COPY * /usr/share/nginx/html/
EOT
sudo docker build -t iadarshkr/revving:latest .
sudo docker container run -itd --name revving -p 80:80 iadarshkr/revving:latest'''
        }
    }
}
}
