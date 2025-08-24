// import { Link } from "react-router-dom";
import { Search, Upload } from "lucide-react";
const Homepage = () => {
  return (
    <section>
      <main>
        <div className="flex h-[80vh] flex-col items-center justify-center gap-5">
          <h1 className="text-7xl font-bold">
            Discover. Publish.{" "}
            <span className="text-emerald-500">Inspire.</span>
          </h1>
          <p className="text-center text-2xl">
            Join thousands of researchers worldwide in sharing groundbreaking
            discoveries. <br />
            Upload, publish, and discover cutting-edge research papers in one
            trusted platform.
          </p>
          <div className="flex gap-7">
            <button className="flex w-48 cursor-pointer items-center justify-center gap-2 rounded-md bg-emerald-500 p-2 font-semibold text-white">
              <Upload size={18} />
              Submit Your Paper
            </button>
            <button className="group flex w-48 cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 p-2 font-semibold hover:bg-emerald-400 hover:text-white">
              <Search
                size={18}
                className="cursor-pointer text-gray-600 group-hover:text-white"
              />
              Browse Papers
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Homepage;
