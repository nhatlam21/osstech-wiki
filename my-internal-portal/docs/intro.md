---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

:::warning Yêu cầu tiên quyết
Đảm bảo bạn đã cài đặt **Node.js version 20.0 trở lên** trước khi tiếp tục. Khi cài đặt Node.js, hãy chọn tất cả các checkbox liên quan đến dependencies.
:::

:::tip Mẹo cài đặt
Nếu bạn chưa có Node.js, hãy tải về từ [nodejs.org](https://nodejs.org/en/download/). Chúng tôi khuyến nghị sử dụng phiên bản LTS (Long Term Support) để đảm bảo tính ổn định.
:::

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash title="Terminal"
npm init docusaurus@latest my-website classic
```

:::info Lưu ý
Bạn có thể chạy lệnh này trong Command Prompt (Windows), PowerShell, Terminal (macOS/Linux), hoặc bất kỳ terminal tích hợp nào trong code editor.
:::

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash title="Terminal"
cd my-website
npm run start
```

:::info Thông tin
Lệnh `cd` dùng để chuyển thư mục. Bạn cần navigate đến thư mục dự án trước khi chạy các lệnh khác.

Lệnh `npm run start` sẽ build website và chạy development server tại **http://localhost:3000/**.
:::

:::tip Hot Reload
Docusaurus hỗ trợ hot reload - khi bạn sửa file, trang web sẽ tự động reload để hiển thị thay đổi. Rất tiện lợi cho việc phát triển!
:::

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

---

import Feedback from '@site/src/components/Feedback';

<Feedback />
