---
id: infrastructure-as-code
title: Infrastructure as Code (IaC)
sidebar_label: Infrastructure as Code
sidebar_position: 2
---

import Author from '@site/src/components/Author';
import Feedback from '@site/src/components/Feedback';

<Author 
  name="DevOps Team"
  email="devops@osstech.com"
  role="DevOps Engineer"
  lastUpdated="2024-12-25"
/>

# Infrastructure as Code (IaC)

:::info Định nghĩa
Infrastructure as Code (IaC) là phương pháp quản lý và cung cấp hạ tầng thông qua code thay vì thao tác thủ công, cho phép tự động hóa việc tạo, cấu hình và quản lý infrastructure.
:::

## 1. Tổng quan về IaC

### 1.1. Khái niệm

**IaC** cho phép bạn:
- Định nghĩa infrastructure bằng code
- Version control infrastructure
- Tự động hóa provisioning
- Đảm bảo consistency
- Dễ dàng replicate

### 1.2. Lợi ích

**Quản lý**:
- Version control cho infrastructure
- Code review cho thay đổi
- Audit trail đầy đủ

**Tự động hóa**:
- Provisioning tự động
- Configuration management
- Disaster recovery nhanh

**Consistency**:
- Môi trường giống nhau
- Giảm configuration drift
- Reproducible environments

## 2. Các loại IaC Tools

### 2.1. Declarative vs Imperative

**Declarative (Khai báo)**:
- Mô tả trạng thái mong muốn
- Tool tự động tìm cách đạt được
- Ví dụ: Terraform, Ansible

**Imperative (Mệnh lệnh)**:
- Mô tả từng bước thực hiện
- Kiểm soát chi tiết
- Ví dụ: CloudFormation, Chef

### 2.2. So sánh các công cụ

| Tool | Type | Use Case | Language |
|------|------|----------|----------|
| Terraform | Declarative | Multi-cloud provisioning | HCL |
| Ansible | Declarative | Configuration management | YAML |
| CloudFormation | Declarative | AWS infrastructure | JSON/YAML |
| Pulumi | Declarative | Multi-cloud (code-based) | Python/JS/Go |
| Chef | Imperative | Configuration management | Ruby DSL |

## 3. Terraform - Công cụ phổ biến nhất

### 3.1. Giới thiệu

**Terraform** là công cụ IaC mã nguồn mở của HashiCorp, cho phép định nghĩa infrastructure bằng HCL (HashiCorp Configuration Language).

**Ưu điểm**:
- Multi-cloud support
- State management
- Plan before apply
- Module system

### 3.2. Cấu trúc cơ bản

```hcl title="main.tf"
# Provider configuration
terraform {
  required_version = ">= 1.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "ap-southeast-1"
}

# Resource definition
resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"
  
  tags = {
    Name = "Web Server"
    Environment = "Production"
  }
}
```

### 3.3. Variables và Outputs

```hcl title="variables.tf"
variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "environment" {
  description = "Environment name"
  type        = string
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be dev, staging, or prod."
  }
}
```

```hcl title="outputs.tf"
output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.web_server.id
}

output "instance_public_ip" {
  description = "Public IP of the EC2 instance"
  value       = aws_instance.web_server.public_ip
}
```

### 3.4. Modules

```hcl title="modules/web-server/main.tf"
resource "aws_instance" "this" {
  ami           = var.ami_id
  instance_type = var.instance_type
  
  tags = var.tags
}
```

```hcl title="modules/web-server/variables.tf"
variable "ami_id" {
  type = string
}

variable "instance_type" {
  type = string
}

variable "tags" {
  type = map(string)
}
```

**Sử dụng module**:

```hcl title="main.tf"
module "web_server" {
  source = "./modules/web-server"
  
  ami_id        = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"
  tags = {
    Name = "Web Server"
  }
}
```

### 3.5. State Management

**Backend configuration**:

```hcl title="backend.tf"
terraform {
  backend "s3" {
    bucket = "terraform-state-bucket"
    key    = "production/terraform.tfstate"
    region = "ap-southeast-1"
    
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
```

:::warning Quan trọng
- State file chứa thông tin nhạy cảm
- Luôn backup state file
- Sử dụng remote backend (S3, GCS)
- Enable state locking (DynamoDB)
:::

### 3.6. Workspaces

```bash title="Terminal - Sử dụng workspaces"
# Tạo workspace
terraform workspace new dev
terraform workspace new staging
terraform workspace new prod

# Chuyển workspace
terraform workspace select prod

# Xem workspace hiện tại
terraform workspace show
```

## 4. Ansible - Configuration Management

### 4.1. Giới thiệu

**Ansible** là công cụ automation cho configuration management, application deployment, và orchestration.

**Ưu điểm**:
- Agentless (SSH-based)
- YAML syntax dễ đọc
- Idempotent
- Large module library

### 4.2. Playbook cơ bản

```yaml title="playbook.yml"
---
- name: Configure web server
  hosts: web_servers
  become: yes
  tasks:
    - name: Update apt cache
      apt:
        update_cache: yes
        cache_valid_time: 3600
    
    - name: Install Nginx
      apt:
        name: nginx
        state: present
    
    - name: Start and enable Nginx
      systemd:
        name: nginx
        state: started
        enabled: yes
    
    - name: Copy Nginx config
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/nginx.conf
      notify: restart nginx

  handlers:
    - name: restart nginx
      systemd:
        name: nginx
        state: restarted
```

### 4.3. Roles

**Cấu trúc role**:

```
roles/
└── nginx/
    ├── tasks/
    │   └── main.yml
    ├── handlers/
    │   └── main.yml
    ├── templates/
    │   └── nginx.conf.j2
    ├── vars/
    │   └── main.yml
    └── defaults/
        └── main.yml
```

**Sử dụng role**:

```yaml title="site.yml"
---
- hosts: web_servers
  roles:
    - nginx
    - { role: database, when: install_db }
```

## 5. Best Practices

### 5.1. Code Organization

```
infrastructure/
├── environments/
│   ├── dev/
│   ├── staging/
│   └── prod/
├── modules/
│   ├── vpc/
│   ├── ec2/
│   └── rds/
└── shared/
    └── common.tf
```

### 5.2. Version Control

- Commit infrastructure code thường xuyên
- Use meaningful commit messages
- Tag releases
- Code review trước khi apply

### 5.3. Security

- Không commit secrets vào code
- Sử dụng secret management (Vault, AWS Secrets Manager)
- Least privilege principle
- Regular security audits

### 5.4. Testing

**Terraform testing**:
- `terraform validate` - Validate syntax
- `terraform plan` - Preview changes
- `terraform fmt` - Format code
- `terratest` - Unit testing

**Ansible testing**:
- `ansible-lint` - Lint playbooks
- `molecule` - Test roles
- `ansible-playbook --check` - Dry run

## 6. Troubleshooting

### 6.1. Terraform Issues

**State lock**:
```bash
# Force unlock (cẩn thận!)
terraform force-unlock <LOCK_ID>
```

**State drift**:
```bash
# Refresh state
terraform refresh

# Import existing resource
terraform import aws_instance.web_server i-1234567890abcdef0
```

### 6.2. Ansible Issues

**Connection issues**:
```bash
# Test connection
ansible all -m ping

# Verbose output
ansible-playbook playbook.yml -vvv
```

## 7. Tài liệu tham khảo

- [Terraform Documentation](https://www.terraform.io/docs)
- [Ansible Documentation](https://docs.ansible.com/)
- [IaC Best Practices](https://www.terraform.io/docs/cloud/guides/recommended-practices/index.html)

---

<Feedback />

