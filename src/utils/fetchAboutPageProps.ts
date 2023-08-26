import { baseUrl } from "@/constants/urls";
import axios from "axios";

export const fetchAboutPageProps = async () => {
  const {
    data: { collageImages },
  } = await axios.get(`${baseUrl}/api/getCollageImages`);

  const {
    data: { timelineItems },
  } = await axios.get(`${baseUrl}/api/getTimelineItems`);

  const {
    data: { companyInfos },
  } = await axios.get(`${baseUrl}/api/getCompanyInfo`);

  return { collageImages, timelineItems, companyInfos };
};
