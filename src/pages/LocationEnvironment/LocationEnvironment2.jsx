import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/premium.jpg";

const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
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

  return (
    <div className={styles.container}>
<Helmet>
  {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="robots" content="index, follow" />

  {/* SEO 최적화를 위한 메타 태그 */}
  <title>대전 문화공원 수자인 - 프리미엄</title>
  <meta
    name="description"
    content="대전 문화공원 수자인만의 차별화된 프리미엄을 소개합니다. 숲세권 입지, 4Bay 혁신 설계, 스마트홈, 품격 있는 커뮤니티와 브랜드 서비스로 일상의 가치를 높입니다."
  />
  <meta
    name="keywords"
    content="대전 문화공원 수자인, 수자인 프리미엄, 숲세권 아파트, 스마트홈, 커뮤니티"
  />
  <link rel="canonical" href="https://hangboggift.kr/LocationEnvironment/primium" />

  {/* Open Graph - 소셜 미디어 공유 최적화 */}
  <meta property="og:title" content="대전 문화공원 수자인 - 프리미엄" />
  <meta
    property="og:description"
    content="숲세권 입지와 4Bay 혁신 설계, 스마트홈·커뮤니티로 완성한 수자인의 프리미엄."
  />
  <meta property="og:image" content="https://hangboggift.kr/Main1.png" />
  <meta property="og:url" content="https://hangboggift.kr/LocationEnvironment/primium" />
  <meta property="og:site_name" content="대전 문화공원 수자인" />

  {/* Twitter 카드 설정 */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="대전 문화공원 수자인 - 프리미엄" />
  <meta
    name="twitter:description"
    content="자연·설계·커뮤니티·브랜드가 어우러진 대전 문화공원 수자인의 프리미엄."
  />
  <meta name="twitter:image" content="https://hangboggift.kr/Main1.png" />
  <meta name="twitter:url" content="https://hangboggift.kr/LocationEnvironment/primium" />

  {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "대전 문화공원 수자인 - 프리미엄",
        "description": "대전 문화공원 수자인의 프리미엄: 숲세권 입지, 4Bay 혁신 설계, 스마트홈, 커뮤니티, 브랜드 서비스.",
        "url": "https://hangboggift.kr/LocationEnvironment/primium"
      }
    `}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />

<MenuBar contents={menuContents} />
{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
<h1 className={styles.screenReaderOnly}>대전 문화공원 수자인 - 프리미엄</h1>
<p className={styles.screenReaderOnly}>
  대전 문화공원 수자인의 프리미엄은 숲세권 입지와 혁신 설계, 스마트홈,
  커뮤니티, 브랜드 서비스가 결합되어 일상의 품격을 높이는 데 있습니다.
</p>

<div className={styles.textBox}>
  <div>자연과 설계가 완성한 프리미엄</div>
  <div>도심 속 숲세권, 수자인의 가치</div>
</div>


      <img
        src={page1}
        className={styles.image3}
        alt="대전 문화공원 수자인-image1"
      />

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
