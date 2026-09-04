/**
 * Format angka ke mata uang Rupiah (contoh: 650000 -> Rp 650.000)
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format angka dengan pemisah ribuan (contoh: 1500 -> 1.500)
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("id-ID").format(num);
}