# 📚 Cấu trúc Tài liệu Osstech Wiki

## Tổng quan

Tài liệu được tổ chức thành các nhóm chính để dễ tìm kiếm và quản lý.

## Cấu trúc thư mục

```
docs/
├── intro.md                          # Trang giới thiệu
├── setup-moi-truong.md               # Setup môi trường
├── mermaid-examples.md                # Ví dụ Mermaid
├── huong-dan-them-tai-lieu.md        # Hướng dẫn thêm tài liệu
├── TEMPLATE.md                       # Template viết tài liệu
│
├── onboarding/                       # Nhóm: Onboarding
│   ├── _category_.json
│   ├── van-hoa-cong-ty.md
│   ├── danh-ba-lien-he.md
│   └── thiet-lap-cong-cu.md
│
├── ha-tang-devops/                   # Nhóm: Hạ tầng & DevOps
│   ├── _category_.json
│   ├── danh-sach-server.md
│   ├── so-do-he-thong.md
│   └── troubleshooting.md
│
└── quy-trinh-du-an/                  # Nhóm: Quy trình dự án
    ├── _category_.json
    ├── git-workflow.md
    └── release-notes.md
```

## Các nhóm tài liệu

### 1. Onboarding (Cho nhân viên mới)

**Vị trí**: `docs/onboarding/`

**Mục đích**: Hướng dẫn nhân viên mới bắt đầu làm việc tại Osstech.

**Nội dung**:
- ✅ Văn hóa công ty - Quy định giờ giấc, chấm công, nghỉ phép
- ✅ Danh bạ liên hệ - Ai phụ trách mảng nào
- ✅ Thiết lập công cụ - Email, VPN, Jira, Slack/Telegram

**Cách thêm tài liệu mới**:
1. Tạo file `.md` trong thư mục `docs/onboarding/`
2. Thêm Front Matter với `sidebar_position` phù hợp
3. Sử dụng template từ `docs/TEMPLATE.md`

### 2. Hạ tầng & DevOps

**Vị trí**: `docs/ha-tang-devops/`

**Mục đích**: Tài liệu kỹ thuật về hạ tầng, server, và DevOps.

**Nội dung**:
- ✅ Danh sách Server - IP, thông tin server, cấu hình
- ✅ Sơ đồ hệ thống - Topology, luồng dữ liệu (dùng Mermaid)
- ✅ Troubleshooting - Các lỗi thường gặp và cách sửa

**Cách thêm tài liệu mới**:
1. Tạo file `.md` trong thư mục `docs/ha-tang-devops/`
2. Sử dụng Mermaid cho sơ đồ
3. Thêm Admonitions để làm nổi bật thông tin quan trọng

### 3. Quy trình dự án

**Vị trí**: `docs/quy-trinh-du-an/`

**Mục đích**: Quy trình làm việc, Git workflow, và release process.

**Nội dung**:
- ✅ Git Workflow - Quy định đặt tên branch, Merge Request
- ✅ Release Notes - Lịch sử các lần cập nhật phần mềm

**Cách thêm tài liệu mới**:
1. Tạo file `.md` trong thư mục `docs/quy-trinh-du-an/`
2. Sử dụng code blocks với title rõ ràng
3. Thêm ví dụ cụ thể

## Template và Hướng dẫn

### Template viết tài liệu

**File**: `docs/TEMPLATE.md`

Copy file này khi viết tài liệu mới để đảm bảo format nhất quán.

**Bao gồm**:
- Front Matter đầy đủ
- Author component
- Admonitions mẫu
- Tabs mẫu
- Feedback component
- Troubleshooting section
- FAQ section

### Hướng dẫn thêm tài liệu

**File**: `docs/huong-dan-them-tai-lieu.md`

Hướng dẫn chi tiết về:
- Cách tạo file mới
- Front Matter là gì
- Cách tạo thư mục con
- Cách thêm hình ảnh
- Sử dụng các tính năng nâng cao

## Quy tắc đặt tên

### File Markdown

- Sử dụng tiếng Việt không dấu
- Có dấu gạch ngang giữa các từ
- Ví dụ: `quy-trinh-deploy.md`, `huong-dan-git.md`

### ID trong Front Matter

- Giống tên file (không có extension)
- Không có dấu cách, ký tự đặc biệt
- Ví dụ: `id: quy-trinh-deploy`

### Thư mục

- Sử dụng tiếng Việt không dấu
- Có dấu gạch ngang
- Ví dụ: `onboarding/`, `ha-tang-devops/`

## Best Practices

### 1. Sử dụng Admonitions

Làm nổi bật thông tin quan trọng:
- `:::tip` - Mẹo hữu ích
- `:::warning` - Cảnh báo
- `:::info` - Thông tin
- `:::success` - Thành công

### 2. Code Blocks có title

```bash title="Terminal"
# Luôn có title rõ ràng
```

### 3. Sử dụng Tabs cho đa nền tảng

Khi hướng dẫn khác nhau giữa Windows và macOS/Linux.

### 4. Thêm Author Component

Cho tài liệu quan trọng để biết ai viết và liên hệ.

### 5. Thêm Feedback Component

Ở cuối mỗi trang để thu thập phản hồi.

### 6. Sử dụng Headings đúng cấp

- `#` - Tiêu đề chính (H1)
- `##` - Section chính (H2) - Hiển thị trong TOC
- `###` - Subsection (H3) - Hiển thị trong TOC
- `####` - Chi tiết (H4) - Hiển thị trong TOC

## Thêm nhóm tài liệu mới

### Bước 1: Tạo thư mục

```bash
mkdir docs/ten-nhom-moi
```

### Bước 2: Tạo _category_.json

```json
{
  "label": "Tên nhóm",
  "position": 5,
  "link": {
    "type": "generated-index",
    "description": "Mô tả nhóm tài liệu"
  }
}
```

### Bước 3: Thêm file .md

Tạo các file `.md` trong thư mục đó.

## Checklist khi thêm tài liệu

- [ ] File có Front Matter đầy đủ
- [ ] `id` là duy nhất
- [ ] `sidebar_position` được đặt đúng
- [ ] Sử dụng headings đúng cấp
- [ ] Code blocks có title
- [ ] Có Admonitions
- [ ] Có Feedback component
- [ ] Hình ảnh (nếu có) đã tối ưu
- [ ] Đã test trong development mode
- [ ] Build thành công

## Tài liệu tham khảo

- `docs/huong-dan-them-tai-lieu.md` - Hướng dẫn chi tiết
- `docs/TEMPLATE.md` - Template viết tài liệu
- `FINAL-IMPROVEMENTS.md` - Các tính năng nâng cao
- `UPGRADE-PROFESSIONAL.md` - Hướng dẫn sử dụng tính năng

---

**Lưu ý**: Cấu trúc này có thể mở rộng thêm các nhóm khác tùy theo nhu cầu của công ty.

