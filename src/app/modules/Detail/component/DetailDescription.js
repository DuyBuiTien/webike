import React from 'react';
import '../index.scss'

export const DetailDescription = (props) => {
  return (
    <div className="tab-content col-10">
      <p>Bán {props.data.motorName+ ' ' + props.data.color + 'date ' + props.data.modelYear}<br /></p>
      <p>- HQCN biển số TP<br /></p>
      <p>- Máy móc keng zin, mạnh mẽ uy lực<br /></p>
      <p>- Phuộc trước sau không xì dầu chảy nhớt<br /></p>
      <p>- Sườn, chảng ba chuẩn chỉnh, bao thả 2 tay<br /></p>
      <p>- Điện đài ngon lành, ABS trước sau ổn định<br /></p>
      <p>- Đồ chơi:<br /></p>
      <p>+ Pô SC la bài hãi<br /></p>
      <p>+ Che két nước Evotech Performance<br /></p>
      <p>+ Ghi đông RIzoma<br /></p>
      <p>+ Dán bình xăng loại tốt<br /></p>
      <p>+ Kính gió<br /></p>
      <p>+ Che cạc te đồ chơi<br /></p>
      <p>---------------------------------------------<br /></p>
      <p> Liên hệ:  - Thiên trà Motor<br /></p>
      <p> Có cà phê cho anh em giới thiệu thành công<br /></p>
      <p>Giá: 17xtr (Có gọi có fix)<br /></p>
      <p>Xem nhiều xe hơn tại: http://muabanmotor.com/<br /></p>
      <p>---------*------------*-----------*----------<br /></p>
      <p>Có hỗ trợ trả góp bằng thẻ Visa hoặc Master Card<br /></p>
      <p> Có nhận giao lưu đổi xe các loại bù trừ hợp lý.<br /></p>
      <p> Có nhận kí gửi xe các loại<br /></p>
      <p> Xe ở đâu cũng mua dù TP hay tỉnh</p>
      <p>Nhận hỗ trợ giấy tờ từ A-Z</p></div>
  )
}