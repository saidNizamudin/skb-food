"use client";

export default function Page() {
  return (
    <div className="flex flex-col p-10 py-20 gap-y-10 xl:px-xCustom">
      <div className="overflow-x-auto max-w-full slim-scrollbar">
        <table className="flex-1 w-full border-collapse border-2 border-white text-sm">
          <thead>
            <tr>
              <th
                className="p-2 border-2 border-white text-[15px] text-center font-segoe bg-secondary"
                colSpan={2}
              >
                <span className="font-bold block">Kode Etik</span>
                <span className="italic font-normal block">Code of Ethics</span>
              </th>
            </tr>
            <tr>
              <th className="p-2 border-2 border-white text-[15px] text-center font-segoe bg-[#E9E9E9]">
                <span className="font-bold block">Etika Kerja</span>
                <span className="italic font-normal block">Work Ethic</span>
              </th>
              <th className="p-2 border-2 border-white text-[15px] text-center font-segoe text-white bg-primary">
                <span className="font-bold block">Komitmen Perseroan</span>
                <span className="italic font-normal block">
                  The Company&apos;s Commitment
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="[&>tr>td>span]:text-balance [&>tr>td]:py-3">
            {[
              {
                title: {
                  id: "Hubungan dengan Karyawan",
                  en: "Relationship with Employees",
                },
                commitments: {
                  id: [
                    "Melaksanakan kewajiban ketenagakerjaan sebagaimana diatur dalam Undang-Undang.",
                    "Menerapkan sistem dan prosedur ketenagakerjaan yang mendukung kontribusi karyawan dalam mencapai visi dan misi Perusahaan tanpa membedakan gender, suku, ras, agama, atau golongan.",
                  ],
                  en: [
                    "Carry out labor obligations as stipulated in the Law.",
                    "Implement labor systems and procedures that support employee contributions in achieving the Company's vision and mission regardless of gender, ethnicity, race, religion, or group.",
                  ],
                },
              },
              {
                title: {
                  id: "Hubungan dengan Pelanggan",
                  en: "Customer Relationship",
                },
                commitments: {
                  id: [
                    "Menyediakan produk dan layanan terbaik sesuai dengan komitmen yang telah disepakati bersama.",
                    "Memperhatikan pandangan pelanggan dan merespons secepat mungkin.",
                  ],
                  en: [
                    "Deliver the best products and services in accordance with mutually agreed commitments.",
                    "Pay attention to customer views and respond as soon as possible.",
                  ],
                },
              },
              {
                title: {
                  id: "Hubungan dengan Pemasok",
                  en: "Relationship with Suppliers",
                },
                commitments: {
                  id: [
                    "Menerapkan sistem dan prosedur yang sama untuk semua pemasok.",
                    "Menerapkan prinsip keterbukaan dalam semua tahapan pengadaan barang dan jasa.",
                  ],
                  en: [
                    "Implement the same systems and procedures for all suppliers.",
                    "Implement the principle of openness in all stages of procurement of goods and services.",
                  ],
                },
              },
              {
                title: {
                  id: "Hubungan dengan Pesaing",
                  en: "Relationship with Competitors",
                },
                commitments: {
                  id: [
                    "Menerapkan prinsip persaingan yang sehat sesuai dengan peraturan perundang-undangan.",
                    "Menghormati keberadaan pesaing dan menjaga hubungan baik sesuai dengan peraturan perundang-undangan.",
                  ],
                  en: [
                    "Apply the principle of fair competition in accordance with laws and regulations.",
                    "Respect the existence of competitors and maintain good relations in accordance with laws and regulations.",
                  ],
                },
              },
              {
                title: {
                  id: "Hubungan dengan Pemerintah",
                  en: "Relationship with Government",
                },
                commitments: {
                  id: [
                    "Menerapkan prinsip tata kelola perusahaan yang baik sesuai dengan peraturan perundang-undangan.",
                    "Melaksanakan semua peraturan dan ketentuan yang diperlukan dalam menjalankan bisnis perusahaan.",
                  ],
                  en: [
                    "Applying the principles of good corporate governance in accordance with laws and regulations.",
                    "Carry out all the rules and regulations required in running the company's business.",
                  ],
                },
              },
              {
                title: {
                  id: "Hubungan dengan Masyarakat",
                  en: "Relations with the Society of the Union",
                },
                commitments: {
                  id: [
                    "Menghormati adat istiadat setempat.",
                    "Berpartisipasi dalam kegiatan yang meningkatkan nilai sosial Perusahaan.",
                  ],
                  en: [
                    "Respect local customs.",
                    "Participate in activities that enhance the Company's social value.",
                  ],
                },
              },
              {
                title: {
                  id: "Hubungan dengan Pemilik Modal",
                  en: "Relationship with Capital Owners",
                },
                commitments: {
                  id: [
                    "Menyediakan laporan yang transparan, akurat, dan lengkap tentang kondisi Perusahaan selama tidak bertentangan dengan kepentingan Perusahaan.",
                    "Menjalin hubungan baik melalui penerapan perlakuan yang setara sesuai dengan ketentuan Anggaran Dasar Perusahaan dan peraturan perundang-undangan yang berlaku.",
                  ],
                  en: [
                    "Provide transparent, accurate, and complete reports on the Company’s condition as long as it does not conflict with the interests of the Company.",
                    "Fostering good relations through the application of equal treatment in accordance with the provisions of the Company’s Articles of Association and applicable laws and regulations.",
                  ],
                },
              },
              {
                title: {
                  id: "Hubungan dengan Anak Perusahaan/Usaha Patungan",
                  en: "Relationship with Subsidiaries/Joint Ventures",
                },
                commitments: {
                  id: [
                    "Menerapkan sistem dan prosedur untuk Anak Perusahaan dan Usaha Patungan yang selaras dengan sistem dan prosedur Perusahaan.",
                    "Memastikan bahwa operasi Anak Perusahaan dan Perusahaan memberikan nilai tambah bagi Perusahaan serta menjamin kelangsungan bisnis Perusahaan.",
                  ],
                  en: [
                    "Implement systems and procedures for Subsidiaries and Joint Ventures with the Company’s systems and procedures.",
                    "Ensure that the operations of the Subsidiaries and the Company provide added value to the Company and ensure the continuity of the Company’s business.",
                  ],
                },
              },
              {
                title: {
                  id: "Hubungan dengan Media",
                  en: "Relations with the Media",
                },
                commitments: {
                  id: [
                    "Menerapkan sistem satu pintu untuk memastikan akurasi dan validitas informasi yang diberikan kepada media.",
                    "Menerima masukan dari media dengan mempertimbangkan aspek risiko bagi Perusahaan.",
                  ],
                  en: [
                    "Implement a one-stop system to ensure the accuracy and validity of information provided to the media.",
                    "Receive input from the media by taking into account the risk aspects for the Company.",
                  ],
                },
              },
              {
                title: { id: "Kepatuhan Hukum", en: "Legal Compliance" },
                commitments: {
                  id: [
                    "Mematuhi semua hukum dan peraturan serta semua ketentuan terkait yang mengatur hak dan kewajiban sebagai warga negara yang baik.",
                    "Mematuhi semua ketentuan dalam Peraturan Perusahaan dan/atau ketentuan lain yang dikeluarkan oleh Perusahaan.",
                  ],
                  en: [
                    "Comply with all laws and regulations and all related provisions governing rights and obligations as a good citizen.",
                    "Comply with all provisions in the Company Regulations and/or other provisions issued by the Company.",
                  ],
                },
              },
              {
                title: {
                  id: "Konflik Kepentingan",
                  en: "Conflict of Interest",
                },
                commitments: {
                  id: [
                    "Tidak terlibat dalam bisnis apa pun yang berpotensi menimbulkan konflik kepentingan dengan Perusahaan.",
                    "Melaporkan kepada Unit Kepatuhan jika menemukan potensi atau menghadapi konflik kepentingan dengan Perusahaan.",
                  ],
                  en: [
                    "Not involved in any business that has the potential to cause a conflict of interest with the Company.",
                    "Report to the Compliance Unit if it finds any potential if it faces a conflict of interest with the Company.",
                  ],
                },
              },
              {
                title: { id: "Pemberian dan Penerimaan", en: "Give and Take" },
                commitments: {
                  id: [
                    "Tidak memberikan atau menerima apa pun yang bertentangan dengan fungsi dan kewajibannya sebagai karyawan Perusahaan.",
                    "Menggunakan pendapatan Perusahaan hanya untuk keperluan operasional Perusahaan.",
                  ],
                  en: [
                    "Not giving or receiving anything that is contrary to the function of his obligations as an employee of the Company.",
                    "Using the Company’s revenue only for the Company’s operational purpose.",
                  ],
                },
              },
              {
                title: { id: "Privasi", en: "Privacy" },
                commitments: {
                  id: [
                    "Tidak mengungkapkan informasi atau data yang bersifat material kepada siapa pun, termasuk anggota keluarga.",
                    "Mencari informasi dan data resmi yang dikeluarkan sesuai dengan peraturan terkait dan untuk kepentingan Perusahaan.",
                  ],
                  en: [
                    "Not disclosing information or data that is material to anyone, including family members.",
                    "Seeking information and official data issued in accordance with related regulations and for the benefit of the Company.",
                  ],
                },
              },
              {
                title: {
                  id: "Pengendalian dan Penggunaan Aset",
                  en: "Asset Control and Use",
                },
                commitments: {
                  id: [
                    "Memanfaatkan aset Perusahaan secara efektif dan efisien hanya untuk kepentingan Perusahaan.",
                    "Melaporkan indikasi pelanggaran dalam pemanfaatan aset Perusahaan.",
                  ],
                  en: [
                    "Utilize the Company’s assets effectively and efficiently solely for the benefit of the Company.",
                    "Report indications of violations in the utilization of the Company’s assets.",
                  ],
                },
              },
              {
                title: {
                  id: "Kesehatan dan Keselamatan Kerja",
                  en: "Occupational Health and Safety",
                },
                commitments: {
                  id: [
                    "Menciptakan dan menjaga lingkungan kerja yang sehat dan aman serta mencegah potensi kecelakaan di tempat kerja.",
                    "Memahami standar dan prosedur keselamatan dan kesehatan kerja yang diterapkan oleh Perusahaan.",
                  ],
                  en: [
                    "Creating and maintaining a healthy and safe work environment and prevent potential accidents in the workplace.",
                    "Understanding the standards and procedures for occupational health and safety applied by the Company.",
                  ],
                },
              },
              {
                title: {
                  id: "Hubungan dengan Rekan Kerja",
                  en: "Relationships with Coworkers",
                },
                commitments: {
                  id: [
                    "Menjaga hubungan yang harmonis di lingkungan kerja.",
                    "Menghindari bentuk diskriminasi berdasarkan ras, etnis, agama, dan perbedaan golongan.",
                  ],
                  en: [
                    "Maintain harmonious relationships in the work environment.",
                    "Avoiding forms of discrimination based on race, ethnicity, religion, and group differences.",
                  ],
                },
              },
            ].map((data, index) => (
              <tr key={index}>
                <td className="p-2 border-b border-[#E9E9E9] text-[15px] font-segoe min-w-[350px]">
                  <span className="font-bold block">{data.title.id}</span>
                  <span className="italic font-normal block">
                    {data.title.en}
                  </span>
                </td>
                <td className="p-2 border-b border-[#E9E9E9] text-[15px] font-segoe min-w-[500px]">
                  <ol className="font-semibold list-[lower-alpha] ml-5 mb-3">
                    {data.commitments.id.map((commitment, index) => (
                      <li key={index}>{commitment}</li>
                    ))}
                  </ol>
                  <ol className="list-[lower-alpha] ml-5 italic font-normal">
                    {data.commitments.en.map((commitment, index) => (
                      <li key={index}>{commitment}</li>
                    ))}
                  </ol>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
