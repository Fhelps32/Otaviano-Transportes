import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import biosolvitImg from "../../assets/carouselPartners/biosolvit.png";
import casacardaoImg from "../../assets/carouselPartners/casacardao.png";
import cinbalImg from "../../assets/carouselPartners/cinbal.png";
import comercialOrlandiImg from "../../assets/carouselPartners/comercial-orland.png";
import eucatexImg from "../../assets/carouselPartners/eucatex-tintas.png";
import gelotechImg from "../../assets/carouselPartners/gelo-tech.png";
import metalLatinaImg from "../../assets/carouselPartners/metal-latina.png";
import sargentoFerragensImg from "../../assets/carouselPartners/sargento-ferragens.png";
import tramontinaImg from "../../assets/carouselPartners/tramontina.png";
import bsoftImg from "../../assets/carouselPartners/bsoft.png";
import buonnyImg from "../../assets/carouselPartners/buonny.png";
import efreteImg from "../../assets/carouselPartners/efrete.png";
import freteBrasImg from "../../assets/carouselPartners/frete-bras.png";
import qualpImg from "../../assets/carouselPartners/qualp.png";
import tokioMarineImg from "../../assets/carouselPartners/tokio-marine.png";
import egfImg from "../../assets/carouselPartners/egf.jpeg";
import grattanoImg from "../../assets/carouselPartners/grattano.png";
import n10Img from "../../assets/carouselPartners/n10.jpeg";
import vermatImg from "../../assets/carouselPartners/vermat.png";
import marckSuprimentosImg from "../../assets/carouselPartners/mark-suprimentos.png";
import engeferImg from "../../assets/carouselPartners/engefer.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const parceiros = [
  {
    nome: "Biosolvit",
    imagem: biosolvitImg,
  },
  {
    nome: "Casacardão",
    imagem: casacardaoImg,
  },
  {
    nome: "Cinbal",
    imagem: cinbalImg,
  },
  {
    nome: "Comercial Orlandi",
    imagem: comercialOrlandiImg,
  },
  {
    nome: "Eucatex Tintas",
    imagem: eucatexImg,
  },
  {
    nome: "Gelo Tech",
    imagem: gelotechImg,
  },
  {
    nome: "Metal Latina",
    imagem: metalLatinaImg,
  },
  {
    nome: "Sargento Ferragens",
    imagem: sargentoFerragensImg,
  },
  {
    nome: "Tramontina",
    imagem: tramontinaImg,
  },
  {
    nome: "Bsoft",
    imagem: bsoftImg,
  },
  {
    nome: "Buonny",
    imagem: buonnyImg,
  },
  {
    nome: "E-frete",
    imagem: efreteImg,
  },
  {
    nome: "Frete Bras",
    imagem: freteBrasImg,
  },
  {
    nome: "Qualp",
    imagem: qualpImg,
  },
  {
    nome: "Tokio Marine",
    imagem: tokioMarineImg,
  },
  {
    nome: "EGF Distribuição",
    imagem: egfImg,
  },
  {
    nome: "Engefer",
    imagem: engeferImg,
  },
  {
    nome: "Grattano",
    imagem: grattanoImg,
  },
  {
    nome: "Marck Suprimentos",
    imagem: marckSuprimentosImg,
  },
  {
    nome: "N10 Parafusos",
    imagem: n10Img,
  },
  {
    nome: "Vermat",
    imagem: vermatImg,
  },
];

export default function ParceirosCarousel() {
  return (
    <section className="w-full py-20 overflow-visible">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Swiper
          modules={[EffectCoverflow, Autoplay, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: false,
          }}
          className="max-w-6xl overflow-visible"
        >
          {parceiros.map((p, i) => (
            <SwiperSlide key={i} className="w-65! md:w-[320px]!">
              <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center justify-center transition duration-300 hover:scale-105">
                {/* Imagem pequena */}
                <img
                  src={p.imagem}
                  alt={p.nome}
                  className="w-auto h-25 object-cover mb-6"
                />

                {/* Nome */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {p.nome}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
