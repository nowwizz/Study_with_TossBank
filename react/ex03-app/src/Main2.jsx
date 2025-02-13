import styled from "styled-components";

function Main() {
  const Sale = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  `;
  const Product = styled.div`
    display: flex;
    border: 1px solid RGB(234, 236, 235);
    background-color: white;
    border-radius: 7px;
    flex-direction: column;
    width: 400px;
    height: 180px;
    padding-bottom: 5px;
    box-shadow: 3px 3px 10px rgba(216, 216, 216, 0.392);
    margin-bottom: 50px;
    &:hover {
      background-color: RGB(247, 251, 255);
      cursor: pointer;
    }
  `;
  const ProductTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    & h3,
    p {
      font-weight: bold;
    }
    & p {
      color: RGB(56, 93, 212);
    }
  `;

  const ProductEx = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    color: RGB(79, 86, 86);
  `;

  const ProductB = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    align-items: center;
    & p {
      background-color: RGB(235, 245, 255);
      color: RGB(56, 93, 212);
      padding: 7px;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 20px;
      font-size: 14px;
      text-align: center;
    }
    & button {
      height: 35px;
      border: 0;
      background-color: RGB(38, 100, 236);
      color: white;
      border-radius: 10px;
      font-size: 14px;
      padding-left: 14px;
      padding-right: 14px;
    }
    & button:hover {
      background-color: RGB(130, 167, 244);
      cursor: pointer;
    }
  `;
  const BG = styled.p`
    display: flex;
    position: absolute;
    z-index: -1;
    font-size: 130px;
    color: RGB(56, 93, 212, 0.4);
    top: 25%;
    left: 30%;
  `;
  const Main = styled.div`
    margin-left: 10px;
    margin-right: 10px;
  `;

  return (
    <Main>
      <BG>TechStore</BG>
      <div>
        <h1 style={{ margin: "30px", fontWeight: "bold" }}>추천 제품</h1>
      </div>
      <Sale>
        <Product>
          <ProductTitle>
            <h3>프리미엄 노트북</h3>
            <p>1,599,000원</p>
          </ProductTitle>
          <ProductEx>
            <p>최신 사양의 고성능 노트북</p>
          </ProductEx>
          <ProductB>
            <p>전자기기</p>
            <button>장바구니 담기</button>
          </ProductB>
        </Product>
        <Product>
          <ProductTitle>
            <h3>무선 헤드폰</h3>
            <p>299,000원</p>
          </ProductTitle>
          <ProductEx>
            <p>프리미엄 사운드의 노이즈 캔슬링 헤드폰</p>
          </ProductEx>
          <ProductB>
            <p>전자기기</p>
            <button>장바구니 담기</button>
          </ProductB>
        </Product>
        <Product>
          <ProductTitle>
            <h3>스마트 워치</h3>
            <p>399,000원</p>
          </ProductTitle>
          <ProductEx>
            <p>피트니스 트래킹과 스마트 연결 기능</p>
          </ProductEx>
          <ProductB>
            <p>액세서리</p>
            <button>장바구니 담기</button>
          </ProductB>
        </Product>
        <Product>
          <ProductTitle>
            <h3>무선 이어폰</h3>
            <p>259,000원</p>
          </ProductTitle>
          <ProductEx>
            <p>간편한 휴대성과 풍부한 음질</p>
          </ProductEx>
          <ProductB>
            <p>액세서리</p>
            <button>장바구니 담기</button>
          </ProductB>
        </Product>
        <Product>
          <ProductTitle>
            <h3>고사양 조립 PC</h3>
            <p>899,000원</p>
          </ProductTitle>
          <ProductEx>
            <p>배틀그라운드 고사양, 감각적인 디자인</p>
          </ProductEx>
          <ProductB>
            <p>전자제품</p>
            <button>장바구니 담기</button>
          </ProductB>
        </Product>
        <Product>
          <ProductTitle>
            <h3>최신형 핸드폰</h3>
            <p>1,200,000원</p>
          </ProductTitle>
          <ProductEx>
            <p>놀라운 카메라 화질과 성능, 가벼운 무게감</p>
          </ProductEx>
          <ProductB>
            <p>전자기기</p>
            <button>장바구니 담기</button>
          </ProductB>
        </Product>
      </Sale>
    </Main>
  );
}

export default Main;
