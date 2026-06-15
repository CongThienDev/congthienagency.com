import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/google-maps-marketing/toi-uu-hinh-anh-google-maps");

export const generateMetadata = route.generateMetadata;
export default route.Page;
