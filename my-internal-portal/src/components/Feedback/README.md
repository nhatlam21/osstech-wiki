# Component Feedback

Component phản hồi để người dùng đánh giá tài liệu có hữu ích không.

## Cách sử dụng

### Trong file Markdown (.md)

Thêm component vào cuối file:

```jsx
import Feedback from '@site/src/components/Feedback';

<Feedback title="Tài liệu này có hữu ích không?" />
```

### Trong file MDX (.mdx)

```jsx
import Feedback from '@site/src/components/Feedback';

# Tiêu đề bài viết

Nội dung bài viết...

<Feedback />
```

## Props

- `title` (string, optional): Tiêu đề của form feedback. Mặc định: "Tài liệu này có hữu ích không?"

## Ví dụ

```jsx
import Feedback from '@site/src/components/Feedback';

# Hướng dẫn Setup

Nội dung hướng dẫn...

<Feedback title="Hướng dẫn này có giúp bạn setup thành công không?" />
```

## Lưu ý

- Feedback được lưu vào localStorage của trình duyệt
- Có thể tích hợp với API endpoint để lưu vào database
- Component tự động lấy URL và title của trang hiện tại

