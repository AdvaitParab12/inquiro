import { Upload, ScrollText } from "lucide-react";
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
    <div className="flex flex-col items-center justify-center">
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
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-1.5 placeholder:text-gray-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              placeholder="Enter the full title of your research paper"
            />
          </div>
          <div className="mt-3">
            <p className="text-sm font-semibold text-gray-600">Abstract *</p>
            <textarea
              name=""
              id=""
              className="mt-1 h-36 w-full rounded-md border border-slate-300 px-3 py-1.5 placeholder:text-gray-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              placeholder="Provide a comprehnsive abstract (200-300 words recommended)"
            ></textarea>
          </div>
          <div>
            <p className=" mb-1 text-sm font-semibold text-gray-600">
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
      <section>
        <div>
          <p>Authors</p>
          <p>Add all authors who contributed to this research</p>
        </div>
        <div>
          <p>Author 1</p>
          <div className="flex">
            <div>
              <p>Full Name</p>
              <input type="text" className="border" />
            </div>
            <div>
              <p>Email</p>
              <input type="text" className="border" />
            </div>
            <div>
              <p>Affiliation</p>
              <input type="text" className="border" />
            </div>
          </div>
          <div>
            <button className="border">Add Author</button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <p>Keywords</p>
          <p>Add relevant keywords to help others discover your research </p>
        </div>
        <div className="flex">
          <input type="text" className="border" />
          <button>add</button>
        </div>
      </section>
      <section>
        <div>
          <p>Paper upload</p>
          <p>Upload your research paper in PDF format</p>
        </div>
        <div>
          <Upload />
          <p>Click to upload or drag and drop</p>
          <p>PDF files only, up to 50MB</p>
          <input type="file" name="" id="" placeholder="Choose file" />
        </div>
      </section>
      <section>
        <Upload />
        <p>Submit Paper for review</p>
      </section>
    </div>
  );
}

export default SubmitPaper;
