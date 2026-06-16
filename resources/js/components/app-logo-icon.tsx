import type { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <img 
            src="/logo/logomk.svg" 
            alt="Brand Logo" 
            className="h-12 w-auto"
        />
    );
}
