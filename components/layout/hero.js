"use client";
import{IconCheck, IconSync, IconLaptop} from "@/components/layout/icons/HeroIcons"
import Image from "next/image";
export default function Hero() {
  // Paleta base: #0A4D68 (fondo), #A4BE7B (acento)


  return (
    <section
    className="
      relative overflow-hidden min-h-[92vh] items-center
      pt-20 sm:min-h-[85vh]
      sm:pt-24 pb-14 sm:pb-16
      bg-gradient-to-br from-[#0A4D68] via-[#1B6B73] to-[#245953]
    "
  > 
      {/* Brillos sutiles */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#A4BE7B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#A4BE7B]/20 blur-3xl" />
    
      <div className="text-center mt-5 mb-2 grid lg:grid-cols-2 gap-11 items-center ">
      <div className=" xl:mb-15">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white!">
          <span className="block text-[#A4BE7B]">
              Especialistas en
            </span>
            Fisioterapia y Psicología {" "}
            <span className="block text-[#A4BE7B]">
            en Madrid
            </span>
            </h1>
                    <p className="mt-5 mx-auto max-w-xl px-3 text-base text-white/90 sm:px-0 sm:text-lg">
                      
          Centro sanitario especializado en terapia psicológica y fisioterapia musculoesquelética en Madrid. Atención presencial, online y a domicilio.
          </p>
        </div>
        <Image
  src="/BivalenteSalud.webp"
  alt="Logo-Bivalente"
  width={900}
  height={600}
  priority
  sizes="(max-width: 768px) 90vw, 813px"
  className="mt-1 mx-auto h-auto w-full max-w-[813px]"
/>


      </div>
  
      <div className=" mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-white">
     

      <div className=" max-w-xs text-center mx-auto">
        <IconCheck className=" mx-auto sm:w-16 sm:h-16 2xl:w-24 2xl:h-24 w-14 h-14 text-[#A4BE7B] " />
        <div>
          <p className="text-white! text-center mt-1 font-semibold">Especialistas acreditados</p>
          <p className="text-center text-white/80 text-sm">
            Formación universitaria y experiencia clínica
          </p>
        </div>
      </div>

      <div className="mx-auto  max-w-xs text-center gap-4">
        <IconSync className="mx-auto sm:w-16 sm:h-16 2xl:w-24 2xl:h-24 w-14 h-14 text-[#A4BE7B]" />
        <div>
          <p className="text-center text-white! mt-1 font-semibold">Flexibilidad en tu terapia</p>
          <p className="text-center text-white/80 text-sm">
            Terapia online o presencial, fisioterapia a domicilio.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-xs text-center sm:col-span-2 lg:col-span-1">
        <IconLaptop className="mx-auto lg:mx-auto sm:w-16 sm:h-16 2xl:w-24 2xl:h-24 w-14 h-14 text-[#A4BE7B]" />
        <div className=" mx-auto">
        <p className="text-center text-white! mt-1 font-semibold">Plataforma digital</p>
          <p className="text-white/80 text-sm text-center">
            Administra las citas con tus especialistas desde una única plataforma.

          
          </p>
        </div>
      </div>
    </div>
    
    </section>
  );
}
