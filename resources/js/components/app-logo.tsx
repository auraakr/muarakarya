export default function AppLogo() {
    return (
        <>
            {/* Bagian ini memanggil gambar logo asli kamu */}
            <img 
                src="/logo/logomk.svg" /* Sesuaikan nama file ini dengan lokasi logomu di folder public */
                alt="Logo Muara Karya" 
                className="flex aspect-square size-8 object-contain flex-shrink-0"
            />
            
            {/* Bagian ini adalah teks nama perusahaan di sebelah kanan logo */}
            <div className="ml-2 grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-bold text-sidebar-foreground">CV. Muara Karya</span>
                <span className="truncate text-[11px] text-sidebar-foreground/50">HVAC & Refrigerasi</span>
            </div>
        </>
    );
}