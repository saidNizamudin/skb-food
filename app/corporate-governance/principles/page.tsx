"use client";

import { useTranslate } from "@/app/TranslationProvider";

export default function Page() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col p-10 py-20 gap-y-20 xl:px-xCustom">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <img
            src="/images/logo/skb_food.webp"
            alt="SKB Food"
            width={900}
            height={600}
            style={{
              width: "280px",
              height: "auto",
            }}
            className="mb-2"
          />
          <span className="text-lg font-montserrat font-semibold">
            {getTranslation("governance_principle_desc1")}
          </span>
        </div>
        <div className="px-5 py-6 bg-secondaryLight border border-secondary rounded-lg flex gap-5 items-start">
          <div className="bg-white rounded-md p-1">
            <img
              src="/icons/law.svg"
              alt="Law"
              width={18}
              height={18}
              className="min-w-[18px] min-h-[18px]"
            />
          </div>
          <ul className="list-disc ml-5">
            <li className="text-base text-black font-medium font-segoe">
              {getTranslation("governance_principle_desc2")}
            </li>
            <li className="text-base text-black font-medium font-segoe">
              {getTranslation("governance_principle_desc3")}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-4xl font-montserrat font-semibold text-center">
          {getTranslation("governance_principle_table_title")}
        </span>
        <span className="text-base font-segoe font-medium text-grey">
          {getTranslation("governance_principle_table_desc")}
        </span>
        <div className="overflow-x-auto w-full max-w-full slim-scrollbar mt-5">
          <table className="flex-1 w-full border-collapse border-2 border-white text-sm">
            <thead>
              <tr>
                {[
                  "governance_principle_table_head1",
                  "governance_principle_table_head2",
                  "governance_principle_table_head3",
                ].map((title, index) => (
                  <th
                    className="bg-secondary text-[15px] text-black font-segoe border-2 border-white h-10"
                    key={index}
                  >
                    {getTranslation(title)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="[&>tr>td>span]:text-balance [&>tr>td]:py-3">
              {[
                {
                  id: "Transparansi",
                  en: "Transparency",
                  desc: "Menegaskan akan pentingnya kemudahan akses informasi yang mudah dipahami Pemangku Kepentingan. Namun, tetap memperhatikan perlindungan yang bersifat rahasia.",
                  commitment:
                    "Perseroan menyediakan informasi penting tepat waktu, jelas, akurat dan dapat diakses dengan mudah oleh pemangku kepentingan seperti Laporan Keuangan, Laporan Keberlanjutan, Laporan Tahunan dan informasi lainnya",
                },
                {
                  id: "Akuntasibilitas",
                  en: "Accountability",
                  desc: "Menuntut pertanggungjawaban kinerja secara transparan dan wajar yang mengacu pada kejelasan fungsi, struktur, sistem, dan tanggung jawab setiap unit kerja dalam Perseroan untuk memastikan jalannya sistem pengelolaan yang efektif.",
                  commitment:
                    "Perseroan memiliki struktur organisasi yang jelas sehingga dapat menjalankan fungsi yang bisa dipertanggungjawabkan dengan sistem kerja yang terarah.",
                },
                {
                  id: "Tanggung Jawab",
                  en: "Responsibility",
                  desc: "Bentuk tanggung jawab perusahaan pada pemangku kepentingan, masyarakat dan lingkungan untuk menciptakan usaha yang berkelanjutan demi meraih good corporate citizen.",
                  commitment:
                    "Perseroan menjalankan kegiatan perusahaan dengan mematuhi peraturan yang berlaku serta memasukkan program Corporate Social Responsibility sebagai bentuk kepedulian terhadap masyarakat dan lingkungan sekitar.",
                },
                {
                  id: "Independensi",
                  en: "Independency",
                  desc: "Menunjukkan penting perusahaan dikelola secara independen demi menciptakan korporasi yang sehat dan pengambilan keputusan secara objektif, guna menghindari konflik kepentingan. Prinsip ini untuk mencegah adanya pihak yang lebih dominan dibanding pihak lain.",
                  commitment:
                    "Perseroan selalu berpegang teguh pada Kode Etik Perusahaan dan melibatkan pihak-pihak independen dalam setiap pengambilan keputusan manajerial.",
                },
                {
                  id: "Kewajaran",
                  en: "Fairness",
                  desc: "Perusahaan harus senantiasa memperhatikan kepentingan pemegang saham dan pemangku kepentingan lainnya berdasarkan asas kewajaran dan kesetaraan.",
                  commitment:
                    "Perseroan selalu berusaha memenuhi hak-hak berbagai pihak secara adil dan wajar",
                },
              ].map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border-2 border-white text-[15px] text-center font-segoe min-w-[150px]">
                    <span className="font-bold block">{item.id}</span>
                    <span className="italic font-normal block">{item.en}</span>
                  </td>
                  <td className="p-2 border-2 border-white text-[15px] font-segoe min-w-[350px]">
                    {item.desc}
                  </td>
                  <td className="p-2 border-2 border-white text-[15px] font-segoe min-w-[350px]">
                    {item.commitment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-4xl font-montserrat font-semibold text-center">
          {getTranslation("governance_principle_image_title")}
        </span>
        <div className="overflow-x-auto w-full max-w-full slim-scrollbar mt-5">
          <img
            src="/images/governance/principle-structure.webp"
            alt="Governance Principle"
            width={900}
            height={600}
            style={{
              width: "100%",
              minWidth: "900px",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
