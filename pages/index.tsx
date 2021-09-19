import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>메인 - Caffe : 온라인 커피 주문</title>
      </Head>
      <Header />
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Caffe</h1>
          <p className="col-md-8 fs-4 py-3">
            온라인으로 주문하고 편하게 커피를 받아보세요!
          </p>
          <Link href="/introduce">
            <a className="btn btn-primary btn-lg" type="button">
              Caffe 소개
            </a>
          </Link>
          <Link href="/order">
            <a className="btn btn-outline-primary btn-lg ml-3" type="button">
              주문하기
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
