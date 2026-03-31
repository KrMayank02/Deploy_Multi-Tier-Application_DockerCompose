# Razorpay-Integration-with-Node.js-on-AWS-EC2
This project demonstrates the integration of Razorpay payment gateway with a Node.js application deployed on an AWS EC2 instance. The project covers setting up the Node.js environment, configuring Razorpay for secure payments, and deploying the application on AWS EC2. 
# Step 1: Launch an EC2 Instance
      Log in to AWS Management Console:
# Navigate to the EC2 dashboard and click "Launch Instance."
    Choose an Amazon Machine Image (AMI):
# Select an appropriate AMI (e.g., Amazon Linux 2, Ubuntu Server).
    Choose an Instance Type:
# Select an instance type (e.g., t2.micro for testing purposes).
# Configure Instance Details:
    Configure network settings, add storage if needed, and add tags.
# Configure Security Group:
    Create a new security group that allows SSH (port 22) and HTTP (port 80) or HTTPS (port 443) traffic.
# Launch the Instance:
    Review the instance configuration and launch it using an existing key pair or create a new one.

# Step 2: Connect to Your EC2 Instance

# Step 3: Set Up the Environment
    Update the Package Index

    sudo apt update && sudo apt upgrade -y
\
# Step 4: Deploy Your Node.js Application
    sudo apt  install gh
    gh auth login

    git clone https://github.com/your-username/your-repo.git
    cd your-repo
# Install Node.js and npm:
     sudo apt install -y nodejs npm
# Install Application Dependencies:
     npm install
# Start run the sever file
    node server.js

# After installing dependencies, start your Node.js application using:
    npm start

