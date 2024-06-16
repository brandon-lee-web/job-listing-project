import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <div className="flex justify-center">
      <ClipLoader
        color="#4338ca"
        loading={loading}
        size={150}
      />
    </div>
  );
};

export default Spinner;
