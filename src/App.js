// import logo from './logo.svg';
import './App.css';
import BookingForm from './Components/BookingForm';

const Title = () => <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>;
const Description = () => <p>บันทึกข้อมูลรายการในแต่ละวัน</p>;

const Transaction = () => {
  return (
    <ul>
      <li>ค่าเดินทาง <span>-200</span></li>
      <li>เงินเดือน <span>+20000</span></li>
      <li>เงินอาหาร <span>-500</span></li>
    </ul>
  );
}

function App() {
  return (
    <div>
      <BookingForm/>
    </div>
  );
}

export default App;
