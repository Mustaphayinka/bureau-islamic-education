import React from 'react';
import NurilMosqueHeader from '../../components/NurilMosqueHeader';
import NurilWelcomeSection from '../../components/NurilWelcomeSection';
import NurilSchoolSections from '../../components/NurilSchoolSections';
import NurilAdhikrahSection from '../../components/NurilAdhikrahSection';
import CurriculumMaterials from '../../components/CurriculumMaterials';


// Main Nuril Islam School Page Component
const NurilIslamSchool = () => {
  return (
    <div>
      <NurilMosqueHeader />
      <NurilWelcomeSection />
      <NurilSchoolSections />
      <NurilAdhikrahSection />
      <CurriculumMaterials />
    </div>
  );
};

export default NurilIslamSchool;
