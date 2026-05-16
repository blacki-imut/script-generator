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
            
            resultBox.innerText = "✨ Sedang menyusun script Reels dan Caption estetik untukmu...";

            // Simulasi AI Script Generation
            setTimeout(() => {
                let script = "";
                const topic = prompt || (currentMode === 'foto' ? "Produk di foto" : "Konten keren");

                if (style === 'genz') {
                    script = `[SCRIPT REELS]\nVisual: Video estetik zoom in ke produk, transisi beat drop.\nAudio: "POV: Lo nemu barang yang bener-bener slay dan ngebantu banget! 💅✨"\n\nVisual: Lo lagi pakai produknya sambil senyum/pose.\nAudio: "Jujurly ini ${topic} emang se-worth it itu guys. Packagingnya aesthetic parah, vibesnya mahal tapi harganya masih make sense!"\n\nVisual: Tunjuk ke arah bio/tulis teks 'Link in Bio'.\nAudio: "Jangan sampai fomo, langsung cek link di bio gue no 12 sebelum sold out! 🔥"\n\n---\n[CAPTION]\nSpill barang slay yang wajib kalian punya! 😍 Gak nyangka bakal se-worth it ini ✨\n\nSave & Share reels ini ke bestie lo biar pada keracunan bareng! 🛒 Cek link di bio no. 12 ya!\n\n#racunshopee #barangestetik #reelsindonesia #fyp #rekomendasi`;
                } else if (style === 'casual') {
                    script = `[SCRIPT REELS]\nVisual: Wajah lo di depan kamera (talking head) sambil pegang produk.\nAudio: "Halo guys! Buat kalian yang lagi nyari ${topic}, sini merapat aku punya rekomendasinya!"\n\nVisual: Shoot detail produk dan cara pakainya.\nAudio: "Nah, aku baru aja nyobain ini dan hasilnya bener-bener di luar ekspektasi. Pakenya gampang banget dan cocok buat daily activity kita."\n\nVisual: Senyum ke kamera sambil kasih jempol.\nAudio: "Save video ini biar gak ilang, dan cek link di bio aku buat dapetin barangnya ya!"\n\n---\n[CAPTION]\nAkhirnya nemu juga ${topic} yang pas banget buat daily! 🥰 \n\nUdah pada nyobain belum nih? Tulis di kolom komentar ya kalau kalian punya pertanyaan! 👇\n\nLink pembelian ada di bio aku ya guys! 🛍️\n\n#rekomendasi #reviewjujur #racunbelanja #belanjaonline #dailylife`;
                } else if (style === 'edukatif') {
                    script = `[SCRIPT REELS]\nVisual: Teks judul besar di layar (Hook Text).\nAudio: "Stop scroll! 3 Hal yang harus kamu tahu tentang ${topic} sebelum nyesel."\n\nVisual: B-roll produk dengan poin 1, 2, 3 muncul di layar.\nAudio: "Pertama, formulanya/bahannya dirancang khusus buat efisiensi. Kedua, ini investasi jangka panjang yang aman. Ketiga, cara pakainya gampang banget gak ribet."\n\nVisual: Lo nunjuk ke tombol save di layar.\nAudio: "Save postingan ini buat referensi kamu nanti, dan share ke teman yang butuh info ini!"\n\n---\n[CAPTION]\nBanyak yang belum sadar kalau milih ${topic} itu gak boleh sembarangan. Ini dia 3 alasannya! 💡\n\nJangan lupa SAVE postingan ini supaya gampang dicari lagi pas kamu butuh, dan SHARE ke teman kamu yang wajib tahu info ini. ↗️\n\nAda pertanyaan? Drop di komen ya! ⬇️\n\n#edukasi #tipsandtricks #infopenting #reelsedukasi #sharingiscaring`;
                } else if (style === 'review') {
                    script = `[SCRIPT REELS]\nVisual: Produk dipegang di depan kamera.\nAudio: "Honest Review! Setelah pakai ${topic} selama seminggu penuh, ini hasilnya..."\n\nVisual: Tunjukkan tekstur/detail barang dari dekat.\nAudio: "First impression aku: Kualitasnya juara, build/teksturnya enak banget. Plus pointnya harganya affordable. Minus dikit: Varian warnanya cepet banget habis!"\n\nVisual: Kasih rating di layar (misal 9/10).\nAudio: "Overall rate dari aku 9/10. Worth to buy! Linknya aku taruh di bio ya."\n\n---\n[CAPTION]\nHONEST REVIEW TIME! ⏱️ \nUdah semingguan cobain ${topic} dan pengen banget sharing ke kalian hasilnya. Jujur ini salah satu penemuan terbaik bulan ini! ⭐️\n\nRating: 9/10 🔥\n\nBuat yang mau kembaran, langsung aja klik link di bio aku ya! Jangan sampai kehabisan varian favorit kamu. 🛒\n\n#honestreview #reviewproduk #rekomendasiproduk #racuntiktok #belanjapintar`;
                } else {
                    script = `[SCRIPT REELS]\nVisual: Suasana rapi/elegan, produk ditampilkan dengan angle profesional.\nAudio: "Selamat pagi rekan-rekan. Jika Anda sedang mencari solusi untuk ${topic}, mari kita bahas."\n\nVisual: Shoot fitur-fitur utama dengan pergerakan kamera yang mulus.\nAudio: "Produk ini dirancang dengan standar kualitas tinggi untuk memenuhi kebutuhan profesional Anda. Memberikan efisiensi maksimal dalam pekerjaan sehari-hari."\n\nVisual: Logo atau profil Instagram.\nAudio: "Untuk informasi lebih lanjut dan pemesanan, silakan kunjungi tautan pada profil kami."\n\n---\n[CAPTION]\nTingkatkan produktivitas dan kualitas kerja Anda dengan ${topic}. \n\nDirancang khusus untuk memberikan solusi praktis dan efisien bagi para profesional. Investasi terbaik untuk jangka panjang. 💼\n\nKunjungi link di bio kami untuk detail spesifikasi dan penawaran khusus hari ini. \n\n#profesional #produktivitas #bisnis #kualitasterbaik #reelsbisnis`;
                }

                resultBox.innerText = script;
            }, 1000);
        }

        function copyToClipboard() {
            const text = document.getElementById('script-result').innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert("Script & Caption berhasil disalin! Tinggal tempel di Instagrammu.");
            });
        }
