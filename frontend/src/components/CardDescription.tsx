import { Heart, Share2, User, Calendar, Eye } from "lucide-react";

function Cards() {
  return (
    <div className="w-[36rem] rounded-xl border border-slate-300 bg-slate-100 p-5">
      <section className="flex justify-between">
        <div className="topic rounded-md bg-emerald-100 px-1 py-0.5 text-xs font-semibold text-emerald-600">
          Computer Science
        </div>
        <div className="flex gap-5">
          <Heart size={16} className="text-gray-500" />
          <Share2 size={16} className="text-gray-500" />
        </div>
      </section>
      <section className="mt-4">
        <div className="name text-xl font-semibold text-gray-600">
          Quantum Computing Applications in Machine Learning: A Comprehensive
          Survey
        </div>
        <div className="author flex items-center gap-2 font-extralight text-gray-600">
          <User size={16} />
          Dr. Sarah Chen, Prof. Michael Rodriguez, Dr. Aisha Patel
        </div>
        <div className="description mt-4 text-sm text-gray-600">
          This paper presents a comprehensive survey of quantum computing
          applications in machine learning, exploring the potential advantages
          of quantum algorithms over classical approaches.
        </div>
        <div className="topic mt-2 flex gap-1 border-b border-slate-300 pb-3">
          <span className="rounded-md border border-slate-300 px-1 py-0.5 text-xs font-semibold text-gray-600">
            qunatum computing
          </span>
          <span className="rounded-md border border-slate-300 px-1 py-0.5 text-xs font-semibold text-gray-600">
            qunatum computing
          </span>
          <span className="rounded-md border border-slate-300 px-1 py-0.5 text-xs font-semibold text-gray-600">
            qunatum computing
          </span>
        </div>
      </section>
      <section className="flex gap-4 mt-3   ">
        <div className="date flex gap-1">
          <Calendar size={16}/>
          <p className="text-xs">1/15/2024</p>
        </div>
        <div className="views flex gap-1">
          <Eye size={16}/>
          <p className="text-xs">1,567</p>
        </div>
      </section>
    </div>
  );
}

export default Cards;
