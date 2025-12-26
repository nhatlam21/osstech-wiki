# Hướng dẫn cấu hình CI/CD cho GitLab

File `.gitlab-ci.yml` đã được tạo sẵn. Bạn cần cấu hình các biến môi trường trong GitLab để CI/CD hoạt động.

## Các bước cấu hình

### 1. Cấu hình biến môi trường trong GitLab

Vào **Settings > CI/CD > Variables** trong GitLab project của bạn và thêm các biến sau:

#### Nếu deploy qua SSH/RSYNC:
- `SSH_PRIVATE_KEY`: Private key SSH để kết nối đến server
- `DEPLOY_USER`: Username để SSH (ví dụ: `deploy`, `ubuntu`)
- `DEPLOY_SERVER`: Địa chỉ IP hoặc domain của server (ví dụ: `192.168.1.100`)
- `DEPLOY_PATH`: Đường dẫn trên server để deploy (ví dụ: `/var/www/html`)

#### Nếu deploy lên GitLab Pages:
- Không cần biến môi trường, chỉ cần uncomment phần GitLab Pages trong `.gitlab-ci.yml`

### 2. Các tùy chọn Deploy

#### Option 1: Deploy qua SSH/RSYNC (Khuyến nghị)

1. Tạo SSH key pair:
```bash
ssh-keygen -t rsa -b 4096 -C "gitlab-ci@osstech"
```

2. Copy public key vào server:
```bash
ssh-copy-id deploy@your-server-ip
```

3. Copy private key vào GitLab CI/CD Variables với tên `SSH_PRIVATE_KEY`

4. Uncomment và chỉnh sửa dòng trong `.gitlab-ci.yml`:
```yaml
- rsync -avz --delete build/ $DEPLOY_USER@$DEPLOY_SERVER:$DEPLOY_PATH
```

#### Option 2: Deploy lên GitLab Pages

1. Uncomment phần GitLab Pages trong `.gitlab-ci.yml`:
```yaml
- mkdir -p public
- cp -r build/* public/
```

2. Vào **Settings > Pages** trong GitLab để xem URL của site

#### Option 3: Deploy với PM2 (Nếu server đã có PM2)

1. SSH vào server và restart PM2 sau khi deploy:
```bash
pm2 restart osstech-wiki
```

2. Hoặc thêm vào script deploy:
```yaml
- ssh $DEPLOY_USER@$DEPLOY_SERVER "cd $DEPLOY_PATH && pm2 restart osstech-wiki"
```

### 3. Cấu hình tự động deploy

Mặc định, deploy stage được set `when: manual` để bạn có thể kiểm soát khi nào deploy. 

Để tự động deploy mỗi khi push lên main/master, thay đổi:
```yaml
when: manual
```
thành:
```yaml
when: on_success
```

### 4. Test CI/CD

1. Commit và push code lên GitLab:
```bash
git add .
git commit -m "Add CI/CD configuration"
git push origin main
```

2. Vào **CI/CD > Pipelines** trong GitLab để xem pipeline chạy

3. Sau khi build thành công, click vào nút "Play" để deploy (nếu dùng manual deploy)

## Lưu ý

- File `.gitlab-ci.yml` đã được cấu hình để cache `node_modules` giúp build nhanh hơn
- Artifacts (file build) sẽ được lưu trong 1 tuần
- Pipeline sẽ chạy trên các branch: `main`, `master`, `develop` và merge requests
- Đảm bảo server có đủ quyền để nhận file deploy

## Troubleshooting

### Build fail
- Kiểm tra Node.js version (cần >= 20.0)
- Xem log trong GitLab CI/CD để biết lỗi cụ thể

### Deploy fail
- Kiểm tra SSH key đã được thêm đúng vào GitLab Variables
- Kiểm tra server có thể truy cập được từ GitLab Runner
- Kiểm tra quyền ghi vào thư mục deploy trên server

### Search không hoạt động
- Chạy `npm install` để cài đặt plugin search
- Chạy `npm run build` để generate search index

