import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/naver-marketing/naver-seo-agency-for-hotels");

export const generateMetadata = route.generateMetadata;
export default route.Page;
