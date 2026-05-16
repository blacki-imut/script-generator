let currentMode = 'ide';

        function switchTab(mode) {
            currentMode = mode;
            const tabIde = document.getElementById('tab-ide');
            const tabFoto = document.getElementById('tab-foto');
            const ideInput = document.getElementById('ide-input');
            const fotoInput = document.getElementById('foto-input');

            if (mode === 'ide') {
                tabIde.classList.add('bg-slate-700', 'text-white');
                tabIde.classList.remove('text-slate-400');
                tabFoto.classList.remove('bg-slate-700', 'text-white');
                tabFoto.classList.add('text-slate-400');
                ideInput.classList.remove('hidden');
                fotoInput.classList.add('hidden');
            } else {
                tabFoto.classList.add('bg-slate-700', 'text-white');
                tabFoto.classList.remove('text-slate-400');
                tabIde.classList.remove('bg-slate-700', 'text-white');
                tabIde.classList.add('text-slate-400');
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
            
            resultBox.innerText = "⚡ Sedang meracik script viral untukmu...";

            // Simulasi AI Script Generation
            setTimeout(() => {
                let script = "";
                const topic = prompt || (currentMode === 'foto' ? "Produk di foto" : "Konten keren");

                if (style === 'genz') {
                    script = `[HOOOK - 0-3s]\nVisual: Zoom in ke produk dengan transisi cepat.\nAudio: "Pov: Lu nemu barang yang bener-bener slay abis dan anti-rugi parah! 💅✨"\n\n[BODY - 3-15s]\nVisual: Pakai produk/demo produk.\nAudio: "No debat, ini ${topic} emang se-worth it itu guys. Teksturnya mantul, packagingnya gak main-main. Vibesnya mahal banget tapi harganya ramah di kantong pelajar!"\n\n[CTA - 15-20s]\nVisual: Tunjuk keranjang kuning.\nAudio: "Jangan sampai fomo, langsung checkout di keranjang kuning sekarang sebelum sold out! 🔥"`;
                } else if (style === 'casual') {
                    script = `[HOOK]\n"Halo guys! Kalian sering ngerasa bingung cari ${topic}? Sini kumpul, aku punya solusinya!"\n\n[BODY]\n"Nah, aku baru aja nyobain ini dan hasilnya bener-bener di luar ekspektasi. Gampang banget dipakenya dan cocok buat daily use. Kalian harus liat sendiri perubahannya."\n\n[CTA]\n"Klik link di bio atau keranjang kuning buat dapetin promonya ya!"`;
                } else if (style === 'edukatif') {
                    script = `[HOOK]\n"Banyak yang belum tahu kalau ${topic} itu penting banget buat kita. Ini alasannya..."\n\n[BODY]\n"Secara teknis, produk ini mengandung formula yang membantu mengatasi masalah kalian secara efektif. Keunggulannya ada di efisiensi dan keamanan jangka panjang."\n\n[CTA]\n"Follow untuk tips lainnya dan cek detailnya di kolom komentar."`;
                } else if (style === 'review') {
                    script = `[HOOK]\n"Jujur review! Setelah pakai ${topic} selama seminggu, ini hasilnya..."\n\n[BODY]\n"First impression aku: Wanginya enak, gak lengket. Plus pointnya adalah harganya yang affordable. Minus: Gampang habis karena saking enaknya dipake terus!"\n\n[CTA]\n"Rate dari aku 9/10. Link beli ada di keranjang!"`;
                } else {
                    script = `[HOOK]\n"Selamat siang rekan-rekan. Ingin meningkatkan produktivitas dengan ${topic}? Simak penjelasan berikut."\n\n[BODY]\n"Produk ini dirancang dengan standar kualitas tinggi untuk memenuhi kebutuhan profesional Anda. Memberikan solusi praktis dan efisien dalam pekerjaan sehari-hari."\n\n[CTA]\n"Informasi lebih lanjut silakan kunjungi profil kami."`;
                }

                resultBox.innerText = script;
            }, 1000);
        }

        function copyToClipboard() {
            const text = document.getElementById('script-result').innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert("Script berhasil disalin! Tinggal tempel di kontenmu.");
            });
                  }
