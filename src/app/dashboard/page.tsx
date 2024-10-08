"use client";

import { auth } from "@/lib/firebase/firebase";
import { Hand } from "lucide-react";
import { ProjectsTable } from "./components/projects/projects-table";
import { CreateProject } from "./components/projects/create-project";
import { Information } from "./components/info";
import { ContactTable } from "./components/contact/contact-table";
import { CreateContact } from "./components/contact/create-contact";

export default function Dashboard() {
  return (
    <div className="py-12 px-12 lg:px-24 xl:px-48">
      <h1 className="text-3xl font-medium py-12 text-zinc-50">
        <Hand />
        Welcome, {auth.currentUser?.email}!
      </h1>
      <div className="items-start gap-6 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <Information />
          <CreateProject />
          <CreateContact />
        </div>
        <div className="col-span-2 items-start gap-6 pt-6 space-y-6 md:pt-0">
          <ProjectsTable />
          <ContactTable />
        </div>
      </div>
    </div>
  );
}
