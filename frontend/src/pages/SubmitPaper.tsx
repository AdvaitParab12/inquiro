import { Upload, ScrollText, Users, Plus, Tag } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

function SubmitPaper() {
  return (
    <div className="flex flex-col items-center justify-center mb-5">
      <section>
        <div className="mt-7 flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-600">
            Submit Your Research Paper
          </h1>
          <p className="text-lg text-gray-700">
            Share your research with global academic community. All submissions
            undergo peer review.
          </p>
        </div>
        <div className="mt-5 flex w-3xl flex-col gap-2 rounded-xl border border-slate-300 bg-slate-100 p-5">
          <div>
            <div className="flex gap-2 font-semibold">
              <ScrollText className="text-emerald-500" />
              <p className="text-gray-600">Paper Information</p>
            </div>
            <p className="text-sm text-gray-600">
              Provide the basic details about your research paper
            </p>
          </div>
          <div className="mt-2 flex flex-col">
            <p className="text-sm font-semibold text-gray-600">Paper Title *</p>
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-1.5 placeholder:text-gray-600 focus:ring-3 focus:ring-emerald-200 focus:outline-none"
              placeholder="Enter the full title of your research paper"
            />
          </div>
          <div className="mt-3">
            <p className="text-sm font-semibold text-gray-600">Abstract *</p>
            <textarea
              name=""
              id=""
              className="mt-1 h-36 w-full rounded-md border border-slate-300 px-3 py-1.5 placeholder:text-gray-600 focus:ring-3 focus:ring-emerald-200 focus:outline-none"
              placeholder="Provide a comprehnsive abstract (200-300 words recommended)"
            ></textarea>
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold text-gray-600">
              Research Category
            </p>
            <Select>
              <SelectTrigger className="w-44 border-slate-300">
                <SelectValue placeholder="Computer Science" />
              </SelectTrigger>
              <SelectContent className="border-slate-300">
                <SelectGroup className="bg-white">
                  <SelectLabel>All Categories</SelectLabel>
                  <SelectItem value="computer_science">
                    Computer Science
                  </SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="economics">Economics</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      <section className="mt-5 flex w-3xl flex-col gap-2 rounded-xl border border-slate-300 bg-slate-100 p-5">
        <div>
          <div className="flex items-center justify-start gap-2 font-semibold">
            <Users className="text-emerald-500" size={20} />
            <p className="text-gray-600">Authors</p>
          </div>
          <p className="text-sm text-gray-600">
            Add all authors who contributed to this research
          </p>
        </div>
        <div className="rounded-lg border border-slate-300 p-4">
          <p className="text-md mb-2 font-semibold text-gray-600">Author 1</p>
          <div className="flex gap-3">
            <div className="w-full">
              <p className="mb-1 text-sm font-semibold text-gray-600">
                Full Name
              </p>
              <input
                type="text"
                className="w-full rounded-md border border-slate-300 p-1 px-3 outline-0 focus:ring-3 focus:ring-emerald-200 focus:outline-none"
              />
            </div>
            <div className="w-full">
              <p className="mb-1 text-sm font-semibold text-gray-600">Email</p>
              <input
                type="text"
                className="w-full rounded-md border border-slate-300 p-1 px-3 outline-0 focus:ring-3 focus:ring-emerald-200 focus:outline-none"
              />
            </div>
            <div className="w-full">
              <p className="mb-1 text-sm font-semibold text-gray-600">
                Affiliation
              </p>
              <input
                type="text"
                className="w-full rounded-md border border-slate-300 p-1 px-3 outline-0 focus:ring-3 focus:ring-emerald-200 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="mt-3 flex w-full justify-center">
          <button className="group flex w-full items-center justify-center gap-3 rounded-md border border-slate-300 p-1 text-sm font-semibold hover:bg-emerald-500">
            <Plus size={16} className="text-gray-600 group-hover:text-white" />
            <p className="text-gray-600 group-hover:text-white">
              Add Another Author
            </p>
          </button>
        </div>
      </section>
      <section className="mt-5 flex w-3xl flex-col gap-2 rounded-xl border border-slate-300 bg-slate-100 p-5">
        <div>
          <div className="flex items-center justify-start gap-2 font-semibold">
            <Tag className="text-emerald-500" size={20} />
            <p className="text-gray-600">Keywords</p>
          </div>
          <p className="text-sm text-gray-600">
            Add relevant keywords to help others discover your research{" "}
          </p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full rounded-md border border-slate-300 p-1 px-3 focus:ring-3 focus:ring-emerald-200 focus:outline-none"
            placeholder="Enter a keyword"
          />
          <button className="rounded-md border border-slate-300 p-1 font-semibold text-slate-600 hover:bg-emerald-500 hover:text-white">
            Add
          </button>
        </div>
      </section>
      <section className="mt-5 flex w-3xl flex-col gap-2 rounded-xl border border-slate-300 bg-slate-100 p-5">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <Upload className="text-emerald-500" size={20} />
            <p className="text-gray-600">Paper upload</p>
          </div>
          <p className="text-sm text-gray-600">
            Upload your research paper in PDF format
          </p>
        </div>
        <div className="flex h-52 flex-col items-center justify-center rounded-lg border border-dashed">
          <Upload size={40} className="text-slate-600" />
          <p className="font-semibold text-slate-600">
            Click to upload or drag and drop
          </p>
          <p className="text-sm font-extralight">PDF files only, up to 50MB</p>
          <div className="mt-2">
            <input id="file-upload" type="file" className="hidden" />
            <label
              htmlFor="file-upload"
              className="cursor-pointer rounded-lg border border-slate-300 bg-white p-1 px-3 font-semibold text-slate-700"
            >
              Choose File
            </label>
          </div>
        </div>
      </section>
      <section className="mt-5 flex w-fit items-center justify-center gap-2 rounded-lg   border border-slate-300 bg-emerald-600 py-2 px-4 font-semibold text-white">
        <Upload size={16} />
        <p>Submit Paper for review</p>
      </section>
    </div>
  );
}

export default SubmitPaper;
