---
id: linux-administration
title: Linux System Administration
sidebar_label: Linux Administration
sidebar_position: 1
---

import Author from '@site/src/components/Author';
import Feedback from '@site/src/components/Feedback';

<Author 
  name="System Admin Team"
  email="sysadmin@osstech.com"
  role="Linux System Administrator"
  lastUpdated="2024-12-25"
/>

# Linux System Administration

:::info Tổng quan
Linux System Administration bao gồm việc cài đặt, cấu hình, bảo trì và tối ưu hóa hệ thống Linux để đảm bảo hoạt động ổn định và hiệu quả.
:::

## 1. Hệ thống File và Quyền

### 1.1. Filesystem Hierarchy

**Standard Directories**:

| Directory | Purpose |
|-----------|---------|
| `/` | Root directory |
| `/bin` | Essential binaries |
| `/etc` | Configuration files |
| `/home` | User home directories |
| `/var` | Variable data (logs, cache) |
| `/usr` | User programs |
| `/tmp` | Temporary files |
| `/opt` | Optional software |
| `/srv` | Service data |
| `/boot` | Boot files |

### 1.2. File Permissions

**Permission Types**:
- **r (read)**: 4
- **w (write)**: 2
- **x (execute)**: 1

**Permission Groups**:
- **Owner (u)**: File owner
- **Group (g)**: Group members
- **Others (o)**: Everyone else

```bash title="Terminal - File Permissions"
# View permissions
ls -l file.txt
# -rw-r--r-- 1 user group 1024 Dec 25 10:00 file.txt

# Change permissions (numeric)
chmod 755 script.sh
# rwxr-xr-x

# Change permissions (symbolic)
chmod u+x script.sh
chmod g-w file.txt
chmod o+r file.txt

# Change owner
chown user:group file.txt
chown -R user:group directory/
```

### 1.3. Special Permissions

**SUID (Set User ID)**:
```bash
chmod u+s /usr/bin/passwd
# Allows execution with owner's privileges
```

**SGID (Set Group ID)**:
```bash
chmod g+s /shared/directory
# New files inherit group
```

**Sticky Bit**:
```bash
chmod +t /tmp
# Only owner can delete files
```

## 2. Process Management

### 2.1. Process States

- **Running (R)**: Currently executing
- **Sleeping (S)**: Waiting for event
- **Stopped (T)**: Stopped by signal
- **Zombie (Z)**: Terminated but not reaped

### 2.2. Process Commands

```bash title="Terminal - Process Management"
# List processes
ps aux
ps -ef

# Real-time monitoring
top
htop

# Find process
ps aux | grep nginx
pgrep nginx

# Kill process
kill PID
kill -9 PID  # Force kill
killall nginx
pkill -f "python app.py"

# Process tree
pstree
pstree -p
```

### 2.3. Job Control

```bash title="Terminal - Job Control"
# Run in background
command &

# List jobs
jobs

# Bring to foreground
fg %1

# Send to background
bg %1

# Disown job
disown %1
```

## 3. System Services

### 3.1. systemd (Modern Linux)

**Service Management**:
```bash title="Terminal - systemd Commands"
# Start service
sudo systemctl start nginx

# Stop service
sudo systemctl stop nginx

# Restart service
sudo systemctl restart nginx

# Reload configuration
sudo systemctl reload nginx

# Enable on boot
sudo systemctl enable nginx

# Disable on boot
sudo systemctl disable nginx

# Check status
sudo systemctl status nginx

# List services
sudo systemctl list-units --type=service
```

**Service Files**:
```ini title="/etc/systemd/system/myapp.service"
[Unit]
Description=My Application
After=network.target

[Service]
Type=simple
User=appuser
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/node /opt/myapp/index.js
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

### 3.2. Log Management

**systemd Journal**:
```bash title="Terminal - Journal Commands"
# View logs
journalctl
journalctl -u nginx
journalctl -f  # Follow
journalctl --since "1 hour ago"
journalctl --since today

# Export logs
journalctl -u nginx > nginx.log
```

**Traditional Logs**:
```bash title="Terminal - Log Files"
# View logs
tail -f /var/log/nginx/access.log
tail -f /var/log/syslog

# Search logs
grep "error" /var/log/syslog
grep -i "failed" /var/log/auth.log

# Rotate logs
logrotate -f /etc/logrotate.conf
```

## 4. Package Management

### 4.1. APT (Debian/Ubuntu)

```bash title="Terminal - APT Commands"
# Update package list
sudo apt update

# Upgrade packages
sudo apt upgrade

# Install package
sudo apt install nginx

