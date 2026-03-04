# Deployment of Multi-Tier Application using Docker Compose & Dockerfile

**Objective:** To demonstrate the deployment of a multi-tier application using Docker Compose, including configuring public IP addresses and setting up necessary security group rules for accessing the frontend, API, and database services.

**Real-time Scenario:** A user is tasked to deploy a multi-tier application on a cloud-based virtual machine using Docker Compose. After installing Docker, Docker Compose, and Git, they clone the application repository and update configuration files with the machine's public IP to ensure proper communication between the frontend, API, and backend components.
Post these updates, the user runs docker compose to bring up the application, adjust the security group settings to allow traffic on specific ports (8080, 5000), and verify the deployment by accessing the application via the public IP. This confirms that all components are accessible and functional.

## Major Tools, Environment Used in This Project:

- Docker: Docker is a platform that allows users to package, ship, and run applications within lightweight, isolated environments called containers, ensuring consistent execution across different systems.
- Docker Compose: It is a tool used for defining and managing multi-container Docker applications, using a YAML file to simplify the orchestration services. It specifies the Services, Networks, Volumes, etc. required for the application.
- Git: A version control system used to clone the application repository from GitHub, enabling easy access to the code and management of code. 
- AWS EC2-Instance: An Amazon EC2 instance is a virtual server, or virtual machine, within Amazon's Elastic Compute Cloud (EC2) service, allowing users to run applications on the AWS cloud.

**3-Tier-Application details:**

- Frontend (Web) – running on Node.js environment with npm package manager.
- Backend (API) – running on Node.js environment with npm package manager.
- Database (DB) – running Mongo DB program.
   
The name of the Application is “Wanderlust - Your Ultimate Travel Blog”.

-----------------------------------------------------------------------------------------------------------------

## High Level Project Diagram:

3-Tier Application Architecture

<img width="965" height="557" alt="image" src="https://github.com/user-attachments/assets/58cf7268-11f2-4b9b-99d5-f1bc5de0102a" />

---------------------------------------------------------------------------------------------------------------------------------------------------

## Project Implementation Steps:

- Create an EC2 Instance in AWS Cloud Infrastructure.
- To Clone 3-Tier-Application Source Code from Github.
- To create Docker file for frontend, backend and to create Docker-Compose file for complete application.
- To update the environment files (.env.sample) for correct host URL.
- To update the security group settings of Host Machine (EC2 Instance) to allow the traffic on specific ports on which app services are running.
- Now all the settings are complete, perform the docker-compose up command to run the containers and bring up all the services for real-time usage.
- To verify the deployment of 3-tier-application by accessing the application via public-ip of Host machine.

## Output Result Screenshots:

Clone 3-Tier-Application Source Code from Github

<img width="960" height="238" alt="image" src="https://github.com/user-attachments/assets/c3eb60f3-9d04-4d91-95eb-6c22feb55619" />

-------------------------------------------------------------------------------------------------------------------------------------

<img width="948" height="296" alt="image" src="https://github.com/user-attachments/assets/3c8fea8b-4403-4604-947d-972581b86e07" />

-------------------------------------------------------------------------------------------------------------------------------------

<img width="947" height="389" alt="image" src="https://github.com/user-attachments/assets/23670e4c-856a-438e-b5b1-6d335d21cb94" />

-------------------------------------------------------------------------------------------------------------------------------------

<img width="945" height="462" alt="image" src="https://github.com/user-attachments/assets/9f2025c8-68ef-4572-85df-b48b88884881" />

-------------------------------------------------------------------------------------------------------------------------------------

<img width="925" height="439" alt="image" src="https://github.com/user-attachments/assets/c914da88-ab2b-4544-aba3-2ea2289d3807" />

--------------------------------------------------------------------------------------------------------------------------------------

update the security group settings of Host Machine (EC2 Instance) to allow the traffic on specific ports on which app services are running

<img width="969" height="497" alt="image" src="https://github.com/user-attachments/assets/f8b53409-e7fd-4262-b80b-350fc70b2bf6" />

--------------------------------------------------------------------------------------------------------------------------------------

All the three containers for frontend, backend and mongo DB got created successfully:

<img width="953" height="294" alt="image" src="https://github.com/user-attachments/assets/f41565f7-8cd6-484a-ab60-a4a5f94f5cc1" />

-------------------------------------------------------------------------------------------------------------------------------------------------

<img width="955" height="214" alt="image" src="https://github.com/user-attachments/assets/e1fc70f0-03c4-4544-890a-461356b998d6" />

------------------------------------------------------------------------------------------------------------------------------------------------------

To verify the deployment, try access the web-app URL.

On any web browser, hit the URL:    http://54.166.95.96:5173/

Now the Application is accessible, please find below the screenshot:

<img width="965" height="561" alt="image" src="https://github.com/user-attachments/assets/931dee0a-56dc-4e2e-8e58-32ecd9e8861f" />

-------------------------------------------------------------------------------------------------------------------------------------------------

<img width="956" height="593" alt="image" src="https://github.com/user-attachments/assets/6ec50609-8792-4739-946c-d6907a1b3351" />

-------------------------------------------------------------------------------------------------------------------------------------------------

<img width="949" height="618" alt="image" src="https://github.com/user-attachments/assets/fdaa5c9e-ff19-4aa6-8264-3bfc00316917" />

----------------------------------------------------------------------------------------------------------------------------------------------------

**As per the requirement of the Project: the Deployment of Multi-Tier Application using Docker Compose is performed successfully!**

