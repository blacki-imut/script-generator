let currentMode = 'ide';

        function switchTab(mode) {
            currentMode = mode;
            const tabIde = document.getElementById('tab-ide');
            const tabFoto = document.getElementById('tab-foto');
            const ideInput = document.getElementById('ide-input');
            const fotoInput = document.getElementById('foto-input');

            if (mode === 'ide') {
                tabIde.classList.add('bg-zinc-700', 'text-white');
                tabFoto.classList.remove('bg-zinc-700', 'text-white');
                ideInput.classList.remove('hidden');
                fotoInput.classList.add('hidden');
            } else {
                tabFoto.classList.add('bg-zinc-700', 'text-white');
                tabIde.classList.remove('bg-zinc-700', 'text-white');
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
            
            resultBox.innerText = "🎬 Sedang memproses YouTube Kit lengkap...";

            setTimeout(() => {
                let content = "";
                const topic = prompt || "Video Keren";
                
                content = `[JUDUL CLICKBAIT]\n1. "RAHASIA TERBONGKAR! Inilah Cara ${topic} Yang Gak Pernah Dikasih Tahu!"\n2. "Jangan Sampai Menyesal, Tonton Ini Sebelum Kamu Mencoba ${topic}!"\n\n`;
                
                content += `[SCRIPT VIDEO - STYLE: ${style.toUpperCase()}]\n`;
                if (style === 'shorts') {
                    content += `0-3s: (Hook Visual) "Kalian tau gak kalau ${topic} bisa gini?!"\n3-10s: (Highlight) "Gak butuh waktu lama, hasilnya langsung keliatan banget."\n10-15s: (CTA) "Subscribe buat tips harian lainnya!"\n\n`;
                } else {
                    content += `Intro (0:00-1:00): "Halo kawan-kawan! Balik lagi di channel saya. Hari ini kita bahas tuntas soal ${topic} yang lagi viral."\nIsi (1:00-8:00): Jelaskan detail poin-poin penting ${topic} secara mendalam.\nOutro: "Makasih udah nonton, jangan lupa LIKE, COMMENT, dan SHARE!"\n\n`;
                }

                content += `[DESKRIPSI VIDEO]\nBanyak yang nanya soal ${topic}, makanya di video kali ini saya kupas tuntas semuanya buat kalian. Jangan diskip ya!\n\nDukung channel ini lewat Saweria: https://saweria.co/Blacki2\nSubscribe channel: youtube.com/@blacki-2\n\n`;
                
                content += `[TAGS & KEYWORDS]\n#${topic.replace(/\s+/g, '')} #YouTubeIndonesia #Tutorial #TipsViral #Trending #BlackiContent`;

                resultBox.innerText = content;
            }, 1200);
        }

        function copyToClipboard() {
            const text = document.getElementById('script-result').innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert("YouTube Kit berhasil disalin! Silakan tempel di Studio Anda.");
            });
                  }
