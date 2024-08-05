import React from 'react';

const documents = [
  { name: 'Bureau Constitution', file: '/pdfs/Bureau_constitution.pdf'},
  { name: 'Conditions', file: '/pdfs/Conditions.pdf' },
  { name: 'Rules and Rugulations', file: '/pdfs/Rules.pdf' },
  { name: 'Standards', file: '/pdfs/Standards.pdf' },
];

const ApprovedDocuments = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Approved Working Documents</h2>
        <div className="flex flex-wrap justify-center">
          {documents.map((doc, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">{doc.name}</h3>
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full inline-block"
                >
                  View & Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApprovedDocuments;
