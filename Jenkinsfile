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
//         stage('Build'){
//             agent any
//             steps{
//                 echo "yarn build"
//                 nodejs('Node-16.6.1'){
//                     sh "yarn build"
//                 }
//             }
//         }
        stage('Deploy'){
            agent any
            steps{
            sh label: '', script: '''sudo rm -rf dockerimg
mkdir dockerimg
cd dockerimg
sudo cp -rf /root/revvingadmin/public/ .
sudo echo -e "FROM nginx:latest \n COPY * /usr/share/nginx/html/ " > Dockerfile
sudo docker build -t iadarshkr/revving:latest .
sudo docker container run -itd --name revving -p 80:80 iadarshkr/revving:latest'''
        }
    }
}
}
