import Header from "@/components/shared/Header";
import React, { FC } from "react";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/TransformationForm";

type SearchParamProps = {
  type: string;
};

type AddTransformationTypePageProps = {
  params: SearchParamProps;
};

const AddTransformationTypePage: FC<AddTransformationTypePageProps> = ({
  params: { type },
}) => {
  const transformation =
    transformationTypes[type as keyof typeof transformationTypes];
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <TransformationForm />
    </>
  );
};

export default AddTransformationTypePage;
