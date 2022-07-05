import { useEffect, useState } from "react";
import { Loader } from "./styles";

export function PreLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [500]);
  }, []);

  return <Loader hide={!loading}>Teste</Loader>;
}
