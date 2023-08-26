import { baseUrl } from "@/constants/urls";
import axios from "axios";

export const fetchAboutPageProps = async () => {
  const {
    data: { collageImages },
  } = await axios.get(`${baseUrl}api/aboutCollageImages`);

  const {
    data: { timelineItems },
  } = await axios.get(`${baseUrl}api/aboutTimelineItems`);

  const {
    data: { companyInfos },
  } = await axios.get(`${baseUrl}api/aboutCompanyInfo`);

  return { collageImages, timelineItems, companyInfos };
};
