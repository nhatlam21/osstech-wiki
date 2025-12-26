---
id: git-workflow
title: Git Workflow
sidebar_label: Git Workflow
sidebar_position: 1
---

import Author from '@site/src/components/Author';
import Feedback from '@site/src/components/Feedback';

<Author 
  name="Dev Lead"
  email="dev-lead@osstech.com"
  role="Dev Lead"
  lastUpdated="2024-12-25"
/>

# Git Workflow

:::info Quy định
Quy trình làm việc với Git tại Osstech. Tất cả developers cần tuân thủ quy trình này.
:::

## Quy định đặt tên Branch

### Format

```
<type>/<ticket-number>-<short-description>
```

### Types

- **`feature/`**: Tính năng mới
- **`bugfix/`**: Sửa lỗi
- **`hotfix/`**: Sửa lỗi khẩn cấp
- **`refactor/`**: Refactor code
- **`docs/`**: Cập nhật tài liệu

### Ví dụ

```bash
feature/PROJ-123-add-user-authentication
bugfix/PROJ-456-fix-login-error
hotfix/PROJ-789-security-patch
```

:::tip Lưu ý
Luôn bắt đầu với ticket number từ Jira để dễ tracking.
:::

## Quy trình tạo Merge Request

### Bước 1: Tạo branch mới

```bash title="Terminal"
# Lấy code mới nhất
git checkout main
git pull origin main

# Tạo branch mới
git checkout -b feature/PROJ-123-add-feature
```

### Bước 2: Commit code

```bash title="Terminal"
# Add files
git add .

# Commit với message rõ ràng
git commit -m "feat: Add user authentication feature

- Implement login functionality
- Add password encryption
- Update API documentation"
```

:::tip Commit Message
Sử dụng format:
- `feat:` - Tính năng mới
- `fix:` - Sửa lỗi
- `docs:` - Tài liệu
- `refactor:` - Refactor
- `test:` - Test
:::

### Bước 3: Push và tạo MR

```bash title="Terminal"
# Push branch
git push origin feature/PROJ-123-add-feature
```

Sau đó:
1. Vào GitLab
2. Click "Create Merge Request"
3. Điền thông tin:
   - **Title**: Mô tả ngắn gọn
   - **Description**: Mô tả chi tiết, link Jira ticket
   - **Assignee**: Assign cho reviewer
   - **Labels**: Thêm labels phù hợp

### Bước 4: Code Review

:::warning Quan trọng
- Tất cả MR cần được review bởi ít nhất 1 người
- Không merge nếu có comment chưa được giải quyết
- Đảm bảo CI/CD pipeline pass
:::

## Quy tắc Code Review

### Checklist cho Reviewer

- [ ] Code đúng với yêu cầu
- [ ] Không có lỗi syntax
- [ ] Có test cases (nếu cần)
- [ ] Code style đúng chuẩn
- [ ] Không có hardcode sensitive data
- [ ] Documentation được cập nhật

### Checklist cho Author

- [ ] Code đã test local
- [ ] CI/CD pipeline pass
- [ ] Không có conflict
- [ ] Description đầy đủ
- [ ] Link Jira ticket

## Merge Strategy

### Squash and Merge (Khuyến nghị)

- Gộp tất cả commits thành 1 commit
- Giữ lịch sử main branch sạch sẽ
- Dễ revert nếu cần

### Merge Commit

- Giữ nguyên lịch sử commits
- Dùng cho feature lớn, nhiều commits

:::info Lưu ý
Không dùng "Rebase and Merge" để tránh rewrite history.
:::

---

<Feedback />

