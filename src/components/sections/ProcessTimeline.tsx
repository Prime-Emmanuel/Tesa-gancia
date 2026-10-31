import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

export const ProcessTimeline: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full my-8">
      {/* ================= DESKTOP HORIZONTAL TIMELINE ================= */}
      <div className="hidden lg:block relative">
        {/* Continuous Connecting Line */}
        <div className="absolute top-12 left-12 right-12 h-[2px] bg-[#EADBFA] z-0" />

        <div className="grid grid-cols-5 gap-6 relative z-10">
          {t.process.steps.map((step) => (
            <div key={step.number} className="flex flex-col items-start group">
              {/* Step Numeral Icon / Marker */}
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#7B2CBF] shadow-md flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FAF5FE] transition-all duration-300">
                <span className="font-serif text-2xl font-semibold text-[#7B2CBF]">
                  {step.number}
                </span>
              </div>

              <h4 className="font-serif text-xl text-[#260C45] mb-2 font-medium group-hover:text-[#7B2CBF] transition-colors leading-snug">
                {step.title}
              </h4>

              <p className="text-xs text-[#4F3D66] font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE VERTICAL TIMELINE ================= */}
      <div className="block lg:hidden relative pl-6 sm:pl-8 border-l-2 border-[#7B2CBF] space-y-10 my-4">
        {t.process.steps.map((step) => (
          <div key={step.number} className="relative group">
            {/* Dot on the vertical line */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-0.5 w-6 h-6 rounded-full bg-white border-2 border-[#7B2CBF] flex items-center justify-center shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#7B2CBF]" />
            </div>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-serif text-2xl text-[#7B2CBF] font-semibold">
                {step.number}
              </span>
              <h4 className="font-serif text-xl text-[#260C45] font-medium">
                {step.title}
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-[#4F3D66] font-sans leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
