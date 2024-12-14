import React from 'react';
import { easeIn, motion } from "framer-motion";
import team1 from '../../assets/banner/team-pic1.jpg'
import team2 from '../../assets/banner/team-pic-2.jpg'

const Banner = () => {
    return (
        <div className='bg-base-200'>
            <div className="hero bg-base-200 max-w-screen-xl mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='mr-44'>
                    <motion.img
                    animate={{y:[20, 50, 20]}}
                    transition={{duration: 6, repeat: Infinity}}
                        src={team2}
                        className="max-w-sm w-80 rounded-3xl rounded-bl-none border-l-4 border-b-4 border-purple-600 shadow-2xl" />
                    <motion.img
                    animate={{x:[150, 120, 150]}}
                    transition={{duration: 6, repeat: Infinity}}
                        src={team1}
                        className="max-w-sm w-80  rounded-3xl rounded-bl-none border-l-4 border-b-4 border-purple-600 shadow-2xl" />

                    </div>
                    <motion.div animate={{ y: -30 }} transition={{duration: 1 , delay: 0, ease: 'easeIn' }} className=' '>
                        <h1 className="text-5xl font-bold ">Box Office News!</h1>
                        <p className="py-6 w-2/3">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <motion.button className="btn bg-purple-600 text-white">Get Started</motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;