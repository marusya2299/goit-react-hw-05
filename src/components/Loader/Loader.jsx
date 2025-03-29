import { DotLoader } from "react-spinners";
import css from "../Loader/Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderBox}>
      <DotLoader color="rgb(0, 0, 0)" loading={true} size={50} />;
    </div>
  )
}
