import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="대전 문화공원 수자인-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '수자인' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    도심 속에서 자연을 품은 힐링 라이프,
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    공원과 함께하는 프리미엄 주거의 기준
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    NO.1 브랜드, 대전 문화공원 수자인과 함께하세요.
                </div>
            </>
        );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    대전의 중심, 문화동에 새로운 프리미엄 라이프가 시작됩니다.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    공원과 함께하는 509세대의 도심 속 힐링타운
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    자연·도심·브랜드가 어우러진 특별한 가치
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    대전 문화공원 수자인
                </div>
            </>
        );
    } else if (text === '입지환경') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    대전 중심에서 누리는 숲세권 프리미엄
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    15만㎡ 규모 문화공원과 트램, 광역철도 등 미래가치의 중심
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    대전 문화공원 수자인에서 자연과 도심의 완벽한 조화를 경험하세요.
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    자연과 어우러진 프리미엄 단지 설계
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    4Bay 혁신평면과 쾌적한 조경, 품격 있는 커뮤니티
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    오직 509세대만 누리는 도심 속 힐링 라이프, 대전 문화공원 수자인
                </div>
            </>
        );
    }
};