import { supabase } from "@/lib/supabase";
import { GetStaticProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";

const Test = ({
  publicUrl,
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  console.log(data);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-center justify-center gap-2 rounded-md bg-gray-400 p-4">
        <span className="text-2xl text-black">Audited by</span>
        <Image
          src={publicUrl}
          alt="test"
          width={200}
          height={200}
          quality={100}
          className="rounded bg-violet-200 px-2 py-1 shadow-xl"
        />
      </div>
    </div>
  );
};
export default Test;

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { publicUrl },
  } = supabase.storage.from("images").getPublicUrl("logos/paladin.svg");

  const { data } = await supabase
    .from("Affiliated_Companies")
    .select("*")
    .eq("company_name", "Seng Lee");

  return { props: { publicUrl, data } };
};
