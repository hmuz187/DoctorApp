
import { icon_breast_cancer, HPV_Vaccine, icon_cervical_cancer, Healthy_Aging, Healthy_Eating, Healthy_Fitness, Healthy_Habits, Healthy_Mind, Healthy_Sleep, DrugsAZ } from '../../assets/images/category/index'

const dataExamples = [
    icon_breast_cancer, HPV_Vaccine, icon_cervical_cancer, Healthy_Aging, Healthy_Eating,
    //Healthy_Fitness, Healthy_Habits, Healthy_Mind, Healthy_Sleep, DrugsAZ
]

const DefaultSmallCarousel = () => {
    return (
        <div>
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                <div className="text-center">
                    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]" >
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                            {dataExamples.map((data, index) => {
                                return (
                                    <li key={index}>
                                        <img src={data} alt="carousel" className='h-[50px]' />
                                    </li>
                                )
                            })}
                        </ul>
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                            {dataExamples.map((data, index) => {
                                return (
                                    <li key={index}>
                                        <img src={data} alt="carousel" className='h-[50px]' />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DefaultSmallCarousel