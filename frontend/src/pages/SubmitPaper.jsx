import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import axios from "axios";

function SubmitPaper() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [authors, setAuthors] = useState([""]);
  const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(Boolean(token));
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="mb-5 flex flex-col items-center justify-center">
        <section className="mt-10 w-full max-w-xl rounded-xl border border-slate-300 bg-slate-100 p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Login required to submit a paper
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            You must be logged in to submit a research paper. Please login or
            create an account.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="rounded-md border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-emerald-500 hover:text-white"
            >
              Login
            </button>
            <Link to="/signup">
              <button className="rounded-md border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-emerald-500 hover:text-white">
                Sign Up
              </button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="mb-5 flex flex-col items-center justify-center">
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <p className="text-sm font-semibold text-gray-600">Abstract *</p>
            <textarea
              className="mt-1 h-36 w-full rounded-md border border-slate-300 px-3 py-1.5 placeholder:text-gray-600 focus:ring-3 focus:ring-emerald-200 focus:outline-none"
              placeholder="Provide a comprehnsive abstract (200-300 words recommended)"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
            ></textarea>
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold text-gray-600">
              Research Category
            </p>
            <Select onValueChange={(val) => setCategory(val)}>
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
        {authors.map((author, idx) => (
          <div key={idx} className="rounded-lg border border-slate-300 p-4">
            <p className="text-md mb-2 font-semibold text-gray-600">
              Author {idx + 1}
            </p>
            <div className="flex gap-3">
              <div className="w-full">
                <p className="mb-1 text-sm font-semibold text-gray-600">
                  Full Name
                </p>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-300 p-1 px-3 outline-0 focus:ring-3 focus:ring-emerald-200 focus:outline-none"
                  value={author}
                  onChange={(e) => {
                    const copy = [...authors];
                    copy[idx] = e.target.value;
                    setAuthors(copy);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 flex w-full justify-center">
          <button
            type="button"
            onClick={() => setAuthors([...authors, ""])}
            className="group flex w-full items-center justify-center gap-3 rounded-md border border-slate-300 p-1 text-sm font-semibold hover:bg-emerald-500"
          >
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
            Add relevant keywords to help others discover your research {""}
          </p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full rounded-md border border-slate-300 p-1 px-3 focus:ring-3 focus:ring-emerald-200 focus:outline-none"
            placeholder="Enter a keyword"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              if (!keywordInput.trim()) return;
              setKeywords([...keywords, keywordInput.trim()]);
              setKeywordInput("");
            }}
            className="rounded-md border border-slate-300 p-1 font-semibold text-slate-600 hover:bg-emerald-500 hover:text-white"
          >
            Add
          </button>
        </div>
        {keywords.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {keywords.map((kw, i) => (
              <span
                key={i}
                className="rounded-md border border-slate-300 px-2 py-0.5 text-xs font-semibold text-gray-600"
              >
                {kw}
              </span>
            ))}
          </div>
        )}
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
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      {success && <p className="mt-2 text-sm text-green-600">{success}</p>}
      <section className="mt-5 flex w-fit items-center justify-center gap-2 rounded-lg border border-slate-300 bg-emerald-600 px-4 py-2 font-semibold text-white">
        <button
          onClick={async () => {
            setError("");
            setSuccess("");
            if (!title || !abstract) {
              setError("Title and abstract are required");
              return;
            }
            try {
              const token = localStorage.getItem("token");
              if (!token) {
                setError("You must be logged in");
                return;
              }
              const payload = {
                title,
                abstract,
                content: content || abstract,
                category,
                authors: authors.filter(Boolean),
                keywords,
              };
              await axios.post(
                "http://localhost:5000/api/papers/submit",
                payload,
                {
                  headers: { Authorization: `Bearer ${token}` },
                },
              );
              setSuccess("Paper submitted successfully");
              setTitle("");
              setAbstract("");
              setContent("");
              setCategory("");
              setAuthors([""]);
              setKeywords([]);
            } catch (e) {
              setError(e.response?.data?.message || "Failed to submit paper");
            }
          }}
          className="flex items-center gap-2"
        >
          <Upload size={16} />
          <p>Submit Paper for review</p>
        </button>
      </section>
    </div>
  );
}

export default SubmitPaper;


