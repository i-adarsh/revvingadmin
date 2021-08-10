pipeline{
  agent none
  stages{
    stage('Starting Yarn'){
      agent any
      steps{
        sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash'
        sh ' ~/.nvm/nvm.sh'
        sh 'sudo nvm install node'
        sh 'sudo npm install -g npm@7.20.5'
        sh 'sudo npm install yarn -g'
        sh 'yarn'
      }       
    }
    stage('Build'){
      agent any
      steps{
        sh 'yarn build'
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
