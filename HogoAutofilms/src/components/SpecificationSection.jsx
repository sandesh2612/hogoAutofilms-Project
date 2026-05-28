import React from 'react';
import {
  Package,
  Palette,
  Grid3x3,
  Sparkles,
  Ruler,
  Shield,
  Droplets,
  Zap,
  Wind,
  Thermometer,
  Lock,
  AlertCircle,
  Flame,
  MoveHorizontal
} from 'lucide-react';

export default function SpecificationSection({ specifications = null }) {
  // Default specifications if none provided
  const defaultSpecs = [
    { label: 'Material', value: 'TPU', icon: Package },
    { label: 'Color', value: 'Transparent', icon: Palette },
    { label: 'Film Type', value: 'Gloss', icon: Grid3x3 },
    { label: 'Finish', value: 'Gloss', icon: Sparkles },
    { label: 'Thickness', value: '7.5 mil', icon: Ruler },
    { label: 'Warranty', value: '6 Years', icon: Shield },
    { label: 'UV Resistance', value: '> 90%', icon: Zap },
    { label: 'Hydrophobic', value: 'Excellent', icon: Droplets },
    { label: 'Scratch Resistant', value: '100% Heat Healing', icon: AlertCircle },
    { label: 'Stain Resistant', value: 'Excellent', icon: Wind },
    { label: 'Elongation', value: '>250%', icon:   MoveHorizontal
 },
    { label: 'Tear Strength', value: '>85 KN/M', icon: Flame },
    { label: 'Temperature Resistance', value: '-40°C to 120°C', icon: Thermometer },
    { label: 'Peel Adhesion', value: '<30.0', icon: Lock },
    { label: 'Anti Rockclip', value: 'pass', icon: Shield },
    { label: 'Elongation TPU', value: '330%', icon:   MoveHorizontal
 },
    { label: 'Elongation Hard', value: '120%', icon:   MoveHorizontal
 }
  ];

  const specs = specifications || defaultSpecs;

  return (
    <section className="max-w-full mx-auto px-4 sm:px-6 pb-14 sm:pb-16 bg-[#00001a]">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-10">
        Specification
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {specs.map((spec, index) => {
          const IconComponent = spec.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 p-4 border border-white/10 rounded-lg transition duration-300 hover:border-white/30 hover:scale-105 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-3xl text-[#d20000]">
                {IconComponent ? (
                  <IconComponent size={32} />
                ) : (
                  <span>📊</span>
                )}
              </div>

              {/* Label */}
              <span className="text-gray-400 text-xs uppercase font-semibold tracking-wider">
                {spec.label}
              </span>

              {/* Value */}
              <span className="text-white text-sm font-medium">
                {spec.value}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}