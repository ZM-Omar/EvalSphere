import { motion } from "framer-motion";

export default function Home() {
    return (
        <div>
            <div
                className="text-center">
                <motion.h1 className="font-bold font-sans italic text-9xl box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 5.0,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >

                    EvalSphere
                </motion.h1>

            </div>



        </div>
    )
}
