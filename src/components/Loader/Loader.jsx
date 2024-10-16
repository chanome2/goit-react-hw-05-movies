import { PacmanLoader } from "react-spinners";
import css from "./Loader.module.css";

export const Loader = () => {
    return (
        <div className={css.loaderWrap}>
            <PacmanLoader
                color="rgba(54, 215, 183, 1)"
                speedMultiplier={2}
            />
        </div>
    )
}