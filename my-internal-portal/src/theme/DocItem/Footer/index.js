import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common'; // Để tự chỉnh màu Sáng/Tối

export default function FooterWrapper(props) {
  const { colorMode } = useColorMode(); // Lấy chế độ màu hiện tại của Web

  return (
    <>
      <Footer {...props} />
      
      {/* Khung bình luận Giscus */}
      <div style={{ marginTop: '50px', borderTop: '1px solid #eaeaea', paddingTop: '20px' }}>
        <h3>💬 Thảo luận & Hỏi đáp</h3>
        <Giscus
          id="comments"
          repo="nhatlam21/osstech-wiki"  // <--- THAY TÊN REPO CỦA BẠN
          repoId="R_kgDOQu_KMw"             // <--- DÁN MÃ REPO ID VÀO ĐÂY
          category="General"
          categoryId="DIC_kwDOQu_KM84C0QA2"       // <--- DÁN MÃ CATEGORY ID VÀO ĐÂY
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={colorMode}               // Tự động đổi màu theo giao diện web
          lang="vi"
          loading="lazy"
        />
      </div>
    </>
  );
}