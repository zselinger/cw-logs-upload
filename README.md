# Serverless Log Metrics Persistance

A simple cloud solution template saving **AWS Lambda** log metrics into an **S3 bucket**, as well as writing metrics into an **AWS EFS**.

The system also automatically provisions **AWS Athena** for S3 object analysis and an **EC2** instance with mounted EFS for varied uses.

## Methodology

The provisioning of the resources is done using **_Terraform_** (for static resources) and **_Serverless Framework_** (for business logic via Lambda). This is an attempt to use best features of both systems.

For communication between systems we're using **SSM parameters**, mainly setting them up in Terraform and reading them in Serverless.

## Provisioned resources

- EFS with _mount target_ and _access point_ (Terraform)
- S3 bucket with _ACL_ (Terraform)
- EC2 instance with configured _VPC_, _Security Groups_, _private key_ and automatic EFS mounting (Terraform)
- Athena database (Terraform)
- AWS Lambda reading and writing logs (Serverless)
