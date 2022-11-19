output "efs_access_point_arn" {
  description = "EFS access point ARN"
  value       = aws_efs_access_point.access_point_lambda.arn
}

output "subnet_ids" {
  description = "Subnet IDs"
  value       = var.subnet_ids
}

output "security_group_ids" {
  description = "Security group IDs"
  value       = var.security_group_ids
}
