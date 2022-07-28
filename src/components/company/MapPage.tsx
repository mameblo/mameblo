import React from "react";
import dynamic from "next/dynamic";

function MapPage() {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("../../components/company/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return <Map />;
}

export default MapPage;
