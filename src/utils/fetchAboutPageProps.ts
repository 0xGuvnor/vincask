import { baseUrl } from "@/constants/urls";
import axios from "axios";

export const fetchAboutPageProps = async () => {
  const {
    data: { collageImages },
  } = await axios.get(`https://vincask.vercel.app/api/getCollageImages`);

  const {
    data: { timelineItems },
  } = await axios.get(`https://vincask.vercel.app/api/getTimelineItems`);

  const {
    data: { companyInfos },
  } = await axios.get(`https://vincask.vercel.app/api/getCompanyInfo`);

  return { collageImages, timelineItems, companyInfos };
};
