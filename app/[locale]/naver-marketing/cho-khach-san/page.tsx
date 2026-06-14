import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/cho-khach-san");

export const generateMetadata = route.generateMetadata;
export default route.Page;
