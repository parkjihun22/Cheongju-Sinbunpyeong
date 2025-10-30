import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
//import page1 from "../../assets/SalesInfo/guide/page1.jpg"
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
        <title>대전 문화공원 수자인 - 공급안내</title>
        <meta
          name="description"
          content="대전 문화공원 수자인 공급안내: 총 세대수, 전용면적 별 공급규모(84㎡·126㎡), 일반·특별공급 유형, 계약 및 유의사항을 한눈에 확인하세요."
        />
        <meta
          name="keywords"
          content="대전 문화공원 수자인, 공급안내, 세대수, 일반공급, 특별공급, 전용 84, 전용 126"
        />
        <link rel="canonical" href="https://www.vaaclubs.com/SalesInfo/guide" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="대전 문화공원 수자인 - 공급안내" />
        <meta
          property="og:description"
          content="세대수, 타입별 공급규모(84㎡·126㎡), 일반·특별공급 정보 등 대전 문화공원 수자인의 공급안내를 확인하세요."
        />
        <meta property="og:image" content="https://www.vaaclubs.com/Main1.png" />
        <meta property="og:url" content="https://www.vaaclubs.com/SalesInfo/guide" />
        <meta property="og:site_name" content="대전 문화공원 수자인" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="대전 문화공원 수자인 - 공급안내" />
        <meta
          name="twitter:description"
          content="타입별 공급규모와 일반·특별공급 정보를 한 번에 확인하세요."
        />
        <meta name="twitter:image" content="https://www.vaaclubs.com/Main1.png" />
        <meta name="twitter:url" content="https://www.vaaclubs.com/SalesInfo/guide" />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "대전 문화공원 수자인 - 공급안내",
              "description": "대전 문화공원 수자인 공급안내 — 세대수, 타입별 공급규모(84㎡·126㎡), 일반·특별공급, 계약 및 유의사항 정보.",
              "url": "https://www.vaaclubs.com/SalesInfo/guide"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="공급안내" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        대전 문화공원 수자인 - 공급안내
      </h1>
      <p className={styles.screenReaderOnly}>
        대전 문화공원 수자인의 공급안내 페이지입니다. 총 509세대, 전용 84㎡·126㎡
        타입 구성 및 일반·특별공급 유형, 계약 관련 유의사항 등을 한눈에
        확인하실 수 있습니다.
      </p>

      <div className={styles.textBox}>
        <div>타입별 공급규모와 공급유형 안내</div>
        <div>84㎡ · 126㎡, 합리적인 선택을 돕습니다</div>
      </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      {/*<img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="대전 문화공원 수자인 청약안내-image1"
        onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
      />*/}

      <Ready />

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
