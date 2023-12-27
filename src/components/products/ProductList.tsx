import React from "react";
import { IProduct } from "src/types";
import ProductdItem from "./ProductdItem";

interface ProductListProps {
  data: IProduct[];
  title: string;
  height?: number;
}

const ProductList = ({ data, title, height }: ProductListProps) => {
  return (
    <div className="  ">
      <h3 className="tw-font-medium tw-text-[#262626] tw-border-b tw-border-b-solid tw-border-b-[#BBBCBD] tw-pb-2">
        {title}
      </h3>

      <div
        className="tw-overflow-auto"
        style={{
          maxHeight: height || "310px",
        }}>
        {data.map((item, index) => (
          <ProductdItem key={index} product={item}></ProductdItem>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
