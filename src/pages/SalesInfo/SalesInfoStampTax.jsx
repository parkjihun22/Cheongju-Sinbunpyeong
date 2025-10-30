import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/SalesInfoStampTax/page1.jpg";
import Ready from "../../components/Ready/Ready";

const ComplexGuide1 = () => {
  const menuContents = [
    // { title: "청약제도변경", url: "/SalesInfo/SubscriptionGuide" },
    { title: "공급안내", url: "/SalesInfo/guide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "서류접수안내", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로드 상태
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>대전 문화공원 수자인 - 서류접수안내</title>
        <meta
          name="description"
          content="대전 문화공원 수자인 서류접수안내: 당첨자 제출서류 목록, 제출 방법(방문/온라인), 접수 기간·장소, 유의사항과 보완 절차까지 한눈에 확인하세요."
        />
        <meta
          name="keywords"
          content="대전 문화공원 수자인, 서류접수안내, 당첨자 서류, 제출서류, 접수기간, 접수장소, 보완서류"
        />
        <link rel="canonical" href="https://www.vaaclubs.com/SalesInfo/stampTax" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="대전 문화공원 수자인 - 서류접수안내" />
        <meta
          property="og:description"
          content="당첨자 제출서류, 접수 방법과 기간, 유의사항을 확인하세요."
        />
        <meta property="og:image" content="https://www.vaaclubs.com/Main1.png" />
        <meta property="og:url" content="https://www.vaaclubs.com/SalesInfo/stampTax" />
        <meta property="og:site_name" content="대전 문화공원 수자인" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="대전 문화공원 수자인 - 서류접수안내" />
        <meta
          name="twitter:description"
          content="제출서류 목록과 접수 절차, 보완 방법까지 한 번에."
        />
        <meta name="twitter:image" content="https://www.vaaclubs.com/Main1.png" />
        <meta name="twitter:url" content="https://www.vaaclubs.com/SalesInfo/stampTax" />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "대전 문화공원 수자인 - 서류접수안내",
              "description": "대전 문화공원 수자인 당첨자 서류접수 안내 — 제출서류, 접수기간·장소, 제출 방법, 보완 절차, 유의사항.",
              "url": "https://www.vaaclubs.com/SalesInfo/stampTax"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="서류접수안내" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        대전 문화공원 수자인 - 서류접수안내
      </h1>
      <p className={styles.screenReaderOnly}>
        대전 문화공원 수자인의 서류접수안내 페이지는 당첨자 제출서류 목록과
        접수기간·장소, 제출 방법(방문/온라인), 보완 절차 및 유의사항을 안내합니다.
        필요한 서류를 사전에 준비하여 접수 지연 없이 진행하세요.
      </p>

      <div className={styles.textBox}>
        <div>당첨자 제출서류 한눈에 확인</div>
        <div>접수기간·장소·방법·유의사항 안내</div>
      </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="대전 문화공원 수자인 인지세안내-image1"
        onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
      />



      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 것으로 성공적인 청약을 위해
          도움을 드리고있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
