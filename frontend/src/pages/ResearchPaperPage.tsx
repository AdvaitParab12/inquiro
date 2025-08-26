import { Heart, Share2, Tag, Download, BookOpen, User } from "lucide-react";
import AuthorInfo from "@/components/AuthorInfo";
function ResearchPaperPage() {
  return (
    <div className="mt-5 mb-5 flex flex-col items-center justify-center">
      <section className="flex w-4xl items-center justify-between">
        <div className="topic w-fit rounded-md bg-emerald-100 px-1 py-0.5 text-xs font-semibold text-emerald-600">
          Computer Science
        </div>
        <div className="interactions flex gap-2">
          <div className="flex items-center gap-3 rounded-md border border-slate-300 px-2 py-1.5 text-sm font-semibold text-slate-600">
            <Heart size={16} />
            <p>234</p>
          </div>
          <div className="flex items-center gap-3 rounded-md border border-slate-300 px-2 py-0.5 text-sm font-semibold text-slate-600">
            <Share2 size={16} />
            <p>Share</p>
          </div>
        </div>
      </section>
      <section className="w-4xl">
        <div className="name text-2xl font-bold text-slate-600">
          Quantum Computing Applications in Machine Learning: A Comprehensive
          Survey
        </div>
      </section>
      <section className="w-4xl">
        <div className="grid h-screen grid-cols-3 gap-4 pt-5">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="rounded-xl border border-slate-300 bg-slate-100 p-4">
              <div className="font-semibold text-slate-600">Abstract</div>
              <div className="mt-5 text-slate-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                nesciunt ducimus incidunt dolorum laudantium quae nulla hic
                libero in consectetur placeat minus, autem quis quos suscipit
                obcaecati, neque ullam odio.
              </div>
            </div>
            <div className="rounded-xl border border-slate-300 bg-slate-100 p-4">
              <div className="flex items-center gap-2">
                {" "}
                <Tag className="text-emerald-500" size={20} />
                <p className="font-semibold text-slate-600">Keyword</p>
              </div>
              <div className="mt-5">
                <p className="w-fit rounded-md border border-slate-300 px-1 py-0.5 text-xs font-semibold text-gray-600">
                  quamtum computing
                </p>
              </div>
            </div>
            <div className="h-96 w-fit rounded-xl border border-slate-300 bg-slate-100 p-4">
              <div>
                <p className="name font-semibold text-slate-600">
                  Paper Preview
                </p>
                <p className="text-sm text-gray-600">
                  This is a preview of the research paper. View and Download the
                  full PDF for complete content
                </p>
              </div>
              <div className="mt-7 flex flex-col items-center justify-center gap-5">
                <div className="logo">
                  <BookOpen size={100} className="text-slate-600" />
                </div>
                <div className="des text-slate-500">
                  Full paper content is available in the PDf format
                </div>
                <button className="flex gap-4 rounded-md bg-emerald-600 p-2 font-semibold text-white">
                  <Download />
                  Download Full Paper
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-slate-300 bg-slate-100 p-4">
              <div className="flex items-center gap-2">
                <User className="text-emerald-500" size={20} />
                <p className="font-semibold text-slate-600">Authors</p>
              </div>
              <div>
                <AuthorInfo />
              </div>
            </div>
            <div className="rounded-xl border-2 p-4">
              <div className="mb-3 font-semibold text-slate-600">
                Paper Statistics
              </div>
              <div className="flex flex-col gap-3 text-slate-600">
                <div className="flex justify-between">
                  <p>Downloads:</p>
                  <p className="font-semibold">1567</p>
                </div>
                <div className="flex justify-between">
                  <p>Likes:</p>
                  <p className="font-semibold">342</p>
                </div>
                <div className="flex justify-between">
                  <p>Published:</p>
                  <p className="font-semibold">1/15/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResearchPaperPage;
