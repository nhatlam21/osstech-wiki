---
sidebar_position: 2
---

# Create a Document

:::info Tổng quan
Documents là **nhóm các trang** được kết nối thông qua:
- **sidebar** (thanh bên)
- **previous/next navigation** (điều hướng trước/sau)
- **versioning** (phiên bản)
:::

## Create your first Doc

:::tip Bắt đầu
Tạo file Markdown đầu tiên của bạn để bắt đầu viết tài liệu.
:::

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

:::success Kết quả
Một document mới đã sẵn sàng tại [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).
:::

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

:::info Tùy chỉnh Sidebar
Bạn có thể tạo sidebar một cách rõ ràng trong file `sidebars.js` để kiểm soát hoàn toàn cấu trúc.
:::

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```

---

import Feedback from '@site/src/components/Feedback';

<Feedback />
