import React from 'react';

const CurriculumMaterials = () => {
  const pdfs = [
    { title: "Class 1 Curriculum", link: "/pdfs/CLASS 1.pdf" },
    { title: "Class 2 Curriculum", link: "/pdfs/CLASS 2.pdf" },
    { title: "Class 3 Curriculum", link: "/pdfs/CLASS 3.pdf" },
    { title: "Class 4 Curriculum", link: "/pdfs/CLASS 4.pdf" },
    { title: "Class 5 Curriculum", link: "/pdfs/CLASS 5.pdf" },
    { title: "Nursery 1 Curriculum", link: "/pdfs/NURSERY 1.pdf" },
    { title: "Nursery 2 Curriculum", link: "/pdfs/NURSERY 2.pdf" },
    { title: "Prep A Curriculum", link: "/pdfs/PREP A.pdf" },
    { title: "Prep B Curriculum", link: "/pdfs/PREP B.pdf" },
    // Add more PDFs here as needed
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">Curriculum Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pdfs.map((pdf, index) => (
            <a
              key={index}
              href={pdf.link}
              download
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-green-50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">{pdf.title}</h3>
              <p className="text-green-500 mt-2">Download</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumMaterials;
