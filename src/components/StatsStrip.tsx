import React from 'react';

const stats = [
  { label: 'Years Training', value: '6+' },
  { label: 'People Trained', value: '5,000+' },
  { label: 'Training Sessions', value: '200+' },
  { label: 'Success Stories', value: '200+' },
];

const StatsStrip: React.FC = () => {
  return (
    <section aria-label="Impact statistics" className="bg-card py-8 md:py-12 border-t">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary">{s.value}</div>
              <div className="text-sm md:text-base text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
