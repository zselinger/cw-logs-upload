variable "aws_region" {
  description = "The AWS region to create things in."
  default     = "eu-south-1"
}

variable "aws_profile" {
  description = "Name of the AWS profile configured with AWS CLI"
  default     = "personal"
}

variable "subnet_ids" {
  description = "Target subnet ids to mount efs file system"
  type        = list(string)
  default     = ["subnet-5b14f732", "subnet-6c181514", "subnet-fd99b5b7"]
}

variable "security_group_ids" {
  description = "Security group ids for the mount targets"
  type        = list(string)
  default     = ["sg-cf39e3a4"]
}

variable "performance_mode" {
  description = "The file system performance mode. Can be either 'generalPurpose' or 'maxIO' (Default: 'generalPurpose')"
  default     = "generalPurpose"
}

variable "throughput_mode" {
  description = "Throughput mode for the file system. Defaults to bursting. Valid values: bursting, provisioned. When using provisioned, also set provisioned_throughput_in_mibps"
  default     = null
}

variable "provisioned_throughput" {
  description = "The throughput, measured in MiB/s, that you want to provision for the file system. Only applicable with `throughput_mode` set to `provisioned`"
  default     = null
}
