resource "aws_ssm_parameter" "efs_access_point_arn" {
  name        = "/cwlogs/efs/efs_access_point_arn"
  description = "EFS access point ARN"
  type        = "SecureString"
  value       = aws_efs_access_point.access_point_lambda.arn
}
