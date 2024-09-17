import { Card, CardHeader, Image } from "@nextui-org/react";

export default function Home() {
    return (
        <div className="m-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="relative h-32 w-80">
                        <p>When controlling the flow of text, using the CSS property
                        <span className="inline">display: inline</span>
                        will cause the text inside the element to wrap normally.</p>

                        <p>While using the property <span className="inline-block">display: inline-block</span>
                        will wrap the element to prevent the text inside from extending beyond its parent.</p>

                        <p>Lastly, using the property <span className="block">display: block</span>
                        will put the element on its own line and fill its parent.</p>
                    </div>
            <div className="min-h-[100pc] rounded-lg">
                    
                <Card>
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                        <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://nextui.org/images/card-example-4.jpeg"
                    />
                </Card>
            </div>
            
            
        </div>
    )
}