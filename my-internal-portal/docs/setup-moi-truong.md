---
id: setup-env
title: Hướng dẫn Setup Môi trường
sidebar_label: Setup Môi trường
---

import Author from '@site/src/components/Author';

<Author 
  name="Nhat Lam"
  email="nhatlam@osstech.com"
  role="Tech Lead"
  lastUpdated="2024-12-25"
/>

# Hướng dẫn cài đặt dự án cho Newbie

Chào mừng bạn đến với team Osstech! Làm theo các bước sau để chạy app nhé.

:::info Chào mừng
Nếu đây là lần đầu bạn setup môi trường, đừng lo lắng! Hướng dẫn này sẽ giúp bạn từng bước một.
:::

## 1. Yêu cầu phần mềm

:::warning Yêu cầu bắt buộc
Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt các phần mềm sau:
:::

* **Node.js**: Phiên bản 20.0 trở lên (khuyến nghị LTS)
* **Docker**: Bắt buộc để chạy Database
* **Git**: Để clone code từ repository

:::tip Kiểm tra phiên bản
Bạn có thể kiểm tra phiên bản đã cài bằng các lệnh:
- `node --version` (cần >= 20.0)
- `docker --version`
- `git --version`
:::

## 2. Clone Code

Mở Terminal (hoặc Command Prompt/PowerShell trên Windows) và chạy lần lượt các lệnh sau:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows (PowerShell)" default>

```powershell title="PowerShell"
git clone https://gitlab.com/company/project-x.git
cd project-x
npm install
```

</TabItem>
<TabItem value="macos" label="macOS/Linux (Terminal)">

```bash title="Terminal"
git clone https://gitlab.com/company/project-x.git
cd project-x
npm install
```

</TabItem>
</Tabs>

:::success Thành công
Nếu bạn thấy thông báo "Successfully installed" hoặc tương tự, nghĩa là bạn đã clone và cài đặt dependencies thành công! 🎉

<!-- 
  Để thêm ảnh minh họa, đặt file ảnh vào static/img/ và sử dụng:
  ![Clone thành công](/img/setup-success.png)
-->
:::

:::warning Lỗi thường gặp
Nếu gặp lỗi "Permission denied" hoặc "Access denied", hãy kiểm tra:
- Bạn đã có quyền truy cập repository chưa?
- SSH key đã được thêm vào GitLab chưa?
:::

## 3. Chạy ứng dụng

Sau khi cài đặt xong, bạn có thể chạy ứng dụng:

<Tabs>
<TabItem value="dev" label="Development" default>

```bash title="Terminal - Development Mode"
npm run start
```

:::tip Hot Reload
Development mode hỗ trợ hot reload - tự động reload khi bạn sửa code.
:::

</TabItem>
<TabItem value="prod" label="Production">

```bash title="Terminal - Production Build"
npm run build
npm run serve
```

:::info Production
Production build tối ưu hóa code và tạo static files trong thư mục `build/`.
:::

</TabItem>
</Tabs>

:::success Hoàn thành
Nếu bạn thấy ứng dụng chạy thành công, chúc mừng! Bạn đã setup môi trường thành công. 🎉
:::

---

import Feedback from '@site/src/components/Feedback';

<Feedback title="Hướng dẫn này có giúp bạn setup thành công không?" />