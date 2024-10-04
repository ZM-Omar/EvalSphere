import { motion } from "framer-motion";
import {Card, Image} from "@nextui-org/react";

export default function Home() {
    return (
        <div>
            <div className="text-center">
                <motion.h1 className="font-bold font-sans italic text-8xl box mb-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 5.0,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}> EvalSphere</motion.h1>
                    
                    <motion.h2 className="font-thin font-sans italic text-2xl box mb-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 5.0,
                        delay: 1.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>Evaluación de desempeño 360°</motion.h2>
            </div>
            <section className="p-40">
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                    <Card className="
                    border-separate border-spacing-2 border border-slate-500
                    backdrop-blur-md bg-slate-800/30 py-4 mb-4 overflow-visible grid grid-cols-2">
                        <div className="p-20">
                            <h1 className="font-bold text-large">OBJETIVOS</h1>
                            <h2>1. Medir el rendimiento de los empleados.</h2>
                            <h3>2. Evaluar las competencias.</h3>
                            <h4>3. Diseñar programas de aprendizaje y desarrollo.</h4>
                            <h5>4. Implementar planes de carrera y sucesion.</h5>
                            <h6>5. Mejorar la cultuira organizacional.</h6>   
                        </div>
                        <div className="p-20">
                            <Image
                             alt="Card background"
                            className="object-cover rounded-x1 drop-shadow-2xl"
                            src="https://nextui.org/images/hero-card-complete.jpeg"
                            width={270}/>
                        </div>
                    </Card>
                </div>
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                    <Card className="
                    border-separate border-spacing-2 border border-slate-500
                    backdrop-blur-md bg-slate-800/30 py-4 mb-4 overflow-visible grid grid-cols-2">
                        <div className="p-20">
                            <h1 className="font-bold text-large">OBJETIVOS</h1>
                            <h2>1. Medir el rendimiento de los empleados.</h2>
                            <h3>2. Evaluar las competencias.</h3>
                            <h4>3. Diseñar programas de aprendizaje y desarrollo.</h4>
                            <h5>4. Implementar planes de carrera y sucesion.</h5>
                            <h6>5. Mejorar la cultuira organizacional.</h6>   
                        </div>
                        <div className="p-20">
                            <Image
                             alt="Card background"
                            className="object-cover rounded-x1 drop-shadow-2xl"
                            src="https://nextui.org/images/hero-card-complete.jpeg"
                            width={270}/>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    )
}
