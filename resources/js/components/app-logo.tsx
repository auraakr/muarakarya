export default function AppLogo() {
    return (
        <>
            <div
                className="flex aspect-square size-8 items-center justify-center rounded-md text-white text-xs font-black flex-shrink-0"
                style={{ backgroundColor: '#135b97' }}
            >
                MK
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-bold text-sidebar-foreground">CV. Muara Karya</span>
                <span className="truncate text-[11px] text-sidebar-foreground/50">HVAC & Refrigerasi</span>
            </div>
        </>
    );
}
