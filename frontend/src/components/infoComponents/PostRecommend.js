import { icon_1, icon_2 } from '../../assets/images/index'

const dataExamples = [
    {
        img: icon_2,
        title: 'Vì sao thai giới hạn tăng trưởng trong tử cung',
        abstract: 'Thai giới hạn tăng trưởng trong tử cung, tình trạng mà các mẹ bầu hay gọi là thai suy dinh dưỡng, là khi cân nặng (kích thước) thai nhi nhỏ hơn mong đợi so với số tuần tuổi thai. Thai giới hạn tăng trưởng có thể xảy ra ở bất kỳ thời điểm nào trong thai kỳ. Thai nhi không phát triển tốt từ kích thước tổng thể cho đến phát triển các tế bào, mô, cơ quan. Điều này sẽ gây ra nhiều vấn đề cho em bé.'
    },
    {
        img: icon_2,
        title: 'Phụ nữ có hội chứng buồng trứng đa nang cần lưu ý gì?',
        abstract: 'Hội chứng này ảnh hưởng đến khoảng 5-18% phụ nữ trong độ tuổi sinh sản. Nguyên nhân gây bệnh chưa rõ ràng, có thể là do kết hợp của các yếu tố di truyền và môi trường sống. Sinh lý bệnh khá phức tạp, đến nay vẫn chưa được hiểu rõ. Hội chứng này gây nên nhiều vấn đề sức khỏe lâu dài cho người phụ nữ, đáng lưu ý là vô sinh và tăng nguy cơ bệnh tim mạch, đái tháo đường.'
    },
    {
        img: icon_1,
        title: 'Loãng xương sau mãn kinh và điều trị',
        abstract: 'Thống kê cho thấy, khoảng 71% phụ nữ trên 50 tuổi bị gãy xương do loãng xương. Tại Hoa kỳ, thống kê cho thấy 50% phụ nữ trên 50 tuổi sẽ bị gãy xương do loãng xương. Những phụ nữ sau mãn kinh đã từng gãy xương có nguy cơ gãy xương khác trong vòng 1-2 năm.'
    },
]
const PostRecommend = () => {
    return (
        <div>
            <div className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
                <div className="container mx-auto">
                    <div className="mx-4 flex flex-wrap">

                        {dataExamples.map((data, index) => {
                            return (
                                <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                                    <div className="mx-auto mb-10 max-w-[370px]">
                                        <div className="mb-4 overflow-hidden rounded">
                                            <img src={data.img} alt="postImg" className="h-[100px] w-full" />
                                        </div>
                                        <div>
                                            <h3>
                                                <a href="/" className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl" > {data.title} </a>
                                            </h3>
                                            <p className="text-body-color text-base">
                                                {data.abstract}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostRecommend