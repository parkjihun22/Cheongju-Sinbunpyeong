import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/brand.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
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
  <title>대전 문화공원 수자인 - 브랜드 소개</title>
  <meta
    name="description"
    content="대전 문화공원 수자인의 브랜드 철학과 가치를 소개합니다. 자연과 도심이 공존하는 대전 중심 문화동에서, 수자인이 선보이는 새로운 프리미엄 라이프를 만나보세요. 민간공원 특례사업으로 조성된 대규모 숲세권 단지로, 자연친화적인 설계와 브랜드의 품격이 어우러진 주거문화를 제시합니다."
  />
  <meta
    name="keywords"
    content="대전 문화공원 수자인, 문화동 수자인, 대전 수자인 모델하우스, 대전 신규분양, 대전 아파트 분양"
  />
  <link rel="canonical" href="https://www.apay.co.kr/Brand/intro" />

  {/* Open Graph - 소셜 미디어 공유 최적화 */}
  <meta
    property="og:title"
    content="대전 문화공원 수자인 - 브랜드 소개"
  />
  <meta
    property="og:description"
    content="대전 문화공원 수자인의 브랜드 철학과 가치를 소개합니다. 자연과 도심이 공존하는 대전 중심 문화동에서, 수자인이 선보이는 새로운 프리미엄 라이프를 만나보세요. 민간공원 특례사업으로 조성된 대규모 숲세권 단지로, 자연친화적인 설계와 브랜드의 품격이 어우러진 주거문화를 제시합니다."
  />
  <meta property="og:image" content="https://www.apay.co.kr/Main1.png" />
  <meta
    property="og:url"
    content="https://www.apay.co.kr/Brand/intro"
  />
  <meta property="og:site_name" content="대전 문화공원 수자인" />

  {/* Twitter 카드 설정 */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="대전 문화공원 수자인 - 브랜드 소개"
  />
  <meta
    name="twitter:description"
    content="대전 문화공원 수자인의 브랜드 철학과 가치를 소개합니다. 자연과 도심이 공존하는 대전 중심 문화동에서, 수자인이 선보이는 새로운 프리미엄 라이프를 만나보세요."
  />
  <meta
    name="twitter:image"
    content="https://www.apay.co.kr/Main1.png"
  />
  <meta
    name="twitter:url"
    content="https://www.apay.co.kr/Brand/intro"
  />

  {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "대전 문화공원 수자인 - 브랜드 소개",
      "description": "대전 문화공원 수자인의 브랜드 철학과 가치를 소개합니다. 자연과 도심이 공존하는 대전 중심 문화동에서, 수자인이 선보이는 새로운 프리미엄 라이프를 만나보세요. 민간공원 특례사업으로 조성된 대규모 숲세권 단지로, 자연친화적인 설계와 브랜드의 품격이 어우러진 주거문화를 제시합니다.",
      "url": "https://www.apay.co.kr/Brand/intro"
    }
    `}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="대전 문화공원 수자인" />

<MenuBar contents={menuContents} />
{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
<h1 className={styles.screenReaderOnly}>
  대전 문화공원 수자인 - 브랜드 소개
</h1>
<p className={styles.screenReaderOnly}>
  대전 문화공원 수자인은 자연과 도심이 만나는 특별한 공간에 자리한
  프리미엄 브랜드 아파트입니다. 품격 있는 설계와 친환경 조경,
  혁신적인 기술력을 바탕으로, 입주민의 삶에 품격과 여유를 더합니다.
  신뢰와 가치, 그리고 지속 가능한 미래를 위한 수자인의 브랜드 철학을
  경험해보세요.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>자연과 도심이 공존하는 대전의 중심</div>
  <div>문화공원을 품은 프리미엄 브랜드, 수자인</div>
</div>


            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="대전 문화공원 수자인 brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