# Remove package
sudo apt remove nginx

# Search package
apt search nginx

# Show package info
apt show nginx

# List installed
apt list --installed
```

### 4.2. YUM/DNF (RHEL/CentOS)

```bash title="Terminal - YUM/DNF Commands"
# Update packages
sudo yum update
sudo dnf update

# Install package
sudo yum install nginx
sudo dnf install nginx

# Remove package
sudo yum remove nginx

# Search package
yum search nginx

# List installed
yum list installed
```

## 5. Network Configuration

### 5.1. Network Interfaces

```bash title="Terminal - Network Commands"
# List interfaces
ip addr show
ifconfig

# Configure interface
sudo ip addr add 192.168.1.100/24 dev eth0
sudo ip link set eth0 up

# Route management
ip route show
sudo ip route add default via 192.168.1.1

# DNS configuration
cat /etc/resolv.conf
```

### 5.2. Firewall (iptables/ufw)

**UFW (Ubuntu)**:
```bash title="Terminal - UFW Commands"
# Enable firewall
sudo ufw enable

# Allow port
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Deny port
sudo ufw deny 3306/tcp

# List rules
sudo ufw status verbose

# Delete rule
sudo ufw delete allow 22/tcp
```

**iptables**:
```bash title="Terminal - iptables Examples"
# List rules
sudo iptables -L -n -v

# Allow SSH
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Allow HTTP/HTTPS
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Default policy
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP
sudo iptables -P OUTPUT ACCEPT

# Save rules
sudo iptables-save > /etc/iptables/rules.v4
```

## 6. Disk Management

### 6.1. Disk Usage

```bash title="Terminal - Disk Commands"
# Disk usage
df -h
du -sh /path/to/directory
du -h --max-depth=1 /var

# Find large files
find / -type f -size +100M
find /var/log -type f -size +10M -exec ls -lh {} \;

# Clean up
sudo apt autoremove
sudo apt autoclean
```

### 6.2. Mount Points

```bash title="Terminal - Mount Commands"
# List mounts
mount
df -h

# Mount filesystem
sudo mount /dev/sdb1 /mnt/data

# Unmount
sudo umount /mnt/data

# Auto-mount (/etc/fstab)
# /dev/sdb1 /mnt/data ext4 defaults 0 2
```

## 7. User Management

### 7.1. User Commands

```bash title="Terminal - User Management"
# Create user
sudo useradd -m -s /bin/bash username
sudo useradd -m -G sudo,www-data username

# Set password
sudo passwd username

# Delete user
sudo userdel username
sudo userdel -r username  # With home directory

# Modify user
sudo usermod -aG sudo username
sudo usermod -s /bin/zsh username

# List users
cat /etc/passwd
getent passwd
```

### 7.2. Group Management

```bash title="Terminal - Group Management"
# Create group
sudo groupadd developers

# Add user to group
sudo usermod -aG developers username

# List groups
groups username
getent group developers

# Delete group
sudo groupdel developers
```

## 8. Performance Monitoring

### 8.1. System Resources

```bash title="Terminal - Monitoring Commands"
# CPU usage
top
htop
vmstat 1

# Memory usage
free -h
cat /proc/meminfo

# Disk I/O
iostat -x 1
iotop

# Network
iftop
nethogs
```

### 8.2. System Load

```bash title="Terminal - Load Average"
# Load average
uptime
# 10:00:00 up 30 days,  2:15,  1 user,  load average: 0.50, 0.75, 1.00

# CPU cores
nproc
lscpu | grep "^CPU(s)"

# Load interpretation
# 1 core: load 1.0 = 100% utilization
# 4 cores: load 4.0 = 100% utilization
```

## 9. Shell Scripting Basics

### 9.1. Basic Script

```bash title="script.sh"
#!/bin/bash

# Variables
NAME="World"
COUNT=10

# Functions
greet() {
    echo "Hello, $1!"
}

# Conditional
if [ $COUNT -gt 5 ]; then
    echo "Count is greater than 5"
fi

# Loop
for i in {1..5}; do
    echo "Iteration $i"
done

# Call function
greet "$NAME"
```

### 9.2. Script Best Practices

- Always use `#!/bin/bash` shebang
- Quote variables: `"$variable"`
- Use `set -e` to exit on error
- Use `set -u` to error on undefined variables
- Check return codes
- Add comments

## 10. Tài liệu tham khảo

- [Linux Documentation Project](https://tldp.org/)
- [Arch Linux Wiki](https://wiki.archlinux.org/)
- [Ubuntu Server Guide](https://ubuntu.com/server/docs)

---

<Feedback />

