---
id: danh-sach-server
title: Danh sách Server
sidebar_label: Danh sách Server
sidebar_position: 1
---

import Author from '@site/src/components/Author';
import Feedback from '@site/src/components/Feedback';

<Author 
  name="DevOps Team"
  email="devops@osstech.com"
  role="DevOps"
  lastUpdated="2024-12-25"
/>

# Danh sách Server

:::warning Bảo mật
Thông tin server là thông tin nhạy cảm. Chỉ chia sẻ với người có quyền truy cập.
:::

## Server Production

### Web Server 1

- **IP**: `192.168.1.10`
- **Hostname**: `web1.osstech.local`
- **OS**: Ubuntu 22.04 LTS
- **CPU**: 4 cores
- **RAM**: 8GB
- **Storage**: 100GB SSD
- **Mục đích**: Web application chính

:::info Truy cập
Để lấy thông tin đăng nhập, liên hệ DevOps team qua Slack: #devops
:::

### Database Server

- **IP**: `192.168.1.20`
- **Hostname**: `db1.osstech.local`
- **OS**: Ubuntu 22.04 LTS
- **CPU**: 8 cores
- **RAM**: 16GB
- **Storage**: 500GB SSD
- **Mục đích**: PostgreSQL database

### Cache Server

- **IP**: `192.168.1.30`
- **Hostname**: `cache1.osstech.local`
- **OS**: Ubuntu 22.04 LTS
- **CPU**: 2 cores
- **RAM**: 4GB
- **Storage**: 50GB SSD
- **Mục đích**: Redis cache

## Server Staging

### Staging Server

- **IP**: `192.168.1.100`
- **Hostname**: `staging.osstech.local`
- **Mục đích**: Testing trước khi deploy production

## Quản lý mật khẩu

:::warning Quan trọng
**KHÔNG** lưu mật khẩu trong file này hoặc commit vào Git.

Sử dụng password manager nội bộ hoặc liên hệ DevOps để lấy thông tin đăng nhập.
:::

### Cách lấy thông tin đăng nhập

1. Liên hệ DevOps team qua Slack: #devops
2. Yêu cầu access với lý do cụ thể
3. Chờ approval và nhận thông tin qua secure channel

---

<Feedback />

