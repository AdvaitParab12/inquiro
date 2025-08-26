import { Building, Mail } from "lucide-react";
function AuthorInfo() {
  return (
    <div className="flex gap-4 rounded-md p-3 border-slate-300 border mt-2">
      <section className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
        <p className="text-2xl text-emerald-700">AP</p>
      </section>
      <section className="">
        <div className="name font-semibold text-slate-600">Advait Parab</div>
        <div className="affiliation flex items-center gap-1 text-sm text-slate-600 font-semibold">
          <Building size={16} />
          University Of Mumbai
        </div>
        <div className="contact text-emerald-500 flex gap-1 items-center font-semibold cursor-pointer hover:text-emerald-600">
          <Mail size={16}/>
          Contact
        </div>
      </section>
    </div>
  );
}

export default AuthorInfo;
