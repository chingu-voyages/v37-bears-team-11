import React, { useEffect, useState } from 'react'
import SplashScreen from './components/SplashScreen'
import { motion, AnimatePresence } from 'framer-motion'
import BarLoader from 'react-spinners/BarLoader'

type LoadingProps = {
    setLoading: (isLoading: boolean) => void
}

function Loading(props: LoadingProps) {
    const [isSplashScreen, setIsSplashScreen] = useState(true)

    useEffect(() => {
        handleLoading()

        // Display splash for 2 seconds
        setTimeout(() => {
            setIsSplashScreen(false)
        }, 2000)
    }, [])

    const handleLoading = async () => {
        //handle future loading here(user previously logged in data, page redirects, etc.)..
        //Using set timeout for now
        setTimeout(() => {
            props.setLoading(false)
        }, 6000)
    }

    return isSplashScreen ? (
        <AnimatePresence>
            <motion.div exit={{ opacity: 0 }} key={'splash'}>
                <SplashScreen />
            </motion.div>
        </AnimatePresence>
    ) : (
        <AnimatePresence>
            <motion.div
                className='flex flex-col justify-center items-center h-screen w-screen text-7xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={'loading'}
            >
                <p className='text-orange-default font-mplus text-9xl my-24'>T</p>
                <BarLoader color={'#fc9143'} />
            </motion.div>
        </AnimatePresence>
    )
}

export default Loading
