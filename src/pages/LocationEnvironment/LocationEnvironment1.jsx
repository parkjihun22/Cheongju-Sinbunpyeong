import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "도심 속 숲세권 프리미엄<br />대전 문화공원을 품다",
    contentText:
      "약 15만 7천㎡ 규모의 대전 문화공원과 맞닿은 자연친화적 입지로<br />일상 속에서 힐링과 여유를 누리는 도심 속 숲세권 단지",
  },
  {
    img: section2Image2,
    titleText: "트램과 광역철도로 연결되는<br />대전의 새로운 교통 허브",
    contentText:
      "대전 2호선 트램(예정), 서대전역 KTX, 충청권 광역철도망 등<br />사통팔달 교통 네트워크로 어디든 빠르게",
  },
  {
    img: section2Image3,
    titleText: "교육·문화·생활 인프라를<br />한 걸음에 누리는 중심입지",
    contentText:
      "초·중학교, 한밭도서관, 이마트, 홈플러스, 대형병원 등<br />대전 중구 생활권의 풍부한 인프라를 도보권에서 누리는 입지",
  },
  {
    img: section2Image4,
    titleText: "공원·조경·수변이 어우러진<br />힐링 라이프",
    contentText:
      "대전 문화공원, 보문산, 경관녹지축이 어우러진 쾌적한 자연환경과<br />단지 내 조경 및 산책로 설계로 완성된 프리미엄 주거공간",
  },
  {
    img: section2Image5,
    titleText: "도심 속에서도<br />조용하고 품격 있는 주거공간",
    contentText:
      "도심 생활의 편리함은 그대로, 자연과 함께하는<br />조용하고 쾌적한 주거환경으로 일상의 품격을 높입니다",
  },
  {
    img: section2Image6,
    titleText: "민간공원 특례사업으로 조성되는<br />미래가치 높은 명품단지",
    contentText:
      "민간공원 특례사업으로 조성되는 공원과 주거의 복합단지<br />희소성과 프리미엄이 결합된 미래가치 높은 수자인",
  },
];


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
    <div className={styles.container}><Helmet>
    {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="robots" content="index, follow" />
  
    {/* SEO 최적화를 위한 메타 태그 */}
    <title>대전 문화공원 수자인 - 입지환경</title>
    <meta
      name="description"
      content="대전 문화공원 수자인의 입지환경을 소개합니다. 트램 2호선과 서대전역 KTX 등 뛰어난 교통망, 대전 문화공원과 보문산이 어우러진 자연환경, 교육·생활·문화 인프라까지 완비된 중심입지를 만나보세요."
    />
    <meta
      name="keywords"
      content="대전 문화공원 수자인, 대전 수자인 입지환경, 트램2호선, 대전 문화공원, 보문산, 중구 아파트"
    />
    <link rel="canonical" href="https://hangboggift.kr/LocationEnvironment/intro" />
  
    {/* Open Graph - 소셜 미디어 공유 최적화 */}
    <meta property="og:title" content="대전 문화공원 수자인 - 입지환경" />
    <meta
      property="og:description"
      content="트램·KTX·문화공원·보문산·생활인프라까지 모두 갖춘 대전 문화공원 수자인의 입지환경."
    />
    <meta property="og:image" content="https://hangboggift.kr/Main1.png" />
    <meta property="og:url" content="https://hangboggift.kr/LocationEnvironment/intro" />
    <meta property="og:site_name" content="대전 문화공원 수자인" />
  
    {/* Twitter 카드 설정 */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="대전 문화공원 수자인 - 입지환경" />
    <meta
      name="twitter:description"
      content="트램2호선·서대전역·문화공원·보문산이 어우러진 완벽한 입지환경."
    />
    <meta name="twitter:image" content="https://hangboggift.kr/Main1.png" />
    <meta name="twitter:url" content="https://hangboggift.kr/LocationEnvironment/intro" />
  
    {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "대전 문화공원 수자인 - 입지환경",
          "description": "대전 문화공원 수자인의 입지환경 — 트램 2호선, KTX, 문화공원, 보문산, 생활 인프라 완비.",
          "url": "https://hangboggift.kr/LocationEnvironment/intro"
        }
      `}
    </script>
  </Helmet>
  
  <Header isChanged={isScroll} />
  <FixIcon />
  
  <Bener title="입지환경" />
  <MenuBar contents={menuContents} />
  
  {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
  <h1 className={styles.screenReaderOnly}>대전 문화공원 수자인 - 입지환경</h1>
  <p className={styles.screenReaderOnly}>
    대전 문화공원 수자인은 트램 2호선과 서대전역 KTX로 이어지는 교통망과
    문화공원·보문산을 품은 자연환경, 그리고 교육·쇼핑·문화 인프라가 완비된
    대전 중심 입지에 위치한 프리미엄 단지입니다.
  </p>
  
  <div className={styles.textBox}>
    <div>대전 중심에서 누리는 완벽한 입지</div>
    <div>문화공원을 품은 프리미엄 라이프</div>
    <div>트램과 자연이 만나는 수자인의 가치</div>
  </div>
  
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
        <title>대전 문화공원 수자인 - 입지환경</title>
        <meta
          name="description"
          content="대전 문화공원 수자인의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 용인의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
"
        />
        <meta
          name="keywords"
          content="대전 문화공원 수자인, 대전 문화공원 수자인, 대전 문화공원 수자인모델하우스"
        />
        <link
          rel="canonical"
          href="https://hangboggift.kr/LocationEnvironment/intro"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="대전 문화공원 수자인 - 입지환경"
        />
        <meta
          property="og:description"
          content="대전 문화공원 수자인의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 용인의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
"
        />
        <meta
          property="og:image"
          content="https://hangboggift.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://hangboggift.kr/LocationEnvironment/intro"
        />
        <meta property="og:site_name" content="대전 문화공원 수자인" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="대전 문화공원 수자인 - 입지환경"
        />
        <meta
          name="twitter:description"
          content="대전 문화공원 수자인의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 용인의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
"
        />
        <meta
          name="twitter:image"
          content="https://hangboggift.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://hangboggift.kr/LocationEnvironment/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
										{
											"@context": "https://schema.org",
											"@type": "WebPage",
											"name": "대전 문화공원 수자인 - 입지환경",
											"description": "대전 문화공원 수자인의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 용인의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
",
											"url": "https://hangboggift.kr/LocationEnvironment/intro"
										}
										`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        대전 문화공원 수자인 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        대전 문화공원 수자인의 입지 정보를 확인하세요. 뛰어난 교통망, 생활
        인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 용인의
        중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
      </p>

      <div className={styles.textBox}>
        <div>갈수록 완벽해질 대전</div>
        <div>살수록 높아질 풍경채</div>
        <div>도시를 압도할 자부심,대전 문화공원 수자인 </div>
      </div>

      <img
        src={page1}
        className={styles.image2}
        alt="신분평더웨이시티입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 대전 문화공원 수자인 사업주체 및 시공사와 무관합니다.
        </div>
        {/* <div className={styles.notice}>
          ※첨단 시스템 반도체 클러스터(계획) : 국토교통부고시 제2024-853호 「용인 첨단시스템반도체 클러스터 국가산업단지 산업단지계획 및 지형도면 고시」 (2024.12.31)에 의한 것으로 향후 국토교통부에 의해 사업계획이 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※용인 반도체 클러스터 일반산업단지(예정) : 용인시 고시 제2024-775호 「대전 일반산업단지계획(8차 변경) 승인 고시」 (2024.12.26)에 의한 것으로 향후 시행자 (용인일반산업단지(주))에 의해 사업계획이 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※용인이동 공공주택지구(계획) : 국토교통부 고시 제2025-30호「용인이동 공공주택지구 지정 고시」(2025.01.24)에 의한 것으로 향후 국토교통부에 의해 사업계획이 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※경강선 연장(추진중) : 용인시 언론보도 “용인특례시, 경강선 연장’ 제5차 국가철도망계획 반영 건의” (2024.02.08)를 표현한 것으로 국토교통부 사업계획 반영은 미정입니다.
        </div>
        <div className={styles.notice}>
          ※국지도84호선 개설(예정) : 화성시 고시 제2024-11호 「국지도84호선(중리~천리) 도로건설공사 도로구역 결정(변경) 고시」 (2024.01.04)에 의한 것으로 향후 국토교통부에 의해 사업계획이 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※국도45호선 확장(추진중) : 국토교통부 보도자료 “용인 반도체 국가산업단지 지정, 세계 최대의 ‘반도체 특화 도시’로 조성한다” (2024.12.26)에 의한 것으로 국토교통부 사업계획 반영은 미정입니다.
        </div>
        <div className={styles.notice}>
          ※국지도57호선 확장(추진중) : 용인시 언론보도 “용인특례시, 반도체 국가산단 연계 도로망 구축 박차” (2024.03.28)에 의한 것으로 국토교통부 사업계획 반영은 미정입니다.
        </div>
        <div className={styles.notice}>
          ※동용인IC 신설(추진중) : 용인시 언론보도 “용인특례시, 세종-포천고속도로 ‘동용인IC’ 신설 위한 큰 관문 통과” (2023.12.22)에 의한 것으로 국토교통부 사업계획 반영은 미정입니다.
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
