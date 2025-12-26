---
id: troubleshooting
title: Troubleshooting - Xử lý sự cố
sidebar_label: Troubleshooting
sidebar_position: 3
---

import Author from '@site/src/components/Author';
import Feedback from '@site/src/components/Feedback';

<Author 
  name="DevOps Team"
  email="devops@osstech.com"
  role="DevOps"
  lastUpdated="2024-12-25"
/>

# Troubleshooting - Xử lý sự cố

:::info Mục đích
Tài liệu này liệt kê các lỗi thường gặp và cách xử lý nhanh.
:::

## Server đầy ổ cứng

### Triệu chứng

- Ứng dụng không thể ghi file
- Logs báo lỗi "No space left on device"
- Server response chậm

### Cách kiểm tra

```bash title="Terminal"
# Kiểm tra dung lượng ổ cứng
df -h

# Tìm thư mục chiếm nhiều dung lượng
du -sh /* | sort -h
```

### Cách xử lý

1. **Xóa logs cũ**:
   ```bash
   # Xóa logs cũ hơn 7 ngày
   find /var/log -type f -mtime +7 -delete
   ```

2. **Xóa cache không cần thiết**:
   ```bash
   # Xóa Docker images không dùng
   docker system prune -a
   ```

3. **Xóa temporary files**:
   ```bash
   rm -rf /tmp/*
   ```

:::warning Quan trọng
Trước khi xóa, hãy backup dữ liệu quan trọng!
:::

## Server không thể kết nối

### Triệu chứng

- Không thể SSH vào server
- Website không truy cập được
- Ping không có response

### Cách xử lý

1. **Kiểm tra server có đang chạy**:
   - Kiểm tra qua console (nếu có)
   - Liên hệ hosting provider

2. **Kiểm tra firewall**:
   ```bash
   # Kiểm tra iptables rules
   iptables -L
   ```

3. **Kiểm tra network**:
   ```bash
   # Kiểm tra network interface
   ip addr show
   ```

## Database connection failed

### Triệu chứng

- Ứng dụng không kết nối được database
- Lỗi "Connection refused" hoặc "Timeout"

### Cách xử lý

1. **Kiểm tra PostgreSQL đang chạy**:
   ```bash
   sudo systemctl status postgresql
   ```

2. **Kiểm tra connection**:
   ```bash
   psql -h localhost -U username -d database
   ```

3. **Kiểm tra logs**:
   ```bash
   tail -f /var/log/postgresql/postgresql.log
   ```

## Application không start

### Triệu chứng

- PM2 không start được app
- Port đã được sử dụng
- Lỗi permission

### Cách xử lý

1. **Kiểm tra port đang được sử dụng**:
   ```bash
   lsof -i :3000
   # Hoặc
   netstat -tulpn | grep 3000
   ```

2. **Kill process cũ**:
   ```bash
   kill -9 <PID>
   ```

3. **Kiểm tra logs**:
   ```bash
   pm2 logs
   ```

## Liên hệ hỗ trợ

:::warning Khẩn cấp
Nếu không thể tự xử lý, liên hệ ngay:
- **Slack**: #devops
- **Email**: devops@osstech.com
- **Hotline**: 1900-xxxx (nếu có)
:::

---

<Feedback />

