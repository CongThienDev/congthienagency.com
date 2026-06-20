import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/social-marketing/facebook-account-recovery-vietnam");

export const generateMetadata = route.generateMetadata;
export default route.Page;
