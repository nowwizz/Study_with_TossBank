const Footer = () => {
  return (
    <footer>
      <div className="info1">
        <div>
          <span>회사소개</span>
          <span>인재채용</span>
          <span>사회공헌</span>
          <span>제휴/광고/부대사업문의</span>
          <span>이용약관</span>
          <span>
            <b>위치기반서비스 이용약관</b>
          </span>
          <span>
            <b>개인정보처리방침</b>
          </span>
          <span>윤리경영</span>
        </div>
        <button
          style={{
            backgroundImage: "url(/finding.PNG)",
            border: "none",
            width: "106px",
            height: "30px",
            backgroundSize: "cover",
          }}
        ></button>
      </div>
      <div className="info2">
        <div style={{ backgroundImage: "url" }}>
          <img
            src="https://img.megabox.co.kr/static/pc/images/common/ci/logo-opacity_new2.png"
            alt=""
          />
        </div>
        <div>
          <p>
            서울특별시 강남구 테헤란로 87길 22 도심공항터미널 건물 408호 ARS
            1544-0070 대표이메일 m.dreamcenter@partner.megabox.co.kr
          </p>
          <p>
            대표자명 홍정인, 남용석 · 개인정보보호책임자 강병철 · 사업자등록번호
            211-86-59478 · 통신판매업신고번호 2023-서울성동-0177
          </p>
          <p>COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved</p>
        </div>
        <div
          style={{
            backgroundImage: "url(/sns.PNG)",
            width: "140px",
            height: "30px",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
