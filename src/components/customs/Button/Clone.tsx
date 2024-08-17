import { MouseEventHandler } from "react";

const Clone = ({ onClick, isLoading }: { onClick: MouseEventHandler<HTMLButtonElement>; isLoading: boolean }) => {
  return (
    <div id="convert-button-container" className="mt-4 tooltip w-full" data-tip="Convert">
      <button className="btn btn-block btn btn-success text-white uppercase" onClick={onClick} disabled={isLoading}>
        {isLoading && <span className="loading loading-spinner"></span>}
        {isLoading ? "converting..." : "convert"}
      </button>
    </div>
  );
};

export default Clone;
