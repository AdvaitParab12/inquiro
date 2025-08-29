import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Heart,
  Share2,
  Tag,
  Download,
  BookOpen,
  User,
  Eye,
} from "lucide-react";
import AuthorInfo from "@/components/AuthorInfo";

function ResearchPaperPage() {
  const { id } = useParams();
  const [paper, setPaper] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPaper = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/papers/${id}`);
        if (!res.ok) throw new Error("Failed to load paper");
        const data = await res.json();
        setPaper(data);
      } catch (e) {
        setError(e.message || "Failed to load paper");
      }
    };
    if (id) fetchPaper();
  }, [id]);

  if (error) {
    return (
      <div className="mt-5 mb-5 flex flex-col items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!paper) {
    return (
      <div className="mt-5 mb-5 flex flex-col items-center justify-center">
        <p className="text-slate-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mt-5 mb-5 flex flex-col items-center justify-center">
      <section className="flex w-4xl items-center justify-between">
        <div className="topic w-fit rounded-md bg-emerald-100 px-1 py-0.5 text-xs font-semibold text-emerald-600">
          {paper.category || "Uncategorized"}
        </div>
        <div className="interactions flex items-center gap-4 text-slate-600">
          <div className="flex items-center gap-1 text-xs">
            <Eye size={16} />
            <span>{paper.views ?? 0}</span>
          </div>
          <div className="flex items-center gap-3 rounded-md border border-slate-300 px-2 py-1.5 text-sm font-semibold">
            <Heart size={16} />
            <p>Like</p>
          </div>
          <div className="flex items-center gap-3 rounded-md border border-slate-300 px-2 py-0.5 text-sm font-semibold">
            <Share2 size={16} />
            <p>Share</p>
          </div>
        </div>
      </section>
      <section className="w-4xl">
        <div className="name text-2xl font-bold text-slate-600">
          {paper.title}
        </div>
      </section>
      <section className="w-4xl">
        <div className="grid h-screen grid-cols-3 gap-4 pt-5">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="rounded-xl border border-slate-300 bg-slate-100 p-4">
              <div className="font-semibold text-slate-600">Abstract</div>
              <div className="mt-5 text-slate-600">
                {paper.abstract || "No abstract provided."}
              </div>
            </div>
            <div className="rounded-xl border border-slate-300 bg-slate-100 p-4">
              <div className="flex items-center gap-2">
                <Tag className="text-emerald-500" size={20} />
                <p className="font-semibold text-slate-600">Keywords</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {(paper.keywords ?? []).map((kw, i) => (
                  <span
                    key={i}
                    className="w-fit rounded-md border border-slate-300 px-1 py-0.5 text-xs font-semibold text-gray-600"
                  >
                    {kw}
                  </span>
                ))}
                {(!paper.keywords || paper.keywords.length === 0) && (
                  <span className="text-sm text-slate-500">No keywords</span>
                )}
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
                  Full paper content is available in the PDF format
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
                {(paper.authors ?? [paper.user?.name])
                  .filter(Boolean)
                  .map((name, idx) => (
                    <AuthorInfo
                      key={idx}
                      name={String(name)}
                      email={paper.user?.email}
                    />
                  ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-300 bg-slate-100 p-4">
              <div className="mb-3 font-semibold text-slate-600">
                Paper Statistics
              </div>
              <div className="flex flex-col gap-3 text-slate-600">
                <div className="flex justify-between">
                  <p>Views:</p>
                  <p className="font-semibold">{paper.views ?? 0}</p>
                </div>
                <div className="flex justify-between">
                  <p>Published:</p>
                  <p className="font-semibold">
                    {paper.createdAt
                      ? new Date(paper.createdAt).toLocaleDateString()
                      : "-"}
                  </p>
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
