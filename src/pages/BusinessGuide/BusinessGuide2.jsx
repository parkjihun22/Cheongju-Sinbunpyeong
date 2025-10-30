import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";



import page1 from "../../assets/BusinessGuide/BusinessGuide2/calendar.jpg";

import Ready from "../../components/Ready/Ready";

const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      { title: "분양일정", url: "/BusinessGuide/plan" },
      // { title: "계약서류안내", url: "/BusinessGuide/documents" },
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false); // ✅ 기존 이미지 가시성 상태 유지
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            // ✅ 기존 이미지 로딩 로직도 유지 (하지만 Ready가 표시됨)
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            } else {
                setIsImageVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1"
  />
  <meta name="theme-color" content="#ffffff" />
  <meta name="robots" content="index, follow" />

  {/* SEO 최적화를 위한 메타 태그 */}
  <title>대전 문화공원 수자인 - 분양일정</title>
  <meta
    name="description"
    content="대전 문화공원 수자인의 분양 일정을 한눈에 확인하세요. 입주자 모집공고부터 특별공급, 1·2순위 청약, 계약일정까지 세부 정보를 제공합니다. 숲세권 프리미엄 단지의 소중한 기회를 놓치지 마세요."
  />
  <meta
    name="keywords"
    content="대전 문화공원 수자인, 문화동 수자인, 대전 수자인 분양일정, 대전 아파트 청약, 수자인 모집공고"
  />
  <link
    rel="canonical"
    href="https://www.vaaclubs.com/BusinessGuide/plan"
  />

  {/* Open Graph - 소셜 미디어 공유 최적화 */}
  <meta property="og:title" content="대전 문화공원 수자인 - 분양일정" />
  <meta
    property="og:description"
    content="대전 문화공원 수자인의 분양 일정을 한눈에 확인하세요. 입주자 모집공고부터 특별공급, 1·2순위 청약, 계약일정까지 세부 정보를 제공합니다."
  />
  <meta property="og:image" content="https://www.vaaclubs.com/Main1.png" />
  <meta property="og:url" content="https://www.vaaclubs.com/BusinessGuide/plan" />
  <meta property="og:site_name" content="대전 문화공원 수자인" />

  {/* Twitter 카드 설정 */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="대전 문화공원 수자인 - 분양일정" />
  <meta
    name="twitter:description"
    content="대전 문화공원 수자인의 분양 일정을 한눈에 확인하세요. 입주자 모집공고부터 청약, 계약까지 주요 일정을 안내드립니다."
  />
  <meta name="twitter:image" content="https://www.vaaclubs.com/Main1.png" />
  <meta name="twitter:url" content="https://www.vaaclubs.com/BusinessGuide/plan" />

  {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "대전 문화공원 수자인 - 분양일정",
      "description": "대전 문화공원 수자인의 분양 일정을 한눈에 확인하세요. 입주자 모집공고부터 특별공급, 1·2순위 청약, 계약일정까지 세부 정보를 제공합니다.",
      "url": "https://www.vaaclubs.com/BusinessGuide/plan"
    }
    `}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="분양일정" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  대전 문화공원 수자인 - 분양일정
</h1>
<p className={styles.screenReaderOnly}>
  대전 문화공원 수자인의 분양 일정은 입주자 모집공고, 청약, 당첨자 발표,
  계약일 등 주요 일정을 안내하는 핵심 정보입니다.
</p>

<div className={styles.textBox}>
  <div>문화공원을 품은 숲세권 프리미엄 단지</div>
  <div>대전 문화공원 수자인의 분양 일정을 지금 확인하세요.</div>
</div>


            {/* ✅ 기존 이미지 부분 주석 처리하고 Ready 컴포넌트 표시 */}
            <img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="대전 문화공원 수자인 분양일정안내-image1" />
            <div className={styles.readyContainer}>
           
            </div>


            <Footer />
        </div>
    );
};

export default BusinessGuide2;
