---
sidebar_position: 1
---

# Create a Page

:::info Tổng quan
Thêm file **Markdown hoặc React** vào `src/pages` để tạo một **trang độc lập**:
:::

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

:::tip React Pages
React pages cho phép bạn tạo các trang động với logic phức tạp hơn.
:::

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

:::success Kết quả
Trang mới đã sẵn sàng tại [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).
:::

## Create your first Markdown Page

:::tip Markdown Pages
Markdown pages đơn giản hơn, phù hợp cho nội dung tĩnh.
:::

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

:::success Kết quả
Trang mới đã sẵn sàng tại [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
:::

---

import Feedback from '@site/src/components/Feedback';

<Feedback />
