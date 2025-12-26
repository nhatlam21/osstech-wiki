---
id: huong-dan-them-tai-lieu
title: Cách thêm tài liệu mới
sidebar_label: Thêm tài liệu mới
sidebar_position: 99
---

import Author from '@site/src/components/Author';
import Feedback from '@site/src/components/Feedback';

<Author 
  name="Osstech Team"
  email="docs@osstech.com"
  role="Documentation Team"
  lastUpdated="2024-12-25"
/>

# Cách thêm tài liệu mới

:::info Hướng dẫn
Tài liệu này hướng dẫn bạn cách thêm bài viết mới vào Osstech Wiki một cách nhanh chóng và chuẩn format.
:::

## Bước 1: Tạo file Markdown (.md)

Vào thư mục `docs/` trong source code, tạo file mới với tên mô tả nội dung.

:::tip Đặt tên file
- Sử dụng tiếng Việt không dấu, có dấu gạch ngang
- Ví dụ: `quy-trinh-deploy.md`, `huong-dan-git.md`, `troubleshooting-server.md`
- Tránh dấu cách, ký tự đặc biệt
:::

**Ví dụ**: `docs/quy-trinh-deploy.md`

## Bước 2: Khai báo Front Matter

Ở đầu mỗi file `.md`, **bắt buộc** phải có đoạn khai báo này:

```yaml title="Front Matter (đầu file)"
---
id: quy-trinh-deploy
title: Quy trình Deploy Server
sidebar_label: Deploy Server
sidebar_position: 2
---
```

### Giải thích các trường:

- **`id`**: Mã định danh duy nhất (dùng cho URL). Không có dấu cách, ký tự đặc biệt.
- **`title`**: Tiêu đề hiển thị to nhất bài (trên cùng trang).
- **`sidebar_label`**: Tên hiển thị gọn trên thanh menu bên trái.
- **`sidebar_position`**: Số thứ tự sắp xếp (số càng nhỏ càng nằm trên).

:::warning Lưu ý
Nếu không có Front Matter, Docusaurus sẽ không nhận diện file và có thể gây lỗi build.
:::

## Bước 3: Viết nội dung

Sau Front Matter, bạn bắt đầu viết nội dung bằng Markdown:

```markdown
# Tiêu đề chính (H1)

## Phần 1 (H2 - hiển thị trong Table of Contents)

Nội dung...

### Chi tiết (H3 - hiển thị trong Table of Contents)
```

:::tip Sử dụng Template
Để viết nhanh và chuẩn format, hãy copy từ file `TEMPLATE.md` trong thư mục `docs/`.
:::

## Bước 4: Tạo thư mục con (Nếu muốn gom nhóm)

Nếu bạn muốn tạo một mục lớn có mũi tên xổ xuống (ví dụ: "Báo cáo sự cố"), hãy làm như sau:

### 4.1. Tạo thư mục

Tạo thư mục: `docs/bao-cao-su-co/`

### 4.2. Tạo file _category_.json

Bên trong thư mục đó, tạo file `_category_.json`:

```json title="_category_.json"
{
  "label": "Báo cáo sự cố",
  "position": 3,
  "link": {
    "type": "generated-index",
    "description": "Hướng dẫn báo cáo và xử lý sự cố"
  }
}
```

### 4.3. Thêm file .md vào thư mục

Sau đó cứ thả các file `.md` vào thư mục này, chúng sẽ tự động hiển thị trong sidebar.

**Ví dụ cấu trúc**:
```
docs/
  ├── bao-cao-su-co/
  │   ├── _category_.json
  │   ├── cach-bao-cao.md
  │   └── xu-ly-khan-cap.md
```

## Bước 5: Thêm hình ảnh (Nếu cần)

### 5.1. Tạo thư mục ảnh

Tạo thư mục trong `static/img/`:

```
static/
  └── img/
      └── ten-bai-viet/
          ├── anh1.png
          └── anh2.jpg
```

### 5.2. Sử dụng trong Markdown

```markdown
![Mô tả ảnh](/img/ten-bai-viet/anh1.png)
```

:::tip Tối ưu ảnh
- Sử dụng định dạng PNG, JPG, hoặc SVG
- Tối ưu kích thước (khuyến nghị < 500KB)
- Đặt tên file có ý nghĩa
:::

## Bước 6: Sử dụng các tính năng nâng cao

### 6.1. Thêm Author Component

```jsx
import Author from '@site/src/components/Author';

<Author 
  name="Tên tác giả"
  email="email@osstech.com"
  role="Vai trò"
  lastUpdated="2024-12-25"
/>
```

### 6.2. Sử dụng Admonitions

````markdown
:::tip Mẹo
Đây là mẹo hữu ích!
:::

:::warning Cảnh báo
Đây là cảnh báo quan trọng!
:::

:::info Thông tin
Đây là thông tin cần biết!
:::
````

### 6.3. Sử dụng Tabs (cho đa nền tảng)

````markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows" default>

```powershell title="PowerShell"
# Lệnh Windows
```

</TabItem>
<TabItem value="macos" label="macOS/Linux">

```bash title="Terminal"
# Lệnh macOS/Linux
```

</TabItem>
</Tabs>
````

### 6.4. Thêm Feedback Component

```jsx
import Feedback from '@site/src/components/Feedback';

<Feedback title="Tài liệu này có hữu ích không?" />
```

## Bước 7: Test và Build

### 7.1. Test Development

```bash title="Terminal"
npm run start
```

Mở trình duyệt tại http://localhost:3000 và kiểm tra:
- [ ] File hiển thị trong sidebar
- [ ] Nội dung hiển thị đúng
- [ ] Hình ảnh load được
- [ ] Links hoạt động

### 7.2. Build Production

```bash title="Terminal"
npm run build
```

Kiểm tra không có lỗi.

## Checklist khi thêm tài liệu mới

- [ ] File có Front Matter đầy đủ
- [ ] `id` là duy nhất và không có ký tự đặc biệt
- [ ] `sidebar_position` được đặt đúng
- [ ] Sử dụng headings đúng cấp (##, ###, ####)
- [ ] Code blocks có title rõ ràng
- [ ] Có Admonitions để làm nổi bật thông tin
- [ ] Có Feedback component ở cuối
- [ ] Hình ảnh (nếu có) đã được tối ưu
- [ ] Đã test trong development mode
- [ ] Build thành công không có lỗi

## Ví dụ file hoàn chỉnh

Xem file `docs/TEMPLATE.md` để có template đầy đủ.

## Tài liệu tham khảo

- [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features)
- [Markdown Guide](https://www.markdownguide.org/)
- File `FINAL-IMPROVEMENTS.md` - Các tính năng nâng cao

---

<Feedback title="Hướng dẫn này có giúp bạn thêm tài liệu dễ dàng không?" />

