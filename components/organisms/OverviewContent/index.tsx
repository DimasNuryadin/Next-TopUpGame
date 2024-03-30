import { useCallback, useEffect, useState } from "react"
import Category from "./Category"
import TableRow from "./TableRow"
import { toast } from "react-toastify"
import { getMemberOverview } from "../../../services/member"
import { HistoryTransactionTypes, TopUpCategoryTypes } from "../../../services/data-types"

export default function OverviewContent() {
  const [count, setCount] = useState([])
  const [data, setData] = useState([]);

  // Get Dashboard Overview
  const getMemberOverviewList = useCallback(async () => {
    const response = await getMemberOverview()
    if (response.error) {
      toast.error(response.message)
    } else {
      // console.log(response.data)
      setCount(response.data.count);
      setData(response.data.data);
    }
  }, [])

  useEffect(() => {
    getMemberOverviewList();
  }, [])

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              {count.map((item: TopUpCategoryTypes) => {
                return (
                  <Category
                    key={item._id}
                    nominal={item.value}
                    icon="ic-dekstop"
                  >
                    Game
                    <br />
                    {item.name}
                  </Category>
                )
              })}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">Game</th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: HistoryTransactionTypes) => {
                  return (
                    <TableRow
                      key={item._id}
                      image={item.historyVoucherTopup.thumbnail}
                      title={item.historyVoucherTopup.gameName}
                      category={item.historyVoucherTopup.category}
                      item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                      price={item.value}
                      status={item.status}
                    />
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
