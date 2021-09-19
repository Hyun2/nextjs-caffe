import { Fragment, useEffect, useMemo, useState } from "react";
import Header from "../components/Header";

const formatter = Intl.NumberFormat("ko-KR");

interface DATA {
  name: string;
  price: number;
}

const data = [
  { name: "에스프레소", price: 2800 },
  { name: "아메리카노", price: 3000 },
  { name: "카페라떼", price: 3400 },
  { name: "카페모카", price: 3600 },
];

const Order = () => {
  const [selected, setSelected] = useState<DATA[]>([]);

  // const handleEspresso = () => setHasEspresso((prev) => !prev);
  let sum = useMemo(() => {
    return selected.reduce((prev, curItem) => prev + curItem.price, 0);
  }, [selected]);

  return (
    <div className="container">
      <Header />
      <h1 className="text-4xl font-bold">Order</h1>
      <h2 className="text-2xl my-3">메뉴판</h2>

      {data.map((item, i) => {
        return (
          <Fragment key={i}>
            <dt>{item.name}</dt>
            <dd className="mb-2">
              {formatter.format(item.price)}원
              <small>
                <button
                  onClick={() => {
                    if (selected.includes(item)) {
                      setSelected(selected.filter((el) => el !== item));
                    } else {
                      setSelected([...selected, item]);
                    }
                  }}
                >
                  [ {selected.includes(item) ? "선택 해제" : "선택"} ]
                </button>
              </small>
            </dd>
          </Fragment>
        );
      })}

      <div className="my-4">
        <hr />
      </div>
      <h2 className="text-2xl">주문서</h2>
      <ul className="list-unstyled my-3">
        {selected.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
      <span>합계 : {formatter.format(sum)} 원</span>
      <div className="my-3">
        <button
          onClick={() =>
            confirm(
              `주문 합계는 ${formatter.format(sum)}입니다. 주문하시겠습니까?`
            )
          }
          className="btn btn-primary btn-lg"
        >
          주문하기
        </button>
      </div>
    </div>
  );
};

export default Order;
