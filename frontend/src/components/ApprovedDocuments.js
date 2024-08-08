import React from 'react';

const documents = [
  { name: 'Bureau Constitution', file: '/pdfs/Bureau_constitution.pdf' },
  { name: 'Conditions', file: '/pdfs/Conditions.pdf' },
  { name: 'Rules and Regulations', file: '/pdfs/Rules.pdf' },
  { name: 'Standards', file: '/pdfs/Standards.pdf' },
];

const ApprovedDocuments = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Approved Working Documents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-center">{doc.name}</h3>
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 ease-in-out"
              >
                View & Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApprovedDocuments;
