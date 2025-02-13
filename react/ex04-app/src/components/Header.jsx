const Header = () => {
  return (
    <header>
      <div className="menu1">
        <div className="left_1_menu">
          <a href="">VIP LOUNGE</a>
          <a href="">멤버십</a>
          <a href="">고객센터</a>
        </div>
        <div className="right_1_menu">
          <a href="">로그인</a>
          <a href="">회원가입</a>
          <a href="">빠른예매</a>
        </div>
      </div>
      <div className="menu2">
        <div className="left_2_menu">
          <span className="image">
            <a href="">
              <img src="ico-sitemap.png" alt="" />
            </a>
            <a href="">
              <img src="ico-search.png" alt="" />
            </a>
          </span>
          <span className="text">
            <div className="dropdown-wrapper">
              <a style={{ marginLeft: "80px" }} href="">
                영화
              </a>
              <ul className="dropdown d1">
                <li>
                  <a href="#">전체영화</a>
                </li>
              </ul>
            </div>
            <div className="dropdown-wrapper">
              <a href="">예매</a>
              <ul className="dropdown d2">
                <li>
                  <a href="#">빠른예매</a>
                </li>
                <li>
                  <a href="#">영화상영표</a>
                </li>
                <li>
                  <a href="#">더 부티크 프라이빗 예매</a>
                </li>
              </ul>
            </div>
            <div className="dropdown-wrapper">
              <a href="">극장</a>
              <ul className="dropdown d3">
                <li>
                  <a href="#">전체극장</a>
                </li>
                <li>
                  <a href="#">특별관</a>
                </li>
              </ul>
            </div>
          </span>
        </div>
        <div className="center_logo">
          <a href="">
            <img src="/logo_new2.png" alt="" />
          </a>
        </div>
        <div className="right_2_menu">
          <span className="text">
            <div className="dropdown-wrapper">
              <a href="">이벤트</a>
              <ul className="dropdown d4">
                <li>
                  <a href="#">진행중 이벤트</a>
                </li>
                <li>
                  <a href="#">지난 이벤트</a>
                </li>
                <li>
                  <a href="#">당첨자발표</a>
                </li>
              </ul>
            </div>
            <a href="">스토어</a>
            <div className="dropdown-wrapper">
              <a style={{ marginRight: "80px" }} href="">
                혜택
              </a>
              <ul className="dropdown d5">
                <li>
                  <a href="#">메가박스 멤버십</a>
                </li>
                <li>
                  <a href="#">제휴/할인</a>
                </li>
              </ul>
            </div>
          </span>
          <span className="image">
            <a href="">
              <img src="/ico-schedule.png" alt="" />
            </a>
            <a href="">
              <img src="/ico-mymega.png" alt="" />
            </a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
