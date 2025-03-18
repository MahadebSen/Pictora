import Header from "@/components/shared/Header";
import React, { FC } from "react";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/TransformationForm";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

type SearchParamProps = {
  type: string;
};

type AddTransformationTypePageProps = {
  params: SearchParamProps;
};

const AddTransformationTypePage: FC<AddTransformationTypePageProps> = async ({
  params: { type },
}) => {
  const { userId } = await auth.protect();
  const user = await getUserById(userId);

  // if user is not logged in, redirect to sign-in page
  if (!user) return redirect("/sign-in");

  // get the transformation type
  const transformation =
    transformationTypes[type as keyof typeof transformationTypes];

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <TransformationForm
        action="Add"
        userId={user?._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user?.creditBalance}
      />
    </>
  );
};

export default AddTransformationTypePage;
