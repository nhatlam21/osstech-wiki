# Component Author

Component hiển thị thông tin tác giả bài viết.

## Cách sử dụng

### Trong file Markdown (.md)

Thêm component vào đầu file (sau frontmatter):

```jsx
import Author from '@site/src/components/Author';

<Author 
  name="Nhat Lam"
  email="nhatlam@osstech.com"
  role="Tech Lead"
  lastUpdated="2024-12-25"
/>
```

### Trong file MDX (.mdx)

```jsx
import Author from '@site/src/components/Author';

# Tiêu đề bài viết

<Author 
  name="Nhat Lam"
  email="nhatlam@osstech.com"
  avatar="/img/authors/nhatlam.jpg"
  role="Tech Lead"
  lastUpdated="2024-12-25"
/>

Nội dung bài viết...
```

## Props

- `name` (string, required): Tên tác giả
- `email` (string, optional): Email liên hệ
- `avatar` (string, optional): URL ảnh đại diện (đặt trong `static/img/authors/`)
- `role` (string, optional): Vai trò/chức vụ
- `lastUpdated` (string, optional): Ngày cập nhật lần cuối

## Ví dụ

```jsx
import Author from '@site/src/components/Author';

# Hướng dẫn Setup

<Author 
  name="Nhat Lam"
  email="nhatlam@osstech.com"
  avatar="/img/authors/nhatlam.jpg"
  role="Senior Developer"
  lastUpdated="2024-12-25"
/>

Nội dung hướng dẫn...
```

## Lưu ý

- Avatar sẽ tự động ẩn nếu không load được
- Email sẽ tự động tạo mailto link
- Component responsive trên mobile

