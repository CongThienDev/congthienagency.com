import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/quang-cao-tren-naver");

export const generateMetadata = route.generateMetadata;
export default route.Page;
