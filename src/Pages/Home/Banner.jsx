import React from 'react';
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className='bg-base-200'>
            <div className="hero bg-base-200 max-w-screen-xl mx-auto ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <motion.div animate={{ y: -30 }} transition={{duration: 1 , delay: 0, ease: 'easeIn' }} className='my-14'>
                        <h1 className="text-5xl font-bold ">Box Office News!</h1>
                        <p className="py-6 w-2/3">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <motion.button className="btn btn-primary">Get Started</motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;