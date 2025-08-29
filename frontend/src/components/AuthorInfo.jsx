import { Building, Mail } from "lucide-react";

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

function AuthorInfo({ name, affiliation, email }) {
  return (
    <div className="mt-2 flex gap-4 rounded-md border border-slate-300 p-3">
      <section className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
        <p className="text-2xl text-emerald-700">{getInitials(name)}</p>
      </section>
      <section>
        <div className="name font-semibold text-slate-600">{name}</div>
        {affiliation && (
          <div className="affiliation flex items-center gap-1 text-sm font-semibold text-slate-600">
            <Building size={16} />
            {affiliation}
          </div>
        )}
        {email && (
          <a href={`mailto:${email}`} className="contact flex cursor-pointer items-center gap-1 font-semibold text-emerald-500 hover:text-emerald-600">
            <Mail size={16} />
            Contact
          </a>
        )}
      </section>
    </div>
  );
}

export default AuthorInfo;


