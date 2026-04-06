export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: "simuda",
    title: " Perpustakaan SIMUDA",
    category: "Web Application",
    description: "Sistem Informasi Manajemen perpustakaan untuk SMP Muhammadiyah 2 Kartasura.",
    longDescription: `SIMUDA (Sistem Informasi Manajemen Unit Kerja) adalah aplikasi web yang dirancang untuk membantu organisasi dalam mengelola data, pelaporan, dan monitoring aktivitas unit kerja secara real-time.

## Fitur Utama
- **Dashboard Analytics** - Visualisasi data dengan grafik dan statistik real-time
- **Manajemen User** - Role-based access control untuk berbagai level pengguna
- **Sistem Pelaporan** - Generate laporan dalam format PDF dan Excel
- **Data Management** - CRUD operations untuk berbagai tipe data
- **Notifikasi** - Sistem notifikasi otomatis untuk updates penting
- **Export/Import** - Fungsi export dan import data dengan format standar

## Teknologi yang Digunakan
- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Tools**: Docker, Git

## Hasil dan Impact
- Meningkatkan efisiensi pelaporan hingga 70%
- Mengurangi waktu pemrosesan data dari jam menjadi menit
- User satisfaction score 4.7/5 dari 150+ users
- Deployment di 5 unit kerja berbeda

## Tantangan dan Solusi
- **Tantangan**: Handle large dataset dengan performa optimal
- **Solusi**: Implementasi pagination, caching, dan optimasi query database

- **Tantangan**: Integrasi dengan multiple data sources
- **Solusi**: Membuat abstraction layer dan API gateway untuk unified data access`,
    technologies: ["Laravel", "PHP", "API WhatsApp", "MySql", "Tailwind CSS"],
    date: "2025",
  },
  {
    id: "arsiparis",
    title: "Arsiparis",
    category: "Document Management System",
    description: "Platform digital untuk manajemen arsip dan dokumen dengan fitur search, kategorisasi, dan access control untuk Kementerian Agama Kota Surakarta.",
    longDescription: `Arsiparis adalah sistem manajemen arsip digital yang komprehensif untuk organisasi yang membutuhkan penyimpanan, pengorganisasian, dan retrieval dokumen yang efisien.

## Fitur Utama
- **Digital Storage** - Penyimpanan dokumen dengan kapasitas unlimited
- **Advanced Search** - OCR-powered search untuk pencarian full-text
- **Kategorisasi Otomatis** - Machine learning untuk kategorisasi dokumen
- **Audit Trail** - Tracking lengkap untuk setiap akses dan modifikasi dokumen
- **Retention Policy** - Automasi penghapusan dokumen berdasarkan kebijakan
- **Sharing & Collaboration** - Fitur berbagi dan kolaborasi dengan permission levels
- **Version Control** - Tracking perubahan dokumen dari waktu ke waktu

## Teknologi yang Digunakan
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, NestJS
- **Database**: MongoDB
- **Storage**: AWS S3, MinIO
- **Search Engine**: Elasticsearch
- **Tools**: Docker, Kubernetes, GitHub Actions

## Hasil dan Impact
- Total dokumen terkelola: 50,000+ documents
- Average search response time: <500ms
- User adoption rate: 95% dalam 3 bulan
- Penghematan cost penyimpanan: 40% vs traditional filing system

## Fitur Unggulan
1. **Smart OCR** - Optical Character Recognition untuk dokumen scanned
2. **Bulk Operations** - Upload dan organize dokumen dalam jumlah besar
3. **Custom Metadata** - Tambahan field metadata sesuai kebutuhan organisasi
4. **API Integration** - REST API untuk integrasi dengan sistem lain
5. **Mobile Access** - Responsive design untuk akses mobile

## Timeline Development
- **Fase 1**: Requirements gathering & UI/UX design (2 minggu)
- **Fase 2**: Backend development & database design (4 minggu)
- **Fase 3**: Frontend development & integration (3 minggu)
- **Fase 4**: Testing & QA (2 minggu)
- **Fase 5**: Deployment & training (1 minggu)

## Lessons Learned
- Pentingnya planning yang matang sebelum development
- OCR accuracy bergantung pada kualitas scan input
- User training penting untuk adoption rate tinggi
- Monitoring dan maintenance berkelanjutan sangat penting`,
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Elasticsearch", "AWS S3"],
    date: "2024",
  },
];
