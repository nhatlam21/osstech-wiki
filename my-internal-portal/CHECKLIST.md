# ✅ Checklist - Các bước cần thực hiện

## Đã hoàn thành ✅

- [x] Cài đặt plugin Mermaid
- [x] Cấu hình Mermaid trong docusaurus.config.js
- [x] Tạo file ví dụ Mermaid (docs/mermaid-examples.md)
- [x] Tạo file .gitlab-ci.yml cho CI/CD
- [x] Tạo file hướng dẫn CI/CD (CI-CD-SETUP.md)
- [x] Cấu hình search bar trong navbar
- [x] Cập nhật title và tagline
- [x] Build project thành công
- [x] Tạo file hướng dẫn (QUICK-START.md, SEARCH-SETUP.md)
- [x] Cập nhật README.md

## Cần thực hiện tiếp 🔲

### 1. Cấu hình Tìm kiếm (Search) 🔍

- [ ] Đọc file `SEARCH-SETUP.md`
- [ ] Đăng ký Algolia DocSearch tại: https://docsearch.algolia.com/apply/
- [ ] Nhận thông tin từ Algolia (appId, apiKey, indexName)
- [ ] Mở `docusaurus.config.js`
- [ ] Uncomment và điền thông tin Algolia trong phần `themeConfig.algolia`
- [ ] Build lại: `npm run build`
- [ ] Test search trên trình duyệt

**Thời gian dự kiến**: 1-2 ngày (chờ Algolia phê duyệt)

### 2. Cấu hình CI/CD với GitLab 🚀

- [ ] Đọc file `CI-CD-SETUP.md`
- [ ] Tạo SSH key pair (nếu chưa có)
- [ ] Thêm SSH public key vào server
- [ ] Vào GitLab: **Settings > CI/CD > Variables**
- [ ] Thêm các biến môi trường:
  - [ ] `SSH_PRIVATE_KEY` - Private key SSH
  - [ ] `DEPLOY_USER` - Username SSH (ví dụ: `deploy`)
  - [ ] `DEPLOY_SERVER` - IP/domain server
  - [ ] `DEPLOY_PATH` - Đường dẫn deploy (ví dụ: `/var/www/html`)
- [ ] Cập nhật `.gitlab-ci.yml` với thông tin server (nếu cần)
- [ ] Test pipeline: Push code lên GitLab
- [ ] Kiểm tra pipeline chạy thành công
- [ ] Deploy thử (click nút "Play" trong GitLab)

**Thời gian dự kiến**: 30 phút - 1 giờ

### 3. Tùy chỉnh giao diện (Tùy chọn) 🎨

- [ ] Thay logo: Thay file `static/img/logo.svg`
- [ ] Cập nhật favicon: Thay file `static/img/favicon.ico`
- [ ] Tùy chỉnh màu sắc: Sửa `src/css/custom.css`
- [ ] Cập nhật footer links trong `docusaurus.config.js`
- [ ] Cập nhật URL và baseUrl trong `docusaurus.config.js`

### 4. Viết nội dung tài liệu 📝

- [ ] Xóa các file mẫu trong `docs/` (nếu cần)
- [ ] Tạo cấu trúc tài liệu phù hợp với công ty
- [ ] Viết nội dung tài liệu
- [ ] Thêm sơ đồ Mermaid vào tài liệu (nếu cần)
- [ ] Kiểm tra links và hình ảnh

### 5. Test và kiểm tra ✅

- [ ] Test tất cả tính năng:
  - [ ] Navigation hoạt động
  - [ ] Search hoạt động (sau khi cấu hình Algolia)
  - [ ] Mermaid render đúng
  - [ ] Responsive trên mobile
  - [ ] Dark mode hoạt động
- [ ] Test build production: `npm run build`
- [ ] Test serve: `npm run serve`
- [ ] Kiểm tra không có broken links
- [ ] Test deploy với PM2 (nếu dùng)

### 6. Deploy lên production 🚢

- [ ] Cấu hình server (nếu chưa có)
- [ ] Cài đặt Node.js và PM2 trên server
- [ ] Cấu hình nginx/apache (nếu cần)
- [ ] Deploy lần đầu:
  ```bash
  npm run build
  # Upload build/ lên server hoặc dùng CI/CD
  ```
- [ ] Cấu hình PM2 trên server
- [ ] Test trên production
- [ ] Cấu hình domain (nếu có)

## 📋 Thứ tự ưu tiên

1. **Cấu hình Search** (quan trọng nhất - cần thời gian chờ Algolia)
2. **Cấu hình CI/CD** (để tự động deploy)
3. **Viết nội dung** (tùy theo nhu cầu)
4. **Tùy chỉnh giao diện** (làm đẹp)
5. **Deploy production**

## 🆘 Cần hỗ trợ?

- Xem file `QUICK-START.md` để biết cách sử dụng cơ bản
- Xem file `SEARCH-SETUP.md` để cấu hình search
- Xem file `CI-CD-SETUP.md` để cấu hình CI/CD
- Xem file `docs/mermaid-examples.md` để xem ví dụ Mermaid

## 📝 Ghi chú

- File `.docusaurus/` là file tự động generate - **KHÔNG SỬA**
- Luôn sửa `docusaurus.config.js` ở thư mục gốc
- Sau mỗi thay đổi config, chạy `npm run build` để test
- Search chỉ hoạt động sau khi cấu hình Algolia

