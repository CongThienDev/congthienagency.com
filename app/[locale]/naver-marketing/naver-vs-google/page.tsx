import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/naver-vs-google");

export const generateMetadata = route.generateMetadata;
export default route.Page;
