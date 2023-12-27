import { timeOptions } from "src/constant";
import { ETimeOptions } from "src/types";

export default function getEnums(value: ETimeOptions) {
  return timeOptions.find((item) => item.value === value);
}
