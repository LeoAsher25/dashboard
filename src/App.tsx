import OverviewWrap from "./components/overview/OverviewWrap";
import MainLayout from "./layout/MainLayout";
import allData from "./data.json";
import ProductList from "./components/products/ProductList";
import OrderStatisticChart from "./components/chart/OrderStatisticChart";

function App() {
  return (
    <div id="app">
      <MainLayout>
        <div className="">
          <div className="tw-text-[11px] tw-text-[#2463EA] tw-ml-auto tw-flex tw-items-center tw-justify-end tw-mb-2 -tw-mt-1">
            <img src="./img/clock.svg" className="tw-mr-1" alt="" />
            Updated 5 minutes ago
          </div>
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-5">
            <div>
              <OverviewWrap data={allData.overview} />
              <OrderStatisticChart
                labels={allData.chartData.labels}
                data={allData.chartData.data}
              />
            </div>
            <div className="tw-pt-[14px] tw-pb-[22px] tw-px-5 tw-bg-white tw-rounded-[5px] tw-flex tw-flex-col tw-gap-4">
              <ProductList
                data={allData.topSelling}
                title="10 top selling products"
              />
              <ProductList
                data={allData.benefitProducts}
                title="Top 10 sản phẩm mang lại lợi nhuận "
                height={360}
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default App;
