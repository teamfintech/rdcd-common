const banglaMessage = {
  200: "সফল হয়েছে",
  201: "সফল ভাবে তৈরি হয়েছে",
  400: "ভুল প্রবিষ্ট হয়েছে",
  401: "অনুমতি নেই",
  403: "অনুমতি নেই",
  404: "পাওয়া যায়নি",
  500: "অন্যান্য ত্রুটি",
  501: "অন্যান্য ত্রুটি",
  502: "বাস্তবায়িত হয়নি",
  503: "অন্যান্য ত্রুটি",
};

export function messageToBangla(status: number): string {
  return (banglaMessage as any)[status] || "অন্যান্য ত্রুটি";
}
