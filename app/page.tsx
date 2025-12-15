"use client";

import React, { useState, useCallback } from 'react';

// --- Data Struktur Mockup untuk Proton (DYNAMIC SOURCE) ---
const MOCK_DATA = {
    models: [
        // DATA MODEL DIBUANG, HANYA KEKALKAN FAQ
    ],
    faq: [
        { question: "Apa itu DSR?", answer: "DSR (Debt Service Ratio) adalah peratusan hutang bulanan anda berbanding gaji bulanan bersih anda. Kebanyakan bank menetapkan had DSR sekitar 60%-70%." },
        { question: "Berapa lama proses loan akan ambil?", answer: "Jika dokumen anda lengkap, proses *approval* bank boleh seawal 24 jam. Selepas itu, ia bergantung pada stok kereta." },
        { question: "Adakah saya perlu *downpayment*?", answer: "Tidak wajib. Kami boleh uruskan 100% *full loan* untuk kelayakan tertentu. Hubungi saya untuk semakan segera." },
    ]
};

// Nombor telefon Zaid (Sila ubah ini)
const ZaidWhatsAppNumber = '60123456789'; // Contoh: Gantikan dengan 601XXXXXXXX

// URL Katalog Harga Luaran
const CatalogLink = 'https://zaidmurat.github.io/ProtonCatalog/';

// --- DEFINISI JENIS (TYPESCRIPT FIX) ---
// 1. Tentukan jenis untuk item FAQ
interface FaqItemType {
    question: string;
    answer: string;
}

// 2. Tentukan props yang diterima oleh komponen FaqItem
interface FaqItemProps {
    item: FaqItemType;
}
// --- TAMAT DEFINISI JENIS ---


