import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/cho-spa");

export const generateMetadata = route.generateMetadata;
export default route.Page;
