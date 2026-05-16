/*script js*/
        let currentMode = 'ide';

        function switchTab(mode) {
            currentMode = mode;
            const tabIde = document.getElementById('tab-ide');
            const tabFoto = document.getElementById('tab-foto');
            const ideInput = document.getElementById('ide-input');
            const fotoInput = document.getElementById('foto-input');

            if (mode === 'ide') {
                tabIde.classList.add('bg-white', 'shadow-sm', 'fb-blue');
                tabIde.classList.remove('text-slate-500');
                tabFoto.classList.remove('bg-white', 'shadow-sm', 'fb-blue');
                tabFoto.classList.add('text-slate-500');
                ideInput.classList.remove('hidden');
                fotoInput.classList.add('hidden');
            } else {
                tabFoto.classList.add('bg-white', 'shadow-sm', 'fb-blue');
                tabFoto.classList.remove('text-slate-500');
                tabIde.classList.remove('bg-white', 'shadow-sm', 'fb-blue');
                tabIde.classList.add('text-slate-500');
                fotoInput.classList.remove('hidden');
                ideInput.classList.add('hidden');
            }
        }

        function handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('preview-container').classList.remove('hidden');
                    document.getElementById('img-preview').src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        }

        function generateScript() {
            const prompt = document.getElementById('prompt-text').value;
            const style = document.getElementById('style-select').value;
            const resultBox = document.getElementById('script-result');
            
            resultBox.innerText = "✍️ Sedang menulis postingan yang menarik untukmu...";

            setTimeout(() => {
                let content = "";
                const topic = prompt || "produk/layanan kami";

                if (style === 'storytelling') {
                    content = `Dulu saya sempat bingung... 🤔\n\nSetiap kali mau ${topic}, rasanya kok susah banget ya. Sampai akhirnya saya nemu satu cara/produk yang bener-bener ngerubah segalanya.\n\nGak nyangka banget, ternyata kuncinya cuma di sini. Temen-temen ada yang pernah ngalamin hal yang sama gak? \n\nCek foto di bawah ya buat liat detailnya! 👇\n\n#Sharing #KisahNyata #Inspirasi #${topic.replace(/\s+/g, '')}`;
                } else if (style === 'tips') {
                    content = `Tips Gratis buat Bapak/Ibu sekalian! ✨\n\nBanyak yang nanya ke saya, gimana sih cara optimal buat ${topic}? Nah, ini 3 rahasia simpelnya:\n\n1️⃣ Jangan asal pilih, pastikan kualitas nomor satu.\n2️⃣ Konsisten adalah kunci.\n3️⃣ Pakai alat/produk yang tepat.\n\nSemoga bermanfaat ya! Jangan lupa SHARE postingan ini ke kronologi Anda biar gak ilang. 😊\n\n#TipsBermanfaat #Edukasi #SharingIlmu`;
                } else if (style === 'jualan') {
                    content = `🔥 PROMO KHUSUS HARI INI SAJA! 🔥\n\nSiapa lagi yang mau ${topic} tapi gak mau ribet? Kabar gembira buat warga FB semua!\n\nKenapa harus pilih kami?\n✅ Kualitas Terjamin\n✅ Harga Bersahabat\n✅ Pelayanan Cepat\n\nSTOK TERBATAS! Langsung aja amankan slotnya sekarang.\n\n👇 KLIK LINK WHATSAPP DI BAWAH:\nwa.me/628123456789 (Contoh)\n\nAtau komen "SAYA MAU" nanti kami inbox detailnya! 🚀`;
                } else if (style === 'diskusi') {
                    content = `Lagi rame banget nih bahas soal ${topic}... 🧐\n\nKalau menurut pendapat temen-temen di grup ini, mendingan pilih yang versi A atau B sih? Jujur saya masih bimbang.\n\nCoba tulis di kolom komentar ya alasannya apa, siapa tahu bisa jadi referensi buat yang lain juga. 👇\n\n#Diskusi #TanyaJawab #GrupFB`;
                } else {
                    content = `PENGUMUMAN PENTING\n\nSehubungan dengan tingginya permintaan terhadap ${topic}, kami informasikan bahwa saat ini layanan/produk tersebut sudah tersedia kembali.\n\nTerima kasih atas kepercayaan Anda kepada kami selama ini. Untuk informasi pemesanan dan jadwal, silakan hubungi admin di jam kerja.\n\nSalam Hangat,\nAdmin Blacki`;
                }

                resultBox.innerText = content;
            }, 1000);
        }

        function copyToClipboard() {
            const text = document.getElementById('script-result').innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert("Teks postingan berhasil disalin! Silakan tempel di Facebook Anda.");
            });
        }
