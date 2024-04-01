import { useEffect } from "react";
import Footer from "../../components/organisms/Footer";
import Navbar from '../../components/organisms/Navbar';
import TopUpForm from "../../components/organisms/TopUpForm";
import TopUpItem from "../../components/organisms/TopUpItem";
import { GameItemTypes, NominalsTypes, PaymentTypes } from "../../services/data-types";
import { getDetailVoucher, getFeatureGame } from "../../services/player";

interface DetailProps {
  dataItem: GameItemTypes;
  nominals: NominalsTypes[];
  payments: PaymentTypes[];
}

export default function Detail({ dataItem, nominals, payments }: DetailProps) {

  useEffect(() => {
    localStorage.setItem('data-item', JSON.stringify(dataItem))
  }, [])

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
            <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              {/* Mobile: Game title */}
              <TopUpItem data={dataItem} type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              {/* Desktop: Game title */}
              <TopUpItem data={dataItem} type="dekstop" />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

// GetStaticPath, tidak bisa berdiri sendiri jadi harus ada GetStaticProps
export async function getStaticPaths() {
  const { data } = await getFeatureGame();
  const paths = data.map((item: GameItemTypes) => ({
    params: {     // params ini dikirim ke getStaticProps
      id: item._id,   // id = [id].tsx
    },
  }));
  // console.log("paths : ", paths)
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  }
}
// getStaticPath tidak bisa berdiri sendiri jadi harus ada getStaticProps
export async function getStaticProps({ params }: GetStaticProps) {       // contex yang dibutuhin di file ini hanya params
  const { id } = params;
  const { data } = await getDetailVoucher(id);
  // console.log("data : ", data)
  return {
    props: {
      dataItem: data.detail,
      nominals: data.detail.nominals,
      payments: data.payment,
    },
  };
}