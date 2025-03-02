import Header from "@/components/shared/Header";
import React, { FC } from "react";
import { transformationTypes } from "@/constants";

type AddTransformationTypePageProps = {
  params: SearchParamProps;
};

const AddTransformationTypePage: FC<AddTransformationTypePageProps> = ({
  params: { type },
}) => {
  const transformation =
    transformationTypes[type as keyof typeof transformationTypes];
  return (
    <Header title={transformation.title} subtitle={transformation.subTitle} />
  );
};

export default AddTransformationTypePage;
