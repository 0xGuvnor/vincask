import { supabase } from "@/lib/supabase";

export const getContactPageProps = async () => {
  const { data: faqData } = await supabase
    .from("Contact_FAQs")
    .select("header, content")
    .order("id", { ascending: true });

  return { faqData };
};
export default getContactPageProps;
