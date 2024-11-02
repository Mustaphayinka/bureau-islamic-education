import React from 'react';

const NurilAdhikrahSection = () => {
  return (
    <section className="py-10 md:py-20 bg-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">Adhikrah Da’wah Program</h2>
        <p className="text-lg text-gray-700 mb-4">
          Adhikrah is a multifaceted da’wah initiative embodying teachings in Fiqh (Islamic Jurisprudence), Aadaab (Islamic Moral Etiquettes), Thaqaafaat (Islamic Civilization), and Aqeedah (Islamic Creed). It provides a rich and balanced educational experience with a holistic approach to spiritual growth and development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-500">Aims</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-2">
              <li>Promote a comprehensive understanding of Islamic teachings through lessons in Fiqh, Aadaab, Thaqaafaat, and Aqeedah.</li>
              <li>Foster moral and ethical values in the community by emphasizing Islamic manners and etiquettes.</li>
              <li>Strengthen spiritual and religious knowledge through key concepts of Aqeedah and related Islamic rituals.</li>
              <li>Build a knowledgeable and practicing Muslim community by providing accessible Islamic education.</li>
              <li>Create a platform for continuous learning and discussion on Islamic jurisprudence and culture.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-500">Objectives</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-2">
              <li>Organize weekly or bi-weekly lessons focused on Fiqh to enhance understanding of religious obligations.</li>
              <li>Instill good character and conduct in daily life.</li>
              <li>Offer lessons on Thaqaafaat to connect individuals with Islamic civilization and values.</li>
              <li>Provide in-depth teachings on Aqeedah, explaining its significance and proper observance.</li>
              <li>Engage scholars to lead discussions and answer questions on Islamic teachings and practices.</li>
              <li>Facilitate community bonding and outreach through educational events and workshops.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NurilAdhikrahSection;
