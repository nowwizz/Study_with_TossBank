const Main = () => {
  return (
    <main>
      <p className="main_text">전체영화</p>
      <div className="movie_option">
        <button
          style={{
            borderColor:
              "rgb(52, 37, 103) rgb(52, 37, 103) rgb(255, 255, 255) rgb(52, 37, 103)",
          }}
        >
          박스오피스
        </button>
        <button>상영예정작</button>
        <button>단독</button>
        <button>필름소사이어티</button>
        <button>클래식소사이어티</button>
      </div>
      <div className="middle_search">
        <div className="movie_open">
          <input className="ckbox" type="checkbox" id="ck" />
          <label className="ck" htmlFor="ck"></label>
          <label style={{ fontSize: "14px", marginRight: "10px" }}>
            개봉작만
          </label>
          <span style={{ fontSize: "14px" }}>
            <b>89</b>개의 영화가 검색되었습니다.
          </span>
        </div>
        <div className="movie_search">
          <input type="text" placeholder=" 영화명 검색" />
          <button>
            <img src="btn-search-input.png" alt="" />
          </button>
        </div>
      </div>
      <div className="movie">
        <div className="movie1">
          <div className="movie_img">
            <i>1</i>
            <div className="overlay">
              "연주할 때만 느껴지는 감정이 있거든. 그게 널 만나면 느껴져" 유학
              중이던 피아니스트 유준은 팔목 치료를 위해 한국에 교환 학생으로
              오게 된다. 학교에 처음 간 그날, 신비로운 피아노 선율에 이끌려
              도착한 연습실에서
            </div>
          </div>
          <div className="title">
            <img src="/ALL_46x46.png" alt="" />
            <p>말할 수 없는 비밀</p>
          </div>
          <p style={{ fontSize: "15px", width: "230px" }}>
            예매율 30.3%
            <span style={{ color: "lightgrey", fontSize: "14px" }}> | </span>
            개봉일 2025.01.28
          </p>
          <div className="movie_button">
            <button>
              <img src="/heart-gray.png" alt="" />
              <p style={{ marginLeft: "5px" }}>667</p>
            </button>
            <button>예매</button>
            <button>
              <img
                src="https://www.megabox.co.kr/static/pc/images/common/btn/mov_list_db_btn.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="movie2">
          <div className="movie_img">
            <i>2</i>
            <div className="overlay">
              금지된 곳으로 갈 준비가 되었습니다. '유니아' 수녀(송혜교)는
              '희준'(문우진)의 몸에 숨어든 악령이 12형상 중 하나라고 확신한다.
              당장 올 수 없는 구마 사제를 기다리다가 부마자가 희생될 것이 분명한
              상황. 결국 '유니
            </div>
          </div>
          <div className="title">
            <img src="/15_46x46.png" alt="" />
            <p>검은 수녀들</p>
          </div>
          <p style={{ fontSize: "15px", width: "230px" }}>
            예매율 13%
            <span style={{ color: "lightgrey", fontSize: "14px" }}> | </span>
            개봉일 2025.01.24
          </p>
          <div className="movie_button">
            <button>
              <img src="/heart-gray.png" alt="" />
              <p style={{ marginLeft: "5px" }}>326</p>
            </button>
            <button>예매</button>
            <button>
              <img
                src="https://www.megabox.co.kr/static/pc/images/common/btn/mov_list_db_btn.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="movie3">
          <div className="movie_img">
            <i>3</i>
            <div className="overlay">
              'HITMAN IS BACK!' 대한민국을 포복절도하게 만든 암살요원, 이번엔
              '암살요원 준'으로 돌아왔다! 욱해서 그린 웹툰 '암살요원 준'의
              성공으로 잠간 흥행 작가가 된 '준'은 시즌2 연재 시작과 동시에
              '뇌절작가'로 전락하
            </div>
          </div>
          <div className="title">
            <img src="/15_46x46.png" alt="" />
            <p style={{ fontSize: "17px" }}>보고타: 마지막 기회의 땅</p>
          </div>
          <p style={{ fontSize: "15px", width: "230px" }}>
            예매율 10.3%
            <span style={{ color: "lightgrey", fontSize: "14px" }}>
              {" "}
              |{" "}
            </span>{" "}
            개봉일 2025.12.31
          </p>
          <div className="movie_button">
            <button>
              <img src="/heart-gray.png" alt="" />
              <p style={{ marginLeft: "5px" }}>333</p>
            </button>
            <button>예매</button>
            <button>
              <img
                src="https://www.megabox.co.kr/static/pc/images/common/btn/mov_list_db_btn.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="movie4">
          <div className="movie_img">
            <i>4</i>
            <div className="overlay">
              1908년 함경북도 신아산에서 안중근이 이끄는 독립군들은 일본군과의
              전투에서 큰 승리를 거둔다. 대한의군 참모총장 안중근은 만국공법에
              따라 전쟁포로인 일본인들을 풀어주게 되고, 이 사건으로 인해 독립군
              사이에서
            </div>
          </div>
          <div className="title">
            <img src="/15_46x46.png" alt="" />
            <p>하얼빈</p>
          </div>
          <p style={{ fontSize: "15px", width: "230px" }}>
            예매율 8.6%
            <span style={{ color: "lightgrey", fontSize: "14px" }}> | </span>
            개봉일 2025.12.24
          </p>
          <div className="movie_button">
            <button>
              <img src="/heart-gray.png" alt="" />
              <p style={{ marginLeft: "5px" }}>1.4k</p>
            </button>
            <button>예매</button>
            <button>
              <img
                src="https://www.megabox.co.kr/static/pc/images/common/btn/mov_list_db_btn.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
