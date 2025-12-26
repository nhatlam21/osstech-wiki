# Hướng dẫn cấu hình tìm kiếm (Search) cho Docusaurus

Docusaurus 3.x hỗ trợ tìm kiếm thông qua **Algolia DocSearch** (miễn phí cho các dự án open source và tài liệu công khai).

## Cách 1: Sử dụng Algolia DocSearch (Khuyến nghị)

### Bước 1: Đăng ký Algolia DocSearch

1. Truy cập: https://docsearch.algolia.com/apply/
2. Điền form đăng ký với thông tin:
   - **Application name**: Osstech Wiki
   - **Site URL**: URL của trang docs của bạn (ví dụ: https://docs.osstech.com)
   - **Email**: Email của bạn
   - **Description**: Mô tả về trang tài liệu

3. Chờ Algolia xem xét và phê duyệt (thường 1-2 ngày)

### Bước 2: Nhận thông tin cấu hình

Sau khi được phê duyệt, bạn sẽ nhận được email với:
- `appId`
- `apiKey`
- `indexName`

### Bước 3: Cấu hình trong docusaurus.config.js

1. Mở file `docusaurus.config.js`
2. Tìm phần `themeConfig` và uncomment phần Algolia:

```javascript
themeConfig: {
  // ... các config khác
  algolia: {
    appId: 'YOUR_APP_ID',        // Thay bằng appId bạn nhận được
    apiKey: 'YOUR_API_KEY',      // Thay bằng apiKey bạn nhận được
    indexName: 'YOUR_INDEX_NAME', // Thay bằng indexName bạn nhận được
    contextualSearch: true,
    searchParameters: {},
    searchPagePath: 'search',
  },
}
```

3. Lưu file và chạy lại build:
```bash
npm run build
npm run serve
```

## Cách 2: Tự host Algolia (Cho trang nội bộ)

Nếu trang docs của bạn là **nội bộ** (không public), bạn có thể tự host Algolia:

### Bước 1: Tạo tài khoản Algolia

1. Đăng ký tại: https://www.algolia.com/
2. Tạo một Application mới
3. Tạo một Index mới

### Bước 2: Cấu hình crawler

1. Vào **Crawler** trong Algolia dashboard
2. Tạo crawler mới với URL của trang docs
3. Cấu hình crawler để index nội dung

### Bước 3: Lấy thông tin

Sau khi crawler chạy xong, lấy:
- `appId`: Từ Settings > Application ID
- `apiKey`: Từ API Keys (dùng Search-Only API Key)
- `indexName`: Tên index bạn đã tạo

### Bước 4: Cấu hình trong docusaurus.config.js

Giống như Cách 1, thêm thông tin vào `themeConfig.algolia`

## Cách 3: Tìm kiếm cục bộ (Local Search)

Nếu bạn muốn tìm kiếm hoàn toàn cục bộ (không cần Algolia), bạn có thể:

1. Sử dụng plugin của cộng đồng (cần kiểm tra tương thích với Docusaurus 3.x)
2. Hoặc tự phát triển giải pháp tìm kiếm riêng

**Lưu ý**: Hiện tại các plugin local search phổ biến chưa hỗ trợ đầy đủ Docusaurus 3.x.

## Kiểm tra

Sau khi cấu hình:

1. Build lại project: `npm run build`
2. Serve: `npm run serve`
3. Mở trình duyệt và kiểm tra thanh tìm kiếm ở góc phải trên navbar
4. Thử tìm kiếm một từ khóa để xem kết quả

## Troubleshooting

### Search không hiển thị
- Đảm bảo đã uncomment phần `algolia` trong `docusaurus.config.js`
- Đảm bảo đã thay thế `YOUR_APP_ID`, `YOUR_API_KEY`, `YOUR_INDEX_NAME` bằng giá trị thực
- Chạy lại `npm run build`

### Không có kết quả tìm kiếm
- Kiểm tra Algolia index đã có dữ liệu chưa
- Kiểm tra `indexName` đã đúng chưa
- Đợi vài phút để Algolia index lại nội dung mới

### Lỗi CORS
- Đảm bảo domain của bạn đã được thêm vào CORS settings trong Algolia dashboard

## Tài liệu tham khảo

- [Docusaurus Search Documentation](https://docusaurus.io/docs/search)
- [Algolia DocSearch](https://docsearch.algolia.com/)
- [Algolia Documentation](https://www.algolia.com/doc/)

