import React from 'react';
import '../index.scss'

export const DetailSpecification = (props) => {
  return (
    <div className="d-flex flex-column col-10 detail-table tab-content" style={{ backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '0.75rem', marginTop: '1.5rem' }}>Thông số kỹ thuật của &quot;{props.data.motorName}&quot;</h2>
      <table border="0">
        <tbody>
          <tr>
            <th>Động cơ</th>
            <td>4 kỳ, 4 xi-lanh xếp thẳng h&agrave;ng DOHC
                </td>
          </tr>
          <tr>
            <th>Hệ thống khởi động</th>
            <td>Điện</td>
          </tr>
          <tr>
            <th>Tỷ số n&eacute;n</th>
            <td>11.9:1</td>
          </tr>
          <tr>
            <th>Hệ thống l&agrave;m m&aacute;t</th>
            <td>Dung dịch</td>
          </tr>
          <tr>
            <th>Ph&acirc;n khối</th>
            <td>806 (cm3/cc)</td>
          </tr>
          <tr>
            <th>Hộp số</th>
            <td>6 cấp</td>
          </tr>
          <tr>
            <th>Đường k&iacute;nh x H&agrave;nh tr&igrave;nh piston</th>
            <td>71 x 50.9</td>
          </tr>
          <tr>
            <th>C&ocirc;ng suất cực đại</th>
            <td>108.9 hp / 10000 rpm</td>
          </tr>
          <tr>
            <th>Momen xoắn cực đại</th>
            <td>83Nm / 10000 rpm</td>
          </tr>
          <tr>
            <th>K&iacute;ch thước</th>
            <td>2100 x 800 x 1050 (mm)</td>
          </tr>
          <tr>
            <th>Chiều d&agrave;i 2 trục b&aacute;nh xe</th>
            <td>1445 (mm)</td>
          </tr>
          <tr>
            <th>Chiều cao y&ecirc;n</th>
            <td>834 (mm)</td>
          </tr>
          <tr>
            <th>Khoảng s&aacute;ng gầm xe</th>
            <td> (mm)</td>
          </tr>
          <tr>
            <th>Dung t&iacute;ch b&igrave;nh xăng</th>
            <td>17 (Lít)</td>
          </tr>
          <tr>
            <th>Trọng lượng</th>
            <td>229 (kg)</td>
          </tr>
          <tr>
            <th>Phanh</th>
            <td></td>
          </tr>
          <tr>
            <th>K&iacute;ch thước lốp trước</th>
            <td></td>
          </tr>
          <tr>
            <th>K&iacute;ch thước lốp sau</th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}