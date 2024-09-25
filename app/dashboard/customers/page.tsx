import { fetchFilteredCustomers } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";
import { Metadata } from "next";
import { Suspense } from "react";
import Table from "@/app/ui/customers/table";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <Suspense>
        <Table customers={customers} />
      </Suspense>
    </div>
  );
}
