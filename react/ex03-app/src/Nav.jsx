import styled from "styled-components";

function Nav() {
  const Nav = styled.div`
    display: flex;
  `;
  const Dropdown = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    list-style: none;
    padding: 0;
    margin: 0;
    display: none; /* 기본적으로 숨김 */
    border: 1px solid #ddd;
    border-radius: 7px;
    min-width: 100px;
    box-shadow: 0px 3px 10px rgba(216, 216, 216, 0.392);

    & li {
      display: block;
    }
    & a {
      display: block;
      padding: 10px;
      text-decoration: none;
      color: RGB(96, 115, 136);
      font-size: 14px;
    }
    & a:hover {
      background-color: RGB(238, 246, 255);
    }
  `;

  const DropdownWrapper = styled.div`
    position: relative;
    padding: 10px;
    margin-left: 50px;
    display: inline-block;
    & a:visited {
      text-decoration: none;
      color: RGB(96, 115, 136);
    }
    & a:link {
      text-decoration: none;
      color: RGB(96, 115, 136);
    }
    & a:hover {
      color: RGB(56, 93, 212);
      font-weight: bold;
    }
    &:hover ul {
      display: block;
    }
  `;

  return (
    <Nav>
      <DropdownWrapper>
        <a href="">제품</a>
        <Dropdown>
          <li>
            <a href="">전자기기</a>
          </li>
          <li>
            <a href="">의류</a>
          </li>
          <li>
            <a href="">도서</a>
          </li>
          <li>
            <a href="">액세서리</a>
          </li>
        </Dropdown>
      </DropdownWrapper>
      <DropdownWrapper>
        <a href="">서비스</a>
        <Dropdown>
          <li>
            <a href="">컨설팅</a>
          </li>
          <li>
            <a href="">교육</a>
          </li>
          <li>
            <a href="">고객지원</a>
          </li>
          <li>
            <a href="">유지보수</a>
          </li>
        </Dropdown>
      </DropdownWrapper>
      <DropdownWrapper>
        <a href="">회사소개</a>
        <Dropdown>
          <li>
            <a href="">회사정보</a>
          </li>
          <li>
            <a href="">팀 소개</a>
          </li>
          <li>
            <a href="">채용 정보</a>
          </li>
          <li>
            <a href="">연락처</a>
          </li>
        </Dropdown>
      </DropdownWrapper>
    </Nav>
  );
}

export default Nav;
