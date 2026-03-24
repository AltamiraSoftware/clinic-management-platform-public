import { getBlogCategoryKind } from "@/lib/blogUtils";

const CATEGORY_COPY = {
  psicologia: {
    title: "Psicología",
    description: "Ansiedad, relaciones, bienestar emocional",
    accent: "bg-[#e4f1ea] text-[#256948]",
    shell:
      "rounded-[28px] border border-[#d7e7e1] bg-white/90 p-6 shadow-[0_18px_40px_rgba(10,77,104,0.08)]",
  },
  fisioterapia: {
    title: "Fisioterapia",
    description: "Dolor, lesiones, recuperación",
    accent: "bg-[#e1eff4] text-[#0A4D68]",
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
        <div className="mb-6">
         
        </div>

        <div className="grid gap-5 md:grid-cols-2">
        
          
        </div>
      </div>
    </section>
  );
}
