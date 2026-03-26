import Link from "next/link";
import { getBlogCategoryKind } from "@/lib/blogUtils";

const CATEGORY_COPY = {
  psicologia: {
    title: "Psicología",
    description: "Ansiedad, relaciones, bienestar emocional",
    accent: "bg-[#e4f1ea] text-[#256948]",
    href: "/psicologia",
    cta: "Ver psicología",
    shell:
      "rounded-[28px] border border-[#d7e7e1] bg-white/90 p-6 shadow-[0_18px_40px_rgba(10,77,104,0.08)]",
  },
  fisioterapia: {
    title: "Fisioterapia",
    description: "Dolor, lesiones, recuperación",
    accent: "bg-[#e1eff4] text-[#0A4D68]",
    href: "/fisioterapia",
    cta: "Ver fisioterapia",
    shell:
      "rounded-[28px] border border-[#d7e7e1] bg-white/90 p-6 shadow-[0_18px_40px_rgba(10,77,104,0.08)]",
  },
};

export default function BlogCategories({ categories = [] }) {
  const visibleCategories = categories
    .map((category) => {
      const kind = getBlogCategoryKind(category);
      const copy = CATEGORY_COPY[kind];

      if (!copy) {
        return null;
      }

      return {
        ...category,
        ...copy,
      };
    })
    .filter(Boolean);

  if (!visibleCategories.length) {
    return null;
  }

  return (
    <section className="pb-10">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-[#0A4D68]">Sigue navegando por servicio</h2>
          <p className="mt-2 text-[#245953]">
            Desde el blog puedes acceder directamente a las páginas de psicología y fisioterapia.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visibleCategories.map((category) => (
            <article key={category.id} className={category.shell}>
              <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${category.accent}`}>
                {category.title}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-[#0A4D68]">{category.nombre}</h3>
              <p className="mt-2 text-[#245953]">{category.description}</p>
              <Link href={category.href} className="mt-5 inline-flex bv-btn bv-btn-primary-dark bv-btn-lg">
                {category.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