const App = () => {
    // --- State Management ---
    const [models] = useState(MOCK_DATA.models);
    const [faq] = useState(MOCK_DATA.faq);

    // --- Helper Components ---
    // ModelCard Dibuang kerana tidak lagi memaparkan model individu

    // >>> PERUBAHAN DI SINI: MENGGUNAKAN FaqItemProps <<<
    const FaqItem = ({ item }: FaqItemProps) => (
        <details className="bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
            <summary className="font-semibold cursor-pointer text-gray-800 hover:text-red-600 transition duration-150">
                {item.question}
            </summary>
            <p className="pt-3 text-gray-600 text-sm border-t border-gray-100 mt-2">
                {item.answer}
            </p>
        </details>
    );
    
    // --- Render Component ---
    return (
        <div className="font-sans antialiased text-gray-900">
            {/* Tailwind utility classes menggantikan styles.css */}
            <style jsx global>{`
                :root {
                    --proton-red: #C60C30;
                    --dark-grey: #1B3A5A;
                    --light-grey: #f4f4f4;
                }
                .cta-button {
                    background-color: var(--proton-red);
                    color: white;
                    padding: 12px 25px;
                    border-radius: 8px;
                    font-weight: 700;
                    text-decoration: none;
                    display: inline-block;
                    transition: background-color 0.3s ease;
                }
                .cta-button:hover {
                    background-color: #A00A28;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                /* Menguruskan margin/padding section */
                section {
                    padding: 60px 0;
                    text-align: center;
                }
                .bg-light { background-color: var(--light-grey); }
                .bg-dark { background-color: var(--dark-grey); }
            `}</style>

            {/* HEADER/HERO SECTION */}
            <section id="hero" className="bg-white">
                <div className="container hero-content flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="hero-text text-left lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                            Mohon Loan Proton Dengan Cepat & Mudah – Lulus Awal, Kereta Cepat Dapat.
                        </h1>
                        <h3 className="text-xl text-red-600 font-medium mb-6">
                            Zaid, Sales Advisor Proton – Bantu 381 pelanggan lulus loan seawal 24 jam.
                        </h3>
                        {/* CTA Button Utama ke WhatsApp */}
                        <a href={`https://wa.me/${ZaidWhatsAppNumber}`} target="_blank" rel="noopener noreferrer" className="cta-button shadow-lg hover:shadow-xl">WHATSAPP UNTUK SEMAK KELAYAKAN SEGERA</a>
                        <p className="mt-4 text-sm text-gray-600">*Sila semak pilihan unit yang masih ada. Urgency!</p>
                    </div>
                    <div className="hero-image-container relative w-full lg:w-1/2 max-w-lg">
                        <img 
                            src="/Pic1.jpg" 
                            alt="Zaid, Sales Advisor Proton Bersama Proton Saga MC3" 
                            className="w-full h-auto rounded-xl shadow-2xl object-cover"
                            // Komen: Baris onError di buang kerana ini adalah gambar utama
                        />
                        {/* KOD UNTUK TRUSTED BADGE (IMG) */}
                        <img 
                            src="/trusted_badge.png" 
                            alt="Trusted Proton Sales Advisor Badge" 
                            className="trusted-label absolute top-4 left-4 bg-yellow-500 w-24 h-auto rounded-full shadow-md object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/100x30/FDD835/000?text=TRUST"; }} 
                        />
                    </div>
                </div>
            </section>

            {/* LOAN FAILURE SECTION */}
            <section id="fail-loan" className="bg-light">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--proton-red)' }}>
                        ❌ Kenapa Ramai Gagal Loan? Jangan Buang Masa Anda.
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="bg-white p-4 rounded-lg shadow-md text-sm font-medium">Slip gaji tak lengkap / format tidak diterima bank.</div>
                        <div className="bg-white p-4 rounded-lg shadow-md text-sm font-medium">Komitmen tinggi tapi tak tahu kira DSR (Debt Service Ratio).</div>
                        <div className="bg-white p-4 rounded-lg shadow-md text-sm font-medium">Tidak sediakan dokumen sokongan yang tepat dari awal.</div>
                        <div className="bg-white p-4 rounded-lg shadow-md text-sm font-medium">Memohon loan di bank atau tempat yang salah (tidak sesuai profil).</div>
                    </div>
                    <p className="power-quote text-lg italic mt-8 max-w-3xl mx-auto text-gray-700">
                        “Di sini saya bantu anda faham semua proses — dari kira kelayakan sampai kereta keluar. **JANGAN RISAU, SAYA URUS A-Z.**”
                    </p>
                </div>
            </section>
            
            {/* MODELS SECTION (DIUBAH UNTUK FOKUS KE KATALOG - KEMAS KINI REKA BENTUK) */}
            <section id="models" className="bg-white">
                <div className="container p-10 rounded-xl shadow-2xl bg-gray-100 border-t-8 border-red-600 relative">
                    {/* Ikon untuk daya tarikan visual */}
                    <div className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 bg-red-600 p-3 rounded-full shadow-xl">
                        {/* Ikon Kereta (dibuat dengan SVG ringkas) */}
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l2 3h10l2-3"></path>
                        </svg>
                    </div>

                    <h2 className="text-4xl font-extrabold mb-4 text-gray-800 pt-6">
                        Langkah Pertama: Semak Harga & Promosi Terkini!
                    </h2>
                    <p className="text-xl font-medium text-gray-700 max-w-3xl mx-auto mb-8">
                        Klik pautan di bawah untuk melihat ansuran bulanan, 
                        harga OTR (On-The-Road), dan promosi KILAT model **Saga, S70, X50, X70 & X90**!
                    </p>
                    
                    {/* Pautan Katalog yang BESAR dan MENDESAK */}
                    <a href={CatalogLink} target="_blank" rel="noopener noreferrer" 
                       className="cta-button bg-red-600 hover:bg-red-700 shadow-xl px-12 py-4 text-xl font-extrabold transition duration-300 transform hover:scale-105">
                        KLIK SINI: LIHAT KATALOG HARGA RASMI
                    </a>

                    <p className="mt-4 text-sm font-semibold text-gray-500">
                        *Katalog dibuka di tetingkap baharu. Hubungi Zaid selepas semakan harga.
                    </p>
                </div>
            </section>
            
            {/* PROCESS SECTION */}
            <section id="process" className="bg-light">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--dark-grey)' }}>
                        Proses Loan Bersama Saya — Senang, Cepat & Dijamin Clear.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        <div className="step-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <h4 className="text-xl font-bold text-red-600 mb-2">STEP 1: Hubungi Zaid (5 Minit)</h4>
                            <p className="text-gray-600 text-sm">Terus WhatsApp untuk semak kelayakan **DSR** & *latest stock*. Kita tak buang masa.</p>
                        </div>
                        <div className="step-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <h4 className="text-xl font-bold text-red-600 mb-2">STEP 2: Hantar Dokumen (WhatsApp Sahaja)</h4>
                            <p className="text-gray-600 text-sm mb-2">Dokumen wajib:</p>
                            <ul className="text-left list-disc list-inside text-xs text-gray-600">
                                <li>IC depan belakang & Lesen</li>
                                <li>3 bulan slip gaji & bank statement</li>
                                <li>EPF (jika perlu) / Surat kerja</li>
                            </ul>
                        </div>
                        <div className="step-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <h4 className="text-xl font-bold text-red-600 mb-2">STEP 3: Apply Bank (1-24 Jam)</h4>
                            <p className="text-gray-600 text-sm">Saya akan hantar dokumen anda ke bank pilihan (Maybank, CIMB, Public Bank, BSN) untuk **Fast Approval**.</p>
                        </div>
                        <div className="step-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <h4 className="text-xl font-bold text-red-600 mb-2">STEP 4: Lulus & Tandatangan</h4>
                            <p className="text-gray-600 text-sm">Terangkan jenis insurans, interest, dan ansuran. Tandatangan dokumen mudah dan jelas.</p>
                        </div>
                        <div className="step-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <h4 className="text-xl font-bold text-red-600 mb-2">STEP 5: Kereta Siap Hantar!</h4>
                            <p className="text-gray-600 text-sm">Anda boleh *pickup* di *showroom* **ATAU** saya hantar kereta Proton baharu anda terus ke rumah.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST & TESTIMONY IMAGE SECTION */}
            <section id="trust" className="bg-dark">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6 text-white">Kenapa Pilih Zaid? Fokus Bantu Loan Lulus.</h2>
                    <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-200">
                        Pengalaman **3 tahun** dalam jualan Proton – fokus bantu pelanggan **lulus loan** walaupun komitmen agak tinggi. Saya akan *update progress bank* setiap **2 jam**.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {/* KOD YANG DIUBAH: Menggunakan laluan /test1.jpg, /test2.jpg, /test3.jpg */}
                        <img src="/test1.jpg" alt="Zaid hantar kereta pelanggan" className="w-full h-auto rounded-xl shadow-2xl object-cover" />
                        <img src="/test2.jpg" alt="Zaid bersama pelanggan" className="w-full h-auto rounded-xl shadow-2xl object-cover" />
                        <img src="/test5.jpg" alt="Zaid di showroom Proton" className="w-full h-auto rounded-xl shadow-2xl object-cover" />
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS TEXT SECTION */}
            <section id="testimonials">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">📢 Loan Lulus Cepat: Kata Pelanggan Saya</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-600">
                            <p className="italic text-gray-700">"Loan Saga saya lulus dalam 6 jam! Zaid sangat efisien, saya tak perlu ambil cuti."</p>
                            <p className="font-bold text-sm mt-3 text-red-600">- Cikgu Aina</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-600">
                            <p className="italic text-gray-700">"Proses X50 sangat lancar. Zaid urus dokumen saya A-Z. Terima kasih banyak!"</p>
                            <p className="font-bold text-sm mt-3 text-red-600">- Encik Haris</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-600">
                            <p className="italic text-gray-700">"Walaupun komitmen saya tinggi, Zaid bantu susun dokumen & dapatkan approval. Syukur."</p>
                            <p className="font-bold text-sm mt-3 text-red-600">- Puan Siti</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION (PENGGANTI CALCULATOR FORM) */}
            <section id="final-cta" className="bg-light pt-8 pb-12">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                        Anda Hanya 1 WhatsApp Jauh Dari Kereta Baru Anda!
                    </h2>
                    <p className="text-lg text-gray-700 text-center max-w-xl mx-auto mb-8">
                        JANGAN BUANG MASA di bank. Hubungi Zaid SEKARANG untuk semakan **DSR & Kelayakan Pinjaman** 5 minit.
                    </p>

                    {/* Butang Utama CTA WhatsApp */}
                    <a href={`https://wa.me/${ZaidWhatsAppNumber}?text=${encodeURIComponent(`Salam Zaid, saya nak semak kelayakan loan segera. Boleh saya hantar dokumen sekarang?`)}`} 
                       target="_blank" rel="noopener noreferrer" 
                       className="cta-button bg-green-600 hover:bg-green-700 shadow-2xl px-10 py-4 text-xl font-extrabold transition duration-300 transform hover:scale-105">
                        KLIK UNTUK WHATSAPP ZAID SEKARANG!
                    </a>

                    <p className="mt-5 text-xl font-extrabold text-red-600">
                        Zaid akan reply dalam **5 minit** selagi belum tidur.
                    </p>
                </div>
            </section>

            {/* FAQ SECTION (DYNAMIC CONTENT) */}
            <section id="faq">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">❓ Soalan Lazim (FAQ)</h2>
                    <div className="grid gap-4 text-left" id="faq-list">
                        {faq.map((item, index) => (
                            <FaqItem key={index} item={item} />
                        ))}
                    </div>
                </div>
            </section>


            {/* FOOTER */}
            <footer className="py-5 bg-gray-900 text-white text-center text-sm">
                &copy; 2025 Zaid Proton Sales Advisor. All Rights Reserved.
            </footer>
        </div>
    );
};

export default App;