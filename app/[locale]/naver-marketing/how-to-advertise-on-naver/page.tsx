import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/naver-marketing/how-to-advertise-on-naver");

export const generateMetadata = route.generateMetadata;
export default route.Page;
