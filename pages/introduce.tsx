import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

const Introduce = () => {
  return (
    <div className="container">
      <Header />
      <h1 className="text-4xl font-bold mb-2">Introduce</h1>

      <p>
        Caffe 서비스를 이용해서, 온라인으로 주문하고 편하게 현장에서 수령하세요!
      </p>
    </div>
  );
};

export default Introduce;
