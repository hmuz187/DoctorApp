import React from 'react'
import { Link } from 'react-router-dom'
import {imgtitle} from '../../assets/images/index'



const About = () => {
    return (
        <div className='bg-[#F6FDFF]'>
            <div className='pt-4 lg:mx-[200px] mx-20'>
                <div className='flex justify-center items-center flex-col space-y-4 pt-8'>
                    <h2 className='text-[#02c873] leading-8 text-[28px] font-bold'>
                        <Link to={'/'}>CHANHLY.COM</Link>
                    </h2>
                    <img className='pb-8' src={imgtitle} alt="imagetilte" />
                </div>

                <div>
                    <p className='text-[22px] text-[#212529] leading-12 fint-normal'>
                       Hệ sinh thái ra đời với mong muốn truyền đạt những thông tin và kiến thức y khoa một cách dễ hiểu nhưng đảm bảo chính xác đến bạn đọc. Các vấn đề liên quan đến phụ khoa, sinh sản, hiếm muộn, vô sinh, bệnh lí nam khoa, tâm sinh lí quanh giai đoạn mãn kinh, đặc biệt là những khúc mắc về dị tật thai nhi, tầm soát trước sinh, ...
                    </p>
                    <p className='text-[22px] text-[#212529] leading-12 fint-normal'>Thông tin tổng quan về người sáng lập
                        <b className='text-[#02c873] leading-8 text-[25px] font-bold'> Bác sĩ Néang Chanh Ly</b></p>


                    <h3 className='text-[#1f1b4a] leading-8 text-[22px] font-bold py-4'>Học vấn</h3>
                    <p className='text-[22px] text-[#212529]leading-12 fint-normal py-4'>
                        Tốt nghiệp Bác sĩ Trường Đại học Y Dược Cần Thơ, 2015. Học bổng nhiều năm liên tiếp.
                        <br />
                        Chứng chỉ siêu âm bụng tổng quát, 2015.
                        <br />
                        Chứng chỉ siêu âm sản phụ khoa, 2016.
                        <br />
                        Cập nhật kiến thức về siêu âm tiền sản, 2017.
                        <br />
                        Chứng chỉ hỗ trợ sinh sản IUI, 2018.
                        <br />
                        Chứng chỉ siêu âm tim thai và bệnh lí tim bẩm sinh, 2019.
                        <br />
                        Hoàn thành chương trình sau đại học bác sĩ chuyên khoa I, chuyên ngành Sản phụ khoa, Trường Đại học Y dược TP Hồ Chí Minh, 2020.
                        <br />
                        Chứng chỉ sàng lọc trước sinh của Tổ chức FMF(The Fetal Medicin Foundation, London, UK), 2022.
                        <br />
                        Thành viên Hội nội tiết sinh sản và Vô sinh TPHCM(HOSREM), Thành viên hiệp hội sản phụ khoa Việt Nam(VAGO) . . .
                    </p>

                    <h3 className='text-[#1f1b4a] leading-8 text-[22px] font-bold py-4'>Nghiên cứu khoa học</h3>

                    <p className='text-[22px] text-[#212529] leading-12 fint-normal py-4 '>
                        <b>1. </b>Nghiên cứu khoa học: Khảo sát tình hình mổ lấy thai tại BV Hoàn Mỹ Đà Lạt năm 2018 (BS Néang Chanh Ly, BS Nô Duy Tâm, BS Đỗ Thu Hiền)
                        <br />
                        <b>2. </b>Đề tài: Chẩn đoán và điều trị hội chứng buồng trứng đa nang (năm 2020, người hướng dẫn: Ths. BS Âu Nhựt Luân)
                    </p>

                    <h3 className='text-[#1f1b4a] leading-8 text-[22px] font-bold py-4'>
                        Nơi công tác
                    </h3>

                    <p className='text-[22px] text-[#212529]leading-12 fint-normal py-4'>
                        Bệnh viện Hoàn Mỹ, đến 2018.
                        <br/>
                        Bệnh viện Vinmec, đến nay.
                    </p>

                    <h3 className='text-[#1f1b4a] leading-8 text-[22px] font-bold py-4 mb-20'>
                        Mong muốn lớn nhất là nâng cao nhận thức và kiến thức của bệnh nhân, để tránh những hiểu lầm không đáng có giữa bệnh nhân và dịch vụ y tế, đồng thời giúp bệnh nhân có thể tự bảo vệ sức khỏe một cách cơ bản nhất.
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default About