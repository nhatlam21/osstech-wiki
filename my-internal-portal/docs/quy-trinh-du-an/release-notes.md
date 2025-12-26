---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 2
---

import Author from '@site/src/components/Author';
import Feedback from '@site/src/components/Feedback';

<Author 
  name="Dev Lead"
  email="dev-lead@osstech.com"
  role="Dev Lead"
  lastUpdated="2024-12-25"
/>

# Release Notes

:::info Mục đích
Lưu lại lịch sử các lần cập nhật phần mềm của công ty. Giúp team theo dõi thay đổi và version.
:::

## Version 2.1.0 - 2024-12-25

### ✨ Features mới

- Thêm tính năng đăng nhập bằng Google OAuth
- Cải thiện performance với Redis caching
- Thêm dark mode cho web app

### 🐛 Bug fixes

- Sửa lỗi timeout khi upload file lớn
- Fix memory leak trong background jobs
- Sửa lỗi hiển thị date format

### 🔧 Improvements

- Cải thiện UI/UX của dashboard
- Tối ưu database queries
- Update dependencies

### 📝 Documentation

- Cập nhật API documentation
- Thêm hướng dẫn deployment

---

## Version 2.0.0 - 2024-11-15

### ✨ Features mới

- Redesign toàn bộ UI/UX
- Thêm tính năng real-time notifications
- Migration lên PostgreSQL 15

### 🐛 Bug fixes

- Sửa lỗi security vulnerability
- Fix lỗi data migration

### ⚠️ Breaking Changes

- API v1 deprecated, chuyển sang v2
- Thay đổi database schema

---

## Version 1.5.0 - 2024-10-01

### ✨ Features mới

- Thêm tính năng export report
- Cải thiện search functionality

### 🐛 Bug fixes

- Sửa lỗi pagination
- Fix lỗi timezone

---

## Template cho Release Note mới

Khi tạo release note mới, copy template này:

```markdown
## Version X.Y.Z - YYYY-MM-DD

### ✨ Features mới
- Feature 1
- Feature 2

### 🐛 Bug fixes
- Fix bug 1
- Fix bug 2

### 🔧 Improvements
- Improvement 1
- Improvement 2

### 📝 Documentation
- Update docs 1

### ⚠️ Breaking Changes (nếu có)
- Breaking change 1
```

---

<Feedback />

