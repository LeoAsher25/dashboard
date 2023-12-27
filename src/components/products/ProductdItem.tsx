import React from "react";
import { IProduct } from "src/types";

interface ProductdItemProps {
  product: IProduct;
}

const ProductdItem = ({ product }: ProductdItemProps) => {
  return (
    <div className="tw-py-[10px] tw-px-3 tw-flex tw-items-start tw-border-b tw-border-b-solid tw-border-b-[#647979] ">
      <div className="tw-rounded tw-border tw-border-solid tw-border-[#4C4C4C] tw-w-[70px] tw-max-w-[70px] tw-min-w-[70px] tw-h-[50px] tw-mr-4 2xl:tw-mr-6">
        <img src={product.image} alt="" />
      </div>
      <div className="tw-text-[13px] tw-text-[#000000]  2xl:tw-mx-w-[263px]">
        {product.name}
      </div>

      <div className="tw-flex tw-flex-col tw-items-end tw-ml-auto tw-whitespace-nowrap">
        <span className="tw-text-[11px] tw-text-[#2463EA]">
          {`Store: ${product.store}`}
        </span>
        <span className="tw-text-[11px] tw-text-[#2463EA]">
          {`Website: ${product.store}`}
        </span>
        <span className="tw-text-[11px] tw-text-[#2463EA]">
          {`E-commerce: ${product.store}`}
        </span>
      </div>
    </div>
  );
};

export default ProductdItem;
