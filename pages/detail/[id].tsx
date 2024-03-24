import Footer from "../../components/organisms/Footer";
import TopUpForm from "../../components/organisms/TopUpForm";
import TopUpItem from "../../components/organisms/TopUpItem";
import Navbar from '../../components/organisms/Navbar'
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { getDetailVoucher } from "../../services/player";

export default function Detail() {
  const { query, isReady } = useRouter();
  const [dataItem, setDataItem] = useState({
    name: '',
    thumbnail: '',
    category: {
      name: '',
    }
  });

  const [nominals, setNominals] = useState([])
  const [payments, setPayments] = useState([]);

  // Get Detail Page
  const getVoucherDetailAPI = useCallback(async (id: any) => {
    const response = await getDetailVoucher(id);
    setDataItem(response.data.detail)
    setNominals(response.data.detail.nominals)
    setPayments(response.data.payment)
  }, [])

  useEffect(() => {
    if (isReady) {
      // console.log('router sudah tersedia', query.id)
      getVoucherDetailAPI(query.id);
    }
  }, [isReady])
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
