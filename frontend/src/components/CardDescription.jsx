import { Heart, Share2, User, Calendar, Eye } from "lucide-react";
import { Link } from "react-router-dom";

function Cards({ papers }) {
  return (
    <div className="grid gap-5">
      {papers.map((paper) => (
        <div key={paper._id} className="w-[36rem] rounded-xl border border-slate-300 bg-slate-100 p-5">
          <section className="flex justify-between">
            <div className="topic rounded-md bg-emerald-100 px-1 py-0.5 text-xs font-semibold text-emerald-600">
              {paper.category}
            </div>
            <div className="flex gap-5">
              <Heart size={16} className="cursor-pointer text-gray-500" />
              <Share2 size={16} className="cursor-pointer text-gray-500" />
            </div>
          </section>

          <section className="mt-4">
            <Link to={`/paper/${paper._id}`}>
              <div className="name cursor-pointer text-xl font-semibold text-gray-600 hover:text-emerald-500">
                {paper.title}
              </div>
            </Link>

            <div className="author flex items-center gap-2 font-extralight text-gray-600">
              <User size={16} />
              {paper.authors?.join(", ")}
            </div>

            <div className="description mt-4 text-sm text-gray-600">{paper.abstract}</div>

            <div className="topic mt-2 flex gap-1 border-b border-slate-300 pb-3">
              {paper.keywords?.map((keyword, i) => (
                <span key={i} className="rounded-md border border-slate-300 px-1 py-0.5 text-xs font-semibold text-gray-600">
                  {keyword}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-3 flex gap-4">
            <div className="date flex gap-1">
              <Calendar size={16} />
              <p className="text-xs">{paper.createdAt ? new Date(paper.createdAt).toLocaleDateString() : ""}</p>
            </div>
            <div className="views flex gap-1">
              <Eye size={16} />
              <p className="text-xs">{paper.views || 0}</p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Cards;


