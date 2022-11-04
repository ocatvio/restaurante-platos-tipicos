import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { DetailCard } from "../components/DetailCard";
import { getPlatoById } from "../helpers/getPlatoById";

export const DetallePage = () => {

  const { id } = useParams();

  const plato =useMemo(() =>  getPlatoById(id), [id])

  if(!plato){
    return <Navigate to={'/hero'}/>
  }

  return <DetailCard {...plato} />;
};
