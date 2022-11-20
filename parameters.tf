resource "aws_ssm_parameter" "efs_access_point_arn" {
  name        = "/cwlogs/efs/efs_access_point_arn"
  description = "EFS access point ARN"
  type        = "SecureString"
  value       = aws_efs_access_point.access_point_lambda.arn
}

resource "aws_ssm_parameter" "vpc_security_group" {
  name        = "/cwlogs/vpc/security_group_name"
  description = "Security group name"
  type        = "SecureString"
  value       = "sg-cf39e3a4"
}

resource "aws_ssm_parameter" "vpc_subnet_id1" {
  name        = "/cwlogs/vpc/subnet_id1"
  description = "Security group 1 name"
  type        = "SecureString"
  value       = "subnet-5b14f732"
}

resource "aws_ssm_parameter" "vpc_subnet_id2" {
  name        = "/cwlogs/vpc/subnet_id2"
  description = "Security group 2 name"
  type        = "SecureString"
  value       = "subnet-6c181514"
}

resource "aws_ssm_parameter" "vpc_subnet_id3" {
  name        = "/cwlogs/vpc/subnet_id3"
  description = "Security group 3 name"
  type        = "SecureString"
  value       = "subnet-fd99b5b7"
}

resource "aws_ssm_parameter" "s3_bucket_arn" {
  name        = "/cwlogs/buckets/s3_bucket_arn"
  description = "S3 bucket name"
  type        = "SecureString"
  value       = aws_s3_bucket.metrics-bucket.arn
}
