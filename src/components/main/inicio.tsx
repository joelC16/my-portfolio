import Spline from "@splinetool/react-spline/next";

export default function Inicio() {
    return (
        <div className="relative flex flex-col justify-center w-full min-h-[80vh] px-[7%] overflow-hidden">
            <div className="relative pointer-events-none mix-blend-difference">
                <h1 className="text-whitePrimary text-title-lg pb-1 font-MachinaRegular">
                    I'm <span className="text-colorPrimary">Joel </span>
                </h1>
                <h1 className="text-whitePrimary text-title-lg pb-1 font-MachinaRegular ">
                    Front-end
                </h1>
                <h1 className="text-whitePrimary text-title-lg pb-1 font-MachinaRegular">
                    Web developer
                </h1>
            </div>
            <p className="max-w-[50%]  text-grayPrimary text-paragraph-lg font-MachinaRegular">I bring web development projects to life with a blend of creativity and technical skill, ensuring each site is not only functional but also a joy to experience.</p>
            <div className="absolute left-[12.5%] w-screen h-screen">
                {/* <Spline scene="https://prod.spline.design/mGXef3vXxvfkCvDU/scene.splinecode" /> */}
            </div>
        </div>
    );
}
