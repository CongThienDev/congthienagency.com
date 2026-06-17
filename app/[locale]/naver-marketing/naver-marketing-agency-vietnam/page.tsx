import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/naver-marketing/naver-marketing-agency-vietnam");

export const generateMetadata = route.generateMetadata;
export default route.Page;
