import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Search, ListFilterPlus } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import Cards from "@/components/CardDescription";

const keywords = [
  "Artificial Intelligence",
  "Machine Learning",
  "Natural Language Processing",
  "Deep Learning",
  "Quantum Computing",
  "Blockchain Technology",
  "Cybersecurity",
  "Cloud Computing",
  "Internet of Things (IoT)",
  "Human-Computer Interaction (HCI)",
  "Augmented Reality (AR)",
  "Virtual Reality (VR)",
  "Big Data Analytics",
  "Edge Computing",
  "Software Engineering",
];

function BrowsePaper() {
  const [papers, setPapers] = useState([]);
  const [filteredPapers, setFilteredPapers] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [selectedKeyword, setSelectedKeyword] = useState("");

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/papers`);
        const data = await res.json();
        setPapers(data);
        setFilteredPapers(data);
      } catch (error) {
        console.error("Error fetching papers:", error);
      }
    };
    fetchPapers();
  }, []);

  useEffect(() => {
    let result = [...papers];

    if (search) {
      const term = search.toLowerCase();
      result = result.filter((p) => {
        const title = (p.title || "").toLowerCase();
        const abstract = (p.abstract || "").toLowerCase();
        return title.includes(term) || abstract.includes(term);
      });
    }

    if (category) {
      result = result.filter((p) => (p.category || "") === category);
    }

    if (selectedKeyword) {
      const kw = selectedKeyword.toLowerCase();
      result = result.filter((p) => (p.keywords || []).some((k) => k.toLowerCase().includes(kw)));
    }

    setFilteredPapers(result);
  }, [search, category, selectedKeyword, papers]);

  return (
    <div className="flex">
      <section className="m-5 w-1/5">
        <Card className="h-fit border border-slate-300 bg-slate-100 px-7">
          <div className="flex items-center gap-1.5">
            <ListFilterPlus className="text-emerald-500" />
            <p className="text-md font-medium text-gray-600">Filters</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-gray-600">Category</p>
            <Select onValueChange={(val) => setCategory(val === "all" ? "" : val)}>
              <SelectTrigger className="w-44 border-slate-300">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="border-slate-300">
                <SelectGroup className="bg-white">
                  <SelectLabel>All Categories</SelectLabel>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="computer_science">Computer Science</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="economics">Economics</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="border-t border-slate-300 py-3">
            <p className="mb-2 text-sm font-semibold text-gray-600">Keywords</p>
            <div className="custom-scrollbar h-40 w-full overflow-y-auto bg-slate-100 p-3">
              <ul className="text-sm">
                {keywords.map((word, index) => (
                  <li
                    key={index}
                    className="m-2 cursor-pointer font-semibold text-gray-600 transition hover:text-emerald-600"
                  >
                    {word}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </section>
      <section className="w-4/5">
        <div className="search m-5 flex gap-2">
          <div className="relative w-full">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="text-gray-500" />
            </span>
            <input
              type="text"
              placeholder="Search papers, authors or keywords"
              className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="dropdown">
            <Select onValueChange={(val) => setSelectedKeyword(val)}>
              <SelectTrigger className="w-44 border-slate-300">
                <SelectValue placeholder="Keyword" />
              </SelectTrigger>
              <SelectContent className="border-slate-300">
                <SelectGroup className="bg-white">
                  <SelectLabel>Keywords</SelectLabel>
                  {keywords.map((word) => (
                    <SelectItem key={word} value={word}>
                      {word}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Cards papers={filteredPapers} />
        </div>
      </section>
    </div>
  );
}

export default BrowsePaper;


