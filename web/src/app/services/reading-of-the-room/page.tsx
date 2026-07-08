import type { Metadata } from "next";
import ServiceDetail from "@/components/full/ServiceDetail";
import { SERVICE_MAP } from "@/lib/serviceData";

const data = SERVICE_MAP["reading-of-the-room"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function Page() {
  return <ServiceDetail data={data} />;
}
