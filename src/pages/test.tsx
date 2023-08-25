import { supabase } from "@/lib/supabase";
import { GetStaticProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";

const Test = ({
  publicUrl,
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  console.log(data);
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src={publicUrl}
        alt="test"
        width={500}
        height={500}
        quality={100}
      />
    </div>
  );
};
export default Test;

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { publicUrl },
  } = supabase.storage.from("images").getPublicUrl("logos/senglee.png");

  const { data } = await supabase
    .from("Affiliated_Companies")
    .select("*")
    .eq("company_name", "Seng Lee");

  return { props: { publicUrl, data } };
};
